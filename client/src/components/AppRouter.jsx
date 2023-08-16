import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch, Routes } from 'react-router-dom';

import Home from './Pages/Home';
import Categories from './Pages/Categories';
import Login from "./Pages/Login";
import About from "./Pages/About";
// import Register from "./Pages/Register";
// import Info from "./Pages/Info";
// import Error from "./Pages/Error";
import Cart from "./Pages/Cart";
import MyWishList from "./Pages/MyWishList";
import Profile from './Pages/Profile';

const AppRouter = ({userId, handleLogin}) => {



  return (
    <Routes>
      <Route path="/home" exact element={<Home />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/about" element={<About />} />
      <Route path="/users/:userid/cart" element={<Cart />} />
      <Route path="/users/:userid/wishlist" element={<MyWishList />} />
      <Route path="/users/:userid/profile" element={<Profile />} />
      <Route path= '/login' element = {<Login handleLogin={handleLogin}/>}/>
    </Routes>
  );
};

export default AppRouter;
// const myRoutes = [
//   { path: '/', component: Home },
//   { path: '/categories', component: Categories },
//   { path: '/about', component: About },
//   { path: '/login', component: Login },
//   { path: '/users/:userId/Profile', component: Profile },
//   { path: '/users/:userId/cart', component: Cart },
//   { path: '/users/:userId/wishlist', component: MyWishList },

// ];