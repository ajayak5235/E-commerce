
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
