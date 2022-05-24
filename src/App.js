import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import './css/App.css'
import AboutPage from './pages/AboutPage/AboutPage';
import BlogPage from './pages/BlogPage/BlogPage';
import Home from './pages/Home/Home';
const App = () => {
   return (
      <div className='main-wrapper'>
         {/* <h1 className='my-class'>React Learning Practice code Running.</h1> */}
         <Header/>
         {/* Routes  */}
         <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="about" element={<AboutPage/>}></Route>
          <Route path="/blogs" element={<BlogPage/>}></Route>
      </Routes>
      </div>
   );
};

export default App;
