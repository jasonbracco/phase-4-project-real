import React from "react" 
import UserRestaurants from "../UserRestaurants"
import UserReviews from "../UserReviews"



function UserProfile({user, userReviews, userReviewUpdate}){

    console.log(user.image_url)

    return(
        <div>
            <div className="profile-picture">
                <img src={`${user.image_url}`} alt="Profile Pic"/>
            </div>
            <div className="user-info">
                <br></br>
                <br></br>
                {user.name}
                <br></br>
                <br></br>
                Age: {user.age}
                <br></br>
                <br></br>
                Bio: {user.bio}
            </div>
            <h3>Restaurants I have visited:</h3>
            <div className="user-restaurant-container">
                    {userReviews.map((review) => {
                        return <UserRestaurants key={review.id} review={review} /> 
                    })}
            </div>
            <h3>My Reviews:</h3>
            <div className="user-reviews">
                {userReviews.map((review) => {
                    return <UserReviews key={review.id} review={review} userReviewUpdate={userReviewUpdate} />
                })}
            </div>
        </div>
    )
}

export default UserProfile