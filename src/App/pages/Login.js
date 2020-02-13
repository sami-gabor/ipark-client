import React, { Component } from 'react';
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
              <Form.Control 
                type="text" 
                placeholder="Enter email" 
                onChange={e => this.props.setUsername(e.target.value)} 
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control 
                type="password"
                placeholder="Enter password"
                onChange={e => this.props.setPassword(e.target.value)}
              />
            </Form.Group>
            <p className="text-center">Not a member yet? Register <a href="/register">here.</a> </p>
            <div className="text-center mt-5">
              {/* doesn't work with type submit !!! */}
              <Button onClick={this.props.auth} variant="primary" type="button">Login</Button>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}
export default Login;
