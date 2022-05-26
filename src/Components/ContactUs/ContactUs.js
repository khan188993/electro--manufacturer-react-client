import React from 'react';

const ContactUs = () => {
   return (
      <section className="contact-us px-12">
         <div className="section-title">
            <h2>Contact Us</h2>
         </div>
         <div className="">
            {/* AiFillFlag AiFillProject IoIosPeople BsStars */}
            <div className="form text-center">
               <form action="">
                  <input type="text" placeholder="Your Name" className=" mb-8 input input-bordered input-primary w-full lg:w-[500px]" /><br/>
                  <input type="email" placeholder="Your Email" className=" mb-8 input input-bordered input-primary w-full lg:w-[500px]" /><br/>
                  <input type="text" placeholder="Subject" className=" mb-8 input input-bordered input-primary w-full lg:w-[500px]" /><br/>
                  <textarea placeholder="Messages.." className="textarea textarea-primary mb-8 w-full lg:w-[500px]" /><br/>
                  <input type="submit" value='Submit' className="btn-secondary mb-8 btn btn-xs sm:btn-sm md:btn-md lg:btn-lg " />
               </form>
            </div>
         </div>
      </section>
   );
};

export default ContactUs;
