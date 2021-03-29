import React from 'react';
import PrivateRoutes from './privateRoutes';
import Login from '../components/Login/Login';
import Dashboard from '../components/dashboard';
import Predict from '../components/Predict/predict'
const routes = [
    {
        path: '/home',
        component: Dashboard
    },
    {
        path: '/predict',
        component: Predict
    },
    {
        path: '/login',
        component: Login,
    },
];

export default routes;