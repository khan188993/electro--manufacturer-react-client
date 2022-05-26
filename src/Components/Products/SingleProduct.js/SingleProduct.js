import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleProduct = ({ product }) => {
   const navigate = useNavigate();
   const { _id, product_name, product_desc, product_price, product_img, product_available_quantity, product_min_order_quantity } = product;
   return (
      <div class="card w-full bg-base-100 shadow-xl">
         <figure>
            <img src={product_img} alt="Shoes" />
         </figure>
         <div class="card-body">
            <h2 class="card-title">{product_name}</h2>
            <p>{product_desc}</p>
            <span className="text-secondary">Minimum Quantity: {product_min_order_quantity}</span>
            <span className="text-secondary">Available Quantity: {product_available_quantity}</span>
            <span className="btn btn-accent mt-3">Price : {product_price}$</span>
            <div class="card-actions justify-center mt-3">
               <button onClick={()=>navigate(`/purchase/${_id}`)} class="btn btn-primary">Buy Now</button>
            </div>
         </div>
      </div>
   );
};

export default SingleProduct;
