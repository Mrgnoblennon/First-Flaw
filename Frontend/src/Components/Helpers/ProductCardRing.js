import React from "react";
import { Box, Image, Text } from '@chakra-ui/react';

const ProductCardRing = ({ ring }) => {
  return (
    <Box w={"160px"} height={"250px"}>
      <Image src={ring.imageUrl || 'https://placehold.it/175x250'} />
      <Text>{ring.name}</Text>
      <Text>${ring.basePrice}</Text>
    </Box>
  );
};

export default ProductCardRing;
