import React from 'react';
import { FaBeer } from 'react-icons/fa';

const SingleSummery = () => {
   return (
      <div class="card w-full bg-base-100 shadow-xl">
         <div className="business-icons flex justify-center mt-7">
            <FaBeer className='w-50'/>
         </div>
         <div class="card-body items-center text-center">
            <h2 class="card-title text-secondary text-3xl">550+</h2>
            <p className='text-success font-bold text-2xl'>Complete Projects</p>
         </div>
      </div>
   );
};

export default SingleSummery;
