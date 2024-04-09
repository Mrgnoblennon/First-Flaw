import React, { useState, useEffect } from 'react';
import { Box, Link, Text } from '@chakra-ui/react';
import { gql, GraphQLClient } from 'graphql-request';



const ProductDetailFeatured = ({ productId, name, color }) => {

    return (  
      <Box
        w="250px"
        h="250px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        overflow="hidden"
        bg="gray.300"
        // backgroundImage={`url('${productDetails.imageUrl}')`}
        backgroundSize="contain"  // Or "cover", depending on how you want the image to fit
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
      >
        <Box bg={color} borderRadius={20} px={5} py={1} position={"relative"} top={"90px"}>
          <Text fontSize={"medium"}>
            {name}
          </Text>
        </Box>
      </Box>     
  );
}

export default ProductDetailFeatured;
