// AppRouter.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './Pages/Home';
import Categories from './Pages/Categories';
import Login from "./Pages/Login";
import About from "./Pages/About";
import Cart from "./Pages/Cart";
import MyWishList from "./Pages/MyWishList";
import Profile from './Pages/Profile';
import Products from './Pages/Products';

const AppRouter = ({ userId, handleLogin }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/products/:categoryid" element={<Products />} />
      <Route path="/about" element={<About />} />
      <Route path="/users/:userid/cart" element={<Cart />} />
      <Route path="/users/:userid/wishlist" element={<MyWishList />} />
      <Route path="/users/:userid/profile" element={<Profile />} />
      <Route path="/login" element={<Login handleLogin={handleLogin} />} />
    </Routes>
  );
};

export default AppRouter;
