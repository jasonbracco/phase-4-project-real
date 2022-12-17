import React, {useState} from 'react'
import Error from "../Error"
import "../index.css"


function CreateReview({onAddReview, restaurants, user}){

    const [content, setContent] = useState("")
    const [restaurantID, setRestaurantID] = useState()
    const [errors, setErrors] = useState([])    

    function handleReviewSubmit(e){
        e.preventDefault()
        setErrors([])
        fetch("/reviews", {
            method: "POST",
            headers: {
                "Content-type": "application/JSON",
            },
            body: JSON.stringify({
                restaurant_id: restaurantID,
                content: content,
                user_id: user.id
            })
        }).then((response) => {
            if (response.ok){
                response.json().then((review) => onAddReview(review))
            }
            else{
                response.json().then((error) => setErrors(error.errors))
            }
        })
        setContent("")
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
                <textarea
                    type="text"
                    name="content"
                    value={content}
                    autoComplete="off"
                    placeholder="Review Here"
                    onChange={(e) => setContent(e.target.value)}
                />
                <br></br>
                <button type="submit">
                    Add Review
                </button>
            </form>
            <div>
                {errors.map((error) => (
                    <Error key={error.status} error={error} />
                ))}
            </div>
        </div>
    )
}

export default CreateReview