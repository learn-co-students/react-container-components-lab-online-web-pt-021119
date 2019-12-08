import React from 'react'

const Review = ({headline,link, display_title}) => {
  return (
    <div key={headline} className='review'>
    <a href={link.url} target="_blank"> {display_title} </a>
    </div>
  )
}

const MovieReviews = ({reviews}) =>
  <div className='review-list'>{reviews.map(Review
  )}</div>;

MovieReviews.defaultProps = {reviews:[]}


export default MovieReviews;
