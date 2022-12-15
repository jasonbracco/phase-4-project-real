import React from 'react'
import { useParams} from "react-router-dom";
import Restaurant from './Restaurant'
import './index.css' 
 

function City({cities, restaurants, reviews}) {
    const {id} = useParams()

    const array = restaurants.filter(restaurant => restaurant.city_id == id)

    return(
        <div className="restaurant-review-containter">
            {array.map((restaurant) => {
                return <Restaurant key={restaurant.id} restaurant={restaurant} reviews={reviews}/>
            })}
        </div>
    )
}

export default City  