import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";

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
                    element: <CategoryNews></CategoryNews>
                }
            ]
        },
        {
            path: "/auth",
            element: <h1>Authentication Layout</h1>,
        },
        {
            path: "/news",
            element: <h1>New's Layout</h1>,
        },
        {
            path: "/*",
            element: <h1>Error Page</h1>,
        }
    ]
)

export default router