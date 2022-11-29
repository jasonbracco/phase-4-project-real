import React, {useState} from 'react'
import Error from "../Error"
import "../index.css"


function CreateReview({onAddReview, restaurants}){

    const [content, setContent] = useState("")
    const [restaurantID, setRestaurantID] = useState()

    function handleReviewSubmit(e){
        e.preventDefault()
        console.log('sup')
    }

    return(
        <div className="review-form">
            <form onSubmit={handleReviewSubmit}>
                <h3>Select restaurant to review:</h3>
                <select onChange={(e) => setRestaurantID(e.target.value)}>
                    <option>Select</option>
                    {restaurants.map((restaurant) => (
                        <option key={restaurant.id} value={restaurant.id}>{restaurant.name}</option>
                    ))}
              </select>
                <h3>Provide your review</h3>
                <input
                    type="text"
                    name="content"
                    value={content}
                    autoComplete="off"
                    placeholder="Review Text"
                    onChange={(e) => setContent(e.target.value)}
                />
                <br></br>
                <button type="submit">
                    Add Review
                </button>
            </form>
        </div>
    )
}

export default CreateReview