import './App.scss';
import React, { useMemo, useReducer } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard/dashboard';
import Predict from './components/Predict/predict'
import SignUp from './components/Login/register';
import Login from './components/Login/Login';
import { createBrowserHistory } from 'history';
import { AuthContext } from './components/Login/AuthContext';
import Loader from './components/Loader/loader';
import { mainReducer } from './reducers'
export const history = createBrowserHistory({ basename: '/' })
function App() {
  const [state, dispatch] = useReducer(mainReducer, { loading: false })
  const providerValue = useMemo(() => ({ state, dispatch }), [state, dispatch])
  return (
    <div className="App">
      <Router history={history}>
        <AuthContext.Provider value={providerValue}>
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
        </AuthContext.Provider>
        {state.loading && <Loader />}
      </Router>
    </div>
  );
}

export default App;
