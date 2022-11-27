import React, {useState} from 'react'

function CreateRestaurant(){

    const [restaurantName, setRestaurantName] = useState("")
    const [cuisine, setCuisine] = useState("")
    const [seats, setSeats] = useState()
    // const [cityID, setCityID] = useState()



    function handleRestaurantSubmit(e){
        e.preventDefault()
        console.log('sup')
    }

    return(
        <div className="restaurant-form">
            <form onSubmit={handleRestaurantSubmit}>
            {/* <h3>City:</h3>
                <select onChange={(e) => setCityID(e.target.value)}>
                    <option>Select</option>
                        {cities.map((city) => (
                            <option key={city.id} value={city.id}>{city.name}</option>
                        ))}
                </select> */}
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
        </div>
    )
}

export default CreateRestaurant