import React from 'react';

const PurchasePage = () => {
   return (
      <section className="purchase">
         <div className="grid grid-cols-2 gap-4 px-12">
            <div class="purchase-details card w-full bg-base-100 shadow-xl">
               <figure>
                  <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" />
               </figure>
               <div class="card-body">
                  <h2 class="card-title">Title</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <span className="text-secondary">Minimum Quantity: 5</span>
                  <span className="text-secondary">Available Quantity: 100</span>
                  <span className="btn btn-accent mt-3">Price : 100$</span>
                  <div class="card-actions justify-center mt-3">
                     <button class="btn btn-primary">Buy Now</button>
                  </div>
               </div>
            </div>
            <div>
            <form action="" className='flex flex-col items-center'>
                    <h1 className='text-3xl mb-5 font-bold'>Order Now</h1>
                  <input type="text" placeholder="Enter Your Name" class=" mb-8 input input-bordered input-primary w-full lg:w-[500px]" />
                  <input type="email" placeholder="Enter Your Email" class=" mb-8 input input-bordered input-primary w-full lg:w-[500px]" />
                  <input type="text" placeholder="Enter Your Phone Number" class=" mb-8 input input-bordered input-primary w-full lg:w-[500px]" />
                  <textarea placeholder="Your Address.." class="textarea textarea-primary mb-8 w-full lg:w-[500px]" />
                  <input type="submit" value="Order Now" className="btn-secondary mb-8 btn btn-xs sm:btn-sm md:btn-md lg:btn-lg " />
               </form>
            </div>
         </div>
      </section>
   );
};

export default PurchasePage;
