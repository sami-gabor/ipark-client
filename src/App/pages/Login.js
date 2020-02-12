import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

const username = 'admina';
const password = '123';


const auth = async () => {
  try {
    const res = await axios.get('http://localhost:5000/authenticate', { auth: { username, password } });

    console.log('res', res);
    
    if (res.data.screen !== undefined) {
      // setScreen(res.data.screen);
      console.log('res.data.screen', res.data.screen);
      
    }
  } catch (e) {
    console.log(e);
  }
  console.log('auth...');
  
};


class Login extends Component {
  render() {
    return (
      <div className="jumbotron d-flex align-items-center min-vh-100">
        <div className="container">
          <h1 className="text-center mb-5">Login</h1>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" />
            </Form.Group>
            <p className="text-center">Not a member yet? Register <Link to="/register">here.</Link></p>
            <div className="text-center mt-5">
              <Link to={'/home'}>
                <Button onClick={auth} variant="primary" type="submit">Login</Button>
              </Link>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}
export default Login;
