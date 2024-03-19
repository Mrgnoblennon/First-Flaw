import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Box, Grid, GridItem, Flex, Text } from '@chakra-ui/react';
import ProductCardTshirt from '../../Helpers/ProductCardTshirt'; // Adjust path as needed

const GET_ALL_TSHIRTS = gql`
query GetAllTshirts {
  getAllTshirts {
    name
    basePrice
    imageUrl
    colorCount
    variants {
      color
      quantity
      size
    }
  }
}
`;

const Tshirt = () => {
  const { loading, error, data } = useQuery(GET_ALL_TSHIRTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
    <Text fontWeight={"bold"} fontSize={"2xl"} ml={"20px"} mb={"10px"}>T-Shirts</Text>
    <Flex justifyContent="center" alignItems="center"> {/* This Flex wrapper centers the grid */}
    <Grid templateColumns="repeat(2, 1fr)" gap={6}>
      {data.getAllTshirts.map((tshirt) => (
        <GridItem key={tshirt.id} w="100%">
          <ProductCardTshirt tshirt={tshirt} />
        </GridItem>
      ))}
    </Grid>
    </Flex>
    </div>
  );
};

export default Tshirt;
