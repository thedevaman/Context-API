import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Products from "./components/Products"
import Details from "./components/Details"

const App = () =>{

  return(
   <BrowserRouter>
    <Routes>
     <Route path="/products" element={<Products />} />
     <Route path="/details" element={<Details />} />
    </Routes>
   </BrowserRouter>
  )

}

export default App