import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "../src/components/Navbar/Navbar";
import LeftBar from "./components/LeftBar/LeftBar";
import RightBar from "./components/RightBar/RightBar";
import Home from "./pages/Home/Home";
import Login from './pages/Login/Login';
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import Register from './pages/Register/Register';

const Router = () => {

    const Layout = () => {
        return <div>
            <Navbar/>
            <LeftBar/>
            <Outlet/>
            <RightBar/>
            </div>;
    }

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "/profile:id",
                    element: <ProfilePage />,
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





 