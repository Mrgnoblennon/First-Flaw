import React from 'react';
import { useMutation, gql } from '@apollo/client';
import { Box, Text, VStack, HStack, Flex } from '@chakra-ui/react';

const OrderSummaryCard = ({ loading, error, data, items }) => {

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text color="red.500">Error: {error.message}</Text>;

  // Ensure data and data.items are defined before accessing items
  

  return (
    <VStack spacing={4} align="stretch" m="20px" mb={"50px"}>
      {items.length === 0 && <Text>Your bag is empty.</Text>}
      {items.map((item, index) => (
        <Box key={index} p="5" boxShadow="md" borderWidth="1px">
          
          <HStack>
            
            {item.imageUrl && (
              <img src={item.imageUrl} alt={item.name} style={{ width: '100px', height: 'auto' }} />
            )}
  
            <Box>
              <VStack ml={"30px"} align={"left"}>
                <HStack>
                <Text fontWeight="bold">{item.brand}</Text>
                
                </HStack>
                <Text>{item.name}</Text>
                <Text textColor={"gray"}>{item.colorName}, {item.size}</Text>
  
                <HStack spacing="15px">

                  <Flex justifyContent={"center"} alignItems={"center"} bg={"gray"} borderRadius={"full"} width={"25px"} height={"25px"} textColor={"white"} opacity={0.6}>
                    <Text>{item.quantity}</Text>
                  </Flex>  

                  <Text ml={"50px"}>${item.basePrice}</Text>

                </HStack>
              </VStack>
            </Box>
  
          </HStack>

        </Box>
      ))}
    </VStack>
  );
};

export default OrderSummaryCard;
