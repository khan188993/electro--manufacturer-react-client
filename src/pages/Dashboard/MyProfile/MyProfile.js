import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import Loading from '../../../Components/Loading/Loading';
import auth from '../../../Firebase/Firebase.init';

const MyProfile = () => {
   const [user] = useAuthState(auth);
   const { data: users, isLoading: usersLoading, refetch: orderRefetch } = useQuery(['users', user], () => fetch(`http://localhost:5000/users?user_email=Fahim@gmail.com`).then((res) => res.json()));
   const [userPhone, setUserPhone] = useState("");
   const [userAddress, setUserAddress] = useState("");
   const [userImgUrl, setUserImgUrl] = useState("");


   if (usersLoading) {
      return <Loading />;
   }

   console.log(users);

   const UpdateProfile = (e) => {
      e.preventDefault();
      const updateData = {
         user_name: e.target.name.value,
         user_email: e.target.email.value,
         user_phone: e.target.phone.value,
         user_imgUrl: e.target.imgUrl.value,
         user_address: e.target.address.value,
      };
      
      fetch(`http://localhost:5000/update-users/${users[0]?._id}`, {
         method: 'PUT',
         body: JSON.stringify(updateData),
         headers: {
            'Content-type': 'application/json; charset=UTF-8',
         },
      })
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
         });


   };
   return (
      <>
         <div>
            <form onSubmit={UpdateProfile} className="flex flex-col items-center">
               <h1 className="text-3xl mb-5 font-bold">My Profile</h1>
               <input name="name" type="text" value={users[0]?.user_name} placeholder="Enter Your Name" class="btn-disabled text-primary mb-8 input w-full lg:w-[500px]" />
               <input name="email" type="email" value={users[0]?.user_email} placeholder="Enter Your Email" class=" mb-8 btn-disabled text-primary mb-8 input w-full lg:w-[500px]" />
               <input name="phone" onChange={(e) => setUserPhone(e.target.value)} type="text" value={userPhone} placeholder="Enter Your Phone Number" class=" mb-8 input input-bordered input-primary w-full lg:w-[500px]" />
               <input name="imgUrl" onChange={(e) => setUserImgUrl(e.target.value)} type="text" value={userImgUrl} placeholder="Enter Your Img Link" class=" mb-8 input input-bordered input-primary w-full lg:w-[500px]" />
               <textarea name="address" onChange={(e) => setUserAddress(e.target.value)} value={userAddress} placeholder="Your Address.." class="textarea textarea-primary mb-8 w-full lg:w-[500px]" />
               <input type="submit" value="Update Profile" className="btn-secondary mb-8 btn btn-xs sm:btn-sm md:btn-md lg:btn-lg " />
            </form>
         </div>
      </>
   );
};

export default MyProfile;
