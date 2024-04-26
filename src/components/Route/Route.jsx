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
          element: <AddCraftItem />,
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
      ],
    },
  ]);