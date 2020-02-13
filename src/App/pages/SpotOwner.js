import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';


class SpotOwner extends Component {
    render() {
        return (
        <div className="jumbotron d-flex align-items-center min-vh-100">
            <div className="container">
                <div className="text-center">
                    <Button variant="info" type="submit">I don't need my spot today</Button>
                    <div className="text-center mt-5">
                        <Button onClick={this.props.deleteCookie} variant="primary" type="submit">Logout</Button>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default SpotOwner;
