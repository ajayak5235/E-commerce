import { useRef, useState } from "react";
import { Form, FormLabel,Button,Spinner } from "react-bootstrap";
import { NavLink } from "react-router-dom";


const SignUp = (props) => {
    const [isLogin,setIsLogin]=useState(false)
    const [loading,setLoading]=useState(false)

    const emailInputRef=useRef();
    const passwordInputRef=useRef();

    const submitHandler = (event) => {
        event.preventDefault()

        const enteredEmail=emailInputRef.current.value;
        const enteredPassword=passwordInputRef.current.value;

        setLoading(true)
        if(isLogin){

        }else {
            fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCLPdt6hd56ixmlKEzUMU06fngO3dzpmXc',
            {
                method:'POST',
                body:JSON.stringify({
                    email:enteredEmail,
                    password: enteredPassword,
                    returnSecureToken: true
                }),
                headers : {
                    'Content-Type': 'application/json'
                }
            }).then(res=>{
                setLoading(false)
                if(res.ok){

                }else{
                    return res.json().then((data)=>{
                        let errorMessage = 'Authentication failed'

                        if(data && data.error && data.error.message){

                            errorMessage=data.error.message;
                        }

                        alert(errorMessage);
                    })
                }
            })
        }
        // submitting()
    }
  

    return <div style={{ margin: 'auto', border: '5px', width: '20rem' }} >

        <Form onSubmit={submitHandler} style={{ margin: 'auto', textAlign: "center", padding: '5px', width: '20rem' }} className="d-flex flex-column">
        <h3>Sign Up</h3>
            <FormLabel>
                Email
            </FormLabel>
            <input type="email"  id="email" required ref={ emailInputRef}></input>
            <FormLabel>
                Your Password
            </FormLabel>
            <input type="password"  id="password"  required  ref={passwordInputRef}></input>
            {!loading && <Button type='submit' className="mx-5 my-2">Create Account</Button>}
            {loading && <Spinner animation="border" className="mx-auto my-2" >
        <span className="visually-hidden">Loading...</span>
      </Spinner>}
            <NavLink to='/login'>Login with existing account</NavLink> 
        </Form>
    </div>
}

export default SignUp;