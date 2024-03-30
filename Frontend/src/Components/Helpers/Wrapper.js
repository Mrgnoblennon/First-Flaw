// In Layout.js
import React from 'react';
import Header from '../Layout/Header';
import Footer from '..//Layout/Footer';

const Wrapper = ({ children }) => {
  return (
    <>
      <Header />
        {children}
      <Footer />
    </>
  );
};

export default Wrapper;
