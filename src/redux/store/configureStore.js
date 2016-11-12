/* global __DEV__*/
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import loggerMiddleware from 'redux-logger';

import rootReducer from '../reducers';

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    __DEV__
      ? applyMiddleware(thunk, promise, loggerMiddleware({
        stateTransformer: (state) => {
          if (state.toJS) {
            return state.toJS();
          }

          return state;
        },
      }))
      : applyMiddleware(thunk, promise),
  );
}
