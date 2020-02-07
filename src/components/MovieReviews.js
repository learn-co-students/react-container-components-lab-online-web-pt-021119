import React from 'react';


const MovieReviews = ({ moviesArr }) => moviesArr.map(r => <p className="review">Title: { r.display_title } | Critics pick? { r.critics_pick ? 'YES' : 'NO' }</p>)

export default MovieReviews;