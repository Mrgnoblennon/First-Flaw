import React, { useEffect } from 'react';
import { gql, useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { Box, Text, Button } from '@chakra-ui/react';
import ConfettiExplosion from 'react-confetti-explosion';

const UPDATE_PRODUCT_QUANTITIES = gql`
  mutation UpdateProductQuantities($sessionId: ID!) {
    updateProductQuantities(sessionId: $sessionId) {
      success
      message
    }
  }
`;

const REMOVE_ALL_ITEMS_FROM_CART = gql`
  mutation RemoveAllItemsFromCart($sessionId: ID!) {
    removeAllItemsFromCart(sessionId: $sessionId) {
      items {
        productId
        quantity
      }
    }
  }
`;

const Success = () => {
  const navigate = useNavigate();
  const sessionId = localStorage.getItem('sessionId'); // Assuming sessionId is stored in localStorage

  const [updateProductQuantities, { data: updateData, loading: updating, error: updateError }] = 
    useMutation(UPDATE_PRODUCT_QUANTITIES);

  const [removeAllItemsFromCart, { data: removeData, loading: removing, error: removeError }] = 
    useMutation(REMOVE_ALL_ITEMS_FROM_CART);

  useEffect(() => {
    if (sessionId) {
      // First, update product quantities based on the cart
      updateProductQuantities({ variables: { sessionId } })
        .then(() => {
          // Then, clear the cart
          removeAllItemsFromCart({ variables: { sessionId } });
        })
        .catch((error) => {
          console.error("Error in updating product quantities or clearing cart:", error);
        });
    }
  }, [sessionId, updateProductQuantities, removeAllItemsFromCart]);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/'); // Redirect to home after a delay
    }, 7000); // Adjust delay as needed
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Box textAlign="center" p={5}>
      <ConfettiExplosion />
      <Text fontSize="3xl" mb={4}>🎉 Your payment was successful!</Text>
      <Text fontSize="xl">Thank you for your purchase. You will be redirected shortly.</Text>
    </Box>
  );
};

export default Success;
