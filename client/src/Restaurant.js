import React from 'react'
import { Route, Routes, Link } from "react-router-dom";
import Reviews from "./Pages/Reviews"
import "./index.css"



function Restaurant({restaurant}){

    return(

            <div className="restaurant-review-containter">
                <div className="restaurant-card">
                    <div className="restaurant-card-content">
                        <h4 className="restaurant-name">{restaurant.name}</h4>
                        <p className="restaurant-cuisine">Cuisine: {restaurant.cuisine}</p>
                        <p className="number-of-seats">Number of Seats: {restaurant.seats}</p>
                        <button className="see-review-button">
                            <Link to={`reviews/${restaurant.id}`}>See Reviews!</Link>
                        </button>
                    </div>
                </div>
                <div className="reviews">
                    <Routes>
                        <Route path="reviews/:id" element={<Reviews reviews={restaurant.reviews} />}></Route>
                    </Routes>
                </div>
            </div>                   

    )
}

export default Restaurant
