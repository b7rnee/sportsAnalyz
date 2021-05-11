import numpy as np
from sklearn.svm import SVC
import pandas as pd
from sklearn import model_selection, preprocessing
import category_encoders as ce
import joblib

    
    
    


#Reading data
train = pd.read_csv('shotChartData.csv');
label = 'SHOT_MADE_FLAG'

x = np.array(train.drop([label],1))
y = np.array(train[label])

#Target Encoding
enc = ce.TargetEncoder()
enc.fit(x, y)
new_X = enc.transform(x, y)

#MinMaxScaler
min_max_scaler = preprocessing.MinMaxScaler(feature_range =(0, 1))

x_minmax_scaler = min_max_scaler.fit_transform(new_X)
train_X, test_X, train_Y, y_test = model_selection.train_test_split(x_minmax_scaler,y,test_size = 0.3,random_state=42)

clf = SVC(kernel='linear')
model = clf.fit(train_X , train_Y)
joblib.dump(model, "svmModel.pkl")































