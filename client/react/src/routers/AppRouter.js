import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import WooLoginPage from '../components/WooLoginPage';
import WooPositionPage from '../components/WooPositionPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={WooLoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={WooPositionPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
