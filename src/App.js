import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import HomePage from "./pages/homepage";
import Services from "./pages/services";
import Gallery from "./pages/gallery";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
