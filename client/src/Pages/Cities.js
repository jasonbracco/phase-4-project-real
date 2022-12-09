import React, {useState} from 'react'
import { Link, Outlet} from "react-router-dom";

function Cities({cities}){

    const [citySelected, setCitySelected] = useState(true)

    return(
        <div className="city-container">
            <p>Select a City to see the Restaurants that have been reviewed:</p>
            <div className="cities">
                {citySelected ? (
                <div>
                {cities.map((city) => 
                    <Link
                    key={city.id}
                    to={`${city.id}`}
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
                    <Link to="/restaurants">Back to Restaurants </Link>
                </button> 
                <Outlet />
            </div>
                )}
        </div> 
        </div>
    )
}

export default Cities