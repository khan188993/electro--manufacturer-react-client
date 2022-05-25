import React from 'react';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';

const SignUpPage = () => {
   const [user, loading, error] = useAuthState(auth);
   const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
   const navigate = useNavigate();

   if (error || gError) {
      return (
        <div>
          <p>Error: {error.message}</p>
        </div>
      );
    }

    if (loading || gLoading) {
      return <p>Loading...</p>;
    }

    if (user) {
      return (
        <div>
          <p>Signed In User: {user.displayName}</p>
        </div>
      );
    }

   return (
      <section className="login px-12">
         <div className="section-title">
            <h2>Sign Up</h2>
         </div>
         <div className="">
            {/* AiFillFlag AiFillProject IoIosPeople BsStars */}
            <div className="form">
               <form action="" className="flex flex-col items-center">
                  <input type="text" placeholder="Enter Your Name" class=" mb-8 input input-bordered input-primary w-full lg:w-[500px]" />
                  <input type="email" placeholder="Enter Your Email" class=" mb-8 input input-bordered input-primary w-full lg:w-[500px]" />
                  <input type="password" placeholder="Enter Your Password" class=" mb-8 input input-bordered input-primary w-full lg:w-[500px]" />
                  <input type="submit" value="Submit" className="btn-secondary mb-8 btn btn-xs sm:btn-sm md:btn-md lg:btn-lg " />
               </form>
               <div className="new-register text-center">
                  <span className="text-orange-600">Already Registered?</span>{' '}
                  <button onClick={() => navigate('/login')} className="btn btn-link">
                     Login
                  </button>
               </div>
               <div className="flex justify-center">
                  <div class="flex flex-col w-[600px] border-opacity-50">
                     <div class="divider">OR</div>
                  </div>
               </div>
               <div className="google text-center">
                  <button onClick={()=>signInWithGoogle()} className="btn btn-accent btn-wide">Sign UP With Google</button>
               </div>
            </div>
         </div>
      </section>
   );
};

export default SignUpPage;
