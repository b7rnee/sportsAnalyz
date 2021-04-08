import React from 'react';
import Login from '../components/Login/Login';
import { Redirect } from 'react-router-dom'
import { renderRoutes } from 'react-router-config';
import privateRoutes from './privateRoutes';
import SignUp from '../components/Login/register';
import { storageService } from '../services/storage.service';
const routes = [
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/register',
        component: SignUp,
    },
    {
        path: '/',
        render: () => {
            // const isAuth = storageService.isAuthenticated();
            // if (!isAuth) {
            //     return <Redirect to="/login"> </Redirect>;
            // }
            return renderRoutes(privateRoutes);
        },
    },
];

export default routes;
