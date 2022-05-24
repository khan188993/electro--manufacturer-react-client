import React from 'react';

const SingleProduct = () => {
   return (
      <div class="card w-full bg-base-100 shadow-xl">
         <figure>
            <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" />
         </figure>
         <div class="card-body">
            <h2 class="card-title">Title</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <span className='text-secondary'>Minimum Quantity: 5</span>
            <span className='text-secondary'>Available Quantity: 100</span>
            <span className='btn btn-accent mt-3'>Price : 100$</span>
            <div class="card-actions justify-center mt-3">
               <button class="btn btn-primary">Buy Now</button>
            </div>
         </div>
      </div>
   );
};

export default SingleProduct;
