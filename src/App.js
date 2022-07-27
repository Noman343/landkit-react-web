// import react from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import CarouselPage from "./components/CarouselPage";
import Contact from "./components/Contact";
import Opening from "./components/Opening";
import Home from "./components/Home";
import SignUp from "./components/SignUp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/carousel" element={<CarouselPage />} />
            <Route path="/about" element={<CarouselPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/nothing" element={<CarouselPage />} />
            <Route path="/opening" element={<Opening />} />
            
           </Route>
           <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
