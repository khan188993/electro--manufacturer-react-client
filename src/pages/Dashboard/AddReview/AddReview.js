import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/Firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth)



   const AddReview = (e) => {
    e.preventDefault();
    console.log('running');
    const data = {
       user_name: e.target.name.value,
       user_email: e.target.email.value,
       user_imgUrl: e.target.imgUrl.value,
       review_rating: e.target.rating.value,
       review_desc: e.target.desc.value,
    };

    fetch(`http://localhost:5000/reviews`, {
       method: 'POST',
       body: JSON.stringify(data),
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
      <div>
         <form onSubmit={AddReview} className="flex flex-col items-center">
            <h1 className="text-3xl mb-5 font-bold">Add Review</h1>
            <input name="name" type="text" value={user?.displayName} placeholder="Enter Your Name" class="btn-disabled text-primary mb-8 input w-full lg:w-[500px]" />
            <input name="email" type="email" value={user?.email} placeholder="Enter Your Email" class=" mb-8 btn-disabled text-primary mb-8 input w-full lg:w-[500px]" />
            <input name="imgUrl"  type="text" value={user?.photoURL} placeholder="Enter Your Img Link" class=" mb-8 btn-disabled text-primary mb-8 input w-full lg:w-[500px]" />
            <input name="rating"  type="number" min='0' max='5' placeholder="Enter Your rating number" class=" mb-8 input input-bordered input-primary w-full lg:w-[500px]" />
            <textarea name="desc" placeholder="What do you think about us.." class="textarea textarea-primary mb-8 w-full lg:w-[500px]" />
            <input type="submit" value="Add review" className="btn-secondary mb-8 btn btn-xs sm:btn-sm md:btn-md lg:btn-lg " />
         </form>
      </div>
   );
};

export default AddReview;
