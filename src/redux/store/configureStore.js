/* global __DEV__*/
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import loggerMiddleware from 'redux-logger';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import rootReducer from '../reducers';

export default function configureStore(token) {
  const client = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {
      Authorization: `Bearer ${token}`,
    },
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
