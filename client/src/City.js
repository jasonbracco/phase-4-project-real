import React, {useState, useEffect} from 'react'
import Restaurant from './Restaurant'
import './index.css'


function City({city, restaurants, reviews}) {

    const [citySelected, setCitySelected] = useState(true)
    const [jsonCity, setJsonCity] = useState([])
    const [cityID, setCityID] = useState(city.id)
    console.log(cityID)

    //Need to use backend to get restaurants associated with each city

    const filteredRestaurants = restaurants.filter((restaurant) => {
        if(restaurant.city_id === city.id){
            return restaurant
        }
    })

    useEffect(() => {
        fetch(`/cities/${cityID}`)
            .then(response => response.json())
            .then(city => console.log(city))
    }, [])    



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
                        {filteredRestaurants.map((restaurant) => {
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