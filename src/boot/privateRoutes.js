import { Redirect } from 'react-router-dom'
import Dashboard from '../components/Dashboard/dashboard';
import Predict from '../components/Predict/predict';

const privateRoutes = [
    {
        path: '/home',
        component: Dashboard,
    },
    {
        path: '/predict',
        component: Predict,
    },
    {
        path: '/',
        render: () => {
            return <Redirect to="/home" exact></Redirect>;
        },
    },
];

export default privateRoutes;
