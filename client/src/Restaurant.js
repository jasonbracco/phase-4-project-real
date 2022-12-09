import React from 'react'

function Restaurant({restaurant}){

    console.log(restaurant)


    return(
        <div className="individual-restaurant">
            <p>ID: {restaurant.id}</p>
            <p>{restaurant.name}</p>
            <p>Cuisine: {restaurant.cuisine}</p>
            <p>Number of Seats: {restaurant.seats}</p>
        </div>
    )
}

export default Restaurant
