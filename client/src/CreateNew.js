import React from "react"
import CreateCity from './Forms/CreateCity'
import CreateReview from './Forms/CreateReview'
import CreateRestaurant from './Forms/CreateRestaurant'

function CreateNew({user, cities, restaurants}){


    return(
        <div className="form-container">
            <CreateCity />
            <CreateRestaurant cities={cities}/>
            <CreateReview user={user} restaurants={restaurants}/>
        </div>
    )
    
}

export default CreateNew