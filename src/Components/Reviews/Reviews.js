import React from 'react'
import Loading from '../Loading/Loading';
import {useQuery} from 'react-query'
import SingleReview from './SingleReview/SingleReview'

const Reviews = () => {

    //all order fetching
   const { data: reviews, isLoading: reviewsLoading, refetch: reviewsRefetch } = useQuery('reviews', () => fetch(`http://localhost:5000/reviews`).then((res) => res.json()));

   if (reviewsLoading) {
      return <Loading />;
   }


    return (
        <section className='review px-12'>
            <div className="section-title">
                <h2>Our Clients Reviews</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
            {
                reviews.map((review)=><SingleReview review={review} key={review._id}/>)
            }
            </div>
            <div className="all-review-btn text-center mt-10">
               <button class="btn btn-primary">View All Review</button>
            </div>
        </section>
    )
}

export default Reviews
