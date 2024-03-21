import React from 'react';

import { Text, Box } from '@chakra-ui/react';

import CheckoutForm from './Helpers/CheckoutForm'
import Delivery from './Helpers/Delivery';
import OrderSummary from './Helpers/OrderSummary';

const PaymentPage =() => {
  return(
    <Box mx={"20px"}>
      <Text fontSize="2xl" fontWeight="Bold" mb={"30px"}>Payment Page</Text>

      <Delivery/>

      <CheckoutForm/>

      <OrderSummary/>

    </Box>
  )
}

export default PaymentPage;