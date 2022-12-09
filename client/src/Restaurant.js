import React from 'react'

function Restaurant({restaurant}){

    console.log(restaurant)


    return(
        <div>
            {restaurant.name}
        </div>
    )
}

export default Restaurant
