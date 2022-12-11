import React from 'react'
import { Link } from "react-router-dom";

// import { useParams} from "react-router-dom";
import Review from '../Review'

function Reviews({reviews}){

    // const {id} = useParams()

    return(
        <div>
            <div>
                <button>
                    <Link to={`reviews`}>Hide Reviews</Link>
                </button>
            </div>
            <div className="review">
                {reviews.map((review) => {
                    return <Review key={review.id} review={review} />
                })}
            </div>
        </div>
    )
}

export default Reviews

