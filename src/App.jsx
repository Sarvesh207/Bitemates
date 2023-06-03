import React from "react";


import Footer from "./components/Footer/Footer.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

import { Outlet } from "react-router-dom";
import store from "./utils/Store.js";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <Outlet />
      <Footer />
    </Provider>
  );
};

export default App;
