import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { List, ListItem, Link, Text, HStack, Box } from '@chakra-ui/react';
import { MdClose } from 'react-icons/md'; // Importing close icon from react-icons

import ProductDetailFeatured from '../Helpers/ProductDetailFeatured';

const variants = {
  open: { opacity: 1, x: 0, display: 'block' },
  closed: { opacity: 0, x: "-100%", transitionEnd: { display: 'none' } }
};

const Menu = ({ isOpen, onClose }) => { // Adding onClose prop to handle closing the menu
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }

    return () => {
      document.body.style.overflowY = 'auto';
    };
  }, [isOpen]);

  return (
    <>
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        transition={{ duration: 0.5 }}
        style={{ position: 'absolute', top: '0px', left: 0, backgroundColor: 'white', width: '80%', padding: '10px', boxSizing: 'border-box', zIndex: 1000, maxHeight: 'calc(100vh)', overflowY: 'auto' }}
      >
        <button onClick={onClose} style={{ position: 'sticky', top: '10px', left: '90%', background: 'none', border: 'none', cursor: 'pointer' }}>
          <MdClose size={24} />
        </button>
        <Text fontWeight={"bold"} mb={"30px"} fontSize={"x-large"}>Shop</Text>

        <List mb={"20px"}>
          <ListItem m={"20px 10px"}><Link href='/clothing' style={{ textDecoration: 'none' }}>View All Clothing</Link></ListItem>
          <ListItem m={"20px 10px"}><Link href='/tshirt' style={{ textDecoration: 'none' }}>T-Shirts</Link></ListItem>
          <ListItem m={"20px 10px"}><Link href='/pants' style={{ textDecoration: 'none' }}>Pants</Link></ListItem>
          <ListItem m={"20px 10px"}><Link href='/hoodie' style={{ textDecoration: 'none' }}>Hoodies</Link></ListItem>
          <ListItem m={"20px 10px"}><Link href='/ring' style={{ textDecoration: 'none' }}>Rings</Link></ListItem>
        </List>

        <Text fontWeight={"bold"} my={"30px"} fontSize={"x-large"}>Featured</Text>

        <Box style={{ width: 'inherit', height: 'inherit', display: 'inline-block',  overflowX: 'scroll', overflowY: 'hidden', whiteSpace: 'nowrap', position: 'absolute'  }}>
        <HStack>
          <ProductDetailFeatured productId={"7363395616821"} name={"Karate"} color={"white"}/>
          <ProductDetailFeatured productId={"7363403841589"} name={"Chime"} color={"white"}/>
          <ProductDetailFeatured productId={"7363403677749"} name={"Livingston"} color={"white"}/>
          <ProductDetailFeatured productId={"7363399974965"} name={"Crown Jewel"} color={"white"}/>
        </HStack>
        </Box>

        <Text fontWeight={"bold"} mb={"30px"} mt={'300px'} fontSize={"x-large"}>Socials</Text>

        <List>
          <ListItem m={"20px 10px"}><Link href='/' style={{ textDecoration: 'none' }}>Instagram</Link></ListItem>
          <ListItem m={"20px 10px"}><Link href='/' style={{ textDecoration: 'none' }}>FaceBook</Link></ListItem>
          <ListItem m={"20px 10px"}><Link href='/' style={{ textDecoration: 'none' }}>Youtube</Link></ListItem>
        </List>

        <Text fontWeight={"bold"} my={"30px"} fontSize={"x-large"}>More</Text>

        <List>
          <ListItem m={"20px 10px"}><Link href='/about' style={{ textDecoration: 'none' }}>About</Link></ListItem>
          <ListItem m={"20px 10px"}><Link href='/contact' style={{ textDecoration: 'none' }}>Contact Us</Link></ListItem>
        </List>
      </motion.div>
      {isOpen && <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0, 0, 0, 0.5)', backdropFilter: 'blur(10px)', zIndex: 999 }} onClick={onClose}></div>}
    </>
  );
};

export default Menu;
