import React from "react";
import { Link, useRoutes } from "react-router-dom";
import Home from './pages/home';
import About from "./pages/about";

const App = () => {
  return (
    <>
      {useRoutes([
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ])}
    </>
  );
};

export default React.memo(App);
