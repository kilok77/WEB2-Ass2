import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PokemonPage from "./pages/PokemonPage";
import AboutPage from "./pages/AboutPage";
import Navbar from "./comp/Navbar"; // Importing the new Navbar

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col items-center">
        <Navbar /> {/* Include the stylish Navbar */}
        <div className="w-full flex justify-center p-6">
          <Routes>
            <Route path="/" element={<PokemonPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
