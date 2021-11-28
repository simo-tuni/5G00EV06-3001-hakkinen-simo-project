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

#################################
# This program will train an artificial neural network that predicts item prices for the ARPG Path of Exile
# More specifically this is ran through a web interface on an application running on Heroku
#################################


settings = json.loads(sys.argv[1]) # Load the User created settings from the web UI

print(settings) # Debug message
node_csv = pd.read_csv('./ML/User/out.csv') # Path to csv file, needs to be from root
print("reading out.csv was successful") # Debug message


item_id = []
price_data = []
time_data = []
league_data = []

# Iterate through the csv file and save to arrays
for index, row in node_csv.iterrows():
    item_id.append(row['Name'])
    price_data.append(row['Price'])
    time_data.append(row['Day'])
    league_data.append(row['League'])
    
# Combine arrays into one dataframe
df = pd.DataFrame({'Price':price_data})
df['Time'] = time_data
df['League'] = league_data
df['Id'] = item_id

# Read csv that contains all price data from past leagues starting from 3.0 to 3.15
df = pd.read_csv('./ML/User/all_data.csv')
print("reading all_data.csv was successful") # Debug message

X = df.iloc[:, [1, 2, 3]] # X-values are Time, League and Id
y = df.iloc[:, [0]] # Y-value are Price


X_org = X


X["Time"]=X["Time"].apply(str) # Transform date data to string so that it can be made into dummies

# Create dummies with OneHotEncoder and ColumnTransformer for the time, league and id data in dataframe
ct = ColumnTransformer(transformers=[('encoder', OneHotEncoder(drop='first'), ['Time', 'League', 'Id'])], remainder='passthrough')
X = ct.fit_transform(X)

# Split data to testing and training data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.2, random_state = 0)

# Scale the Y-values with natural logarithm so that no negative values are passed to the model
y_train = np.log(y_train).values.ravel() 
y_test = np.log(y_test).values.ravel()


model = Sequential()
print("entering settings") # Debug message
# Iterate through the settings and add layers according to them
for item in settings['layer_settings']:
    print(item) # Debug message
    print(item['amount']) # Debug message
    print(item['function']) # Debug message      
    print(item['function'].lower()) # Debug message   
    model.add(Dense(units=int(item['amount']), input_dim=X.shape[1],activation=item['function'].lower()))



print("exiting settings") # Debug message


# Add final layer
model.add(Dense(units=1, activation='linear'))

 
print("after final layer") # Debug message

initial_learning_rate = 0.01
epochs = int(settings['epochs'])
decay = initial_learning_rate / epochs

print("after time based decay settings") # Debug message

def lr_time_based_decay(epoch, lr):
    return lr * 1 / (1 + decay * epoch)

print("entering compile") # Debug message
model.compile(loss='mse', optimizer='adam',metrics=['mse'])
history=model.fit(X_train, y_train, epochs=int(settings['epochs']), batch_size=int(settings['batch_size']), 
                  validation_data=(X_test, y_test),callbacks=[LearningRateScheduler(lr_time_based_decay, verbose=1)],)

 

print("exiting compile") # Debug message

y_pred = model.predict(X_test)

print("y_pred completed") # Debug message

y_pred = np.exp(y_pred)
print("y_pred scaled to normal") # Debug message

y_test = np.exp(y_test)

print("y_test scaled to normal") # Debug message

print("prediction compeleted") # Debug message

r2 = r2_score(y_test, y_pred)
mae = mean_absolute_error(y_test, y_pred)
mse = mean_squared_error(y_test, y_pred)
rmse = np.sqrt(mse)

# Model accuracy printouts, if the model was small these can be seen in Heroku logs
print (f'r2: {r2}')  
print (f'mae: {mae}')
print (f'rmse: {rmse}')


model.save('./ML/User/price_model.h5') # Save the model so that it can be used to predict data

# Save the column transformer
with open('./ML/User/price-ct.pickle', 'wb') as f:

    pickle.dump(ct, f)

