import React, { useEffect, useState } from 'react'

const Cart = ({state,dispatch}) => {
    const [total,setTotal] = useState(0)
    const {cart} = state
    const changeQty = (id,qty)=>{
        dispatch({
           type: "CHANGE_CART_QTY",
           payload: {
            id,qty
           }
        })
    }
    useEffect(()=>{
        setTotal( cart.reduce((acc,curr)=> acc + curr.price*curr.qty,0))
      
    },[cart])

  return (
    <div className='cart-container'>
        {  cart.length>0 && 
        <>
        <h1>total : {total}</h1>
        <hr style={{height:"5px", background:"black"}} />
        </>
}
        {
            cart.length>0 ?(
                cart.map((cartItems)=>{
                    return(

                        <div key={cartItems.id} className='cart'>
                              <img src={cartItems.images[0]} width={"50px"} alt="" />
                      <b>{cartItems.title}</b>
                      <i>{cartItems.price}</i>
                      <div>
                        <button onClick={()=>changeQty(cartItems.id,cartItems.qty+1)}>+</button>
                        <span>
                        {cartItems.qty}
                        </span>
                        <button
                        onClick={()=>changeQty(cartItems.id,cartItems.qty-1)}
                        >-</button>
                        </div>

                            </div>
                    )
                })
            ): <h1>No cart Item</h1>

        }
      
    </div>
  )
}

export default Cart
