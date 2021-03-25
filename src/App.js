import logo from './logo.svg';
import './App.scss';
import ShotChart from './components/shotChart';
import { Route, Switch } from 'react-router-dom'
import Header from './components/header';
import Dashboard from './components/dashboard';
function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Dashboard />

      {/* <Switch>
        <Route exact from="/" render={props => <ShotChart {...props} />} />
      </Switch> */}
      {/* <ShotChart /> */}
    </div>
  );
}

export default App;
