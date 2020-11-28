import React, { createContext, useContext } from "react";
import useProviderAuth from "./useProviderAuth";

const authContext = createContext<any>({});

const Authentication = {
    ProviderAuth : ({ children }: any) => {
        // call to provider 
        const auth = useProviderAuth();

        return (
            <authContext.Provider value={auth}>
                {children}
            </authContext.Provider>
        )
    },
    useAuth : () => {
        return useContext(authContext);
    }
}

export default Authentication;