import { combineReducers } from 'redux';
import IdentityReducer from './IdentityReducer';
import QuizzReducer from './QuizzReducer';

const appReducer = combineReducers({
  identity: IdentityReducer,
  quizz: QuizzReducer,
});

export default appReducer;
