import { useStripe, useElements, Elements, PaymentElement } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import OrderSummary from './OrderSummary';

import { Box, Text, Button, Flex, VStack } from '@chakra-ui/react';


const CheckoutForm = ({ subtotal, clientSecret, items, deliveryDetails, isFormValid }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid) {
      // You might want to show an error message here
      console.log("Form is invalid");
      return;
    }

    console.log(deliveryDetails);

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "http://localhost:3000/success",
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  const count = items.length;
  console.log(count);

  return (
    <Box position="relative" mb="50px" height="auto"> {/* Adjust height as necessary */}
    <Text fontWeight={"bold"} fontSize={"2xl"} mb={"10px"}>Payment</Text>  
    <Text color={"gray.400"} mb={"30px"}>All transactions are encrypted and secured.</Text>
    
    <form onSubmit={handleSubmit}>
      <PaymentElement/>
      
      <VStack mt={"50px"} >
      <Flex mb={"15px"}>
        <Text mr={"170px"} fontWeight={"Bold"} fontSize={"lg"}>Subtotal </Text>
        <Text fontWeight={"Bold"} fontSize={"lg"}>${subtotal.toFixed(2)}</Text>
      </Flex>
        <Button px="150px" size="lg" textColor={"white"} bg={"black"} type="submit" disabled={isLoading || !stripe || !elements}>Pay Now</Button>
      </VStack>
    </form>


  </Box>
  );
};

export default CheckoutForm;
