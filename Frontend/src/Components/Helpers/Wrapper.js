// In Layout.js
import React from 'react';
import Header from '../Layout/Header';
import Footer from '..//Layout/Footer';
import Marquee from "react-fast-marquee";
import '../../App.css';

import { Text } from '@chakra-ui/react'

const Wrapper = ({ children }) => {
  return (
    <>
      <Marquee className='marquee' >
        <Text mr="20px">Welcome to First Flaw!</Text>
        <Text mr="20px">*</Text>
        <Text mr="20px">Welcome to First Flaw!</Text>
        <Text mr="20px">*</Text>
      </Marquee>
      <Header />
        {children}
      <Footer />
    </>
  );
};

export default Wrapper;
