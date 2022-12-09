import React, {useState} from 'react'
import { Route, Routes, Link } from "react-router-dom";
import Reviews from "./Pages/Reviews"


function Restaurant({restaurant}){

    const [restaurantSelected, setRestaurantSelected] = useState(true)

    console.log(restaurant.reviews)


    return(
        <div className="individual-restaurant">
            {restaurantSelected ? (
                <div>
                    <p>ID: {restaurant.id}</p>
                    <p>{restaurant.name}</p>
                    <p>Cuisine: {restaurant.cuisine}</p>
                    <p>Number of Seats: {restaurant.seats}</p>
                    <button onClick={() => setRestaurantSelected((restaurantSelected) => !restaurantSelected)}>
                        <Link to={`reviews/${restaurant.id}`}>See Reviews!</Link>
                    </button>
                </div>
            ) : (
                    <div>
                        <p>ID: {restaurant.id}</p>
                        <p>{restaurant.name}</p>
                        <p>Cuisine: {restaurant.cuisine}</p>
                        <p>Number of Seats: {restaurant.seats}</p>
                        <button onClick={() => setRestaurantSelected((restaurantSelected) => !restaurantSelected)}>
                        <Link to={`reviews`}>return!</Link>
                    </button>
                        <Routes>
                            <Route path="reviews/:id" element={<Reviews reviews={restaurant.reviews} />}></Route>
                        </Routes>
                    </div>
            )}
        </div>
    )
}

export default Restaurant
