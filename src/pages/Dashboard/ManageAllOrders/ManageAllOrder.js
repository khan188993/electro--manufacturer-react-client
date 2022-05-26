import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../Components/Loading/Loading';
import AllOrderRow from './AllOrderRow/AllOrderRow';


const ManageAllOrder = () => {

   //all order fetching
   const { data: orders, isLoading: ordersLoading, refetch: orderRefetch } = useQuery('orders', () => fetch(`http://localhost:5000/orders`).then((res) => res.json()));

   if (ordersLoading) {
      return <Loading />;
   }
   return (
      <div>
         <h1 className="text-center font-bold text-2xl text-primary mb-7">Manage All Orders</h1>
         <div class="overflow-x-auto">
            <table class="table table-compact w-full">
               <thead>
                  <tr>
                     <th>No</th>
                     <th>Name</th>
                     <th>Email</th>
                     <th>Product Name</th>
                     <th>Order Quantity</th>
                     <th>Price</th>
                     <th>Total Price</th>
                  </tr>
               </thead>
               <tbody>
                  {orders.map((order, index) => (
                     <AllOrderRow key={order._id} order={order} index={index} />
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default ManageAllOrder;
