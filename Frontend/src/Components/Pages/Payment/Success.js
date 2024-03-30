import React, { useState, useEffect } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';
import { gql, useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { Text, Box } from '@chakra-ui/react';

const REMOVE_ALL_ITEMS_FROM_CART = gql`
  mutation RemoveAllItemsFromCart($sessionId: ID!) {
    removeAllItemsFromCart(sessionId: $sessionId) {
      items {
        name
        quantity
        size
      }
    }
  }
`;

const Success = () => {
  const [explode, setExplode] = useState(false);
  const navigate = useNavigate();  
  const [removeAllItemsFromCart, { data: removeAllData, loading: loadingAllData, error: errorAllData }] = useMutation(REMOVE_ALL_ITEMS_FROM_CART);

  const sessionId = localStorage.getItem('sessionId');

  useEffect(() => {
    if (sessionId) {
      removeAllItemsFromCart({ variables: { sessionId } })
        .then(response => {
          console.log("Cart cleared:", response.data);
          setExplode(true);
        })
        .catch(err => {
          console.error("Failed to clear cart:", err);
        });
    }
  }, [sessionId, removeAllItemsFromCart]);

  // New useEffect for redirection
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/'); // Redirect to the home page, modify as needed
    }, 7000); // Redirect after 5 seconds

    return () => clearTimeout(timer); // Clean up the timer
  }, [navigate]); // Depend on navigate to ensure redirection happens

  return (
    <Box>
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
      }}>
        {explode && <ConfettiExplosion
          force={0.6}
          duration={3000}
          particleCount={300}
          floorHeight={300}
          floorWidth={300}
        />}
      </div>
      <Text textAlign={"center"} fontSize={"6xl"} mt={"50px"}> 🎉 </Text>
      <Text textAlign={"center"} fontSize="3xl"> Your payment was successful! You will be redirected shortly  </Text>
    </Box>
  );
};

export default Success;
