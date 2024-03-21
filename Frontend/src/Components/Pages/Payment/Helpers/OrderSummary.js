import React from 'react';

import { Box, Text } from '@chakra-ui/react';
 
const OrderSummary = () => {
  return(
    <Box>
      <Text mb={"20px"} fontWeight={"bold"} fontSize={"2xl"}>Order Summary</Text>
      
      <Text>Total: $129.98</Text>

    </Box>
  )
}

export default OrderSummary