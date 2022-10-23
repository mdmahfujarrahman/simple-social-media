import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { authContext } from "../components/context/authContext";

export const Protected = ({ children }) => {
    const {currentUser} = useContext(authContext);

    if (!currentUser) {

        return <Navigate to={"/login"} />;
    }
    return children
};

