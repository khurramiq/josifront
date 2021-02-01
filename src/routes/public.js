import React, { lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
const Login = lazy(() => import('../pages/loginPage'));
const Register = lazy(() => import('../pages/registrationPage'));

export default () => <Switch>
    <Route exact path='/login' component={Login} />
    <Route exact path='/register' component={Register} />
    <Redirect to='/login' />
</Switch>

