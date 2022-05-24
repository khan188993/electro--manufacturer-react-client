import React from 'react';
import BusinessSummery from '../../Components/BusinessSummery/BusinessSummery';
import ContactUs from '../../Components/ContactUs/ContactUs';
import DiscountOffer from '../../Components/DiscountOffer/DiscountOffer';
import Footer from '../../Components/Footer/Footer';
import HeroBanner from '../../Components/HeroBanner/HeroBanner';
import Products from '../../Components/Products/Products';
import Reviews from '../../Components/Reviews/Reviews';

const Home = () => {
   return (
      <div>
         {/* header,banner,reviews,products,footer,business summery, */}
         <HeroBanner/>
         <Products/>
         <Reviews/>
         <BusinessSummery/>
         <DiscountOffer/>
         <ContactUs/>
         <Footer/>
      </div>
   );
};

export default Home;
