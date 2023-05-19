import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Routes/Root";
import Home from "./Routes/Home";
import Login from "./Routes/Login";
import Register from "./Routes/Register";
import Blogs from "./Routes/Blogs";
import ErrorPage from "./Components/ErrorPage";
import AuthProvider from "./firebase/AuthProvider";
import AddToy from "./Routes/AddToy";
import AllToy from "./Routes/AllToy";
import SingleToy from "./Routes/SingleToy";
import MyToy from "./Routes/MyToy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/addToy",
        element: <AddToy></AddToy>,
      },
      {
        path: "/allToy",
        element: <AllToy></AllToy>,
      },
      {
        path: "/myToy",
        element: <MyToy></MyToy>,
      },
      {
        path: "/toy/:id",
        element: <SingleToy></SingleToy>,
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/toys/${params.id}`);
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
