import React from 'react'
 
function UserRestaurants({review}){
    
    return(

        <div className="user-restaurant-card">
            {review.restaurant.name}
        </div>
    )
}

export default UserRestaurants