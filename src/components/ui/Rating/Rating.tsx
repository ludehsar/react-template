import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

export interface RatingProps {
  rating: number;
  ratingCount: number;
}

export const Rating: React.FC<RatingProps> = ({ rating, ratingCount }) => {
  return (
    <div className="flex items-center justify-between">
      {Array.from(Array(rating)).map((rated) => (
        <AiFillStar color="#FCD408" size={16} key={rated} />
      ))}
      {Array.from(Array(5 - rating)).map((unrated) => (
        <AiOutlineStar size={14} color="#666F6E" key={unrated} />
      ))}
      <h4 className="ml-1 text-xs font-light text-secondary">
        ({ratingCount})
      </h4>
    </div>
  );
};
