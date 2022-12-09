import React, {useState} from 'react'
import { useParams} from "react-router-dom";
import Restaurant from './Restaurant'
import './index.css'


function City({cities}) {
    const {id} = useParams()


    const array = cities.find(city => city.id == id)

    console.log(array.restaurants)

    return(
        <div className = "restaurant-list">
            {array.restaurants.map((restaurant) => {
                return <Restaurant key={restaurant.id} restaurant={restaurant}/>
            })}
        </div>
    )
}

export default City 