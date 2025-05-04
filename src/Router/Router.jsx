import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Authlayouts from "../Layouts/Authlayouts";
import NewsDetails from "../Pages/NewsDetails";
import PrivateRoute from "../provider/PrivateRoute";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <HomeLayout></HomeLayout>,
            children: [
                {
                    path: "",
                    element: <Home></Home>,
                },
                {
                    path: "/category/:id",
                    element: <CategoryNews></CategoryNews>,
                    loader: () => fetch("/news.json"),
                }
            ]
        },
        {
            path: "/auth",
            element: <Authlayouts></Authlayouts>,
            children:[
                {
                    path: "/auth/login",
                    element: <Login></Login>
                },
                {
                    path: "/auth/register",
                    element: <Register></Register>
                },
            ]
        },
        {
            path: "/news-details/:id",
            element: (
              <PrivateRoute>
                <NewsDetails></NewsDetails>
              </PrivateRoute>
            ),
            loader: () => fetch("/news.json"),
        },
        {
            path: "/*",
            element: <h1>Error Page</h1>,
        }
    ]
)

export default router