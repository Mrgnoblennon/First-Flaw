import React from "react";
import { Box, Image, Text } from '@chakra-ui/react';

const ProductCardHoodie = ({ hoodie }) => {
  return (
    <Box w={"160px"} height={"250px"}>
      <Image src={hoodie.imageUrl || 'https://placehold.it/175x250'} />
      <Text color={"gray"}>{`${hoodie.colorCount} colors available`}</Text>
      <Text>{hoodie.name}</Text>
      <Text>${hoodie.basePrice}</Text>
    </Box>
  );
};

export default ProductCardHoodie;
