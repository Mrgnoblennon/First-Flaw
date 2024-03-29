import React from 'react';

import { Box, Text } from '@chakra-ui/react';
 
const OrderSummary = ({ subtotal }) => {
  return(
    <Box>
      <Text mb={"20px"} fontWeight={"bold"} fontSize={"2xl"}>Order Summary</Text>
      
      <Text>Subtotal: ${subtotal} </Text>

    </Box>
  )
}

export default OrderSummary