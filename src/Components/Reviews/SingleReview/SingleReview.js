import React from 'react';
import { BsFillStarFill } from 'react-icons/bs';

const SingleReview = ({ review }) => {

   let rating=[];

   for(let i = 0; i<review.review_rating;i++){
      rating.push('rating');
   }
   return (
      <div className="card w-full bg-base-100 shadow-xl">
         <div className="review-img text-center">
            <div className="avatar">
               <div className="w-24 mt-7 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={review?.user_imgUrl} />
               </div>
            </div>
         </div>
         <div className="card-body items-center text-center">
            <h2 className="card-title">{review?.user_name}</h2>
            <div className="review-stars">
               <div className="rating">
                  {
                     rating.length > 0 && rating.map((rating,index)=><BsFillStarFill key={index}/>)
                  }
               </div>
            </div>
            <p>{review?.review_desc}</p>
         </div>
      </div>
   );
};

export default SingleReview;
