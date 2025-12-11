import React from "react"
import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Products from "./components/Products"
import Details from "./components/Details"
import Context from './Context'

const App = () =>{
const [product,setProduct] = useState(null)
  return(
<Context.Provider value={{product,setProduct}}>
   <BrowserRouter>
    <Routes>
     <Route path="/products" element={<Products />} />
     <Route path="/details" element={<Details />} />
    </Routes>
   </BrowserRouter>

</Context.Provider>
   
  )

}

export default App