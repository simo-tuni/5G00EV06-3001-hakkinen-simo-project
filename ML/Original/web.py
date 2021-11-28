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

#################################
# This program will train an artificial neural network that predicts item prices for the ARPG Path of Exile.
# More specifically this is the pre-compiled neural network that is listed as 'Original' in the web UI.
# The model trained using this is the default model selected in the web UI.
# This program cannot be run on the web UI, it is only left here to show how the model was created.
#################################

node_csv = pd.read_csv('out.csv') # This csv contains data for the currently ongoing league 'Scourge'
print(node_csv) # Debug message

item_id = []
price_data = []
time_data = []
league_data = []


# Iterate through the csv file and save to arrays
for index, row in node_csv.iterrows():
    # print(row['Name'], row['Price'])
    item_id.append(row['Name'])
    price_data.append(row['Price'])
    time_data.append(row['Day'])
    league_data.append(row['League'])
    

################################################################################
# This commented out code was used to get all of the historical price data.
# There is no need to repeat this process every time the program is run.
# It was intentionally left here to show the process.
################################################################################

# The past leagues from 3.15 to 3.0, each of these lasted about 3 months of real time (some lasted less, some more)
#leagues = ['Expedition', 'Ultimatum', 'Ritual', 'Heist', 'Harvest', 'Delirium', 'Metamorph', 'Blight', 'Legion', 'Synthesis', 'Betrayal', 'Delve', 'Incursion', 'Bestiary', 'Abyss', 'Harbinger']
#league_counter = 0;

# Get all of the currency items that are recorded in poe-antiquary
# response = requests.post(f'https://poe-antiquary.xyz/api/items/9')
# response.raise_for_status() # ensure we notice bad responses

# currency_items = response.json()


# Loop through all of the items and request complete history for all of the leagues if it is available
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

# Combine arrays into one dataframe   
df = pd.DataFrame({'Price':price_data})
df['Time'] = time_data
df['League'] = league_data
df['Id'] = item_id


# Read csv that contains all price data from past leagues starting from 3.0 to 3.15
df = pd.read_csv('all_data.csv')


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

# Add layers
model = Sequential()
model.add(Dense(units=100, input_dim=X.shape[1],activation='relu'))
model.add(Dense(units=50, activation='relu'))
model.add(Dense(units=25, activation='relu'))
model.add(Dense(units=1, activation='linear'))

 
# Reduce learning rate over time to combat over learning
initial_learning_rate = 0.01
epochs = 100
decay = initial_learning_rate / epochs

def lr_time_based_decay(epoch, lr):
    return lr * 1 / (1 + decay * epoch)

model.compile(loss='mse', optimizer='adam',metrics=['mse'])
history=model.fit(X_train, y_train, epochs=250, batch_size=32, 
                  validation_data=(X_test, y_test),callbacks=[LearningRateScheduler(lr_time_based_decay, verbose=1)],)

 

import matplotlib.pyplot as plt # import to display graphs


# Visualize the learning
plt.plot(history.history['loss'])
plt.plot(history.history['val_loss'])
plt.title('model loss')
plt.ylabel('loss')
plt.xlabel('epochs')
plt.legend(['train', 'validation'], loc='upper left')
plt.show()

# Predict using test data
y_pred = model.predict(X_test)
y_pred = scaler_y.inverse_transform(y_pred)
y_test = scaler_y.inverse_transform(y_test)

 
# Model accuracy scores
r2 = r2_score(y_test, y_pred)
mae = mean_absolute_error(y_test, y_pred)
mse = mean_squared_error(y_test, y_pred)
rmse = np.sqrt(mse)

# Print scores
print (f'r2: {r2}')
print (f'mae: {mae}')
print (f'rmse: {rmse}')


# Save the model
model.save('price_model.h5')


# Save the column transformer

with open('price-ct.pickle', 'wb') as f:

    pickle.dump(ct, f)


