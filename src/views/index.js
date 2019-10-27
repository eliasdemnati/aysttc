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
import Game from './Game';
import Header from './Header';
import GameRoomRandom from './GameRoomRandom';
import GameRoomAll from './GameRoomAll';

const RootApp = () => (
  <Provider store={store}>
    <Header />
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/oauth" component={OAuthToken} />
        <Route exact path="/game" component={Game} />
        <Route exact path="/random" component={GameRoomRandom} />
        <Route exact path="/all" component={GameRoomAll} />
      </Switch>
    </Router>
  </Provider>
);

export default RootApp;
