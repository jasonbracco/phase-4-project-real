import React from "react"
import CreateCity from './Forms/CreateCity'
import CreateReview from './Forms/CreateReview'
import CreateRestaurant from './Forms/CreateRestaurant'
import "./index.css"

function CreateNew({user, cities, restaurants, onAddCity, onAddRestaurant}){


    return(
        <div className="form-container">
            <CreateCity onAddCity={onAddCity} />
            <CreateRestaurant cities={cities} onAddRestaurant={onAddRestaurant}/>
            <CreateReview user={user} restaurants={restaurants}/>
        </div>
    )
    
}

export default CreateNew