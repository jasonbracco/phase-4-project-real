import React, { useState } from "react";
import Error from "../Error"


function LoginForm({setUser}){

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([]) 
 

    function handleLoginSubmit(e){
        e.preventDefault()
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username, password}),
        }).then((response) => {
            if (response.ok){
                response.json().then((user) => setUser(user))
            }
            else{
                response.json().then((error) => setErrors(error.errors)) 
            }
        })
    }
        
    return(
        <div>
            <form onSubmit={handleLoginSubmit}>
                <h3>Username:</h3>
                <input
                    type="text"
                    name="username"
                    value={username}
                    autoComplete="off"
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <h3>Password:</h3>
                <input
                    type="text"
                    name="password"
                    value={password}
                    autoComplete="off"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
            <br></br>
            <button type="submit">
                Sign In!
            </button>
            </form>
            <div>
                {errors.map((error) => (
                    <Error key={error} error={error} />
                ))}
            </div>
        </div>

    )
}

export default LoginForm