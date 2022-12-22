import React from "react"
import CreateCity from '../Forms/CreateCity'
import CreateReview from '../Forms/CreateReview'
import CreateRestaurant from '../Forms/CreateRestaurant'
import "../index.css"

function CreateNew({user, cities, onAddCity, onAddReview, restaurants, onAddRestaurant, onAddUserReview}){

    return(
        <div className="form-container">
            <CreateCity onAddCity={onAddCity} />
            <CreateRestaurant cities={cities} onAddRestaurant={onAddRestaurant}/>
            <CreateReview user={user} restaurants={restaurants} onAddReview={onAddReview} onAddUserReview={onAddUserReview}/>
        </div>
    )
    
}

export default CreateNew 