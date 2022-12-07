import React, {useState} from 'react'
import Review from "./Review"

function Restaurant({restaurant, reviews}){

    const[seeReviews, setSeeReviews] = useState(true)

    const filteredReviews = reviews.filter((review) => {
        if(review.restaurant_id === restaurant.id){
            return review
        }
    })

    return(
        <div>
            {seeReviews? ( 
                <div onClick={() => setSeeReviews((seeReviews) => !seeReviews)}>
                    {restaurant.name}
                    <br/>
                    {restaurant.cuisine}
                    <br/>
                    {restaurant.seats}
                </div>
                ): 
                (
                <div onClick={() => setSeeReviews((seeReviews) => !seeReviews)}>
                    {restaurant.name}
                    <div>
                        {filteredReviews.map((review) => {
                            return <Review key={review.id} review={review}/>
                        }
                        )}          
                    </div>
                </div>
                )}
        </div>
    )
}

export default Restaurant
