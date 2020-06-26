// the combine reducers function will help to co-ordinate all the reducers in the react native app.
import {combineReducers} from 'redux';
// Remember the functions takes object with key and value as a argument.
// export and import keywords are used for the reason to declare your code as public and private.
import handlerReducer from './Handler_Reducer';

export default combineReducers({
  FormInput: handlerReducer,
});
