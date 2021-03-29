import React from 'react';
import PrivateRoutes from './privateRoutes';

const routes = [
    {
        path: '/',
        render: () => {

            return <PrivateRoutes />

        },
    },
];

export default routes;