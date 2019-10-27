import { combineReducers } from 'redux';
import IdentityReducer from './IdentityReducer';

const appReducer = combineReducers({
  identity: IdentityReducer
});

export default appReducer;
