import React from 'react';
import { Route, Redirect } from 'react-router-dom';

  
function PrivateRoute({ component: Component, isAuthenticated }) {
    return (
        <Route render=
        {(props) => (
            isAuthenticated === true
                ? <Component {...props}/>
                : <Redirect to='/login'/>
            )
        }
    />)
}

export default PrivateRoute;
