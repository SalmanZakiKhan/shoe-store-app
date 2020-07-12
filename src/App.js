import React from 'react'
import {Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import Product from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import "./App.css"


function App() { 

    const shoes = {
    "air-jordan-3-valor-blue": {
      "name": "VALOUR BLUE",
      "img":
        "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
    },
    "jordan-mars-270-london": {
      "name": "JORDAN MARS 270 LONDON",
      "img":
        "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
    },
    "air-jordan-1-zoom-racer-blue": {
      "name": "RACER BLUE",
      "img":
        "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
    },
    "air-jordan-3-valor-blue1": {
      "name": "VALOUR BLUE",
      "img":
        "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
    },
    "jordan-mars-270-london2": {
      "name": "JORDAN MARS 270 LONDON",
      "img":
        "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
    },
    "air-jordan-1-zoom-racer-blue3": {
      "name": "RACER BLUE",
      "img":
        "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
    }
  }
  
    return (
        <div>
            <NavBar />
            {
                Object.entries(shoes).map(([title,{name,img}]) => (
                        <div key={title}>
                            <h3>{title}</h3>
                            <img src={img} width="250" height="200" alt={name}/><br />
                            <strong>{name}</strong>
                        </div>
                ))
            }
         
                <Routes>
                    <Route path="/" element={<Product />}/>
                    <Route path="/product" element={() => <h1>Product Page</h1>}/>
                    <Route path="/product/:id" element={<ProductDetails />}/>
                </Routes>
            
          
        </div>
    )
}

export default App
