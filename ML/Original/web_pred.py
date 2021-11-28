import pandas as pd
import numpy as np
import pickle #load encoder
import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3' # This prevents warning messages from polluting logging 
from tensorflow.keras.models import load_model
import sys

item_to_predict = sys.argv[1] # Name of the item
# Load model
model = load_model('./ML/Original/price_model.h5')

 

# load encoder
with open('./ML/Original/price-ct.pickle', 'rb') as f:
    ct = pickle.load(f)

 
# Generate the array and dataframe that is used to predict price
new_data_time = []
new_data_league = []
new_data_id = []
for x in range(90):
     new_data_time.append(x+1)
     new_data_league.append("Scourge")
     new_data_id.append(f'{item_to_predict}')

df_new = pd.DataFrame({'Time':new_data_time})
df_new['League'] = new_data_league
df_new['Id'] = new_data_id

df_new["Time"]=df_new["Time"].apply(str) # Transform time to string
Xnew = df_new 
Xnew_org = Xnew

Xnew["Time"]=Xnew["Time"].apply(str) # Transform time to string

# Transform X-values with the loaded column transformer
Xnew=ct.transform(Xnew)

# Predict prices for the item
ynew= model.predict(Xnew) 

 
# Scale the predicted prices back
ynew = np.exp(ynew)

# Print the predicted prices. The nodejs backend listens and saves this output.
for i in range (len(ynew)):
    print (ynew[i])
    
