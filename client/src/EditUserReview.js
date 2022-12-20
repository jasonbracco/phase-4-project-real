import React, {useState} from 'react'

function EditUserReview({review, onUpdateReview}){

    const [contentChange, setContentChange] = useState(review.content)

    function handleEditReview(event) {
        event.preventDefault();
    
        fetch(`/reviews/${review.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            content: contentChange,
          }),
        })
          .then(response => response.json())
          .then((updatedReview) => onUpdateReview(updatedReview));
    }

    return(
        <form onSubmit={handleEditReview}>
            <textarea
                type="text"
                name="Review"
                value={contentChange}
                onChange={(e) => setContentChange(e.target.value)}
            />
            <div>
                <input type="submit" value="Update" />
            </div>
        </form>
    )
}

export default EditUserReview