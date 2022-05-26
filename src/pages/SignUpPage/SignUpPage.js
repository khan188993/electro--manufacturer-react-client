import React from 'react';
import {  useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Components/Loading/Loading';
import auth from '../../Firebase/Firebase.init';

const SignUpPage = () => {
   const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
   const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
   const {
      register,
      formState: { errors },
      handleSubmit,
   } = useForm();
   const [updateProfile, updating, updateError] = useUpdateProfile(auth);
   const navigate = useNavigate();

   let signInError;

   if (loading || gLoading || updating) {
      return <Loading/>;
   }

   if (error || gError || updateError) {
      signInError = (
         <p className="text-red-500">
            <small>{error?.message || gError?.message || updateError?.message}</small>
         </p>
      );
   }

   if (user || gUser) {
      console.log(user || gUser);
   }

   const onSubmit = async (data) => {
      console.log(data);
      await createUserWithEmailAndPassword(data.email, data.password);
      await updateProfile({ displayName: data.name,photoURL:data.photoUrl });
      navigate('/')
      
   };

   console.log(user);

   return (
      <section className="login px-12">
         <div className="section-title">
            <h2>Sign Up</h2>
         </div>
         <div className="">
            {/* AiFillFlag AiFillProject IoIosPeople BsStars */}
            <div className="form">
               <form onSubmit={handleSubmit(onSubmit)} action="" className="flex flex-col items-center">
                  {/* user name */}
                  <input
                     type="text"
                     placeholder="Enter Your Name"
                     class=" mb-8 input input-bordered input-primary w-full lg:w-[500px]"
                     {...register('name', {
                        required: {
                           value: true,
                           message: 'Name is Required',
                        },
                     })}
                  />
                  <label className="label">{errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}</label>
                  {/* user img url */}
                  <input
                     type="text"
                     placeholder="Enter Your img url"
                     class=" mb-8 input input-bordered input-primary w-full lg:w-[500px]"
                     {...register('photoUrl')}
                  />
                  <label className="label">{errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}</label>
                  {/* user Email */}
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
                  {/* user password  */}
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
                  {/* submit */}
                  <input type="submit" value="singup" className="btn-secondary mb-8 btn btn-xs sm:btn-sm md:btn-md lg:btn-lg " />
                  {signInError && <p>{signInError}</p>}
               </form>
               <div className="new-register text-center">
                  <span className="text-orange-600">Already Registered?</span>{' '}
                  <button onClick={() => navigate('/login')} className="btn btn-link">
                     Please login
                  </button>
               </div>
               <div className="flex justify-center">
                  <div class="flex flex-col w-[600px] border-opacity-50">
                     <div class="divider">OR</div>
                  </div>
               </div>
               <div className="google text-center">
                  <button onClick={() => signInWithGoogle()} className="btn btn-accent btn-wide">
                     Sign UP With Google
                  </button>
               </div>
            </div>
         </div>
      </section>
   );
};

export default SignUpPage;
