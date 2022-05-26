import React from 'react';

const MyPortfolio = () => {
   return (
      <section className="flex justify-center">
         <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
               <img src="https://arfankhan.netlify.app/images/hero.jpg" alt="Shoes" />
            </figure>
            <div className="card-body">
               <h2 className="card-title text-primary">Arfan Khan</h2>
               <span className="text-secondary font-bold block">Contact : khan188993@gmail.com</span>
               <span className="text-green font-bold block">Education Status : Studying on BBA</span>
               <span className="text-success font-bold block">
                  technology i know:
                  <br />
                  <br />
                  <button className="btn btn-primary btn-xs mr-2 mb-5">Html</button>
                  <button className="btn btn-primary btn-xs mr-2 mb-5">css</button>
                  <button className="btn btn-primary btn-xs mr-2 mb-5">JS</button>
                  <button className="btn btn-primary btn-xs mr-2 mb-5">React</button>
                  <button className="btn btn-primary btn-xs mr-2 mb-5">NodeJs</button>
                  <button className="btn btn-primary btn-xs mr-2 mb-5">MongoDB</button>
                  <button className="btn btn-primary btn-xs mr-2 mb-5">Github</button>
               </span>
               <p>I’m a Full Stack Web Developer who is enthusiastic about making attracting websites with 100% client satisfaction. I have pretty good knowledge about ReactJs. currently I'm learning MERN STACK Development. I have also made some beautiful projects with Wordpress and Laravel. I am Strategic , Goal-Oriented, and always work with an end goal in mind.</p>
               <h1 className='text-primary font-bold text-center mt-6 mb-3'>My Best Three Project Link: </h1>
               <div className="card-actions justify-end">
                  <a href='https://kachari-lawyer.web.app/' target='_blank' className="btn btn-success btn-xs">Kachari Lawyer</a>
                  <a href='https://computer-world.netlify.app/' target='_blank' className="btn btn-success btn-xs">Computer World</a>
                  <a href='https://watch-house.netlify.app/' target='_blank' className="btn btn-success btn-xs">Watch House</a>
               </div>
            </div>
         </div>
      </section>
   );
};

export default MyPortfolio;
