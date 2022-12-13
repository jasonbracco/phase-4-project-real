
//CAN DELETE?

import React from 'react'


import Review from '../Review'

function Reviews({reviews}){

    return(
        <div>
            {/* <div>
                <button>
                    <Link to={`reviews`}>Hide Reviews</Link>
                </button>
            </div> */}
            <div className="review">
                {reviews.map((review) => {
                    return <Review key={review.id} review={review} />
                })}
            </div>
        </div>
    )
}

export default Reviews

