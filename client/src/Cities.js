import React from 'react'
import City from './City'

function Cities({cities}){
    console.log(cities)

    return(
        <div>
            {cities.map((city) => {
                return <City key={city.id} city={city}/>
            })}
        </div>
    )
}

export default Cities