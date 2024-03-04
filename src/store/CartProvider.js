

import React, { useEffect, useState } from "react";

import cartContext from "./cart-context";

import { useNavigate } from "react-router-dom";
import { deleting, fecthing, posting } from "./addRemoveCrud";

const CartProvider = (props) => {

    const history = useNavigate()
    const [logtimer, setLogtimer] = useState(null)

    const [items, setItems] = useState([]);
    const [total, setTotal] = useState(0)
    const [quantity, setQuant] = useState(0)
    const [token, setToken] = useState('');
    // console.log(' i am userloggedin ',!!token)

    useEffect(() => {
        let cart = [];
        async function fetched() {
            try {
                cart = await fecthing();
                setItems(cart)
                setQuant(cart.length)
                let p=cart.reduce((acc,item)=>Number(acc)+Number(item.price),0);
                setTotal(p);
            } catch (err) {
                console.log('error while fetching from cart crud api ', err)
            }


        }
        fetched()

    },[])

    const setLogoutTimer = () => {
        const timeout = setTimeout(() => {
            logoutHandler();
        }, 300000)

        setLogtimer(timeout)
    }
    useEffect(() => {
        if (localStorage.getItem('token')) {
            setToken(localStorage.getItem('token'))
        }
        return () => {
            clearTimeout(logtimer)
        }
    }, [logtimer])

    const userIsLoggedIn = !!token;

    const addToCart = (item) => {
        let p = [...items];
        let t = 0; let found = false
        for (let i = 0; i < p.length; i++) {
            if (p[i].id === item.id) {

                found = true
            }
            t = Number(t) + Number(p[i].price);
        }
        if (found) {
            alert('already added to cart')
            return
        }

        posting(item)
            .then(data => {

                let q = p.length + 1;
                setQuant(q)
                setTotal(Number(t) + Number(item.price))
                setItems([...items, data])
                console.log(data._id)
            }).catch(err => {
                console.log(err)
            })

        // console.log(q+'in cartprovider')
    }

    const removeFromCart = (id) => {
        const p = [...items];

        let k = []; let removed;
        for (let i = 0; i < p.length; i++) {
            if (p[i].id === id) {
                removed = p[i]
                continue;
            }
            k.push(p[i]);
        }
        deleting(removed._id)
            .then(res=>{
                setItems([...k])
                setTotal(Number(total) - Number(removed.price))
                setQuant(Number(quantity) - Number(1))
            }).catch(err=>{
                console.log('deleting from cart, got error',err)
            })
        
    }

    const loginHandler = (token) => {

        setToken(token)
        localStorage.setItem('token', token)

        setLogoutTimer()
    }

    const logoutHandler = () => {
        setToken(null)
        if (localStorage.getItem('token')) {

            localStorage.removeItem('token')
        }
        clearTimeout(logtimer)
        // history('/login')
    }

    const ctxContext = {
        items: items || [],
        total: total,
        quantity: quantity,
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
        addToCart: addToCart,
        removeFromCart: removeFromCart
    }
    return <cartContext.Provider value={ctxContext}>
        {props.children}
    </cartContext.Provider>


}

export default CartProvider