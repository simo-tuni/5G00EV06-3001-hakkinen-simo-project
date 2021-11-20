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

import json

import sys


settings = json.loads(sys.argv[1])

# settings = json.loads(
#   '{"epochs":"10","batch_size":"32","layer_settings":[{"amount":"10","function":"ReLU","id":3}]}')
print(settings)
node_csv = pd.read_csv('./ML/User/out.csv')
print("reading out.csv was successful")


item_id = []
price_data = []
time_data = []
league_data = []

leagues = ['Expedition', 'Ultimatum', 'Ritual', 'Heist', 'Harvest', 'Delirium', 'Metamorph', 'Blight', 'Legion', 'Synthesis', 'Betrayal', 'Delve', 'Incursion', 'Bestiary', 'Abyss', 'Harbinger']
league_counter = 0;

for index, row in node_csv.iterrows():
    item_id.append(row['Name'])
    price_data.append(row['Price'])
    time_data.append(row['Day'])
    league_data.append(row['League'])
    
df = pd.DataFrame({'Price':price_data})
df['Time'] = time_data
df['League'] = league_data
df['Id'] = item_id


df = pd.read_csv('./ML/User/all_data.csv')
print("reading all_data.csv was successful")

X = df.iloc[:, [1, 2, 3]]
y = df.iloc[:, [0]]


X_org = X


X["Time"]=X["Time"].apply(str)


ct = ColumnTransformer(transformers=[('encoder', OneHotEncoder(drop='first'), ['Time', 'League', 'Id'])], remainder='passthrough')
X = ct.fit_transform(X)

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.2, random_state = 0)

y_train = np.log(y_train).values.ravel()
y_test = np.log(y_test).values.ravel()


model = Sequential()
print("entering settings")
for item in settings['layer_settings']:
    print(item)
    print(item['amount'])        
    print(item['function'])       
    print(item['function'].lower())    
    model.add(Dense(units=int(item['amount']), input_dim=X.shape[1],activation=item['function'].lower()))



print("exiting settings")


# model.add(Dense(units=100, input_dim=X.shape[1],activation='relu'))
# model.add(Dense(units=50, activation='relu'))
# model.add(Dense(units=25, activation='relu'))
model.add(Dense(units=1, activation='linear'))

 
print("after final layer")

initial_learning_rate = 0.01
epochs = int(settings['epochs'])
decay = initial_learning_rate / epochs

print("after time based decay settings")

def lr_time_based_decay(epoch, lr):
    return lr * 1 / (1 + decay * epoch)

print("entering compile")
model.compile(loss='mse', optimizer='adam',metrics=['mse'])
history=model.fit(X_train, y_train, epochs=int(settings['epochs']), batch_size=int(settings['batch_size']), 
                  validation_data=(X_test, y_test),callbacks=[LearningRateScheduler(lr_time_based_decay, verbose=1)],)

 

print("exiting compile")

y_pred = model.predict(X_test)

print("y_pred completed")

y_pred = np.exp(y_pred)
print("y_pred scaled to normal")

y_test = np.exp(y_test)

print("y_test scaled to normal")

print("prediction compeleted")

r2 = r2_score(y_test, y_pred)
mae = mean_absolute_error(y_test, y_pred)
mse = mean_squared_error(y_test, y_pred)
rmse = np.sqrt(mse)

 
print (f'r2: {r2}')
print (f'mae: {mae}')
print (f'rmse: {rmse}')


model.save('./ML/User/price_model.h5')


with open('./ML/User/price-ct.pickle', 'wb') as f:

    pickle.dump(ct, f)

