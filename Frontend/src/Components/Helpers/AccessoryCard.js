import React, { useState, useEffect } from 'react';
import { Box, Link, Text } from '@chakra-ui/react';
import { useQuery, gql } from '@apollo/client';

const GET_PRODUCT_BY_ID = gql`
  query GetProductById($productId: ID!) {
    getProductById(productId: $productId) {
      baseUrl
      id
      brand
    }
  }
`;



const AccessoryCard = ({ productId, color, textColor }) => {

  const { loading, error, data } = useQuery(GET_PRODUCT_BY_ID, { variables: { productId: productId } });

  // Destructure data if it exists
  const { brand, baseUrl } = data?.getProductById || {};
 
    return (
      <Box
        w="160px"
        h="160px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        overflow="hidden"
        bg="gray.300"
        backgroundImage={baseUrl}
        backgroundSize="contain"  // Or "cover", depending on how you want the image to fit
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
      >     
        <Box bg={color} color={textColor} borderRadius={20} px={5} py={1} position={"relative"} top={"50px"}>
          <Text fontSize={"medium"}>
            {brand}
          </Text>
        </Box>
      </Box>
  );
}

export default AccessoryCard;
