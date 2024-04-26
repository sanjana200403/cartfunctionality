import { useEffect, useReducer, useState } from 'react'
import Products from './components/Products'
import './App.css'
import { cartReducer } from './reducer/cartReducer'
import Cart from './components/Cart'

function App() {
  const [state, dispatch] = useReducer(cartReducer,{
    cart:[],
    products:[]
  })
  const fetchProduct = ()=>{
    fetch('https://dummyjson.com/products')
    .then((res)=>res.json())
    .then((response)=>{
      console.log("PRODUCT DATA!!",response.products)
      dispatch({
        type:"ADD_PRODUCTS",
        payload:response.products

      })
    })
  }
  useEffect(()=>{
 fetchProduct()
  },[])

  return (
    <>
     <Cart state={state} dispatch={dispatch} />
    <Products state={state} dispatch={dispatch} />
   

     
    </>
  )
}

export default App
