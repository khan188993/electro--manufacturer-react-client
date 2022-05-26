import React from 'react';

const AllOrderRow = ({order,index}) => {
    console.log(order);
   return (
      <tr>
         <th>{index+1}</th>
         <td>{order?.buyer_name}</td>
         <td>{order?.buyer_email}</td>
         <td>{order?.product_name}</td>
         <td>{order?.order_quantity}</td>
         <td>{order?.product_per_price}</td>
         <td>{order?.total_price}</td>
      </tr>
   );
};

export default AllOrderRow;
