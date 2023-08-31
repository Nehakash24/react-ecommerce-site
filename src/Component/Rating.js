import React from 'react'
import { AiFillStar, AiOutlineStar } from "react-icons/ai";


const Rating = ({rating , onClick , style ,count}) =>{
  console.log(rating+"rating")
   return <div>
    {
      [...Array(5)].map((_,i) =>(
        <span key={i} onClick={() => onClick(i)} style={style}>
         {rating -1+0.001 > i ? (
            <AiFillStar fontSize="15px" />
          ) : (
            <AiOutlineStar fontSize="15px" />
          )}
        </span>
        
       ))}
       <h6>{count} Review</h6>
   </div>
};

export default Rating