import React from 'react'

function Review({review}){

    return(
        <div className="individual-review"> 
            <p className="review-restaurant-name">{review.restaurant.name}</p>
            <p className="review-content">{review.content}</p>
        </div>
    )
}

export default Review