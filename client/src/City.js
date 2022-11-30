import React from 'react'

function City({city, restaurants, reviews}) {
    
    function handleClick(){
        console.log("you clicked me")
    }

    // This is where each city will be click-able, and it will show you all restaurants in each city.  
    //Need to pass in restaurants as props, then, onClick, display restaurants where city_id === city.id

    return(
        <div>
        <div className="each-city" onClick={handleClick}>
            {city.name}
        </div>
        </div>
    )
}

export default City 