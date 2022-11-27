import React from "react"
import CreateCity from './Forms/CreateCity'
import CreateReview from './Forms/CreateReview'
import CreateRestaurant from './Forms/CreateRestaurant'

function CreateNew({user, cities, restaurants}){


    return(
        <div className="form-container">
            <CreateCity />
            <CreateReview user={user} restaurants={restaurants}/>
            <CreateRestaurant cities={cities}/>
        </div>
    )
    
}

export default CreateNew