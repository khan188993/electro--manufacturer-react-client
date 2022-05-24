import React from 'react'
import SingleSummery from './SingleSummery/SingleSummery'

const BusinessSummery = () => {
    return (
        <section className='products px-12'>
            <div className="section-title">
                <h2>Our Previous Experience</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
            {/* AiFillFlag AiFillProject IoIosPeople BsStars */}
               <SingleSummery/>
               <SingleSummery/>
               <SingleSummery/>
               <SingleSummery/>
            </div>
        </section>
    )
}

export default BusinessSummery
