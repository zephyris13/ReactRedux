import { combineReducers } from 'redux-immutable';

import courses from './courseReducer';
import posts from './postsReducer';

const rootReducer = combineReducers({
  courses,
  posts,
});

export default rootReducer;
