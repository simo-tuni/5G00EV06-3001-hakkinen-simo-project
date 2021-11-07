import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import StandardScaler
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Dropout

import requests
import json

import sys

arg = 2

response = requests.post(f'https://poe-antiquary.xyz/api/prices/47/9/{arg}')
response.raise_for_status() # ensure we notice bad responses

x = response.json()

price_data = []
time_data = []
league_data = []

for snapshot in range(len(x['pricePoints'])):    
    price_data.append(x['pricePoints'][snapshot]['chaos'])    
    time_data.append(x['pricePoints'][snapshot]['leagueAge'])
    league_data.append('47')



df = pd.DataFrame({'Price':price_data})
df['Time'] = time_data
df['League'] = league_data


for pastLeague in range(45,25,-2):

    response = requests.post(f'https://poe-antiquary.xyz/api/prices/{pastLeague}/9/{arg}')
    response.raise_for_status() # ensure we notice bad responses
    
    x = response.json()
    for snapshot in range(len(x['pricePoints'])):    
        price_data.append(x['pricePoints'][snapshot]['chaos'])    
        time_data.append(x['pricePoints'][snapshot]['leagueAge'])
        league_data.append(f'{pastLeague}')
    
    
    
df = pd.DataFrame({'Price':price_data})
df['Time'] = time_data
df['League'] = league_data



X = df.iloc[:, [1, 2]]
y = df.iloc[:, [0]]


# opetusdata ja testidata
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.2, random_state = 0)



scaler_X = StandardScaler()
X_train = scaler_X.fit_transform(X_train)
X_test = scaler_X.transform(X_test)

scaler_y = StandardScaler()
y_train = scaler_y.fit_transform(y_train)
y_test = scaler_y.transform(y_test)

# opetetaan malli
model = Sequential()
model.add(Dense(units=12, input_dim=X.shape[1],activation='relu'))
model.add(Dense(units=4, activation='relu'))
model.add(Dense(units=1, activation='linear'))

 

model.compile(loss='mse', optimizer='adam',metrics=['mse'])
history=model.fit(X_train, y_train, epochs=50, batch_size=32, 
                  validation_data=(X_test, y_test))

 

# #oppimisen visualisointi
# plt.plot(history.history['loss'])
# plt.plot(history.history['val_loss'])
# plt.title('model loss')
# plt.ylabel('loss')
# plt.xlabel('epochs')
# plt.legend(['train', 'validation'], loc='upper left')
# plt.show()

# # ennustetaan testidatalla
# y_pred = model.predict(X_test)
# y_pred = scaler_y.inverse_transform(y_pred)
# y_test = scaler_y.inverse_transform(y_test)

 

# r2 = r2_score(y_test, y_pred)
# mae = mean_absolute_error(y_test, y_pred)
# mse = mean_squared_error(y_test, y_pred)
# rmse = np.sqrt(mse)

 



# ennusta uudella datalla
Xnew = pd.read_csv('new_price.csv')
Xnew_org = Xnew

 

# Xnew=ct.transform(Xnew)
Xnew = scaler_X.transform(Xnew)
ynew= model.predict(Xnew) 

 

ynew = scaler_y.inverse_transform(ynew)




for i in range (len(ynew)):
   print (f'{Xnew_org.iloc[i]}\nArvo: {ynew[i][0]}\n')














# print (f'r2: {r2}')
# print (f'mae: {mae}')
# print (f'rmse: {rmse}')


#tallennetaan malli

model.save('price_model.h5')



# # tallennetaan skaaleri

with open('price-scaler_X.pickle', 'wb') as f:
    pickle.dump(scaler_X, f)



# # tallennetaan skaaleri

with open('price-scaler_y.pickle', 'wb') as f:
     pickle.dump(scaler_y, f)



# dummy käsittelijä

# with open('housing-ct.pickle', 'wb') as f:

#     pickle.dump(ct, f)



















































# with open("resp_text.txt", "w") as file:
#       file.write(response.text)