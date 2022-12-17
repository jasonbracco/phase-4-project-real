import React from 'react' 
import { useParams} from "react-router-dom";
import Restaurant from './Restaurant'
import './index.css'  
 

function City({restaurants, reviews}) {
    const {id} = useParams()

    const restaurantArray = restaurants.filter(restaurant => restaurant.city_id == id)
    const howManyRestaurants = restaurantArray.length

    return(
        <div className="restaurant-review-containter">
            {howManyRestaurants>0 ? (
                <div>
                    {restaurantArray.map((restaurant) => {
                        return <Restaurant key={restaurant.id} restaurant={restaurant} reviews={reviews}/>
                    })}
                </div>
            ) : (
                <div className="no-restaurants">
                    <p><em>No user has reviewed a restaurant in this city</em></p>
                    <p><em>Go out and try one for yourself, and let us know how it is!</em></p>
                </div>
            )}
        </div>
    )
}

export default City  