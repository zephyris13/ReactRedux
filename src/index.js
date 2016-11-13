import React from 'react';
import { Route, IndexRoute, browserHistory, Router } from 'react-router';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import axios from 'axios';

import 'babel-polyfill';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import configureStore from './redux/store/configureStore';
import * as config from './config';

import Layout from './layout';
import HomePage from './views/home';
import CoursesPage from './views/course';
import PostsPage from './views/posts';
import AboutPage from './views/about';

const store = configureStore();

function _handleIsAuthorised() { // (nextState, replaceState) {
  const token = localStorage[config.AUTH_LOCAL_STORAGE_TOKEN];
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  if (!store.getState().getIn(['auth', 'isAuthenticated'])) {
    // You can redirect to the login page
    // replaceState({ nextPathname: nextState.location.pathname }, '/');
  }
}

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Layout} onEnter={(nextState, replaceState) => _handleIsAuthorised(nextState, replaceState)}>
        <IndexRoute component={HomePage} />
        <Route path="courses" component={CoursesPage} />
        <Route path="posts" component={PostsPage} />
        <Route path="about" component={AboutPage} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app'),
);
