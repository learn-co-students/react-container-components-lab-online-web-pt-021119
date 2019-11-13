import React from 'react'

const MovieReviews = ({movieReviews}) => (
	<ul className='review-list'>
		{movieReviews.map(review => {
				return (<li className='review'>{review.summary_short}</li>)
			})
		}
	</ul>
)

MovieReviews.defaultProps = {
  movieReviews: [1,2,3]
};

export default MovieReviews;
