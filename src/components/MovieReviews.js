import React from 'react';

const MovieReviews = (props) => {
  let movieList = [];
  for(let r of props.moviesArr){
    movieList.push(
        <p className="review">Title: { r.display_title } | Critics pick? { r.critics_pick ? 'YES' : 'NO' }</p>
    )
  }

  return(<div className="review-list">{ movieList }</div>)
}

export default MovieReviews;
