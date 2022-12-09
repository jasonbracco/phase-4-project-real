import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";


// import Restaurant from './Restaurant'
import './index.css'


function City({cities}) {
    const {id} = useParams()

    const [cityId, setCityId] = useState(+id)
    console.log(cities)
    console.log(cityId)
    // console.log(cities[0].cityId)

    const array = cities.filter((city) => {
        if(id == city.id){
            return city
        }
    })

    console.log(array)





    return(
        <div>
            HI
        </div>
    )
}

export default City 