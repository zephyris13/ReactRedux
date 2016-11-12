import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import loggerMiddleware from 'redux-logger';

import rootReducer from '../reducers';

export default function configureStore(initialState) {
  const logger = loggerMiddleware({
    stateTransformer: (state) => {
      if (state.toJS) {
        return state.toJS();
      }

      return state;
    },
  });

  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, promise, logger),
  );
}
