import { useContext, useRef } from "react"
import cartContext from "../store/cart-context";

import { useNavigate } from "react-router-dom";
import Login from "../pages/Login";

const ProfileForm=()=>{

    const newPasswordInputRef =useRef();

    const authContext=useContext(cartContext)

    const history=useNavigate()
    const submitHandler=event=>{
        event.preventDefault();

        const enteredNewPassword=newPasswordInputRef.current.value;

        fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCLPdt6hd56ixmlKEzUMU06fngO3dzpmXc',{
            method:'POST',
            body: JSON.stringify({
                idToken:authContext.token,
                password:enteredNewPassword,
                returnSecureToken:false
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res=>{
            localStorage.removeItem('token')
            authContext.logout()
            history('/login')
        })
    }

    return (
        <>
        { authContext.isLoggedIn && <form onSubmit={submitHandler} style={{margin:'auto',textAlign:"center"}}>
            <div>
                <label htmlFor="new-password">
                    New Password
                </label><br></br>
                <input className="my-2" type="password" id="new-password" minLength={7} ref={newPasswordInputRef} />
            </div>
            <div>
                <button>Change Password</button>
            </div>
        </form>}

        {!authContext.isLoggedIn && <Login />}
        </>
    )
}

export default ProfileForm