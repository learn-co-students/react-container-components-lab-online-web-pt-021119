import React from 'react'

const MovieReviews = ({movieReviews}) => (
	<ul className='review-list'>
		{movieReviews.map(review => {
				return (<li className='review'>{review.summary_short}</li>)
			})
		}
	</ul>
)

export default MovieReviews;
