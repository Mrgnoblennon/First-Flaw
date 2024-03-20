import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import { Text, Box, Image, Button, HStack, VStack } from '@chakra-ui/react';

const GET_PRODUCT_DETAILS = gql`
  query GetProductById($productId: ID!) {
    getProductById(productId: $productId) {
      id
      name
      productType
      basePrice
      brand
      baseUrl
      descriptions
      colors {
        colorName
        imageUrl
        sizeVariants {
          additionalPrice
          quantity
          size
        }
      }
    }
  }
`;

const Product = () => {
  const { productId } = useParams();
  const { loading, error, data } = useQuery(GET_PRODUCT_DETAILS, { variables: { productId } });
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);

  useEffect(() => {
    // If there are colors, set the first one as selected by default
    if (data?.getProductById?.colors?.length > 0) {
      setSelectedColorIndex(0);
    }
  }, [data]);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  const product = data.getProductById;
  const hasColors = product.colors && product.colors.length > 0;
  const selectedColor = hasColors ? product.colors[selectedColorIndex] : null;

  return (
    <Box mx="20px">
      <Image mt="20px" src={selectedColor?.imageUrl || product.baseUrl || 'https://via.placeholder.com/150'} alt={product.name} />

      {hasColors && (
        <HStack spacing={4} justifyContent="center" mt="20px">
          {product.colors.map((color, index) => (
            <Button
              key={index} // Ideally, use a unique identifier if available
              size="xs"
              borderRadius="full"
              bg={color.colorName ? color.colorName.toLowerCase() : 'none'}
              color="white"
              _hover={{ bg: color.colorName ? `${color.colorName.toLowerCase()}.600` : 'gray.600' }}
              onClick={() => setSelectedColorIndex(index)}
            >
              {color.colorName}
            </Button>
          ))}
        </HStack>
      )}

      <VStack spacing={4} mt="20px">
        {selectedColor?.sizeVariants?.map((variant, index) => (
          <Text key={index}>{variant.size} - {variant.quantity} available</Text>
        ))}
      </VStack>
      
      <Text fontWeight="bold" fontSize="xl" mt="20px">{product.name}</Text>
      <Text fontSize="lg">${product.basePrice}</Text>

      {product.descriptions?.map((desc, index) => (
        <Text key={index} mt="2">{desc}</Text>
      ))}
    </Box>
  );
};

export default Product;
