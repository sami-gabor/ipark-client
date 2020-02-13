import React, { Component } from 'react';
import List from './List';
import Button from 'react-bootstrap/Button';


class NonSpotOwner extends Component {
    render() {
        return (
        <div className="jumbotron d-flex align-items-center min-vh-100">
            <div className="container">
                <div className="text-center">
                    <List />
                </div>
                <div className="text-center mt-5">
                    <Button onClick={this.props.deleteCookie} variant="primary" type="submit">Logout</Button>
                </div>
            </div>
        </div>
        );
    }
}

export default NonSpotOwner;
