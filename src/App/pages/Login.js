import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


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
                <Button variant="primary" type="submit">Login</Button>
              </Link>
            </div>
          </Form>
          test shell
        </div>
      </div>
    );
  }
}
export default Login;
