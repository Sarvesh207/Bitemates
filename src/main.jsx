import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Contact from "./components/Contact/Contact.jsx";
import About from "./components/About/About.jsx";
import Error from "./components/Error.jsx";
import Home from "./components/Home/Home.jsx";
import RestaurantMenu from "./components/Home/RestaurantMenu/RestaurantMenu.jsx";
import Cart from "../src/components/Cart/Cart.jsx"

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<Home/>,
      },
      {
        path:"/contact",
        element:<Contact/>

      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/restaurant/:id",
        element:<RestaurantMenu/>,
      },
      {
        path: "/search",
        element: <Error/>
      },
      {
        path: "/cart",
        element: <Cart/>,
      },
    
    ]

  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  

      <RouterProvider router={router}/>
  
  </React.StrictMode>
);
