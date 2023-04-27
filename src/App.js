import React from "react";
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Accueil from "./pages/Accueil";
import Bootsatrap from "./pages/bootsatrap";
import MAP from "./pages/MAP";
import Video from "./pages/video";
import Galeria from "./pages/galerie";
import Inscription from "./pages/Inscripation";
import Calculator from "./pages/calculatrice";
import Picker from "./pages/Picker";
import Devise from "./pages/devise";
import Carousel from "./page1/carousel";
import Produit from "./pages/Produit";
import { Login, Register } from "./pages/login";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Accueil" element={<Accueil />} />
        <Route path="/bootsatrap" element={<Bootsatrap />} />
        <Route path="/MAP" element={<MAP />} />
        <Route path="/video" element={<Video />} />
        <Route path="/galerie" element={<Galeria />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login" element={<Register />} />
        <Route path="/Inscripation" element={<Inscription />} />
        <Route path="/calculatrice" element={<Calculator />} />
        <Route path="/Picker" element={<Picker />} />
        <Route path="/devise" element={<Devise />} />
        <Route path="/carousel" element={<Carousel />} />
        <Route path="/Produit" element={<Produit />} />

      </Routes>

    </BrowserRouter>

  );
}
export default App;