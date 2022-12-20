import React, {useState} from 'react' 
import { Link, Outlet} from "react-router-dom"; 

function Cities({cities, restaurants, reviews, setCitySelected, citySelected}){
    console.log(citySelected)

    return(
            <div>
                {citySelected ? (
                    <div>
                        <h3><u>Select a City</u></h3>
                        <div className="city-container">
                            {cities.map((city) => 
                                <Link key={city.id} to={`${city.id}`} onClick={() => setCitySelected(false)}>
                                    <button className="city-button">{city.name}</button>
                                    <br></br>
                                </Link>
                            )}
                        </div>
                    </div>
                ) : ( 
                    <div>
                        <button className="back-button" onClick={() => setCitySelected((citySelected) => !citySelected)}>
                            <Link to="/cities">Back to Cities</Link>
                        </button> 
                        <div>
                            <Outlet restaurants={restaurants} reviews={reviews}/>
                        </div>
                    </div>
                )}
            </div> 
    )
}

export default Cities