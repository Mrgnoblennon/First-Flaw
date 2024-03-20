import React from "react";
import { Box, Image, Text } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  // Calculate colorCount based on the length of the colors array if it exists
  const colorCount = product.colors ? product.colors.length : 0;
  
  // Determine the primary image to display
  // For products with colors, use the first color's image
  // For products without colors, use the baseUrl
  const imageUrl = colorCount > 0 ? product.colors[0].imageUrl : product.baseUrl;

  const navigate = useNavigate();

  const navigateToProductDetail = () => navigate(`/product/${product.id}`);

  return (
    <Box textAlign="left" as="button" onClick={navigateToProductDetail} w={"160px"} height={"250px"}>
      <Image src={imageUrl || 'https://placehold.it/175x250'} alt={product.name} />
      {/* Display color count only for products with more than one color */}
      {colorCount > 1 && <Text color={"gray"}>{`${colorCount} colors available`}</Text>}
      <Text>{product.name}</Text>
      <Text>${product.basePrice}</Text>
    </Box>
  );
};

export default ProductCard;
