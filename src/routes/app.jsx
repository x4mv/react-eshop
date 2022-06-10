import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import RecoveryPassword from '../containers/RecoveryPassword';
import Login from '../containers/Login';
import '../styles/global.css';

const app = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path='/' element={<Home />}/>
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="RecoveryPassword" component={<RecoveryPassword />}/>
                    <Route component={<NotFound />}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default app;