import React, {useState} from 'react'
import Error from "../Error"
import "../index.css"

function CreateCity({onAddCity}){

    const [city, setCity] = useState("")
    const [errors, setErrors] = useState([])

    function handleCitySubmit(e){
        e.preventDefault()
        setErrors([])
        fetch("/cities", {
            method: "POST",
            headers: {
                "Content-type": "application/JSON",
            },
            body: JSON.stringify({
                name: city,
            })
        }).then((response) => {
            if (response.ok){
                response.json().then((city) => onAddCity(city))
            }
            else{
                response.json().then((error) => setErrors(error.errors))
            }
        })
        setCity("")
    }

    return(
        <div className="city-form">
            <form onSubmit={handleCitySubmit}>
                <h3>Add a new City</h3>
                <input
                    type="text"
                    name="city"
                    value={city}
                    autoComplete="off"
                    placeholder="City Name"
                    onChange={(e) => setCity(e.target.value)}
                />
                <br></br>
                <button type="submit">
                    Add City
                </button>
            </form>
            <div>
                {errors.map((error) => (
                    <Error key={error} error={error} />
                ))}
            </div>
        </div>
    )
}

export default CreateCity