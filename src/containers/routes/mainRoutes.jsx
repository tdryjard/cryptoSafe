import React, { Suspense } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from '../../routse'
import Spinner from '../../components/spinner/Spinner';
import HomePage from '../../view/HomePage'
import Login from '../../components/login/Login'

const Routes = props => (
  <Suspense fallback={Spinner}>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={Login} />
    </Switch>
  </Suspense>
)


export default Routes