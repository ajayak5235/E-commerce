// import {useRef, useState, useContext,useEffect} from 'react'
// import {Form , FormLabel, Button,Spinner} from 'react-bootstrap';
// import {NavLink} from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

// const Login = () =>{
//     const [isLogin , setIsLogin] = useState(true)
//     const history= useNavigate();
//     const [loading,setLoading] = useState(false)

//     const emailInputRef = useRef()
//     const passwordInputRef = useRef()

//     // const authContext = useContext()
//     const submitHandler = (event) => {
//         event.preventDefault()

//       const enteredEmail = emailInputRef.current.value
//       const enteredPassword = passwordInputRef.current.value;

//       setLoading(true)

//       let url;
//       if(isLogin){
//         url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCLPdt6hd56ixmlKEzUMU06fngO3dzpmXc'
//       }else{
//         url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCLPdt6hd56ixmlKEzUMU06fngO3dzpmXc'
//       }
//       fetch(url,{
//         method:'POST',
//         body:JSON.stringify({
//             email: enteredEmail,
//             password: enteredPassword,
//             returnSecureToken:true
//         }),
//         headers:{
//             'Content-Type' : 'application/json'
//         }
//       }).then(res =>{
//         setLoading(false)
//         if(res.ok){
            
//             return res.json()
            
//         }else{
//             return res.json().then((data)=>{
//                 let errorMessage = 'Authentication Faild'
//                 throw new Error(errorMessage)
//             }) 
//         }
//       }).catch(err =>{
//         alert(err.message);
//       })

      

//     }

//     return<div>
//         <Form onSubmit={submitHandler}>
//             <h3>Login</h3>
//             <FormLabel>
//                 Email
//             </FormLabel>
//             <input type='text' id='email' required ref={emailInputRef}></input>
//             <FormLabel>
//                Your Password
//             </FormLabel>
//             <input type='password' id='password' required ref={passwordInputRef}></input>
//            <Button >Login</Button>
//            <NavLink to='/signup'>Create New Account</NavLink>
//         </Form>
//     </div>

// }
// export default Login;

import { useRef, useState } from 'react';
import { Form, FormLabel, Button ,Spinner} from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [loading, setLoading] = useState(false);
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const navigate = useNavigate();

    const submitHandler = async (event) => {
        event.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        setLoading(true);

        let url;
        if (isLogin) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCLPdt6hd56ixmlKEzUMU06fngO3dzpmXc';
        } else {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCLPdt6hd56ixmlKEzUMU06fngO3dzpmXc';
        }

        try {
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                    email: enteredEmail,
                    password: enteredPassword,
                    returnSecureToken: true
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);
                navigate('/dashboard'); // Redirect to dashboard after successful login
            } else {
                const errorData = await response.json();
                throw new Error(errorData.error.message);
            }
        } catch (error) {
            alert(error.message);
        }

        setLoading(false);
    };

    return (
        <div>
            <Form onSubmit={submitHandler}>
                <h3>Login</h3>
                <FormLabel>Email</FormLabel>
                <input type='text' id='email' required ref={emailInputRef} />
                <FormLabel>Your Password</FormLabel>
                <input type='password' id='password' required ref={passwordInputRef} />
                <Button type='submit' disabled={loading}>
                    {loading ? <Spinner animation='border' size='sm' /> : 'Login'}
                </Button>
                <NavLink to='/signup'>Create New Account</NavLink>
            </Form>
        </div>
    );
};

export default Login;
