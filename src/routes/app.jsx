import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import RecoveryPassword from '../containers/RecoveryPassword';
import Login from '../containers/Login';
import '../styles/global.css';

const app = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Layout>
                    <Route exact path='/' component={Home}/>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="RecoveryPassword" component={RecoveryPassword}/>
                    <Route component={NotFound}/>
                </Layout>
            </Switch>
        </BrowserRouter>
    );
};

export default app;