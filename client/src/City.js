import React, {useEffect, useState} from 'react' 
import { useParams} from "react-router-dom";
import Restaurant from './Restaurant'
import './index.css'  
 
 
function City() {
    const {id} = useParams()

    const [cityRestaurants, setCityRestaurants] = useState([])

    useEffect(() => {
        fetch (`/cities/${id}`).then((response) => {
          if (response.ok) {
            response.json().then((city) => {
              setCityRestaurants(city.restaurants)
            })
            }
        });
      }, [id]);

      const howManyRestaurants = cityRestaurants.length
      
    return(
        <div className="restaurant-review-containter">
            {howManyRestaurants>0 ? (
                <div>
                    {cityRestaurants.map((restaurant) => {
                        return <Restaurant key={restaurant.id} restaurant={restaurant}/>
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