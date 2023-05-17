import React from "react";
import { Outlet } from "react-router-dom";
import MenuBar from "../Components/MenuBar";
import Footer from "../Components/Footer";

const Root = () => {
  return (
    <div>
      <MenuBar></MenuBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
