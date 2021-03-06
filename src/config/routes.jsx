import React from 'react';
import { Router, Route, IndexRoute,
  Redirect, browserHistory } from 'react-router';

import { store } from '../store';
import App from 'App';
import About from 'About';
import Login from 'Login';
import EventsList from 'EventsList';
import EventDetail from 'EventDetail';
import NewEventForm from 'NewEventForm';

export const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={EventsList} />
      <Route path="about" component={About} />
      <Route path="events" component={EventsList} onEnter={requireLogin} />
      <Route path="events/new" component={NewEventForm} onEnter={requireLogin} />
      <Route path="events/:eventId" component={EventDetail} onEnter={requireLogin} />
      <Route path="login" component={Login} />
      <Redirect from="*" to="/" />
    </Route>
  </Router>
);

function requireLogin(nextState, replace, next) {
  const auth = store.getState().auth;
  if (!auth) {
    replace('/login');
  }
  next();
}
