import numpy as np
import matplotlib.pyplot as plt
from sklearn.svm import SVC
import pandas as pd
from math import sqrt
from sklearn import model_selection, metrics, preprocessing
from sklearn.metrics import classification_report, confusion_matrix
import category_encoders as ce
from sklearn.neighbors import KNeighborsClassifier
from sklearn.preprocessing import LabelEncoder
import seaborn as sns
#Reading data
train = pd.read_csv('shotChartData.csv');
label = 'SHOT_MADE_FLAG'



x = np.array(train.drop([label],1))
y = np.array(train[label])
#Encoding
enc = ce.TargetEncoder(smoothing=2)
enc.fit(x, y)
new_X = enc.transform(x, y)

#MinMaxScaler
min_max_scaler = preprocessing.MinMaxScaler(feature_range =(0, 1))

x_minmax_scaler = min_max_scaler.fit_transform(new_X)

x_Standardisation = preprocessing.StandardScaler()
  
# Scaled feature
x_after_Standardisation = x_Standardisation.fit_transform(new_X)

train_X, test_X, train_Y, y_test = model_selection.train_test_split(x_after_Standardisation ,y,test_size = 0.3,random_state=42)

knn = KNeighborsClassifier(n_neighbors = 15, weights='distance')
knn.fit(train_X, train_Y)

knn_predict = knn.predict(test_X)
knn_score = knn.score(test_X, y_test,sample_weight=None)



print('\n')
print(classification_report(y_test,knn_predict))


print('MAE:', metrics.mean_absolute_error(y_test, knn_predict), ' ',
      (1./len(y_test))*(sum(abs(y_test-knn_predict ))))
print('MSE:', metrics.mean_squared_error(y_test, knn_predict), ' ',
      (1./len(y_test))*(sum((y_test-knn_predict )**2)))
print('RMSE:', 
      np.sqrt(metrics.mean_squared_error(y_test,knn_predict)), ' ',
      sqrt((1./len(y_test))*(sum((y_test-knn_predict )**2))))

#Confusion matrix
# mat = confusion_matrix(y_test,knn_predict)
# print(mat)
# sns.heatmap(mat.T,square = True,annot = True, fmt='d', cbar=False,cmap="Blues")
# plt.title("KNN Confusion matrix")
# plt.xlabel('Бодит утга')
# plt.ylabel('Таамагласан утга')

# knnn = [28.57,29.1,29.4,29.9,30.2,30.4,30.6]
# aaa = [1918,2100,2558,2800,3197,3450,3836]
# ddd = [28.9,28.9,28.8,28.8,28.9,29.1,29.2]
# error_rate = []
# Error rate

# plt.figure(figsize =(10,6))
# plt.plot(aaa,knnn ,color="#85C1E9",
#           marker="o" ,markerfacecolor="#021E57",markersize=10)
# plt.plot(aaa,ddd ,color="#25d56f"
#           ,marker="o" ,markerfacecolor="#021E57",markersize=10)
# plt.title("Алдааны хувь v Туршилтын өгөгдлийн хэмжээ")
# plt.xlabel('Туршилтын өгөгдлийн хэмжээ')
# plt.ylabel('Алдааны хувь')

    
    





























