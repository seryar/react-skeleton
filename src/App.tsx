import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import {
  Route, Switch, Redirect, BrowserRouter,
} from 'react-router-dom';
import { render } from '@testing-library/react';
import Home from './components/pages/Home/Home';
import Login from './components/pages/Login/Login';
import { store } from './store/rootStore';
import logo from './logo.svg';

function App():JSX.Element {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Redirect from="/" to="/home" />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default (App);
