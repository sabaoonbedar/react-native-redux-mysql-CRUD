# Complete "CRUD" via Redux and Redux-Thunk, React-Native.
#### This repository will provide all the information required for the implementation of MySQL CRUD with Redux and Thunk in easiest way.

## Description:
* Well Redux and Rudux-Thunk both are used for "state management" of App level, normally we are dealing with components in react-native and we do state management at component level.
* As long as you are dealing with small startup apps, one may not feel the use of redux in the project but on the large scale projects the complexity of the state management increases as the project grows bigger, here you may need redux as a best tool to ease the complexity.
* Befor we move on for the explanation of the project, I may recommend to study a bit about prerequisites of the Redux and Redux-thunk as this will help you to understand it very easily.

* note : that if you get "index out of Range Error"  so you need to go to actions of the redux and update your network ip address in the fetch function.  file name: (mysql_Actions)

### files
* Components Folder ..... Includes all files of the project.
* Redux Folder ........ Includes Redux Actions and Reducers.
* Routes Folder ........Includes the React-Native-Router-Flux Scenes for navigation.
* Scenes Folder ........Includes the Screens (initial screen & update screen)
* MySQLDatabase Folder ........ Includes all the php files which will provide server side response.
* DataCollection.sql ..... Includes the database that should to be imported.





## Steps:

1. First Install two libraries using npm modes (Redux and React-Redux).
* Run the following command on terminal..  npm install --save redux react-redux  
* (react-redux has been used for the connection of redux and react-native)
* Remember you can add "components folder" inside your project which will help you to integrate the project in ease mode. 
2. After installation import both libraries into your app.js file as given in the repository.
3. Create store and wrap it with provider.
4. Now install redux thunk.. type the following command to get redux-thunk..   npm install redux-thunk
5. Rudux thunk works as a middleware so apply the middleware to the store in app.js file.
6. After all these steps make a seperate folder for the Redux and add two more folders as Actions & Reducers, add related files given in the repository.
7. Find out your network ip-address and change the link in the fetch api that has been used in the Action files, provide your own directory location in order to make proper sync.
8. Remember it includes files of php which works on server side so you have to download xampp or wampp to get phpmyadmin and in the htdocs folder of the xampp you have to add your whole project so then everything will work accurately.
9. DataCollection.sql file is given, which you can import into your localhost/phpmyadmin which will help you in connectivity with mysql, as the code is already synced with it.

#### Good Luck !


