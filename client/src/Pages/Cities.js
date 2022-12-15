import React, {useState} from 'react'
import { Link, Outlet} from "react-router-dom";

function Cities({cities}){

    const [citySelected, setCitySelected] = useState(true)


    return(
            <div>
                {citySelected ? (
                    <div>
                        <p>Select a City to see the Restaurants that have been reviewed:</p>
                        {cities.map((city) => 
                            <Link key={city.id} to={`${city.id}`} onClick={() => setCitySelected((citySelected) => !citySelected)}>
                                <button className="city-button">{city.name}</button>
                                <br></br>
                            </Link>
                        )}
                    </div>
                ) : (
                    <div>
                        <button onClick={() => setCitySelected((citySelected) => !citySelected)}>
                            <Link to="/cities">Back to Cities</Link>
                        </button> 
                        <div>
                            <Outlet />
                        </div>
                    </div>
                )}
            </div> 
    )
}

export default Cities