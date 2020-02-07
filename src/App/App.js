import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
          <Route path='/home' component={Home}/>
        </Switch>
        yugyu
      </div>
    )
    return (
      // <Switch>
        <App/>
      // </Switch>
    );
  }
}

export default App;
