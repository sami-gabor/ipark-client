import React, { Component } from 'react';
import List from './List';


class NonSpotOwner extends Component {
    render() {
        return (
        <div className="jumbotron d-flex align-items-center min-vh-100">
            <div className="container">
                <div className="text-center">
                    <List />
                </div>
            </div>
        </div>
        );
    }
}
export default NonSpotOwner;
