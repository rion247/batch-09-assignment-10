import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home";
import AllArtAndCraftItems from './../AllArtAndCraftItems/AllArtAndCraftItems';
import AddCraftItem from './../AddCraftItem/AddCraftItem';
import MyArtAndCraftList from './../MyArtAndCraftList/MyArtAndCraftList';
import LogIn from './../LogIn/LogIn';
import Register from './../Register/Register';
import UpdateProfile from "../UpdateProfile/UpdateProfile";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/allArtAndCraftItems",
          element: <AllArtAndCraftItems />,
        },
        {
          path: "/addCraftItem",
          element: <PrivateRoute><AddCraftItem /></PrivateRoute>,
        },
        {
          path: "/myArtAndCraftList",
          element: <MyArtAndCraftList />,
        },
        {
          path: "/logIn",
          element: <LogIn />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/updateProfile",
          element: <UpdateProfile />,
        },
      ],
    },
  ]);