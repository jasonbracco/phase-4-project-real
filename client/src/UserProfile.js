import React from "react"

function UserProfile({user}){
    console.log(user)


    return(
        <div>
            Name: {user.name}
            <br></br>
            <br></br>
            Age: {user.age}
            <br></br>
            <br></br>
            Bio: {user.bio}

        </div>
    )
}

export default UserProfile