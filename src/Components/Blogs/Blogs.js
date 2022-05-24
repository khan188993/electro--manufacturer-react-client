import React from 'react'
import SingleBlog from './SingleBlog/SingleBlog'

const Blogs = () => {
    return (
        <section className='products px-12'>
            <div className="section-title">
                <h2>Our Blogs</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
                <SingleBlog/>
                <SingleBlog/>
                <SingleBlog/>
            </div>
        </section>
    )
}

export default Blogs
