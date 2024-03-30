import React, { useState, useEffect} from 'react';
import { Text, Box } from '@chakra-ui/react';
import { gql, useMutation, useQuery } from '@apollo/client';

import CheckoutForm from './Helpers/CheckoutForm';
import Delivery from './Helpers/Delivery';
import OrderSummary from './Helpers/OrderSummary';
import OrderSummaryCard from '../../Helpers/OrderSummaryCard'; // Ensure this import is correct
import Header from '../../Layout/Header';
import Footer from '../../Layout/Footer';

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
  
  const { data, loading, error } = useQuery(VIEW_CART_QUERY);
  // Extract the necessary data for child components
  const cartData = data?.viewCart;
  const items = cartData?.items || [];
  const subtotal = items.reduce((acc, item) => acc + item.basePrice * item.quantity, 0);
  const total = Math.round(subtotal * 100); // Ensure the total is in cents and rounded

  console.log(total)
  
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

  console.log(clientSecret)

  const appearance = {
    theme: 'night',
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
    <Header/>
    <Box mx={"20px"}>
      <Text fontSize="2xl" fontWeight="Bold" mb={"30px"}>Payment Page</Text>

      {/* Pass cart data to the OrderSummaryCard component */}
      <OrderSummaryCard items={items} />

      <Delivery/>
      {clientSecret && (
      <Elements stripe={stripePromise} options={options}>
        {/* Pass subtotal and items to the CheckoutForm component */}
        <CheckoutForm subtotal={subtotal} clientSecret={clientSecret}/>
      </Elements>
      )}
      {/* Pass cart data to the OrderSummary component */}
      <OrderSummary items={items} subtotal={subtotal} />
    </Box>
    <Footer/>
    </div>
  );
};

export default PaymentPage;
