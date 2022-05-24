import React from 'react'
import SingleProduct from './SingleProduct.js/SingleProduct'

const Products = () => {
    return (
        <section className='products px-12'>
            <div className="section-title">
                <h2>Our Products</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
                <SingleProduct/>
                <SingleProduct/>
                <SingleProduct/>
            </div>
        </section>
    )
}

export default Products
