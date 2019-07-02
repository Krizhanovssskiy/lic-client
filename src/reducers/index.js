import { combineReducers } from 'redux';
import authReducer from './authReducer';
import featuresReducer from './featuresReducer';

export default combineReducers({
  auth: authReducer,
  pickedFeature: featuresReducer
});
