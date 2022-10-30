import { createContext, useEffect, useState } from "react";
import { Login } from "../../util/API/ClinetAPI";

export const authContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

    const login = async (data) => {
        const loginData = await Login(data)
        console.log(loginData.data);
        setCurrentUser(loginData.data);
    };

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);

    return (
        <authContext.Provider value={{ currentUser, login }}>
            {children}
        </authContext.Provider>
    );
};
