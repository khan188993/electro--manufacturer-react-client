import React from 'react';

const UserRow = ({ user, index,usersRefetch }) => {
   const deleteUser = (email) => {
      fetch(`https://electro-product-1020.herokuapp.com/delete-users/${email}`, {
         method: 'DELETE',
      })
      .then(res=>res.json())
      .then(data=>{
          console.log(data);
          usersRefetch()
      });
   };

   return (
      <tr>
         <td>{index + 1}</td>
         <td>{user.user_name}</td>
         <td>{user.user_email}</td>
         <td>{user.user_phone}</td>
         <td>
            <button className="btn btn-error mr-3" onClick={() => deleteUser(user?.user_email)}>
               delete
            </button>
            <button className="btn btn-primary">Make Admin</button>
         </td>
      </tr>
   );
};

export default UserRow;
