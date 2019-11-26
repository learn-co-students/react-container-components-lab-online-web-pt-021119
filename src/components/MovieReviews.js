// Code MovieReviews Here
import React from 'react'

const MovieReviews = ({reviews}) => (
  <div className="review-list">
    {reviews.map(review => <p className="review">{review.display_title} ({review.mpaa_rating || 'Not yet rated'})</p>)}
  </div>
)

export default MovieReviews
