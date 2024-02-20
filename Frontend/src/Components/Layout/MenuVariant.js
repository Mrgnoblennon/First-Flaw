import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  open: { opacity: 1, x: 0, display: 'block' },
  closed: { opacity: 0, x: "-100%", transitionEnd: { display: 'none' } }
};

const MenuVariant = ({ isOpen }) => {
  return (
    <motion.div
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      variants={variants}
      transition={{ duration: 0.5 }}
      style={{ position: 'absolute', top: '50px', left: 0, backgroundColor: 'white', width: '50%', padding: '10px', boxSizing: 'border-box', zIndex: 1000 }}
    >
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li style={{ margin: '10px 0' }}><a href='/about'>About</a></li>
        <li style={{ margin: '10px 0' }}>Contact</li>
        <li style={{ margin: '10px 0' }}>Enquiries</li>
        {/* Add more menu items here */}
      </ul>
    </motion.div>
  );
};

export default MenuVariant;
