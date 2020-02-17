import React, { Component } from 'react';
import '../App.css';
import Login from './pages/Login';
import Home from './pages/Home';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: 'authPage',
      email: '',
      password: ''
    }
  }

  authenticate = async (e) => {
    e.preventDefault();
    
    fetch('http://localhost:5000/authenticate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
    .then(response => response.json())
    .then(data => {
      this.setState({screen: data.screen});
    })
    .catch(e => console.log('Got this error: ', e))
  }

  readCookie = async () => {
    try {
      const res = await fetch('http://localhost:5000/read-cookie');
      
      if (res.data.screen !== undefined) {
        this.setState({ screen: res.data.screen });
      }
    } catch (e) {
      this.setState({ screen: 'authPage' });
      console.log(e);
    }
  };

  deleteCookie = async () => {
    try {
      await fetch('http://localhost:5000/clear-cookie');
      this.setState({ screen: 'authPage' });
    } catch (e) {
      console.log(e);
    }
  }

  setEmail = (email) => {
    this.setState({ email });
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
          this.state.screen === 'authPage'
            ? <Login 
                setEmail={this.setEmail}
                setPassword={this.setPassword}
                auth={this.authenticate}
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
