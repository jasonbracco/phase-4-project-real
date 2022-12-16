import React from 'react'


function Review({review}){
    
    return(
        <div>
        <div className="review-card"> 
            <div className="review-card-content">
                <b className="review-restaurant-name">{review.restaurant.name}</b>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <p className="review-content">{review.content}</p>
            </div>
        </div>
        </div>
    )
}

export default Review