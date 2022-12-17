import React from 'react'
import Review from "./Review"
import "./index.css"
 

  
function Restaurant({restaurant, reviews}){

    const reviewArray=reviews.filter((review) => review.restaurant_id == restaurant.id)

    const howManyReviews = restaurant.reviews.length

    return(
                <div className="restaurant-list">
                    <div className="restaurant-card">
                        <div className="restaurant-card-content">
                            <h3>{restaurant.name} - Cuisine: {restaurant.cuisine} - Seats: {restaurant.seats}</h3>
                        </div>
                        <p>Reviews:</p>
                        {howManyReviews>0 ? (
                        <div className="review-list">
                                {reviewArray.map((review) => {  
                                    return <Review key={review.id} review={review}/>
                                })}
                        </div>
                        ) : (
                            <div className="no-reviews">
                                <em>No Reviews Yet</em>
                                <br></br>
                                <br></br>
                            </div>
                        )}
                    </div>
                </div>
    )
}

export default Restaurant
