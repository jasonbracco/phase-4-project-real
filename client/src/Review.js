import React from 'react'

function Review({review}){

    return(
        <div>
            {review.content}
            <br></br>
            {review.user_id}
            <br></br>
            {review.restaurant_id}
        </div>
    )
}

export default Review