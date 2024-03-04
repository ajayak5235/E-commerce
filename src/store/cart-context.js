

import React from "react";


const cartContext=React.createContext({
    items:[],
    total:0,
    quantity:0,
    token:'',
    isLoggedIn:false,
    login:(token)=>{},
    logout: ()=>{},
    addToCart:(item)=>{},
    removeFromCart:(id)=>{}
})

export default cartContext;