import React from 'react'


function Review({review, user}){
    
    return(
        <div>
        <div className="review-card"> 
            <div className="review-card-content">
                <p className="review-restaurant-name">{review.restaurant.name}</p>
                <p className="review-content">{review.content}</p>
            </div>
        </div>
        </div>
    )
}

export default Review