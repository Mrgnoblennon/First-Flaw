import React from 'react';

import { Box, Text, Flex } from '@chakra-ui/react';
import OrderSummaryCard from '../../../Helpers/OrderSummaryCard';
 
const OrderSummary = ({ subtotal, items }) => {
  return(
    <Box>
      <Text mb={"20px"} fontWeight={"bold"} fontSize={"2xl"}>Order Summary</Text>

      <OrderSummaryCard items={items} />
      
      <Flex justifyContent={"space-between"} p={"10px"} spacing={"100px"}>
        <Text fontWeight={"Bold"} fontSize={"lg"} p={"10px"}>Subtotal </Text>
        <Text fontWeight={"Bold"} fontSize={"lg"} p={"10px"}>${subtotal.toFixed(2)}</Text>
      </Flex>

    </Box>
  )
}

export default OrderSummary