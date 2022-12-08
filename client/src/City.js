import React, {useState} from 'react'
import { useParams } from "react-router-dom";


// import Restaurant from './Restaurant'
import './index.css'


function City({cities}) {
    const {id} = useParams()

    console.log(cities)
    console.log(cities.filter((city) => {
        if(city.id === id){
            return city.restaurants
        }
    }))


    const associatedRestaurants = cities.filter((city) => {
        if(city.id === id){
            return city.restaurants
        }
    })




    return(
        <div>
            {associatedRestaurants}
        </div>
    )
}

export default City 