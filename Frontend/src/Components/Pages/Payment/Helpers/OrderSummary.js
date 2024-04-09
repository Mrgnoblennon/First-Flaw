import React from 'react';

import { Box, Text, Flex } from '@chakra-ui/react';
import OrderSummaryCard from '../../../Helpers/OrderSummaryCard';
 
const OrderSummary = ({ subtotal, items }) => {
  return(
    <Box>
      <Text mt={"50px"} mb={"20px"} fontWeight={"bold"} fontSize={"2xl"}>Order Summary</Text>

      <OrderSummaryCard items={items} />
    

  

    </Box>
  )
}

export default OrderSummary