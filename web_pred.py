import pandas as pd
import pickle #load encoder
from tensorflow.keras.models import load_model


#lataa malli
model = load_model('price_model.h5')

 

# # load encoder
# with open('price-ct.pickle', 'rb') as f:
#     ct = pickle.load(f)

 

with open('price-scaler_X.pickle', 'rb') as f:
    scaler_X = pickle.load(f)
    
with open('price-scaler_y.pickle', 'rb') as f:
    scaler_y = pickle.load(f)
    
# ennusta uudella datalla
Xnew = pd.read_csv('new_price.csv')
Xnew_org = Xnew

 

# Xnew=ct.transform(Xnew)
Xnew = scaler_X.transform(Xnew)
ynew= model.predict(Xnew) 

 

ynew = scaler_y.inverse_transform(ynew)

 

for i in range (len(ynew)):
    print (ynew[i])