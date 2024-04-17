import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const FeaturedProductCard = ({ collectionId, color , featuredProduct}) => {

    return (  
      <Box
        w="250px"
        h="250px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        overflow="hidden"
        bg="gray.300"
        backgroundImage={`url('${featuredProduct.baseUrl}')`}
        backgroundSize="contain"  // Or "cover", depending on how you want the image to fit
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
      >
        <Box bg={color} borderRadius={20} px={5} py={1} position={"relative"} top={"90px"}>
          <Text fontSize={"medium"}>
            {featuredProduct.name}
          </Text>
        </Box>
      </Box>     
  );
}

export default FeaturedProductCard;
