import React from "react";
import { Route, Routes } from 'react-router-dom';
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Pagenotfound from "./pages/Notfound/Pagenotfound";
import "./style/style.css";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Pagenotfound />} />
    </Routes>
  );
}

export default App;
