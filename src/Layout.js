import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Cards from "./components/Cards";
import DownloadSample from "./components/DownloadSample";
import DashkitSection from "./components/DashkitSection";
import CarouselPage from "./components/CarouselPage";
import FooterComp from "./components/FooterComp";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <HeroSection />
      <Cards />
      <DownloadSample />
      <DashkitSection />
      <CarouselPage />
      <FooterComp />
    </>
  );
}

export default Layout;
