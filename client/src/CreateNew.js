import React from "react"

function CreateNew({user}){


    return(
        <div className="form-container">
            <div className="city-form">
                <form onSubmit={handleCitySubmit}>
                    <h3>Submit a Review</h3>
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
            </div>
        </div>
    )
    
}

export default CreateNew