import React from 'react'
// import { useParams} from "react-router-dom";
import Review from '../Review'

function Reviews({reviews}){

    // const {id} = useParams()

    return(
        <div className="review">
            {reviews.map((review) => {
                return <Review key={review.id} review={review} />
            })}
        </div>
    )
}

export default Reviews

