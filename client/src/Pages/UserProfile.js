import React, {useEffect, useState} from "react" 
import UserRestaurants from "../UserRestaurants"
import UserReviews from "../UserReviews"

function UserProfile({user, reviewUpdate}){

    const [userReviews, setUserReviews] = useState([])

    useEffect(() => {
        fetch (`/me`).then((response) => {
          if (response.ok) {
            response.json().then((user) => {
                setUserReviews(user.reviews)
            })
            }
        });
      }, []);

      function handleUpdateUserReviews(updatedReview) {
        const updatedReviews = userReviews.map((review) => {
          if (review.id === updatedReview.id) {
            return updatedReview;
          } else {
            return review;
          } 
        });
        setUserReviews(updatedReviews)
      }
      
    const restaurantNames= userReviews.map((review) => {
        return review.restaurant.name
    })

    //Try to see if i can do this in the back end on user response
    //custom class method?
    //request to user, 
    //take both constants and make it a fetch request, replace userReviews
    
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
                    return <UserReviews key={review.id} review={review} reviewUpdate={reviewUpdate} userReviewUpdate={handleUpdateUserReviews}/>
                })}
            </div>
        </div>
    ) 
}

export default UserProfile