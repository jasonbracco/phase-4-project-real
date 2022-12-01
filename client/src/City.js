import React, {useState} from 'react'
import './index.css'

function City({city, restaurants, reviews}) {

    const [citySelected, setCitySelected] = useState(true)



    // This is where each city will be click-able, and it will show you all restaurants in each city.  
    //Need to pass in restaurants as props, then, onClick, display restaurants where city_id === city.id

    return(
        <div>
            {citySelected ? ( 
                <div className="each-city" onClick={() => setCitySelected((citySelected) => !citySelected)}>
                    {city.name}
                </div>
                ): 
                (
                <div onClick={() => setCitySelected((citySelected) => !citySelected)}>
                    <p>Hi</p>
                </div>
                )}
            {/* <break></break>
            <break></break> */}
        </div>
    )
}

export default City 