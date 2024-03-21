import { useStripe, useElements, Elements, PaymentElement } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import { useMutation, gql } from '@apollo/client';

import { Box, Text, Button } from '@chakra-ui/react';

const CREATE_PAYMENT_INTENT = gql`
  mutation CreatePaymentIntent($amount: Int!) {
    createPaymentIntent(amount: $amount) {
      clientSecret
    }
  }
`;

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [clientSecret, setClientSecret] = useState("");
  const [createPaymentIntent, { data }] = useMutation(CREATE_PAYMENT_INTENT);

  useEffect(() => {
    // Create a PaymentIntent as soon as the page loads
    createPaymentIntent({ variables: { amount: 1000 } }).then(response => {
      // Assuming the GraphQL server returns the clientSecret in the correct path
      setClientSecret(response.data.createPaymentIntent.clientSecret);
    });
  }, [createPaymentIntent]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      return;
    }

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: 'your_return_url_here',
      },
    });

    if (result.error) {
      console.log(result.error.message);
    } else {
      // The payment process is complete. You can redirect the user to a success page.
    }
  };

  // Only render the PaymentElement when clientSecret is available
  if (!clientSecret) {
    return <div>Loading...</div>;
  }

  return (
    <Box mb="50px">
      <Text fontWeight={"bold"} fontSize={"2xl"} mb={"10px"}>Payment</Text>  
      <Text color={"gray.400"} mb={"30px"}>All transactions are encrypted and secured</Text>
      <Elements stripe={stripe} options={{clientSecret}}>
        <form onSubmit={handleSubmit}>
          <PaymentElement />
          <Button mt={"20px"} colorScheme={"blue"} disabled={!stripe || !clientSecret}>Pay</Button>
        </form>
      </Elements>
    </Box>
  );
};

export default CheckoutForm;
