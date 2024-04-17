import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { List, ListItem, Link, Text, HStack, Box, Button } from '@chakra-ui/react';
import { MdClose } from 'react-icons/md'; // Importing close icon from react-icons
import { gql, useQuery } from '@apollo/client';

import FeaturedProductCard from '../Helpers/FeaturedProductCard';

const GET_COLLECTION_BY_ID = gql`
  query GetCollectionById($getCollectionByIdId: ID!) {
    getCollectionById(id: $getCollectionByIdId) {
      title
      collectionImageUrl
      description
      id
      products {
        name
        brand
        baseUrl
        basePrice
        id
        productType
        colors {
          colorName
          imageUrl
        }
      }
    }
  }
`

const variants = {
  open: { opacity: 1, x: 0, display: 'block' },
  closed: { opacity: 0, x: "-100%", transitionEnd: { display: 'none' } }
};

const Menu = ({ isOpen, onClose }) => { // Adding onClose prop to handle closing the menu

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);


  const { data: featuredData, loading: featuredLoading, error: featuredError } = useQuery(GET_COLLECTION_BY_ID, {
    variables: { getCollectionByIdId: '66164b4f8dd0a04613d7fce2'}
  });

  const featuredProducts = featuredData?.getCollectionById?.products;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  const width = windowWidth > 768 ? '33%' : '80%';

  if (featuredLoading) return <div></div>;
  if (featuredError) return <div></div>;
  if (!featuredProducts || !Array.isArray(featuredProducts)) return <div></div>;

  return (
    <>
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        transition={{ duration: 0.5 }}
        style={{ position: 'fixed', top: '0px', left: 0, backgroundColor: 'white', width: width, padding: '10px', boxSizing: 'border-box', zIndex: 1000, maxHeight: 'calc(100vh)', overflowY: 'auto' }}
      >
        <Button onClick={onClose} style={{ position: 'sticky', top: '10px', left: '90%', background: 'none', border: 'none', cursor: 'pointer' }}>
          <MdClose size={24} />
        </Button>
        <Text fontWeight={"bold"} mb={"30px"} fontSize={"x-large"}>Shop</Text>

        <List mb={"20px"}>
          <ListItem m={"20px 10px"}><Link href='/clothing' style={{ textDecoration: 'none' }}>View All Clothing</Link></ListItem>
          <ListItem m={"20px 10px"}><Link href='/tshirt' style={{ textDecoration: 'none' }}>T-Shirts</Link></ListItem>
          <ListItem m={"20px 10px"}><Link href='/pants' style={{ textDecoration: 'none' }}>Pants</Link></ListItem>
          <ListItem m={"20px 10px"}><Link href='/hoodie' style={{ textDecoration: 'none' }}>Hoodies</Link></ListItem>
          <ListItem m={"20px 10px"}><Link href='/hat' style={{ textDecoration: 'none' }}>Hats</Link></ListItem>
          <ListItem m={"20px 10px"}><Link href='/socks' style={{ textDecoration: 'none' }}>Socks</Link></ListItem>
        </List>

        <Text fontWeight={"bold"} my={"30px"} fontSize={"x-large"}>Featured</Text>

        <Box style={{ height: 'inherit', display: 'inline-block',  overflowX: 'scroll', overflowY: 'hidden', whiteSpace: 'nowrap', position: 'absolute'  }}>
          <HStack>
            {featuredProducts.map((product) => (
              <FeaturedProductCard key={product.id} featuredProduct={product} color={"white"}/>
            ))}
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
