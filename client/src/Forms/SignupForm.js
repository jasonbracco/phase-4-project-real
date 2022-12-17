import React, {useState} from "react";
import Error from "../Error"

function SignupForm({setUser}){

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [age, setAge] = useState("")
    const [bio, setBio] = useState("")
    const [imageURL, setImageURL] = useState("")
    const [name, setName] = useState("")
    const [errors, setErrors] = useState([])

    function handleSignupSubmit(e){
        e.preventDefault()
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                password,
                password_confirmation: passwordConfirmation,
                name,
                age,
                bio,
                image_url: imageURL
            })
        }).then((response) => {
            if (response.ok){
                response.json().then((user) => setUser(user))
            }
            else{
                response.json().then((error) => setErrors(error.errors))
            }
        })
    }

    console.log(errors)

    return (
        <form onSubmit={handleSignupSubmit}>
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
            <h3>Confirm Password:</h3>
            <input
                type="text"
                name="password-confirmation"
                value={passwordConfirmation}
                autoComplete="off"
                placeholder="Confirm Password"
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
            <h3>Name:</h3>
            <input
                type="text"
                name="name"
                value={name}
                autoComplete="off"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                />
            <h3>Age:</h3>
            <input
                type="number"
                name="age"
                value={age}
                autoComplete="off"
                placeholder="Age"
                onChange={(e) => setAge(e.target.value)}
            />
            <h3>Tell Us About Yourself:</h3>
            <textarea
                type="test"
                name="bio"
                value={bio}
                autoComplete="off"
                placeholder="Bio"
                onChange={(e) => setBio(e.target.value)}
            />
            <h3>Profile Picture:</h3>
            <input
                type="text"
                name="pictue"
                value={imageURL}
                autoComplete="off"
                placeholder="Link here"
                onChange={(e) => setImageURL(e.target.value)}
            />
            <br></br>
            <button type="submit">
                Sign Up!
            </button>
            <div className="login_erors">
                {errors.map((error) => (
                    <Error key={error} error={error} />
                ))}
            </div>
        </form>
    )
}

export default SignupForm