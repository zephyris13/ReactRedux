/* global __DEV__*/
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import loggerMiddleware from 'redux-logger';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import * as config from '../../config';
import rootReducer from '../reducers';

export default function configureStore() {
  const client = axios.create({
    baseURL: config.FETCH_BASE_URL,
    responseType: 'json',
  });

  return createStore(
    rootReducer,
    __DEV__
      ? applyMiddleware(thunk, promise, axiosMiddleware(client),
      loggerMiddleware({
        stateTransformer: (state) => {
          if (state.toJS) {
            return state.toJS();
          }

          return state;
        },
      }))
      : applyMiddleware(thunk, promise, axiosMiddleware(client)),
  );
}
