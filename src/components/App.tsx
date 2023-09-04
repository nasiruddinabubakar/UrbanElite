import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux'; // Import the Provider
import store from '../containers/store'; // Import your Redux store
import Header from './Header'; // Import your Header component
import FeaturedProducts from './FeaturedProduct'; // Import your FeaturedProducts component
import SingleProduct from './SingleProduct'; // Import your SingleProduct component
import Cart from './Cart'; // Import your Cart component
import Signup from './Signup'; // Import your Signup component
import Footer from './Footer'; // Import your Footer component

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<FeaturedProducts />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Signup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}
