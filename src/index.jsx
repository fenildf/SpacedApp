import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { store } from './store';
import { startAuthCheck } from 'authActions';
import { routes } from './config/routes';
import { muiTheme } from './config/muiTheme';

import './main.scss';

console.log('gapi', gapi);

store.dispatch(startAuthCheck());

// Needed for onTouchTap for material-ui
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      {routes}
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app')
);
