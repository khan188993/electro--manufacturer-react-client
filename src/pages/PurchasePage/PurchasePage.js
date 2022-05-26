import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import useAppContext from '../../Context/useAppContext';
import auth from '../../Firebase/Firebase.init';

const PurchasePage = () => {
   const { id } = useParams();
   const { products } = useAppContext();
   const purchasedProduct = products.find((product) => product._id === id);
   const { _id, product_name, product_desc, product_price, product_img, product_available_quantity, product_min_order_quantity } = purchasedProduct;
   const [user] = useAuthState(auth);
   const [quantity, setQuantity] = useState(product_min_order_quantity);

   const handleOrder = (e) => {
      e.preventDefault();

      const orderInfo = {
         buyer_name: e.target.user_name.value,
         buyer_email: e.target.email.value,
         buyer_phone: e.target.phone.value,
         buyer_address: e.target.address.value,
         product_id: _id,
         product_name: product_name,
         product_per_price: product_price,
         order_quantity: quantity,
         total_price: product_price * quantity,
      };

      fetch('http://localhost:5000/orders', {
         method: 'POST',
         body: JSON.stringify(orderInfo),
         headers: {
            'Content-type': 'application/json; charset=UTF-8',
         },
      })
         .then((response) => response.json())
         .then((data) => {
            console.log(data)
         });
   };

   return (
      <section className="purchase">
         <div className="grid grid-cols-2 gap-4 items-center px-12">
            <div class="purchase-details flex lg:flex-row card w-full bg-base-100 shadow-xl">
               <figure>
                  <img src={product_img} alt={product_name} />
               </figure>
               <div class="card-body">
                  <h2 class="card-title">{product_name}</h2>
                  {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                  <span className="text-secondary">Minimum Quantity: {product_min_order_quantity}</span>
                  <span className="text-secondary">Available Quantity: {product_available_quantity}</span>
                  <input type="number" disabled={quantity < product_min_order_quantity || (quantity > product_available_quantity && 'disable')} onChange={(e) => setQuantity(e.target.value)} value={quantity} placeholder="Order Quantity" class=" mb-8 input input-bordered input-primary w-full lg:w-[500px]" />
                  {(quantity < product_min_order_quantity || quantity > product_available_quantity) && <p className="text-error">"you have to buy between min and max number of products"</p>}

                  <span className="btn btn-accent mt-3">Per Product Price : {product_price}$</span>
                  <span className="btn btn-success mt-3">Total Price : {product_price * quantity}$</span>
               </div>
            </div>
            <div>
               <form onSubmit={handleOrder} className="flex flex-col items-center">
                  <h1 className="text-3xl mb-5 font-bold">Order Now</h1>
                  <input name="user_name" type="text" value={user.displayName} placeholder="Enter Your Name" class="btn-disabled text-primary mb-8 input w-full lg:w-[500px]" />
                  <input name="email" type="email" value={user.email} placeholder="Enter Your Email" class=" mb-8 btn-disabled text-primary mb-8 input w-full lg:w-[500px]" />
                  <input name="phone" type="text" placeholder="Enter Your Phone Number" class=" mb-8 input input-bordered input-primary w-full lg:w-[500px]" />
                  <textarea name="address" placeholder="Your Address.." class="textarea textarea-primary mb-8 w-full lg:w-[500px]" />
                  <input disabled={quantity < product_min_order_quantity || (quantity > product_available_quantity && 'disable')} type="submit" value="Order Now" className="btn-secondary mb-8 btn btn-xs sm:btn-sm md:btn-md lg:btn-lg " />
               </form>
            </div>
         </div>
      </section>
   );
};

export default PurchasePage;
