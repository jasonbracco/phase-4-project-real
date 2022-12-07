import React, {useState, useEffect} from "react"
import CreateCity from '../Forms/CreateCity'
import CreateReview from '../Forms/CreateReview'
import CreateRestaurant from '../Forms/CreateRestaurant'
import "../index.css"

function CreateNew({user, cities, onAddCity, onAddReview}){

    const [restaurants, setRestaurants] = useState([])

    useEffect(() => {
        fetch("/allrestaurants")
        .then(response => response.json())
        .then(restaurant => setRestaurants(restaurant))
      }, [])

    function handleAddRestaurant(newRestaurant){
        setRestaurants([...restaurants, newRestaurant])
    }


    return(
        <div className="form-container">
            <CreateCity onAddCity={onAddCity} />
            <CreateRestaurant cities={cities} onAddRestaurant={handleAddRestaurant} />
            <CreateReview user={user} restaurants={restaurants} onAddReview={onAddReview}/>
        </div>
    )
    
}

export default CreateNew