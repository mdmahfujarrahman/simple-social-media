import { Navigate } from "react-router-dom";

export const Protected = ({ children }) => {
    const currentUser = true;

    if (!currentUser) {
        return <Navigate to={"/login"} />;
    }
    return children
};

