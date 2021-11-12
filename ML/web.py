# import numpy as np
# import pandas as pd
# from sklearn.model_selection import train_test_split
# from sklearn.linear_model import LinearRegression
# from sklearn.preprocessing import StandardScaler
# from tensorflow.keras.models import Sequential
# from tensorflow.keras.layers import Dense, Dropout

# import requests
# import json

# import sys

import numpy as np
import pandas as pd
from sklearn.metrics import mean_absolute_error, r2_score, mean_squared_error
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import OneHotEncoder
from sklearn.compose import ColumnTransformer
import pickle #save encoder
from sklearn.preprocessing import StandardScaler
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Dropout
from tensorflow.keras.callbacks import LearningRateScheduler

from sklearn import model_selection

from sklearn.linear_model import SGDRegressor

from sklearn.model_selection import cross_val_score

import requests
import json

import sys


# for pastLeague in range(47,15,-2):
#     print(pastLeague)


node_csv = pd.read_csv('out.csv')
print(node_csv)

item_id = []
price_data = []
time_data = []
league_data = []


# current_league = 'Scourge'
leagues = ['Expedition', 'Ultimatum', 'Ritual', 'Heist', 'Harvest', 'Delirium', 'Metamorph', 'Blight', 'Legion', 'Synthesis', 'Betrayal', 'Delve', 'Incursion', 'Bestiary', 'Abyss', 'Harbinger']
league_counter = 0;

# headers = { 'authority':'poe.ninja', 'method': 'GET',
#            'Accept-Language':'en-US,en;q=0.9,fi;q=0.8',
#            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36',}
# response = requests.post(f'https://poe.ninja/api/data/CurrencyOverview?league={current_league}&type=Currency', headers=headers)
# response.raise_for_status() # ensure we notice bad responses

# currency_items = response.json()

for index, row in node_csv.iterrows():
    # print(row['Name'], row['Price'])
    item_id.append(row['Name'])
    price_data.append(row['Price'])
    time_data.append(row['Day'])
    league_data.append(row['League'])
    
# Name = node_csv['Name'][0]
# print(Name)
    
################################################################################

# response = requests.post(f'https://poe-antiquary.xyz/api/items/9')
# response.raise_for_status() # ensure we notice bad responses

# currency_items = response.json()



# for item in currency_items:
#     _id_ = item.get('id')
#     for pastLeague in range(47,15,-2):    
#         response = requests.post(f'https://poe-antiquary.xyz/api/prices/{pastLeague}/9/{_id_ }')
#         response.raise_for_status() # ensure we notice bad responses        
#         x = response.json()
#         if(x != None):
#             for snapshot in x['pricePoints']:
#                  item_id.append(x['name'])
#                  price_data.append(snapshot['chaos'])    
#                  time_data.append(snapshot['leagueAge'])
#                  league_data.append(leagues[league_counter])
#         league_counter += 1
#     league_counter = 0
        
    
################################################################################
    
df = pd.DataFrame({'Price':price_data})
df['Time'] = time_data
df['League'] = league_data
df['Id'] = item_id


df = pd.read_csv('all_data.csv')

# df.to_csv("all_data.csv", sep=',', index=False)

X = df.iloc[:, [1, 2, 3]]
y = df.iloc[:, [0]]


X_org = X
# dummyt


X["Time"]=X["Time"].apply(str)


ct = ColumnTransformer(transformers=[('encoder', OneHotEncoder(drop='first'), ['Time', 'League', 'Id'])], remainder='passthrough')
X = ct.fit_transform(X) # ensimmäisellä kerralla fit_transform

# opetusdata ja testidata
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.2, random_state = 0)


# scaler_X = StandardScaler(with_mean=False)
# X_train = scaler_X.fit_transform(X_train)
# X_test = scaler_X.transform(X_test)

# scaler_y = StandardScaler()
# y_train = scaler_y.fit_transform(y_train)
# y_test = scaler_y.transform(y_test)
# test_before = y_train
y_train = np.log(y_train).values.ravel()
y_test = np.log(y_test).values.ravel()

# test_after = np.exp(y_train)

# sgdr = SGDRegressor()
# sgdr.fit(X_train, y_train.ravel())

# score = sgdr.score(X_train, y_train)
# print("R-squared:", score)
 
# cv_score = cross_val_score(sgdr, X, y['Price'], cv = 10)
# print("CV mean score: ", cv_score.mean())


# y_pred = nsvr.predict(X_test)

# mse = mean_squared_error(y_test, y_pred)
# print("MSE: ", mse)
# print("RMSE: ", mse**(1/2.0)) 



# opetetaan malli
model = Sequential()
model.add(Dense(units=100, input_dim=X.shape[1],activation='relu'))
model.add(Dense(units=50, activation='relu'))
model.add(Dense(units=25, activation='relu'))
model.add(Dense(units=1, activation='linear'))

 

initial_learning_rate = 0.01
epochs = 100
decay = initial_learning_rate / epochs

def lr_time_based_decay(epoch, lr):
    return lr * 1 / (1 + decay * epoch)

model.compile(loss='mse', optimizer='adam',metrics=['mse'])
history=model.fit(X_train, y_train, epochs=250, batch_size=32, 
                  validation_data=(X_test, y_test),callbacks=[LearningRateScheduler(lr_time_based_decay, verbose=1)],)

 

import matplotlib.pyplot as plt


#oppimisen visualisointi
plt.plot(history.history['loss'])
plt.plot(history.history['val_loss'])
plt.title('model loss')
plt.ylabel('loss')
plt.xlabel('epochs')
plt.legend(['train', 'validation'], loc='upper left')
plt.show()

# ennustetaan testidatalla
y_pred = model.predict(X_test)
y_pred = scaler_y.inverse_transform(y_pred)
y_test = scaler_y.inverse_transform(y_test)

 

r2 = r2_score(y_test, y_pred)
mae = mean_absolute_error(y_test, y_pred)
mse = mean_squared_error(y_test, y_pred)
rmse = np.sqrt(mse)

 
print (f'r2: {r2}')
print (f'mae: {mae}')
print (f'rmse: {rmse}')


# tallennetaan malli

model.save('price_model.h5')



# tallennetaan skaaleri

with open('price-scaler_X.pickle', 'wb') as f:

    pickle.dump(scaler_X, f)



# tallennetaan skaaleri

with open('price-scaler_y.pickle', 'wb') as f:

    pickle.dump(scaler_y, f)



# dummy käsittelijä

with open('price-ct.pickle', 'wb') as f:

    pickle.dump(ct, f)








# ennusta uudella datalla

# new_data_time = []
# new_data_league = []
# new_data_id = []
# for x in range(90):
#     new_data_time.append(x+1)
#     new_data_league.append("Scourge")
#     new_data_id.append("Exalted orb")

# df_new = pd.DataFrame({'Time':new_data_time})
# df_new['League'] = new_data_league
# df_new['Id'] = new_data_id

# # Xnew = pd.read_csv('C:\dev\js\web-ohjelmointi-projekti\_backend_\pricing.csv')
# Xnew = df_new
# Xnew_org = Xnew
# predicted_item_id = [];

# for Index in range(len(Xnew)):
#     predicted_item_id.append(2)
 
# Xnew['Id'] = predicted_item_id

# # Xnew=ct.transform(Xnew)
# Xnew = scaler_X.transform(Xnew)
# ynew= model.predict(Xnew) 

 

# ynew = scaler_y.inverse_transform(ynew)




# for i in range (len(ynew)):
#    print (f'{Xnew_org.iloc[i]}\nArvo: {ynew[i][0]}\n')














# print (f'r2: {r2}')
# print (f'mae: {mae}')
# print (f'rmse: {rmse}')


# #tallennetaan malli

# model.save('price_model.h5')



# # # tallennetaan skaaleri

# with open('price-scaler_X.pickle', 'wb') as f:
#     pickle.dump(scaler_X, f)



# # # tallennetaan skaaleri

# with open('price-scaler_y.pickle', 'wb') as f:
#      pickle.dump(scaler_y, f)



# # dummy käsittelijä

# with open('price-ct.pickle', 'wb') as f:

#     pickle.dump(ct, f)



















































# with open("resp_text.txt", "w") as file:
#       file.write(response.text)