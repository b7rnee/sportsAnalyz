import logo from './logo.svg';
import './App.scss';
import ShotChart from './components/shotChart';
import { Router, Route, Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config'
import Header from './components/header';
import Dashboard from './components/dashboard';
import routes from './boot/routes';
import Predict from './components/Predict/predict'
import SignUp from './components/Login/register';
import Login from './components/Login/Login';
import { createBrowserHistory } from 'history'
export const history = createBrowserHistory({ basename: '/' })
function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      {/* <Dashboard /> */}
      <Router history={history}>
        <Switch>
          <Route history={history} path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <SignUp history={history} />
          </Route>
          <Route path="/home">
            <Dashboard history={history} />
          </Route>
          <Route path="/predict">
            <Predict history={history} />
          </Route>
          <Route history={history} exact path='/'>
            <Login />
          </Route>


        </Switch>
      </Router>
    </div>
  );
}

export default App;
