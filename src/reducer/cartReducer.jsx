export const cartReducer = (state,action)=>{
    switch(action.type){
        case "ADD_PRODUCTS":
         return {...state,products:action.payload}
         case "ADD_TO_CART":
            console.log(action.payload,"ADD_TO_CART DATA")
            return {...state,cart:[...state.cart,{...action.payload}]}
            case "REMOVE_FROM_CART":
                console.log(action.payload,"REMOVE_FROM_CART")
                 return {...state,cart:state.cart.filter((cartitem)=>cartitem.id !== action.payload)}
             case "CHANGE_CART_QTY":
                console.log(action.payload,"quantity change")
                return {...state,
                    cart:state.cart.filter(c=> c.id === action.payload.id ? c.qty = action.payload.qty:c.qty)}
         default:
            break;
    }

}