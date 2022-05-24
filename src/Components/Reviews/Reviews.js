import React from 'react'
import SingleReview from './SingleReview/SingleReview'

const Reviews = () => {
    return (
        <section className='review px-12'>
            <div className="section-title">
                <h2>Our Clients Reviews</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
                <SingleReview/>
                <SingleReview/>
                <SingleReview/>
            </div>
            <div className="all-review-btn text-center mt-10">
               <button class="btn btn-primary">View All Review</button>
            </div>
        </section>
    )
}

export default Reviews
