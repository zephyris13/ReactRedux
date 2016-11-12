import { combineReducers } from 'redux-immutable';
import courses from './courseReducer';

const rootReducer = combineReducers({
  courses,
});

export default rootReducer;
