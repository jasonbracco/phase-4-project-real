import React, {useState} from 'react'
import { Route, Routes, NavLink } from "react-router-dom";

import City from '../City'

function Cities({cities, reviews}){

    const [citySelected, setCitySelected] = useState(true)
    // const [selectedCityId, setSelectedCityId] = useState()


//List out each one of the cities on the page
//When one of them is clicked, the id of the city is read, and will bring you to a page showing its restaurants

    return(
        <div className="city-container">
            <p>Select a City to see the Restaurants that have been reviewed:</p>
            {citySelected ? (
                <div className="cities">
                    {cities.map((city) => 
                        <NavLink
                        key={city.id}
                        to={`/restaurants/${city.id}`}
                        onClick={() => setCitySelected((citySelected) => !citySelected)}
                    >
                    {city.name}
                    <br></br>
                    </NavLink>
                    )}
                    <Routes>
                        {cities.map((city) => 
                            <Route 
                                path={`/restaurants/${city.id}`} 
                                key={city.id} 
                                element={city.name}
                                component={<City city={city}/>}
                            />               
                        )}
                    </Routes>

                </div>  
            ) : (
                <div onClick={() => setCitySelected((citySelected) => !citySelected)}>
                    hi!
                </div>
            )}
        </div>
    )
}

export default Cities