import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useQuery } from 'react-query';
import Header from './Components/Header/Header';
import AppContext from './Context/AppContext';
import './css/App.css';
import AboutPage from './pages/AboutPage/AboutPage';
import BlogDetails from './pages/BlogDetails/BlogDetails';
import BlogPage from './pages/BlogPage/BlogPage';
import Dashboard from './pages/Dashboard/Dashboard';
import MakeAdmin from './pages/Dashboard/MakeAdmin/MakeAdmin';
import ManageProducts from './pages/Dashboard/ManageProducts/ManageProducts';
import MyOrder from './pages/Dashboard/MyOrder/MyOrder';
import MyProfile from './pages/Dashboard/MyProfile/MyProfile';
import Home from './pages/Home/Home';
import LoginPage from './pages/LoginPage/LoginPage';
import MyPortfolio from './pages/MyPortfolio/MyPortfolio';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import PurchasePage from './pages/PurchasePage/PurchasePage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import PrivateAuth from './PrivateRoute/PrivateAuth';
import Loading from './Components/Loading/Loading';
import { Toaster } from 'react-hot-toast';
import ManageAllOrder from './pages/Dashboard/ManageAllOrders/ManageAllOrder';
import ManageUsers from './pages/Dashboard/ManageUsers/ManageUsers';
import AddReview from './pages/Dashboard/AddReview/AddReview';
import AlertModal from './Components/AlertModal/AlertModal';

const App = () => {
   //use query fetch product data 
   // const proxy = 'http://localhost:5000';
   const { data: products, isLoading: productLoading , refetch: productRefetch } = useQuery('products', () => fetch(`https://electro-product-1020.herokuapp.com/products`)
        .then(res => res.json()))

   

   if(productLoading){
      return <Loading/>
   }



   return (
      <AppContext.Provider value={{ products, productRefetch}}>
         <div className="main-wrapper">
            {/* <h1 className='my-class'>React Learning Practice code Running.</h1> */}
            <Header />
            <Toaster />
            {/* Routes  */}
            <Routes>
               <Route path="/" element={<Home />}></Route>
               <Route path="/about" element={<AboutPage />}></Route>
               <Route path="/blogs" element={<BlogPage />}></Route>
               <Route path="/blog-details/:title" element={<BlogDetails />}></Route>
               <Route path="/my-portfolio" element={<MyPortfolio />}></Route>
               <Route
                  path="dashboard"
                  element={
                     <PrivateAuth>
                        <Dashboard />
                     </PrivateAuth>
                  }
               >
                  <Route index element={<MyProfile />}></Route>
                  <Route path="my-profile" element={<MyProfile />}></Route>
                  <Route path="my-orders" element={<MyOrder />}></Route>
                  <Route path="add-review" element={<AddReview />}></Route>

                  <Route path="manage-all-order" element={<ManageAllOrder />}></Route>
                  <Route path="manage-users" element={<ManageUsers />}></Route>
                  <Route path="make-admin" element={<MakeAdmin />}></Route>
                  <Route path="manage-products" element={<ManageProducts />}></Route>
               </Route>

               <Route path="/login" element={<LoginPage />}></Route>
               <Route
                  path="/purchase/:id"
                  element={
                     <PrivateAuth>
                        <PurchasePage />
                     </PrivateAuth>
                  }
               ></Route>
               <Route path="/signup" element={<SignUpPage />}></Route>
               <Route path="*" element={<NotFoundPage />}></Route>
            </Routes>
         </div>
      </AppContext.Provider>
   );
};

export default App;
