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
            <p>Here are all of the cities our users have dined:</p>
            {citySelected ? (
                <div className="cities" onClick={() => setCitySelected((citySelected) => !citySelected)}>
                    {cities.map((city) => 
                        <NavLink
                        to={`restaurantpage/:${city.id}`}
                    >
                    {city.name}
                    <br></br>
                    </NavLink>
                    )}
                    <Routes>
                        {cities.map((city) => 
                            <Route 
                                path={`restaurantpage/:${city.id}`} 
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