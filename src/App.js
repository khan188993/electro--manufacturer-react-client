import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import './css/App.css'
import AboutPage from './pages/AboutPage/AboutPage';
import BlogPage from './pages/BlogPage/BlogPage';
import Dashboard from './pages/Dashboard/Dashboard';
import ManageProducts from './pages/Dashboard/ManageProducts/ManageProducts';
import Home from './pages/Home/Home';
import LoginPage from './pages/LoginPage/LoginPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import PurchasePage from './pages/PurchasePage/PurchasePage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
const App = () => {
   return (
      <div className='main-wrapper'>
         {/* <h1 className='my-class'>React Learning Practice code Running.</h1> */}
         <Header/>
         {/* Routes  */}
         <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<AboutPage/>}></Route>
          <Route path="/blogs" element={<BlogPage/>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/manage-products" element={<ManageProducts/>}></Route>
          <Route path="/login" element={<LoginPage/>}></Route>
          <Route path="/purchase" element={<PurchasePage/>}></Route>
          <Route path="/signup" element={<SignUpPage/>}></Route>
          <Route path="*" element={<NotFoundPage/>}></Route>
      </Routes>
      </div>
   );
};

export default App;
