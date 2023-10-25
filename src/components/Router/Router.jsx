import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import AddCoffee from "../AddCoffee/AddCoffee";
import UpdateCoffee from "../UpdateCoffee/UpdateCoffee";
import SignUp from "../SignUp/SignUp";
import Login from "../Login/Login";
import Users from "../Users/Users";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: ([
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/coffee')
            },
            {
                path: "/addCoffee",
                element: <AddCoffee></AddCoffee>
            },

            // {
            //     path: "/updateCoffee",
            //     element: <UpdateCoffee></UpdateCoffee>,
            // },
            {
                path: "/updateCoffee/:id",
                element: <UpdateCoffee></UpdateCoffee>,
                loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`)
            },
            {
                path: "/signUp",
                element: <SignUp></SignUp>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path:"/users",
                element:<Users></Users>,
                loader:() =>fetch('http://localhost:5000/user')
            }
        ])
    },

])

export default router;