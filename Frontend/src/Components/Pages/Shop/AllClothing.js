import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import { Grid, GridItem, Flex, Text, IconButton } from '@chakra-ui/react';
import { BsSliders2 } from "react-icons/bs";

import ProductCard from '../../Helpers/ProductCard';
import Filter from '../../Layout/Filter';

const GET_ALL_PRODUCTS = gql`
  query GetAllProducts {
    getAllProducts {
      id
      basePrice
      name
      baseUrl
      colors {
        imageUrl
      }
    }
  }
`;

const AllClothing = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const { loading, error, data } = useQuery(GET_ALL_PRODUCTS);
  console.log(data)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <Text fontWeight={"bold"} fontSize={"2xl"} m={"20px"}>All Clothing</Text>
      <IconButton
        ml={"10px"}
        icon={<BsSliders2/>}
        bg={"none"}
        onClick={toggleMenu}
        size="lg"
      />
      <Filter isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}/>
      <Flex justifyContent="center" alignItems="center">
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          {data.getAllProducts.map((product) => (
            <GridItem key={product.id} w="100%">
              <ProductCard product={product} />
            </GridItem>
          ))}
        </Grid>
      </Flex>
    </div>
  );
};

export default AllClothing;
