import React, { useContext } from "react"
import Context from "../Context"
import { Navigate } from "react-router-dom"

const Details = () =>{

    const {product} = useContext(Context)
    if(!product)
        return <Navigate to='/products'/>  // <Navigate /> it is used when its is redirect automatically without any action(onClick onSubmit etc)
    return(
       <div className="bg-rose-400 min-h-screen flex justify-center items-center">
          <div className="bg-white rounded-lg p-6 w-6/12 flex flex-col items-center justify-center">
          <img src={product.image} alt="" className="w-6/12" />
          <h1 className="text-5xl font-bold text-center mt-8 mb-6">{product.title}</h1>
          <p className="text-gray-500 text-center mb-3">{product.description}</p>
          <label className="text-xl font-bold">Rs. {product.price}</label>
          </div>
       </div>
    )
}

export default Details