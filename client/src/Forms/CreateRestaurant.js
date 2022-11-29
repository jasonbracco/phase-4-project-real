import React, {useState} from 'react'
import Error from "../Error"
import "../index.css"


function CreateRestaurant({cities, onAddRestaurant}){

    const [restaurantName, setRestaurantName] = useState("")
    const [cuisine, setCuisine] = useState("")
    const [seats, setSeats] = useState("")
    const [cityID, setCityID] = useState()
    const [errors, setErrors] = useState([])

    function handleRestaurantSubmit(e){
        e.preventDefault()
        fetch("/restaurants", {
            method: "POST",
            headers: {
                "Content-type": "application/JSON",
            },
            body: JSON.stringify({
                city_id: cityID,
                name: restaurantName,
                cuisine: cuisine,
                seats: seats
            })
        }).then((response) => {
            if (response.ok){
                response.json().then((restaurant) => onAddRestaurant(restaurant))
            }
            else{
                response.json().then((error) => setErrors(error.errors))
            }
        })
        setRestaurantName("")
        setCuisine("")
        setSeats("")
    }

    return(
        <div className="restaurant-form">
            <form onSubmit={handleRestaurantSubmit}>
            <h3>City:</h3>
                <select onChange={(e) => setCityID(e.target.value)}>
                    <option>Select</option>
                        {cities.map((city) => (
                            <option key={city.id} value={city.id}>{city.name}</option>
                        ))}
                </select>
                <h3>Restaurant Name</h3>
                <input
                    type="text"
                    name="restaurant-name"
                    value={restaurantName}
                    autoComplete="off"
                    placeholder="Restaurant Name"
                    onChange={(e) => setRestaurantName(e.target.value)}
                />
                <h3>Cuisine</h3>
                <input
                    type="text"
                    name="cuisine"
                    value={cuisine}
                    autoComplete="off"
                    placeholder="Cuisine"
                    onChange={(e) => setCuisine(e.target.value)}
                />
                <h3>Number of Seats</h3>
                <input
                    type="text"
                    name="seats"
                    value={seats}
                    autoComplete="off"
                    placeholder="Seats"
                    onChange={(e) => setSeats(e.target.value)}
                />
                <br></br>
                <button type="submit">
                    Add Restaurant
                </button>
            </form>
            <div>
                {errors.map((error) => (
                    <Error key={error.status} error={error} />
                ))}
            </div>
        </div>
    )
}

export default CreateRestaurant