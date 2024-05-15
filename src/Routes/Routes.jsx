import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Home/SignUp/SignUp";
import AvailableFoods from "../Pages/Components/AvailableFoods";
import PrivateRoute from "./PrivateRoute";
import AddFoods from "../Pages/Components/AddFoods";
import ManageMyFoods from "../Pages/Components/ManageMyFoods";
import MyFoodRequest from "../Pages/Components/MyFoodRequest";
import SinglePageDetails from "../Pages/Components/SinglePageDetails";
import FoodRequest from "../Pages/Components/FoodRequest";
import UpdateFood from "../Pages/Components/UpdateFood";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signUp",
                element: <SignUp></SignUp>
            },
            {
                path: "/availableFoods",
                element: <AvailableFoods></AvailableFoods>
            },
            {
                path: "/addFood",
                element: <PrivateRoute><AddFoods></AddFoods></PrivateRoute>
            },
            {
                path: "/manageFood",
                element: <PrivateRoute><ManageMyFoods></ManageMyFoods></PrivateRoute>
            },
            {
                path: "/foodRequest",
                element: <PrivateRoute><MyFoodRequest></MyFoodRequest></PrivateRoute>
            },
            {
                path: "/singlePage/:id",
                element: <PrivateRoute><SinglePageDetails></SinglePageDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://food-server-side.vercel.app/foodItems/${params.id}`)
            },
            {
                path: "/foodRequest/:id",
                element: <PrivateRoute><FoodRequest></FoodRequest></PrivateRoute>,
                loader: ({ params }) => fetch(`https://food-server-side.vercel.app/foodItems/${params.id}`)
            },
            {
                path: "/updateFood/:id",
                element: <PrivateRoute><UpdateFood></UpdateFood></PrivateRoute>,
                loader: ({ params }) => fetch(`https://food-server-side.vercel.app/requestFoodItems/${params.id}`)
            }
        ]
    },

]);

export default router;