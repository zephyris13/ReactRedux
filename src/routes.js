import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './layout';
import HomePage from './views/home';
import AboutPage from './views/about';
import CoursesPage from './views/course';

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={HomePage} />
    <Route path="courses" component={CoursesPage} />
    <Route path="about" component={AboutPage} />
  </Route>
);
