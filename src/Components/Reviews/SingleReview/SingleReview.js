import React from 'react';
import { BsFillStarFill } from 'react-icons/bs';

const SingleReview = ({ review }) => {

   let rating=[];

   for(let i = 0; i<review.review_rating;i++){
      rating.push('rating');
   }
   // review_desc: "best website"
   // review_rating: 2
   // user_email: "khan188993@gmail.com"
   // user_imgUrl: "https://lh3.googleusercontent.com/a-/AOh14Gh5efQRY5PzYiFkKB78VuqvL4N1fDoLVXIsHpJbSg=s96-c"
   // user_name: "dipu Khan"
   // _id: "628f380d01fa9257176bfbe6"
   return (
      <div class="card w-full bg-base-100 shadow-xl">
         <div className="review-img text-center">
            <div class="avatar">
               <div class="w-24 mt-7 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={review?.user_imgUrl} />
               </div>
            </div>
         </div>
         <div class="card-body items-center text-center">
            <h2 class="card-title">{review?.user_name}</h2>
            <div className="review-stars">
               <div class="rating">
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
