import React, { useState, useEffect} from 'react';
import { Text, Box, Flex, Button } from '@chakra-ui/react';
import { gql, useMutation, useQuery } from '@apollo/client';
import { motion } from 'framer-motion';

import CheckoutForm from './Helpers/CheckoutForm';
import Delivery from './Helpers/Delivery';
import OrderSummary from './Helpers/OrderSummary';
import OrderSummaryCard from '../../Helpers/OrderSummaryCard'; // Ensure this import is correct
import SummaryHeader from './Helpers/SummaryHeader';
import Footer from '../../Layout/Footer';

import { IoIosArrowDown } from "react-icons/io";

// Stripe
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_51OwdWjIlgSfDbGp1bsYBCZDvCV87u1XpLt2NCQwWltk8FcIbrJEg8OY9C1QW6Ee1dJLwBoVhfbDKRflqBaJ5iHsI00GLIenkzG');

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

const CREATE_PAYMENT_INTENT = gql`
  mutation CreatePaymentIntent($amount: Int!) {
    createPaymentIntent(amount: $amount) {
      clientSecret
    }
  }
`;

const PaymentPage = () => {
  const [clientSecret, setClientSecret] = useState('');
  const [createPaymentIntent] = useMutation(CREATE_PAYMENT_INTENT);
  const [isVisible, setIsVisible] = useState(false);
  const [deliveryDetails, setDeliveryDetails] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    postCode: '',
    phoneNumber: '',
    email: '',
  });
  const [isFormValid, setIsFormValid] = useState(false);
  
  const { data, loading, error } = useQuery(VIEW_CART_QUERY);
  // Extract the necessary data for child components
  const cartData = data?.viewCart;
  const items = cartData?.items || [];
  const subtotal = items.reduce((acc, item) => acc + item.basePrice * item.quantity, 0);
  const total = Math.round(subtotal * 100); // Ensure the total is in cents and rounded
  
  useEffect(() => {
    // Only attempt to create a PaymentIntent if subtotal is positive
    if (total > 0) {
      createPaymentIntent({ variables: { amount: total } }).then(response => {
        // Assuming the GraphQL server returns the clientSecret in the correct path
        setClientSecret(response.data.createPaymentIntent.clientSecret);
      }).catch(error => {
        console.error("Error creating PaymentIntent: ", error.message);
      });
    }
  }, [createPaymentIntent, total]);

  useEffect(() => {
    const validateForm = () => {
      // Example validation: checks if any field is empty
      const isValid = Object.values(deliveryDetails).every((detail) => detail.trim() !== '');
      setIsFormValid(isValid);
    };
    
    validateForm();
  }, [deliveryDetails]);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };


  // Handle loading state
  if (loading) return <Box>Loading...</Box>;
  // Handle error state
  if (error) return <Box>Error: {error.message}</Box>;


  return (
    <div>
      <SummaryHeader/>
        <Box mx={"20px"}>

        <Flex justifyContent={"space-between"} p={"10px"} spacing={"100px"}>
          <Button 
            bg={"none"}
            mb={"30px"}
            rightIcon={<IoIosArrowDown />} 
            onClick={() => setIsVisible(!isVisible)}
            // Optionally, use leftIcon prop for icon placement to the left
          >
            {isVisible ? 'Hide Order Details' : 'Show Order Details'}
          </Button>
          <Text fontWeight={"Bold"} fontSize={"lg"} p={"10px"}>${subtotal.toFixed(2)}</Text>
        </Flex>
    
          {isVisible && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <OrderSummaryCard items={items} />
            </motion.div>
          )}
    
          <Delivery deliveryDetails={deliveryDetails} setDeliveryDetails={setDeliveryDetails} setIsFormValid={setIsFormValid}/>

          {clientSecret && (
          <Elements stripe={stripePromise} options={options}>
            {/* Pass subtotal and items to the CheckoutForm component */}
            <CheckoutForm subtotal={subtotal} clientSecret={clientSecret} items={items} deliveryDetails={deliveryDetails} isFormValid={isFormValid}/>
          </Elements>
          )}
          
        </Box>
      <Footer/>
    </div>
  );
};

export default PaymentPage;
