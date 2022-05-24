import React from 'react';

const SingleReview = () => {
   return (
      <div class="card w-full bg-base-100 shadow-xl">
         <div className="review-img text-center">
            <div class="avatar">
               <div class="w-24 mt-7 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src="https://api.lorem.space/image/face?hash=3174" />
               </div>
            </div>
         </div>
         <div class="card-body items-center text-center">
            <h2 class="card-title">Arfan Khan</h2>
            <div className="review-stars">
               <div class="rating">
                  <input type="radio" name="rating-1" class="mask mask-star" />
                  <input type="radio" name="rating-1" class="mask mask-star" checked />
                  <input type="radio" name="rating-1" class="mask mask-star" />
                  <input type="radio" name="rating-1" class="mask mask-star" />
                  <input type="radio" name="rating-1" class="mask mask-star" />
               </div>
            </div>
            <p>If a dog chews shoes whose shoes does he choose?</p>
         </div>
      </div>
   );
};

export default SingleReview;
