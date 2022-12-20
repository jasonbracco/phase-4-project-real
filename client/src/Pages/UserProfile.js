import React from "react" 
import UserRestaurants from "../UserRestaurants"
import UserReviews from "../UserReviews"

function UserProfile({user, userReviews, userReviewUpdate}){

    const restaurantNames= userReviews.map((review) => {
        return review.restaurant.name
    })

    const uniqueRestaurantNames=restaurantNames.filter((value, index, self) => self.indexOf(value) === index)

    return(
        <div className="profile-container">
            <div className="picture-container">
                <img className="profile-picture" src={`${user.image_url}`} alt="Profile Pic"/>
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
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h3 className="restaurants-i-have-visited">Restaurants I have visited:</h3>
            <div className="user-restaurant-container">
                    {uniqueRestaurantNames.map((restaurant) => {
                        return <UserRestaurants key={restaurant} restaurant={restaurant} /> 
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