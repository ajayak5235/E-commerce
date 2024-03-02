import {creatContext, createContext} from 'react';

const CartContext = createContext({
    items:[],
    total:0,
    addToCart:(item) =>{},
    removeFromCart:(id) =>{},
    
})

export default CartContext;