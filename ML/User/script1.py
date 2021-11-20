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

# import requests
import json

import sys

# test = json.loads(
#   '{"epochs":"12","batch_size":"12","layer_settings":[{"amount":"21","function":"ReLU","id":3}]}')
# print(json.dumps(test))
# print(test['layer_settings'][0]['amount'])


settings = json.loads(sys.argv[1])


print(json.dumps(settings))
print(settings['epochs'])

print(settings['batch_size'])

print(settings['layer_settings'])

print(settings['layer_settings'][0]['amount'])

print("Layer settings length")
print(len(settings['layer_settings']))


