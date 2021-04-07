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
import { renderRoutes } from 'react-router-config';
import routes from './boot/routes';
export const history = createBrowserHistory({ basename: '/' })
function App() {
  const [state, dispatch] = useReducer(mainReducer, { loading: false })
  const providerValue = useMemo(() => ({ state, dispatch }), [state, dispatch])
  return (
    <div className="App">
      <AuthContext.Provider value={providerValue}>
        {renderRoutes(routes)}
      </AuthContext.Provider>
      {state.loading && <Loader />}
    </div>
  );
}

export default App;
