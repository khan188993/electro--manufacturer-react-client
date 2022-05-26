import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../../../Components/Loading/Loading';
import { useQuery } from 'react-query';
import auth from '../../../Firebase/Firebase.init';
import OrderRow from './OrderRow/OrderRow';

const MyOrder = () => {
    const [user] = useAuthState(auth);
    //all order fetching 
   const { data: orders, isLoading: ordersLoading , refetch: orderRefetch } = useQuery(['orders',user.email], () => fetch(`https://electro-product-1020.herokuapp.com/orders?buyer_email=${user.email}`)
   .then(res => res.json()))

   if(ordersLoading){
       return <Loading/>
   }

   return (
      <div>
         <h1 className="text-center font-bold text-2xl text-primary mb-7">My Orders</h1>
         <div className="overflow-x-auto">
            <table className="table table-compact w-full">
               <thead>
                  <tr>
                     <th>No</th>
                     <th>Name</th>
                     <th>Email</th>
                     <th>Product Name</th>
                     <th>Order Quantity</th>
                     <th>Price</th>
                     <th>Total Price</th>
                     <th>Action</th>
                  </tr>
               </thead>
               <tbody>
                   {
                       orders.map((order,index)=><OrderRow orderRefetch={orderRefetch} key={order._id} order={order} index={index}/>)
                   }
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default MyOrder;
