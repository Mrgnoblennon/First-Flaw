import React from "react";
import { Box, Image, Text } from '@chakra-ui/react';

const ProductCardTshirt = ({ tshirt }) => {
  return (
    <Box w={"160px"} height={"250px"}>
      <Image src={tshirt.imageUrl || 'https://placehold.it/175x250'} />
      <Text color={"gray"}>{`${tshirt.colorCount} colors available`}</Text>
      <Text>{tshirt.name}</Text>
      <Text>${tshirt.basePrice}</Text>
    </Box>
  );
};

export default ProductCardTshirt;
