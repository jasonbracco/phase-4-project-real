import React from 'react'
import Review from "./Review"
import "./index.css"


 
function Restaurant({restaurant, reviews}){

    const reviewArray=reviews.filter((review) => review.restaurant_id == restaurant.id)

    return(
                <div className="restaurant-list">
                    <div className="restaurant-card">
                        <div className="restaurant-card-content">
                            <h3>{restaurant.name} - Cuisine: {restaurant.cuisine} - Seats: {restaurant.seats}</h3>
                        </div>
                        <p>Reviews:</p>
                        <div className="review-list">
                            {reviewArray.map((review) => {
                                return <Review key={review.id} review={review}/>
                            })}
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                    </div>
                </div>
    )
}

export default Restaurant
