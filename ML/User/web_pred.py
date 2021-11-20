import pandas as pd
import numpy as np
import pickle #load encoder
import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'  # or any {'0', '1', '2'}
from tensorflow.keras.models import load_model
import sys

item_to_predict = sys.argv[1]
# item_to_predict = 'Exalted Orb'
#lataa malli
model = load_model('./ML/User/price_model.h5')

 

# load encoder
with open('./ML/User/price-ct.pickle', 'rb') as f:
    ct = pickle.load(f)

 
new_data_time = []
new_data_league = []
new_data_id = []
for x in range(90):
     new_data_time.append(x+1)
     new_data_league.append("Scourge")
     new_data_id.append(f'{item_to_predict}')     
     # new_data_time.append(x+1)
     # new_data_league.append("Scourge")
     # new_data_id.append("Exalted Orb")

df_new = pd.DataFrame({'Time':new_data_time})
df_new['League'] = new_data_league
df_new['Id'] = new_data_id

df_new["Time"]=df_new["Time"].apply(str)
# Xnew = pd.read_csv('C:\dev\js\web-ohjelmointi-projekti\_backend_\\all_data.csv')
# Xnew = Xnew.drop('Price', 1)
Xnew = df_new
Xnew_org = Xnew

Xnew["Time"]=Xnew["Time"].apply(str)
# with open('price-scaler_X.pickle', 'rb') as f:
#     scaler_X = pickle.load(f)
    
# with open('price-scaler_y.pickle', 'rb') as f:
#     scaler_y = pickle.load(f)
    



# ennusta uudella datalla
# Xnew = pd.read_csv('new_price.csv')
# Xnew_org = Xnew

 

Xnew=ct.transform(Xnew)
# Xnew = scaler_X.transform(Xnew)
# test_0 = Xnew
# test_1 = Xnew.reshape((1,-1))
# test_2 = Xnew.reshape((2,-1))
# test_3 = Xnew.reshape((-1,2))
ynew= model.predict(Xnew) 

 

# ynew = scaler_y.inverse_transform(ynew)

# import numpy as np
ynew = np.exp(ynew)
 

for i in range (len(ynew)):
    print (ynew[i])
    
    
# import matplotlib.pyplot as plt
# #oppimisen visualisointi
# plt.plot(ynew)
# plt.title('Item price over time')
# plt.ylabel('price')
# plt.xlabel('time')
# plt.show()