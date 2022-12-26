import React, {useState} from "react";
import LoginForm from "../Forms/LoginForm"
import SignupForm from "../Forms/SignupForm"

function LoginPage({setUser}) {
 
    const [signedUp, setSignedUp] = useState(true)

    return (
        <div>
            <p>Login Here!  If you are not a current user, you will be asked to create an account.</p>
            <div>
                {signedUp ? 
                    <div>
                        <LoginForm setUser={setUser}/> 
                        <button onClick={() => setSignedUp(false)}>
                            Click to create new Account
                        </button>
                    </div>
                : 
                    <div>
                        <p>Want to sign up?</p>
                        <button onClick={() => setSignedUp(true)}>
                            Oops!  Go Back...
                        </button>
                        <SignupForm setUser={setUser}/>
                    </div>
                }   
            </div>
        </div>

    )
}

export default LoginPage