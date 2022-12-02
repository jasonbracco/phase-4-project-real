import React, {useState, useEffect} from 'react'
import Restaurant from './Restaurant'
import './index.css'


function City({city, reviews}) {

    const [citySelected, setCitySelected] = useState(true)
    const [associatedRestaurants, setAssociatedRestaurants] = useState([])
    const [cityID, setCityID] = useState(city.id)

    //Need to use backend to get restaurants associated with each city

    useEffect(() => {
        fetch(`/cities/${cityID}`)
            .then(response => response.json())
            .then(city => setAssociatedRestaurants(city.restaurants))
    }, [])    
    console.log(associatedRestaurants)



    return(
        <div>
            {citySelected ? ( 
                <div className="each-city" onClick={() => setCitySelected((citySelected) => !citySelected)}>
                    {city.name}
                </div>
                ): 
                (
                <div className="city-with-restaurants">
                <div onClick={() => setCitySelected((citySelected) => !citySelected)}>
                    {city.name}
                </div>
                <div className="restaurants-for-specified-city">
                    <div>
                        {associatedRestaurants.map((restaurant) => {
                            return <Restaurant key={restaurant.id} restaurant={restaurant} reviews={reviews}/>
                        }
                        )}          
                    </div>
                </div>
                </div>
                )}
        </div>
    )
}

export default City 