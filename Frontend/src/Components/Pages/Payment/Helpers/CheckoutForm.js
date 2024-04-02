import { useStripe, useElements, Elements, PaymentElement } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import OrderSummary from './OrderSummary';

import { Box, Text, Button, Flex } from '@chakra-ui/react';


const CheckoutForm = ({ subtotal, clientSecret, items }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

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

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  return (
    <Box position="relative" mb="50px" height="calc(100vh - 50px)"> {/* Adjust height as necessary */}
    <Text fontWeight={"bold"} fontSize={"2xl"} mb={"10px"}>Payment</Text>  
    <Text color={"gray.400"} mb={"30px"}>All transactions are encrypted and secured.</Text>
    
    <form onSubmit={handleSubmit}>
      <PaymentElement/>
      <OrderSummary items={items} subtotal={subtotal} />
      <Flex position="absolute" bottom="20px" left="0" right="0" justifyContent="center">
        <Button px="150px" size="lg" textColor={"white"} bg={"black"} type="submit" disabled={isLoading || !stripe || !elements}>Pay Now</Button>
      </Flex>
    </form>


  </Box>
  );
};

export default CheckoutForm;
