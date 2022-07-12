// import react from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import CarouselPage from "./components/CarouselPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route path="/carousel" element={<CarouselPage />} />
            <Route path="/about" element={<CarouselPage />} />
            <Route path="/nothing" element={<CarouselPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
