import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import store from '../redux/store';
import App from './App';
import OAuthToken from './OAuthToken';

const RootApp = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/oauth" component={OAuthToken} />
      </Switch>
    </Router>
  </Provider>
);

export default RootApp;
