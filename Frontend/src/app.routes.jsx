import { createBrowserRouter } from "react-router";
import Register from "./features/auth/pages/Register";
import Login from "./features/auth/pages/Login";
import Protected from "./features/auth/component/Protected";
import Home from "./features/Home/pages/Home";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Protected><h1><Home/></h1></Protected>
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/login",
        element: <Login />
    }
])