import React from 'react';

const OrderRow = ({ order, index, orderRefetch }) => {
   //deleting order
   const deleteOrder = (id) => {
      const confirmMessage = window.confirm('Are you sure to delete?');
      if (confirmMessage) {
         fetch(`https://electro-product-1020.herokuapp.com/delete-order/${id}`, {
            method: 'DELETE',
         })
            .then((res) => res.json())
            .then((data) => {
               console.log(data);
               orderRefetch();
            });
      }
   };
   return (
      <tr>
         <th>{index + 1}</th>
         <td>{order?.buyer_name}</td>
         <td>{order?.buyer_email}</td>
         <td>{order?.product_name}</td>
         <td>{order?.order_quantity}</td>
         <td>{order?.product_per_price}</td>
         <td>{order?.total_price}</td>
         <td>
            <button onClick={() => deleteOrder(order?.product_id)} className="btn btn-error">
               Delete Order
            </button>
         </td>
      </tr>
   );
};

export default OrderRow;
