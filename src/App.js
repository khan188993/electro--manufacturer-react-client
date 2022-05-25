import React from 'react';
import { Route, Routes } from 'react-router-dom';
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
const App = () => {


   return (
      <AppContext.Provider value={{ data1:234, data2:"arfan" }}>
         <div className="main-wrapper">
            {/* <h1 className='my-class'>React Learning Practice code Running.</h1> */}
            <Header />
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
                  <Route path="my-profile" element={<MyProfile />}></Route>
                  <Route path="my-orders" element={<MyOrder />}></Route>
                  <Route path="make-admin" element={<MakeAdmin />}></Route>
                  <Route path="manage-products" element={<ManageProducts />}></Route>
               </Route>

               <Route path="/login" element={<LoginPage />}></Route>
               <Route
                  path="/purchase"
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
