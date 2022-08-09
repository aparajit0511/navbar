import React from "react";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";

export default function Navbar() {
  return (
    <div>
      <div className="navbar">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}
