import Axios from "axios";

type UserCredentials = {
    email: string,
    password: string
}
export default class AuthService {
    private static instance: AuthService;
    
    isLogged: boolean;
    
    constructor() {
        this.isLogged = localStorage.getItem('userToken') ? true : false;
        console.log(`Is logged: ${this.isLogged}`);
    }

    public static getInstance(): AuthService {
        if (!AuthService.instance) {
            AuthService.instance = new AuthService();
        }

        return AuthService.instance;
    }

    login = async (userCredentials: UserCredentials) => {
        try {
            const response = await Axios.post("https://reqres.in/api/login", userCredentials);

            this.setToken(response.data.token);

            return response;
        } catch (error) {
            throw new Error("Server error");
        }
    }

    register = async (userCredentials: UserCredentials) => { 
        try {
            const response = await Axios.post("https://reqres.in/api/register", userCredentials);

            this.setToken(response.data.token);

            return response;
        } catch (error) {
            throw new Error("Server error");
        }
    }

    logout = () => {
        localStorage.removeItem('userToken');
        this.isLogged = false;
    }

    private setToken(token: string) {
        localStorage.setItem('userToken', token);
        this.isLogged = true;
    }
}
