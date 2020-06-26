import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import Routes from './Components/Routes/Routes';
console.disableYellowBox = true;



// before going to start redux you have to import two libraries in the app.js file (react and react redux).
//import creatStore from redux which will make a store which will have states.
import {createStore, applyMiddleware} from 'redux';
//import provider from the react-redux: this is basically for the reason to connect readux with the react native,provider is an upper layer over store.
import {Provider} from 'react-redux';
//the create store takes argument of reducer so import the file of the reducer.
import Reducer from './Components/Redux/Reducers';

//import redux-thunk as middleware which helps to return function as a action.
import thunk from 'redux-thunk';
//import async storage for the purpose to store the reducers
import AsyncStorage from '@react-native-community/async-storage';
// To persists the created reducers
import {persistStore,persistReducer} from 'redux-persist';
// import persist gate in order to wrap the routes which you want to persist
import {PersistGate} from 'redux-persist/es/integration/react';


const persistConfig = {

  key: 'root',
 storage: AsyncStorage,
 whitelist:['FormInput']


}

const persistedReducer = persistReducer(persistConfig,Reducer)

export default class App extends React.Component {
  render() {
    const store = createStore(persistedReducer,{},applyMiddleware(thunk));
    const Persist_Store = persistStore(store);


    return (
      <Provider store={store}>
        <PersistGate persistor={Persist_Store} loading={null}>
        <Routes />
        </PersistGate>
      </Provider> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});