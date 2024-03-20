import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import { Grid, GridItem, Flex, Text, IconButton } from '@chakra-ui/react';
import { BsSliders2 } from "react-icons/bs";

import ProductCard from '../../Helpers/ProductCard'; // Adjust path as needed

import Filter from '../../Layout/Filter';

const GET_ALL_HOODIES = gql`
query GetAllHoodies {
  getAllHoodies {
    name
    id
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

const Hoodie = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to close the menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const { loading, error, data } = useQuery(GET_ALL_HOODIES);

  if (loading) return <p></p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
    <Text fontWeight={"bold"} fontSize={"2xl"} m={"20px"}>Hoodies</Text>

    <IconButton
      ml={"10px"}
      icon={< BsSliders2/>}
      bg={"none"}
      onClick={toggleMenu}
      size="lg"
    />

    <Filter isOpen={isMenuOpen} onClose={closeMenu}/>
    <Flex justifyContent="center" alignItems="center"> {/* This Flex wrapper centers the grid */}
    <Grid templateColumns="repeat(2, 1fr)" gap={6}>
      {data.getAllHoodies.map((hoodie) => (
        <GridItem key={hoodie.id} w="100%">
          <ProductCard product={hoodie} />
        </GridItem>
      ))}
    </Grid>
    </Flex>
    </div>
  );
};

export default Hoodie;
