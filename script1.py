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

arg = sys.argv[1]

print(arg)

response = requests.post(f'https://poe-antiquary.xyz/api/prices/47/9/{arg}')
response.raise_for_status() # ensure we notice bad responses

x = response.json()
print(x)

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

