import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { SimpleGrid, GridItem, Flex, Text, IconButton, Box } from '@chakra-ui/react';
import { BsSliders2 } from "react-icons/bs";

import ProductCard from '../../Helpers/ProductCard';
import Filter from '../../Layout/Filter';

const GET_PRODUCTS_BY_TYPE = gql`
query GetProductsByType($productType: String!) {
  getProductsByType(productType: $productType) {
    id
    name
    basePrice
    baseUrl
    colors {
      imageUrl
    }
  }
}
`;

const formatProductType = (text) => {
    if (!text) return "";
  
    // Transform the word 'tshirt' specifically
    if (text.toLowerCase() === 'tshirt') {
      return 'T-Shirts'; // Specific case for 'tshirt'
    }
  
    // General formatting for all other words
    const formattedText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    const plural = formattedText.endsWith('s') ? formattedText : formattedText + 's'; // Add 's' if not already plural
  
    return plural;
  }

const ProductType = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { productType } = useParams(); // Get productType from URL


  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const { loading, error, data } = useQuery(GET_PRODUCTS_BY_TYPE, {
    variables: { productType }
  });

  const displayText = formatProductType(productType);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Box minH="500px">
      <Text fontWeight="bold" fontSize="2xl" m="20px">{displayText}</Text>
      <IconButton
        ml="10px"
        icon={<BsSliders2 />}
        bg="none"
        onClick={toggleMenu}
        size="lg"
      />
      <Filter isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <Flex justifyContent="center" alignItems="center">
        <SimpleGrid columns={{base: 2, lg: 3}} gap={{base: 6, lg: 10}}>
          {data.getProductsByType.map((product) => (
            <GridItem key={product.id} w="100%">
              <ProductCard product={product} />
            </GridItem>
          ))}
        </SimpleGrid>
      </Flex>
    </Box>
  );
};

export default ProductType;
