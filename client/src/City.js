import React from 'react'
import { useParams} from "react-router-dom";
import Restaurant from './Restaurant'
import './index.css' 
 

function City({restaurants, reviews}) {
    const {id} = useParams()

    const restaurantArray = restaurants.filter(restaurant => restaurant.city_id == id)

    return(
        <div className="restaurant-review-containter">
            {restaurantArray.map((restaurant) => {
                return <Restaurant key={restaurant.id} restaurant={restaurant} reviews={reviews}/>
            })}
        </div>
    )
}

export default City  