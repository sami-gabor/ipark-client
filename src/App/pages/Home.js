import React, { Component } from 'react';
import SpotOwner from './SpotOwner';
import NonSpotOwner from './NonSpotOwner';


class Home extends Component {
    render() {
        const hasParkingSpot = false;

        return hasParkingSpot 
            ? <SpotOwner deleteCookie={this.props.deleteCookie} /> 
            : <NonSpotOwner deleteCookie={this.props.deleteCookie} />
    }
}

export default Home;
