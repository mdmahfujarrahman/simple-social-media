import { createContext, useEffect, useState } from "react";

export const authContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    const login= () => {
        setCurrentUser({
            id: 1,
            name: "Mahfuj",
            img: "https://i.pinimg.com/222x/7d/1a/3f/7d1a3f77eee9f34782c6f88e97a6c888.jpg",
        });
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
