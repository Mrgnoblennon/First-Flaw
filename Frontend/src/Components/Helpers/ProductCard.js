import React from "react";
import { Box, Image, Text } from '@chakra-ui/react';

const ProductCard = ({ product }) => {
  // Only render the colorCount text if the product has a colorCount property
  const renderColorCount = product.colorCount ? `${product.colorCount} colors available` : '';

  return (
    <Box w={"160px"} height={"250px"}>
      <Image src={product.imageUrl || 'https://placehold.it/175x250'} />
      {product.colorCount && <Text color={"gray"}>{renderColorCount}</Text>}
      <Text>{product.name}</Text>
      <Text>${product.basePrice}</Text>
    </Box>
  );
};

export default ProductCard;
