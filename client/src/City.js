import React from 'react'

function City({city, restaurants, reviews}) {

    // This is where each city will be click-able, and it will show you all restaurants in each city.  
    //Need to pass in restaurants as props, then, onClick, display restaurants where city_id === city.id

    return(
        <div>
        <div className="each-city">
            {city.name}
        </div>
        </div>
    )
}

export default City 