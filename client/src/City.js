import React, {useState} from 'react'
import Restaurant from './Restaurant'
import './index.css'


function City({city, restaurants, reviews}) {

    const [citySelected, setCitySelected] = useState(true)

    const filteredRestaurants = restaurants.filter((restaurant) => {
        if(restaurant.city_id === city.id){
            return restaurant
        }
    })

    console.log(filteredRestaurants)
        
    //filter through restaurants and return the restaurants that match the current city id

    // This is where each city will be click-able, and it will show you all restaurants in each city.  
    //Need to pass in restaurants as props, then, onClick, display restaurants where city_id === city.id

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
                            return <Restaurant key={restaurant.id} restaurant={restaurant}/>
                        }
                        )}          
                    </div>
                </div>
                </div>
                )}
            {/* <break></break>
            <break></break> */}
        </div>
    )
}

export default City 