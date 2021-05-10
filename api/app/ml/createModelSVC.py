import numpy as np
import matplotlib.pyplot as plt
from sklearn.svm import SVC
import pandas as pd
from math import sqrt
from sklearn import model_selection, metrics, preprocessing
from sklearn.metrics import classification_report, confusion_matrix
import category_encoders as ce
from sklearn.preprocessing import LabelEncoder
import seaborn as sns

    
    
    


#Reading data
train = pd.read_csv('shotChartData.csv');
label = 'SHOT_MADE_FLAG'
# sns.countplot(train['VTM'],label=label)
# cols = ['SHOT_ZONE_AREA','SHOT_ZONE_RANGE','SHOT_TYPE','ACTION_TYPE','SHOT_MADE_FLAG']
# sns.pairplot(data= train[cols], hue=label, palette='RdBu')


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

# clf = SVC(kernel='poly', C=100, gamma='auto', degree=3)
clf = SVC(kernel='linear')
# clf = SVC(kernel='rbf', C=100, gamma=0.1)
clf.fit(train_X , train_Y)
svc_predict = clf.predict(test_X)
svc_score = clf.score(test_X, y_test,sample_weight=None)

print('\n')
print(classification_report(y_test,svc_predict))



print('MAE:', metrics.mean_absolute_error(y_test, svc_predict), ' ',
      (1./len(y_test))*(sum(abs(y_test-svc_predict ))))
print('MSE:', metrics.mean_squared_error(y_test, svc_predict), ' ',
      (1./len(y_test))*(sum((y_test-svc_predict )**2)))
print('RMSE:', 
      np.sqrt(metrics.mean_squared_error(y_test,svc_predict)), ' ',
      sqrt((1./len(y_test))*(sum((y_test-svc_predict )**2))))




#Visualization
mat = confusion_matrix(y_test,svc_predict)
print(mat)
sns.heatmap(mat.T,square = True,annot = True, fmt='d', cbar=False)
plt.title("SVM Confusion matrix")
plt.xlabel('Бодит утга')
plt.ylabel('Таамагласан утга')
# C_values = [.01,0.25,1,10,100,1000]
# error_rate = []
# Error rate
# for i in C_values:

#     svc = SVC(kernel='rbf', C=10000,gamma=i)
#     svc.fit(train_X,train_Y)
#     pred_i = svc.predict(test_X)
#     error_rate.append(np.mean(pred_i != y_test))

# plt.figure(figsize =(10,6))
# plt.plot(C_values, error_rate ,color="#1A51F0",
#           linestyle="dashed",marker="o" ,markerfacecolor="#FE2600",markersize=10)
# plt.title("Алдааны хувь vs Gamma параметр")
# plt.xlabel('Gamma параметр')
# plt.ylabel('Алдааны хувь')


























