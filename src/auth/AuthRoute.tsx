import React from 'react';
import { Redirect, Route } from "react-router-dom";
import Authentication from "./Authentication";

const AuthRoute = ({ children, ...rest }: any) => {
    let auth = Authentication.useAuth();

    return (
        <Route 
            {...rest}
            render={({location}) => 
                auth.isLogged() ? (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: {  from: location }
                        }}
                    />
                ) : (
                    children
                )
            }
        />
    )

}

export default AuthRoute;