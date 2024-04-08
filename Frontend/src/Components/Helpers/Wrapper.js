// In Layout.js
import React from 'react';
import Header from '../Layout/Header';
import Footer from '..//Layout/Footer';
import Marquee from "react-fast-marquee";
import '../../App.css';

const Wrapper = ({ children }) => {
  return (
    <>
      <Marquee className='marquee' >Welcome to First Flaw!</Marquee>
      <Header />
        {children}
      <Footer />
    </>
  );
};

export default Wrapper;
