import React from "react"


 

function Review({review}){
    
    return( 
        <div>
        <div className="review-card"> 
            <div className="review-card-content">
                <b>User {review.user_id} says:</b>
                <br></br>
                <p>
                <em className="review-content">{review.content}</em>
                </p>
            </div>
        </div>
        </div>
    )
}

export default Review