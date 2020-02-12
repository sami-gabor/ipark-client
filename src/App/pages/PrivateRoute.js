import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const authUser ={
    isAuthenticated: true
}

function PrivateRoute({ children, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                authUser.isAuthenticated ? (
                    children
                    ) : (
                        <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                        />
                    )
            }
        />
        );
    }

export default PrivateRoute;
