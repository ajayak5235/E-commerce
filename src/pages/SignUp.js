import {useRef , useState} from 'react'
import {From, FormLabel,Button , spinner} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

const SignUp = (props) => {
const [isLogin, setIsLogin] = useState(false)
const [loading, setLoading] =  useState(false)

    const emailInputRef = useRef();
    const passwordInputRef = useRef();

   const submitHandler = (event) => {
    event.preventDefault()
    
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

   setLoading(true)
   if(isLogin){

   }else{
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBhfCmRXqTgnJ-C0hRQAcj0bOv5hhqTioA',{
        method:'POST',
        body:JSON.stringify({
            email:enteredEmail,
            password: enteredPassword,
            returnSecureToken:true
        }),
        headers:{
            'Content-Type' : 'application/json'
        }
    }).then(res=>{
        setLoading(false)
        if(res.ok){

        }else{
            return res.json().then((data) =>{
                let errorMessage = 'Authentication Failed'

                if(data && data.error && data.error.message){
                    errorMessage= data.error.message;
                }
                alert(errorMessage)
            })
        }
    })
   }



   }


    return <div>
        <From onSubmit={submitHandler}>
          <FormLabel>
            Email
          </FormLabel>
          <input type='text' id='email' required ref={emailInputRef}></input>
        <FormLabel>
            Password
        </FormLabel>
        <input type='password' id='password' require ref={passwordInputRef}></input>
       <Button type='submit'>Create An Account</Button>
        </From>
    </div>
}