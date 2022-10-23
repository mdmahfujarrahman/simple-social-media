import { useContext } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "../src/components/Navbar/Navbar";
import { themeContext } from "./components/context/themeContext";
import LeftBar from "./components/LeftBar/LeftBar";
import RightBar from "./components/RightBar/RightBar";
import Home from "./pages/Home/Home";
import Login from './pages/Login/Login';
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import Register from './pages/Register/Register';
import { Protected } from "./util/Protected";
import "./util/style.scss";


const Router = () => {
    const { darkMode } = useContext(themeContext);
    

    const Layout = () => {
        return (
            <div className={`theme-${darkMode ? "dark" : "light"}`}>
                <Navbar />
                <div className="layout">
                    <LeftBar />
                    <div className="outlet">
                        <Outlet />
                    </div>
                    <RightBar />
                </div>
            </div>
        );
    }


    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <Protected>
                    <Layout />
                </Protected>
            ),
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "/profile/:id",
                    element:<ProfilePage />
                },
            ],
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/register",
            element: <Register />,
        },
    ]);
  return <RouterProvider router={router} />;
}

export default Router





 