import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "../src/components/Navbar/Navbar";
import LeftBar from "./components/LeftBar/LeftBar";
import RightBar from "./components/RightBar/RightBar";
import Home from "./pages/Home/Home";
import Login from './pages/Login/Login';
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import Register from './pages/Register/Register';
import { Protected } from "./util/Protected";

const Router = () => {

    const Layout = () => {
        return (
            <div>
                <Navbar />
                <div className="layout">
                    <LeftBar />
                    <Outlet />
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





 