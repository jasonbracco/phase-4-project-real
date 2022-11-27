import React from "react"
import CreateCity from './Forms/CreateCity'
import CreateReview from './Forms/CreateReview'
import CreateRestaurant from './Forms/CreateRestaurant'

function CreateNew({user}){


    return(
        <div className="form-container">
            <CreateCity />
            <CreateReview />
            <CreateRestaurant />
        </div>
    )
    
}

export default CreateNew