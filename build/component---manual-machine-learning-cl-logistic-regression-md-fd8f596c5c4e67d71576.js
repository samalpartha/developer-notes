(window.webpackJsonp=window.webpackJsonp||[]).push([[336],{KCoJ:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return p}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var i=n("/FXl"),a=n("TjRS");n("aD51");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Machine-Learning/CL-Logistic-Regression.md"}});var o={_frontmatter:s},l=a.a;function p(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(i.b)(l,r({},o,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"classification-logistic-regression"},"Classification: Logistic Regression"),Object(i.b)("p",null,"This is a basic look at ",Object(i.b)("inlineCode",{parentName:"p"},"Logistic Regression")," and implementing an example from a ",Object(i.b)("inlineCode",{parentName:"p"},"csv")," file. While the CSV file itself with the data is excluded, this basic look will show how to interpret the CSV in a particular way to give your dependent and independent variables."),Object(i.b)("p",null,"The performance and reduction of these independent variables to improve the model are not included in this basic overview."),Object(i.b)("h2",{id:"note"},"Note"),Object(i.b)("p",null,"The original text below includes mathmetical formulas that do not translate into their mathematical expressions on the blog. Some familiarity with Latex will be required to interpret the expressions used."),Object(i.b)("h2",{id:"logistic-regression-intuition"},"Logistic Regression Intuition"),Object(i.b)("p",null,"This section can be quite difficult - there will be some ",Object(i.b)("strong",{parentName:"p"},"math"),"."),Object(i.b)("p",null,"We know about ",Object(i.b)("inlineCode",{parentName:"p"},"linear regression"),", ",Object(i.b)("inlineCode",{parentName:"p"},"multiple linear regression")," etc. (DV on y, IV on x)."),Object(i.b)("p",null,"What happens if we classify things along a graph? Eg. 0 and 1 on the y axis and age on the x axis. This one is very black and white, but at the same time we can intuitive see some correlation."),Object(i.b)("p",null,"In the example given above, we wouldn't use a linear model (as you could imagine). How about instead, you were able throw in probabilies between 0 and 1. The could be a probability between the x intercept and the y-intecept at x","[hat]",". You could interpret the above and below 100% and 0% respectively. This would be a VERY basic but sensicle attempt to describe the model."),Object(i.b)("h3",{id:"the-scientific-approach"},"The scientific approach"),Object(i.b)("p",null,"If we take the linear ",Object(i.b)("inlineCode",{parentName:"p"},"y = b[0] + b[1]*x")," and take that into the sigmoid function ",Object(i.b)("inlineCode",{parentName:"p"},"p = 1 / (1 + pow(e, -y))")," and then we throw that into ",Object(i.b)("inlineCode",{parentName:"p"},"ln(p/(1-p)) = b[0] + b[1]*x")," then we can get the y. Therefore the last equation is the one for logistical regression."),Object(i.b)("pre",null,Object(i.b)("code",r({parentName:"pre"},{className:"language-python"}),"# MAIN FORMULA\nln(p/(1-p)) = b[0] + b[1]*x\n")),Object(i.b)("p",null,"Based on the above formula and plugging in the example data, we will get the best fitting line."),Object(i.b)("p",null,"If we now take any particular ages along the x axis of ",Object(i.b)("inlineCode",{parentName:"p"},"20, 30, 40, 50")," etc, we can then find y","[hat]"," to get the predicted value that it will be a ",Object(i.b)("inlineCode",{parentName:"p"},"1")," or ",Object(i.b)("inlineCode",{parentName:"p"},"0")," - the higher the probability, the higher the chance of a ",Object(i.b)("inlineCode",{parentName:"p"},"1"),". Any probability that is less than 0.5 is ",Object(i.b)("inlineCode",{parentName:"p"},"projected down")," whereas anything else is ",Object(i.b)("inlineCode",{parentName:"p"},"projected up"),"."),Object(i.b)("p",null,"After applying to model, we can start drawing conclusions."),Object(i.b)("h2",{id:"implementation-in-python"},"Implementation in Python"),Object(i.b)("p",null,"Using our standard setup, we want to predict whether or not we can get a correlation between the ",Object(i.b)("inlineCode",{parentName:"p"},"purchase")," of something using their ",Object(i.b)("inlineCode",{parentName:"p"},"age")," and ",Object(i.b)("inlineCode",{parentName:"p"},"salary"),"."),Object(i.b)("p",null,"For accurate predictions, we do use feature scaling and we will also create a classification test and training set."),Object(i.b)("pre",null,Object(i.b)("code",r({parentName:"pre"},{className:"language-python"}),"# Data Preprocessing Template\n\n# Importing the libraries\nimport numpy as np\nimport matplotlib.pyplot as plt\nimport pandas as pd\n\n# Importing the dataset\ndataset = pd.read_csv('data/Social_Network_Ads.csv')\n# We jut want the estimate of purchase using the Age and Estimated Salary\nX = dataset.iloc[:, 2:4].values\ny = dataset.iloc[:, 4].values\n\n# If you wish to check to lists\n# print(X.tolist())\n# print(y.tolist())\n\n# Splitting the dataset into the Training set and Test set\nfrom sklearn.model_selection import train_test_split\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.25, random_state = 0)\n\n# Feature Scaling\nfrom sklearn.preprocessing import StandardScaler\n# we use this here for accurate predicition\nsc_X = StandardScaler()\nX_train = sc_X.fit_transform(X_train)\nX_test = sc_X.fit_transform(X_test)\n\nprint(X_train.tolist())\n")),Object(i.b)("h3",{id:"fitting-the-logistic-regression-model-to-the-training-set"},"Fitting the logistic regression model to the Training Set"),Object(i.b)("pre",null,Object(i.b)("code",r({parentName:"pre"},{className:"language-python"}),"# Fitting Logistic Regression to the Training Set\n# Create the Regressor\nfrom sklearn.linear_model import LogisticRegression\nclassifier = LogisticRegression(random_state=0)\nclassifier.fit(X_train, y_train)\n")),Object(i.b)("p",null,"In order to make a prediction on the X_test:"),Object(i.b)("pre",null,Object(i.b)("code",r({parentName:"pre"},{className:"language-python"}),"# y_pred will be the vector of predictions\ny_pred = classifier.predict(X_test)\nprint(y_pred.tolist())\n")),Object(i.b)("h3",{id:"checking-the-fit-predictions-using-the-confusion-matrix"},"Checking the fit predictions using the Confusion Matrix"),Object(i.b)("p",null,"We do this by making a ",Object(i.b)("inlineCode",{parentName:"p"},"Confusion Matrix"),"."),Object(i.b)("pre",null,Object(i.b)("code",r({parentName:"pre"},{className:"language-python"}),'# Create the confusion matrix\nfrom sklearn.metrics import confusion_matrix\ncm = confusion_matrix(y_test, y_pred)\nprint("\\nConfusion Matrix")\nprint(cm.tolist())\n')),Object(i.b)("h3",{id:"visualising-the-predictive-power-using-a-graph"},"Visualising the predictive power using a graph"),Object(i.b)("p",null,"There is a lot of code required to visualise this:"),Object(i.b)("pre",null,Object(i.b)("code",r({parentName:"pre"},{className:"language-python"}),"# Visualising the Training Set results\nfrom matplotlib.colors import ListedColormap\nX_set, y_set = X_train, y_train\nX1, X2 = np.meshgrid(np.arange(start = X_set[:, 0].min() - 1, stop = X_set[:, 0].max() + 1, step = 0.01),\n                    np.arange(start = X_set[:, 1].min() - 1, stop = X_set[:, 1].max() + 1, step = 0.01))\nplt.contourf(X1, X2, classifier.predict(np.array([X1.ravel(), X2.ravel()]).T).reshape(X1.shape),\n            alpha = 0.75, cmap = ListedColormap(('red', 'green')))\nplt.xlim(X1.min(), X1.max())\nplt.ylim(X2.min(), X2.max())\nfor i, j in enumerate(np.unique(y_set)):\n    plt.scatter(X_set[y_set == j, 0], X_set[y_set == j, 1],\n            c = ListedColormap(('red', 'green'))(i), label = j)\nplt.title('Logistical Regression Training Set')\nplt.xlabel('Age')\nplt.ylabel('Estimated Salary')\n# plt.savefig('logistical-regression.png')\nplt.show()\nplt.close()\n")),Object(i.b)("h3",{id:"how-do-we-interpret-the-graph"},"How do we interpret the graph?"),Object(i.b)("p",null,"The red points are the training set observations for when the IV purchased = 0, and 1 for green."),Object(i.b)("p",null,"In our example, red did not buy the SUV, green are those who did."),Object(i.b)("p",null,"Given the x,y axis, those with the lower salary who also didn't have red are also those who didn't but the SUV. We can see those with the higher salaries are more likely to have bought the SUV."),Object(i.b)("p",null,"Another observation is that the older above the average even with the lower salary were more likely to buy the SUV."),Object(i.b)("h3",{id:"what-is-the-point-of-the-classifiers"},"What is the point of the classifiers?"),Object(i.b)("p",null,"The goal is to classify the right users into the right categories. We do this by plotting the ",Object(i.b)("inlineCode",{parentName:"p"},"prediction regions")," - in the case of the graph, it's the red prediction and the green region is where the classifier does by the SUV."),Object(i.b)("p",null,"The data point is the result, the region is the estimate."),Object(i.b)("p",null,"When we have a linear classifier, the boundary will always be a straight line."),Object(i.b)("h3",{id:"checking-the-results-when-applied-to-the-test-set"},"Checking the results when applied to the Test Set"),Object(i.b)("p",null,"The results that we can see from this actually come from the same confusion matrix that we saw before."),Object(i.b)("pre",null,Object(i.b)("code",r({parentName:"pre"},{className:"language-python"}),"# Visualising the Test Set results\nfrom matplotlib.colors import ListedColormap\nX_set, y_set = X_test, y_test\nX1, X2 = np.meshgrid(np.arange(start = X_set[:, 0].min() - 1, stop = X_set[:, 0].max() + 1, step = 0.01),\n                    np.arange(start = X_set[:, 1].min() - 1, stop = X_set[:, 1].max() + 1, step = 0.01))\nplt.contourf(X1, X2, classifier.predict(np.array([X1.ravel(), X2.ravel()]).T).reshape(X1.shape),\n            alpha = 0.75, cmap = ListedColormap(('red', 'green')))\nplt.xlim(X1.min(), X1.max())\nplt.ylim(X2.min(), X2.max())\nfor i, j in enumerate(np.unique(y_set)):\n    plt.scatter(X_set[y_set == j, 0], X_set[y_set == j, 1],\n            c = ListedColormap(('red', 'green'))(i), label = j)\nplt.title('Logistical Regression Test Set')\nplt.xlabel('Age')\nplt.ylabel('Estimated Salary')\n# plt.savefig('logistical-regression.png')\nplt.legend()\nplt.show()\nplt.close()\n")))}p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Machine-Learning/CL-Logistic-Regression.md"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-machine-learning-cl-logistic-regression-md-fd8f596c5c4e67d71576.js.map