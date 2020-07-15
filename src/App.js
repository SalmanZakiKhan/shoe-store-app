import React from 'react'
import {Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import ProductDetails from "./components/ProductDetails";
import About from "./components/About";
import Contact from "./components/Contact";
import "./App.css"


function App() { 
  
    return (
        <div className="main-container">
            <NavBar />
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/contact" element={<Contact />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="/product/:id" element={<ProductDetails />}/>
                </Routes>
            
          
        </div>
    )
}

export default App
