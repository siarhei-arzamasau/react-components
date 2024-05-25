import React from 'react';

const StarRating = () => {
  const maxRating = 5;

  return (
    <div>
      {
        [...Array(5)].map((_, idx) => <p key={idx}>{idx + 1}</p>)
      }
    </div>
  )
}

export default StarRating;