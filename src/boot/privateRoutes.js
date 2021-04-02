import { Route, Switch } from 'react-router-dom'
import Login from '../components/Login/Login';
import Dashboard from '../components/Dashboard/dashboard';


export default function privateRoutes() {
    return (
        <Switch>
            <Route exact path='/'>
                <Login />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/home">
                <Dashboard />
            </Route>
        </Switch>
    )
}