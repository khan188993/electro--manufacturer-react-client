import React from 'react';

const UserRow = ({user,index}) => {

    const deleteUser = (id)=>{
        
    }

   return (
      <tr>
         <td>{index+1}</td>
         <td>{user.user_name}</td>
         <td>{user.user_email}</td>
         <td>{user.user_phone}</td>
         <td>
            <button className="btn btn-error mr-3" onClick={()=>deleteUser(user._id)}>delete</button>
            <button className="btn btn-primary">Make Admin</button>
         </td>
      </tr>
   );
};

export default UserRow;
