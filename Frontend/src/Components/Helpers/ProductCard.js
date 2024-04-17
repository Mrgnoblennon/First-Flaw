import React from "react";
import { Box, Image, Text } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {

  const { _id: id } = product;

  const colorCount = product.colors ? product.colors.length : 0;
  
  // Determine the primary image to display
  // For products with colors, use the first color's image
  // For products without colors, use the baseUrl
  const imageUrl = colorCount > 1 ? product.colors[0].imageUrl : product.baseUrl;

  const navigate = useNavigate();

  const navigateToProductDetail = () => navigate(`/product/${product.id || id}`);

  return (
    <Box>
    <Box px={{base: "10px",lg: "30px"}} py={{base: "30px",lg: "50px"}} bg={"gray.200"} textAlign="left" as="button" onClick={navigateToProductDetail} w={{base: "160px", lg: "300px"}} >
      <Image src={imageUrl || 'https://placehold.it/175x250'} alt={product.name} />
    </Box>
    <Box>
      {/* Display a gap instead of color count text for products with only one color */}
      {colorCount > 1 ? (
        <Text color={"gray"}>{`${colorCount} colors available`}</Text>
      ) : (
        <Box height="20px" />  // Placeholder box to create a gap
      )}
      <Text fontWeight={"bold"}>{product.brand}</Text>
      <Text>{product.name}</Text>
      <Text>${product.basePrice}</Text>
    </Box>
    </Box>
  );
};

export default ProductCard;
