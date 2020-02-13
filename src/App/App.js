import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import Login from './pages/Login';
import Home from './pages/Home';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: 'auth',
      username: '',
      password: ''
    }
  }

  auth = async () => {
    try {
      const res = await axios.get('http://localhost:5000/authenticate', {
        auth: { 
          username: this.state.username, 
          password: this.state.password 
        }
      });
      
      if (res.data.screen !== undefined) {
        this.setState({ screen: res.data.screen });
      }
    } catch(e) {
      console.log(e);
    }
  }

  readCookie = async () => {
    try {
      const res = await axios.get('http://localhost:5000/read-cookie');
      
      if (res.data.screen !== undefined) {
        this.setState({ screen: res.data.screen });
      }
    } catch (e) {
      this.setState({ screen: 'auth' });
    }
  };

  deleteCookie = async () => {
    try {
      await axios.get('http://localhost:5000/clear-cookie');
      this.setState({ screen: 'auth' });
    } catch (e) {
      console.log(e);
    }
  }

  setUsername = (username) => {
    this.setState({ username });
  }

  setPassword = (password) => {
    this.setState({ password });
  }

  componentDidMount = () => {
    this.readCookie();
  }

  render() {
    return (
      <div>
        {
          this.state.screen === 'auth'
            ? <Login 
                setUsername={this.setUsername}
                setPassword={this.setPassword}
                auth={this.auth}
              />
            : <Home 
                screen={this.state.screen} 
                deleteCookie={this.deleteCookie}
              />
        }
      </div>
    );
  }
}

export default App;
