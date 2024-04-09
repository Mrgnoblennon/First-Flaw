import React, { useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import { motion } from 'framer-motion';
import { Button, Text, Flex, Box, Link } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import BagProductCard from '../Helpers/BagProductCard';

const VIEW_CART_QUERY = gql`
  query ViewCart {
    viewCart {
      sessionId
      items {
        productId
        name
        quantity
        imageUrl
        basePrice
        brand
        colorName
        size
        sizeVariantId
      }
    }
  }
`;

const variants = {
  open: { opacity: 1, x: 0, display: 'block' },
  closed: { opacity: 0, x: "100%", transitionEnd: { display: 'none' } }
};

const Bag = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const { data, loading, error } = useQuery(VIEW_CART_QUERY, {
    skip: !isOpen,
    fetchPolicy: "network-only",
  });

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

  // Adjusting the data prop passed to BagProductCard to ensure it receives
  // the correct data structure as expected by its implementation.
  const cartData = data ? data.viewCart : { items: [] };

  const subtotal = cartData.items.reduce((acc, item) => acc + item.basePrice * item.quantity, 0);


  return (
    <>
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        transition={{ duration: 0.5 }}
        style={{ position: 'fixed', top: '0px', right: 0, backgroundColor: 'white', width: '100%', maxWidth: '400px', boxSizing: 'border-box', zIndex: 1000, maxHeight: '100vh', overflowY: 'auto' }}
      >
        <Button onClick={onClose} style={{ position: 'fixed', top: '10px', right: '10px', background: 'none', border: 'none', cursor: 'pointer' }}>
          <MdClose size={24} />
        </Button>

        <Text ml="20px" fontWeight="bold" mt={"10px"} mb="30px" fontSize="x-large">Bag</Text>

        
        <BagProductCard loading={loading} error={error} data={cartData} />
        <Box position="sticky" bottom="0" bg="gray.50" h="150px" mt="20px">
          <Flex justifyContent={"space-between"} p={"10px"} spacing={"100px"}>
            <Text fontWeight={"Bold"} fontSize={"lg"} p={"10px"}>Subtotal </Text>
            <Text fontWeight={"Bold"} fontSize={"lg"} p={"10px"}>${subtotal.toFixed(2)}</Text>
          </Flex>
          <Flex justifyContent="center" alignItems="center" >
            <Button bg="black" textColor={"white"} px="120px" size="lg" onClick={() => navigate('/paymentpage')}>Checkout</Button>
          </Flex>
        </Box>
      </motion.div>
      {isOpen && <div style={{ position: 'fixed', top: 0, right: 0, bottom: 0, background: 'rgba(0, 0, 0, 0.5)', backdropFilter: 'blur(10px)', zIndex: 999 }} onClick={onClose}></div>}
    </>
  );
};

export default Bag;
