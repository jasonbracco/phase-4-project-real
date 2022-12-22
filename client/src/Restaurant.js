import React from 'react'
import Review from "./Review"
import "./index.css"
 

   
function Restaurant({restaurant}){

    
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
                                {restaurant.reviews.map((review) => {  
                                    return <Review key={review.id} review={review}/>
                                })}
                            <br></br>
                            <br></br>
                        </div>
                        ) : (
                            <div className="no-reviews">
                                <em>No Reviews Yet</em>
                                <br></br>
                            </div>
                        )}
                    </div>
                </div>
    )
}

export default Restaurant
 