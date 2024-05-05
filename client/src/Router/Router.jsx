import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "../index.css";
import App from "../App";
import Home from "../pages/Home.jsx";
import Login from "../pages/Login.jsx";
import About from "../pages/About.jsx";
import Apod from "../pages/Apod.jsx";
import Epic from "../pages/Epic.jsx";
import MarsRoverPhotos from "../pages/MarsRoverPhotos.jsx";

const router = createBrowserRouter([
    {
        //main path
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/epic",
                element: <Epic />
            },
            {
                path: "/mars",
                element: <MarsRoverPhotos roverName='curiosity' apiKey='TPnuZYbXcD2SaVfmSv9aZ0HMACuNaAA0DTQ2jB5F' />
            },
            {
                path:"/apod",
                element:<Apod/>
            },
            {
                path:"/about",
                element:<About/>
            }
         ]
    },
    {
        path:'/login',
        element:<Login/>
    },
]);

export default router
