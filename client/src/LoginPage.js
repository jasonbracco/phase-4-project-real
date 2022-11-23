import React, {useState} from "react";
import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"

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
                        <p>
                            <button>
                                Sign Up!
                            </button>
                        </p>
                    </div>
                }   
            </div>
        </div>

    )
}

export default LoginPage