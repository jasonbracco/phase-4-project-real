import React, {useState} from 'react'
import { Route, Routes, Link} from "react-router-dom";

import City from '../City'

function Cities({cities, reviews}){

    const [citySelected, setCitySelected] = useState(true)

//List out each one of the cities on the page
//When one of them is clicked, the id of the city is read, and will bring you to a page showing its restaurants

    return(
        <div className="city-container">
            <p>Select a City to see the Restaurants that have been reviewed:</p>
            <div className="cities">
                {citySelected ? (
                <div>
                {cities.map((city) => 
                    <Link
                    key={city.id}
                    to={`restaurants/${city.id}`}
                    onClick={() => setCitySelected((citySelected) => !citySelected)}
                    >
                    {city.name}
                    <br></br>
                    </Link>
                )}
             </div>
                ) : (
            <div>
                <button onClick={() => setCitySelected((citySelected) => !citySelected)}>
                    BACK
                </button> 
                <Routes>
                    <Route 
                        path="restaurants/:id"
                        element={<City cities={cities}/>}
                    />               
                </Routes>
            </div>
                )}
        </div> 
        </div>
    )
}

export default Cities