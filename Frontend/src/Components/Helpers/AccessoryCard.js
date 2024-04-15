import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { useQuery, gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

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

  const { data: product } = useQuery(GET_PRODUCT_BY_ID, { variables: { productId: productId } });

  // Destructure data if it exists
  const { brand, baseUrl, id } = product?.getProductById || {};

  const navigate = useNavigate();

  const navigateToProductDetail = () => navigate(`/product/${product.id || id}`);
 
    return (
      <Box
        as="button" 
        onClick={navigateToProductDetail}
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
