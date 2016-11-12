import React from 'react';
import { Route, IndexRoute, browserHistory, Router } from 'react-router';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import 'babel-polyfill';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import configureStore from './redux/store/configureStore';

import Layout from './layout';
import HomePage from './views/home';
import AboutPage from './views/about';
import CoursesPage from './views/course';

const token = localStorage.authToken;
const store = configureStore(token);

function _handleIsAuthorised() { // (nextState, replaceState) {
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
        <Route path="about" component={AboutPage} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app'),
);
