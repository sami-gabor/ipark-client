import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


class Register extends Component {
  render() {
    return (
      <div className="jumbotron d-flex align-items-center min-vh-100">
      <div className="container">
        <h1 className="text-center mb-5">Register</h1>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Choose a password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" />
          </Form.Group>
          <Form.Group controlId="formBasicCOnfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Re-enter password" />
          </Form.Group>
          {/* <p className="text-center">Already a member? Login <Link to="/login">here.</Link></p> */}
          <p className="text-center">Already a member? Login <a to="/login">here.</a></p>
          <div className="text-center mt-5">
            {/* <Link to={'./login'}> */}
              <Button variant="primary" type="submit">Register</Button>
            {/* </Link> */}
          </div>
        </Form>
      </div>
    </div>
    );
  }
}
export default Register;
