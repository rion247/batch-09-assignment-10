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
import CraftViewDetailsPage from "../CraftItemsSection/CraftViewDetailsPage";
import UpdateUserProfile from './../UpdateUserProfile/UpdateUserProfile';

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
        loader: () => fetch('http://localhost:5000/crafts'),
      },
      {
        path: "/addCraftItem",
        element: <PrivateRoute><AddCraftItem /></PrivateRoute>,
      },
      {
        path: "/myArtAndCraftList",
        element: <PrivateRoute><MyArtAndCraftList /></PrivateRoute>,
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
        path: "/updateCraftItems/:id",
        element: <PrivateRoute><UpdateProfile /></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/crafts/${params.id}`),
      },
      {
        path: "/updateUserProfile/:email",
        element: <UpdateUserProfile />,
      },
      {
        path: "/craftItem/:id",
        element: <PrivateRoute><CraftViewDetailsPage /></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/crafts/${params.id}`)
      },

    ],
  },
]);