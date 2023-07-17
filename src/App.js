import React from "react"
import Navbar from './components/Navbar.js';
import Pricing from "./components/pages/Pricing.js"
import Home from "./components/pages/Home.js"
import About from "./components/pages/about.js"
import "./styles.css"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  )
}

export default App