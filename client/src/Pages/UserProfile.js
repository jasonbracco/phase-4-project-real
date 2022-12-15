import React from "react"
import UserRestaurants from "../UserRestaurants"
import UserReviews from "../UserReviews"



function UserProfile({user, userReviews, userReviewUpdate}){

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
                    {userReviews.map((review) => {
                        return <UserRestaurants key={review.id} review={review} />
                    })}
            </div>
            My Reviews:
            <div className="user-reviews">
                {userReviews.map((review) => {
                    return <UserReviews key={review.id} review={review} userReviewUpdate={userReviewUpdate} />
                })}
            </div>
        </div>
    )
}

export default UserProfile