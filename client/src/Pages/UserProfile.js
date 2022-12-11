import React from "react"
import UserRestaurants from "../UserRestaurants"
import Review from "../Review"



function UserProfile({user, reviews}){

    return(
        <div>
            <div className="user-info">
                Name: {user.name}
                <br></br>
                <br></br>
                Age: {user.age}
                <br></br>
                <br></br>
                Bio: {user.bio}
            </div>
            <div className="user-restaurants">
                <h3>Restaurants I have visited:</h3>
                    {user.reviews.map((review) => {
                        return <UserRestaurants key={review.id} review={review} />
                    })}
            </div>
            <div className="user-reviews">
                {user.reviews.map((review) => {
                    return <Review key={review.id}review={review} />
                })}
            </div>
        </div>
    )
}

export default UserProfile