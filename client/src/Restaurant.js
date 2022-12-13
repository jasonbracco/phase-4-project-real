import React from 'react'
import Review from "./Review"
import "./index.css"



function Restaurant({restaurant, user}){

    return(
                <div className="restaurant-list">
                    <div className="restaurant-card">
                        <div className="restaurant-card-content">
                            <h3>{restaurant.name} - Cuisine: {restaurant.cuisine} - Seats: {restaurant.seats}</h3>
                        </div>
                        <p>Reviews:</p>
                        <div className="review-list">
                            {restaurant.reviews.map((review) => {
                                return <Review key={review.id} review={review} user={user}/>
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
