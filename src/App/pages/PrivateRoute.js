import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const authUser = () => {
    // fetch('http://localhost:5000/data')
    //     .then(response => response.json())
    //     .then(data => console.log(data))
    return true;
}

function PrivateRoute({ children, ...rest }) {
    return (
        <Route
            {...rest}
            render=
            {
                ({ location }) =>
                authUser()
                ? children
                : <Redirect to =
                    {{
                        pathname: "/login",
                        state: { from: location }
                    }}
                />
            }
        />
        );
    }

export default PrivateRoute;
