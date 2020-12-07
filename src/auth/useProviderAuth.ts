import { useState } from "react";
import AuthService from "../services/authService";

let currentUser = JSON.parse(localStorage.getItem('user') ?? '{}');

const useProviderAuth = () => {
    const authService = AuthService.getInstance();

    const [user, setUser] = useState<{email: string}>(currentUser);

    const signIn = async (userCredentials: {email: string, password: string}) => {
        try {
            const response = await authService.login(userCredentials);

            setUserData(userCredentials);

            return response;
        } catch (error) {
            throw new Error(error);
        }
    }

    const register = async (userCredentials: {email: string, password: string}) => {
        try {
            const response = await authService.register(userCredentials);

            setUserData(userCredentials);

            return response;
        } catch (error) {
            throw new Error(error);
           
        }
    }

    const setUserData = (userCredentials: {email: string, password: string}) => {
            setUser(userCredentials);
            localStorage.setItem('user', JSON.stringify({email: userCredentials.email}))
    }
    

    const logOut = () => {
        setUser({email: ''});
        authService.logout();
    }

    const isLogged = (): boolean => {
        return authService.isLogged;
        
    }

    return {
        user,
        signIn,
        register,
        logOut,
        isLogged
    }
}

export default useProviderAuth;