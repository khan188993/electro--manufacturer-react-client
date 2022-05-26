import React from 'react'
import useAppContext from '../../Context/useAppContext'
import SingleProduct from './SingleProduct.js/SingleProduct'

const Products = () => {

    //all products
    const {products} = useAppContext();
    console.log(products);

    return (
        <section className='products px-12'>
            <div className="section-title">
                <h2>Our Products</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
                {
                    products.length > 0 && products.map((product)=><SingleProduct key={product._id} product={product}/>)
                }
            </div>
        </section>
    )
}

export default Products
