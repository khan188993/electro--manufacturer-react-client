import React, { useEffect } from 'react';
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import auth from '../../Firebase/Firebase.init';

const LoginPage = () => {
   const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
   const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
   const {
      register,
      formState: { errors },
      handleSubmit,
   } = useForm();

   let signInError;

   const navigate = useNavigate();
   const location = useLocation();
   let from = location.state?.from?.pathname || '/';

   useEffect(() => {
      if (user || gUser) {
         navigate(from, { replace: true });
      }
   }, [user, gUser, from, navigate]);

   if (loading || gLoading) {
      return <h1>Loading from login page...</h1>;
   }

   if (error || gError) {
      signInError = (
         <p className="text-red-500">
            <small>{error?.message || gError?.message}</small>
         </p>
      );
   }

   const onSubmit = (data) => {
      console.log(data);
      signInWithEmailAndPassword(data.email, data.password);
   };

   console.log('user',gUser);

   return (
      <section className="login px-12">
         <div className="section-title">
            <h2>Login</h2>
         </div>
         <div className="">
            {/* AiFillFlag AiFillProject IoIosPeople BsStars */}
            <div className="form">
               <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
                  {/* email */}
                  <input
                     type="email"
                     placeholder="Enter Your Email"
                     class=" mb-8 input input-bordered input-primary w-full lg:w-[500px]"
                     {...register('email', {
                        required: {
                           value: true,
                           message: 'Email is Required',
                        },
                        pattern: {
                           value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                           message: 'Provide a valid Email',
                        },
                     })}
                  />
                  <label className="label">
                     {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                     {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                  </label>

                  {/* password */}
                  <input
                     type="password"
                     placeholder="Enter Your Password"
                     class=" mb-8 input input-bordered input-primary w-full lg:w-[500px]"
                     {...register('password', {
                        required: {
                           value: true,
                           message: 'Password is Required',
                        },
                        minLength: {
                           value: 6,
                           message: 'Must be 6 characters or longer',
                        },
                     })}
                  />
                  <label className="label">
                     {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                     {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                  </label>

                  <button className="mb-4 btn inline-block">Forget Password??</button>
                  <input type="submit" value="Submit" className="btn-secondary mb-8 btn btn-xs sm:btn-sm md:btn-md lg:btn-lg " />
                  {signInError && <p>{signInError}</p>}
               </form>
               <div className="new-register text-center">
                  <span className="text-orange-600">New To Our Webstie</span>{' '}
                  <button onClick={() => navigate('/signup')} className="btn btn-link">
                     Create New Account
                  </button>
               </div>
               <div className="flex justify-center">
                  <div class="flex flex-col w-[600px] border-opacity-50">
                     <div class="divider">OR</div>
                  </div>
               </div>
               <div className="google text-center">
                  <button onClick={() => signInWithGoogle()} className="btn btn-accent btn-wide">Login With Google</button>
               </div>
            </div>
         </div>
      </section>
   );
};

export default LoginPage;
