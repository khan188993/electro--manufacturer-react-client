import React from 'react'
import { useNavigate } from 'react-router-dom'

const SignUpPage = () => {
    const navigate = useNavigate();
    return (
        <section className="login px-12">
         <div className="section-title">
            <h2>Sign Up</h2>
         </div>
         <div className="">
            {/* AiFillFlag AiFillProject IoIosPeople BsStars */}
            <div className="form">
               <form action="" className='flex flex-col items-center'>
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
                  <button className="btn btn-accent btn-wide">Sign UP With Google</button>
               </div>
            </div>
         </div>
      </section>
    )
}

export default SignUpPage
