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
import CraftCategorySection from './../CraftCategorySection/CraftCategorySection';
import CraftCategoryItem from "../CraftCategoryItem/CraftCategoryItem";
import LoadingCarftCategoryItem from "../CraftCategoryItem/LoadingCarftCategoryItem";
import CraftCategoryDetailsPage from "../CraftCategoryItem/CraftCategoryDetailsPage";

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
        element: <PrivateRoute><AllArtAndCraftItems /></PrivateRoute>,
        loader: () => fetch('https://art-and-craft-store-server-side.vercel.app/crafts'),
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
        loader: ({ params }) => fetch(`https://art-and-craft-store-server-side.vercel.app/crafts/${params.id}`),
      },
      {
        path: "/updateUserProfile/:email",
        element: <PrivateRoute><UpdateUserProfile /></PrivateRoute>,
      },
      {
        path: "/craftItem/:id",
        element: <PrivateRoute><CraftViewDetailsPage /></PrivateRoute>,
        loader: ({ params }) => fetch(`https://art-and-craft-store-server-side.vercel.app/crafts/${params.id}`)
      },
      {
        path: "/craftCategoryItem",
        element: <PrivateRoute><CraftCategorySection /></PrivateRoute>,
      },
      {
        path: "/craftCategoryItems/:itemCategory",
        element: <LoadingCarftCategoryItem />,
      },
      {
        path: "craftCategoryItemsDetailsPage/:id",
        element: <PrivateRoute><CraftCategoryDetailsPage /></PrivateRoute>,
        loader: ({ params }) => fetch(`https://art-and-craft-store-server-side.vercel.app/craftCategoryItemData/${params.id}`)
      },

    ],
  },
]);