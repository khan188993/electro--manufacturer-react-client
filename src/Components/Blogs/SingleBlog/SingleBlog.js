import React from 'react'
import { useNavigate } from 'react-router-dom'

const SingleBlog = () => {
    const navigate = useNavigate()
    return (
        <div class="blogs card w-full bg-base-100 shadow-xl">
         <figure>
            <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" />
         </figure>
         <div class="card-body">
            <h2 class="card-title">Title</h2>
            <p>If a dog chews shoes whose shoes does he choose? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit ipsum cum molestias illo maxime maiores explicabo voluptatum vel accusantium impedit.</p>
            <div class="card-actions justify-center mt-3">
               <button onClick={()=>navigate('/blog-details/title')} class="btn btn-primary">Read More</button>
            </div>
         </div>
      </div>
    )
}

export default SingleBlog
