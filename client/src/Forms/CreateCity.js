import React, {useState} from 'react'
import "../index.css"


function CreateCity(){

    const [city, setCity] = useState("")

    function handleCitySubmit(e){
        e.preventDefault()
        console.log('sup')
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
        </div>
    )
}

export default CreateCity