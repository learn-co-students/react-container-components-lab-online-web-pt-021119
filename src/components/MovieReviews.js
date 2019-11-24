// Code MovieReviews Here
import React from 'react'

const MovieReviews = ({reviews}) => (
<div className="review-list">
{reviews.map(review =>
<div className="review">
<p><b>{review.display_title}</b></p>
<p>{review.summary_short}</p>
</div>
)}
</div>
)


MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews;
