import React from 'react';
import SingleBlog from './SingleBlog/SingleBlog';

const Blogs = () => {
   return (
      <section className="products px-12">
         <div className="section-title">
            <h2>Our Blogs</h2>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
            <div className="blogs card w-full bg-base-100 shadow-xl">
               <div className="card-body">
                  <h2 className="card-title">What are the different ways to manage a state in a React application</h2>
                  <p>To Manage state of react application we can use react build in hook called useContext/CreateContext. It is easy to use and there is no need to pass pops if we use context api.beside that we can also manage state by pops passing one component to others.but it will be so messy for larger application. there are also some third party library that help to manage react state easily. some example of them are Redux,Recoil,Jotai etc</p>
               </div>
            </div>
            <div className="blogs card w-full bg-base-100 shadow-xl">
               <div className="card-body">
                  <h2 className="card-title">How will you improve the performance of a React Application?</h2>
                  <p>We have to Keep component state local where necessary. We should Memoize React components to prevent unnecessary re-renders. We can use Code-splitting in React using dynamic import() Windowing or list virtualization in React can also improved performance. Lazy loading images in React application will be great for speed.</p>
               </div>
            </div>
            <div className="blogs card w-full bg-base-100 shadow-xl">
               <div className="card-body">
                  <h2 className="card-title">How does prototypical inheritance work?</h2>
                  <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
               </div>
            </div>
            <div className="blogs card w-full bg-base-100 shadow-xl">
               <div className="card-body">
                  <h2 className="card-title">Why you do not set the state directly in React.</h2>
                  <p>One should never update the state directly because of the following reasons: If you update it directly, calling the setState() afterward may just replace the update you made. When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value. You will lose control of the state across all components.</p>
               </div>
            </div>
            <div className="blogs card w-full bg-base-100 shadow-xl">
               <div className="card-body">
                  <h2 className="card-title">What is a unit test? Why should write unit tests?</h2>
                  <p>
                     Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the
                     product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently
                  </p>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Blogs;

/*We have Keep component state local where necessary.
We should Memoize React components to prevent unnecessary re-renders.
We can use Code-splitting in React using dynamic import()
Windowing or list virtualization in React can also improved performance.
Lazy loading images in React application will be great for speed. */
