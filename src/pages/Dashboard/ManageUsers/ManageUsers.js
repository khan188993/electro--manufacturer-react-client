import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../Components/Loading/Loading';
import UserRow from './UserRow/UserRow';

const ManageUsers = () => {
   // https://electro-product-1020.herokuapp.com/users
   //all order fetching
   const { data: users, isLoading: usersLoading, refetch: usersRefetch } = useQuery('users', () => fetch(`https://electro-product-1020.herokuapp.com/users`).then((res) => res.json()));

   if (usersLoading) {
      return <Loading />;
   }
   

   return (
      <div>
         <h1 className="text-center font-bold text-2xl text-primary mb-7">Manage Users</h1>
         <div className="overflow-x-auto">
            <table className="table table-compact w-full">
               <thead>
                  <tr>
                     <th>No</th>
                     <th>Name</th>
                     <th>Email</th>
                     <th>Phone</th>
                     <th>Action</th>
                  </tr>
               </thead>
               <tbody>
                  {
                      users.map((user,index)=><UserRow usersRefetch={usersRefetch} key={user._id} index={index} user={user} />)
                  }
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default ManageUsers;
