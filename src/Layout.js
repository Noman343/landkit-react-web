import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import FooterComp from "./components/FooterComp";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <FooterComp />
    </>
  );
}

export default Layout;
