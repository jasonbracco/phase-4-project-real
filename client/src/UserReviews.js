import React, {useState} from 'react'
import EditUserReview from './EditUserReview'


function UserReviews({review, user, userReviewUpdate}){

    const [isEditing, setIsEditing] = useState(true)

    function handleUpdateReview(updatedReview){
        setIsEditing(!isEditing)
        userReviewUpdate(updatedReview)
    }
    
    return(
        <div>
            <div className="review-card"> 
                <div className="review-card-content">
                    {isEditing ? (
                        <div>
                            <b className="review-restaurant-name">Restaurant: <em>{review.restaurant.name}</em></b>
                            <br></br>
                            <br></br>
                            My Review:
                            <br></br>
                            <em className="review-content">{review.content}</em>
                            <br></br>
                            <br></br>
                            <button className="delete-review-button">Delete Review</button>
                            <button onClick={() => setIsEditing((isEditing) => !isEditing)} className="edit-review-button">Edit Review</button>
                        </div>
                    ) :( 
                        <div>
                            <button onClick={() => setIsEditing((isEditing) => !isEditing)}>Back</button>
                            <EditUserReview review={review} onUpdateReview={handleUpdateReview}/>
                        </div>
                    )}
                </div> 
            </div>
        </div>
    )
}

export default UserReviews