import { useRef, useState,useContext,useEffect } from "react";
import { Form, FormLabel, Button, Spinner } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import cartContext from "../store/cart-context";

import { useNavigate } from "react-router-dom";

const Login = (props) => {


    // const [grinput, setGrinput] = useState({  email: '', password: '' })
    const [isLogin, setIsLogin] = useState(true)

    const history=useNavigate();
    const [loading, setLoading] = useState(false)
    const emailInputRef = useRef();
    const passwordInputRef = useRef();


    const authContext=useContext(cartContext)

useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      // authctx.login(localStorage.getItem('token'))
      history('/')
    }
  })
    const submitHandler = (event) => {
        event.preventDefault()

        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        setLoading(true);

        
        let url;
        if (isLogin) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCLPdt6hd56ixmlKEzUMU06fngO3dzpmXc'


        } else {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCLPdt6hd56ixmlKEzUMU06fngO3dzpmXc'

        }
        fetch(url,
            {
                method: 'POST',
                body: JSON.stringify({
                    email: enteredEmail,
                    password: enteredPassword,
                    returnSecureToken: true
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                setLoading(false)
                if (res.ok) {
                    return res.json()
                } else {
                    return res.json().then((data) => {
                        let errorMessage = 'Authentication failed'

                        // if (data && data.error && data.error.message) {

                        //     errorMessage = data.error.message;
                        // }


                        throw new Error(errorMessage)
                    })
                }
            }).then(data => {
                authContext.login(data.idToken);
                console.log('saving')
                // localStorage.setItem('token',data.idToken);
                // setTimeout(()=>{
                //     localStorage.removeItem('token')
                //     authContext.logout()
                //     console.log('removed')
                // },300000)
                history('/')
console.log(data)
            }).catch(err => {
                alert(err.message);
            })
        // submitting()
    }
   

    return <div style={{ margin: 'auto', border: '5px', width: '20rem' }} >

        <Form onSubmit={submitHandler} style={{ margin: 'auto', textAlign: "center", padding: '5px', width: '20rem' }} className="d-flex flex-column">
            <h3>Login</h3>
            <FormLabel>
                Email
            </FormLabel>
            <input type="email" id="email" required ref={emailInputRef}></input>
            <FormLabel>
                Your Password
            </FormLabel>
            <input type="password" id="password" required ref={passwordInputRef}></input>
            {!loading && <Button type='submit' className="mx-5 my-2">Log In</Button>}
            {loading && <Spinner animation="border" className="mx-auto my-2" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>}
            <NavLink to='/signup'>Create New Account</NavLink>
        </Form>
    </div>
}

export default Login
