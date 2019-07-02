import { combineReducers } from 'redux';
import authReducer from './authReducer';
import registrationReducer from './registrationReducer';

export default combineReducers({
  auth: authReducer,
  registrationData: registrationReducer
});
