import React from "react";
import HeroSection from "./HeroSection";
import Cards from "./Cards";
import DownloadSample from "./DownloadSample";
import DashkitSection from "./DashkitSection";
import CarouselPage from "./CarouselPage";

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <DownloadSample />
      <DashkitSection />
      <CarouselPage />
    </>
  );
}

export default Home;
