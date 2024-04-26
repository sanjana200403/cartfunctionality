import React from 'react'

const Products = ({state,dispatch }) => {
    const {products,cart} = state
console.log(cart,"cart")
  return (
    <div className='product-container'>
      {
        products?.map((product)=>{
            return(
               <div key={product.id} className='card'>
                <img src={product?.images[0]} alt="" />
                <div className='desc'>
                    <span>{product.title}</span>
                    <b>{product.price}</b>

                </div>
                <div className="buttons ">

                    {
                        cart.some((cartItem)=>cartItem.id === product.id) ?  <button 
                        onClick={()=>{
                            dispatch({
                                type:"REMOVE_FROM_CART",
                                payload:product.id
                               
                            })
                        }}
                        className='remove'>remove from cart</button> :<button
                        onClick={()=>{
                            dispatch({
                                type:"ADD_TO_CART",
                                payload:{
                                    id:product.id,
                                    images:product.images,
                                    title:product.title,
                                    qty:1,
                                    price:product.price
                                }
                            })
                        }}
                        >add to cart</button>
                    }
                    
                   

                </div>



                </div>
            )
        })
      }
    </div>
  )
}

export default Products
