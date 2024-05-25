import React, { useState } from 'react';

import './star-rating.styles.css';

const StarRating = () => {
  const maxRating = 5;

  const [currentRating, setCurrentRating] = useState(0);

  return (
    <div className='star-rating-container'>
      currentRating: { currentRating }
      {
        [...Array(5)].map((_, idx) => {
          const ratingValue = idx + 1;
          
          return <p onClick={() => setCurrentRating(ratingValue)} key={idx}>{ratingValue}</p>
        })
      }
    </div>
  )
}

export default StarRating;