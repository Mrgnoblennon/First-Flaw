import React from 'react';
import { SimpleGrid, GridItem, Flex, IconButton, Box, Text } from '@chakra-ui/react';
import { BsSliders2 } from "react-icons/bs";
import ProductCard from '../Helpers/ProductCard';
import Filter from './Filter';

const MobileLayout = ({ data, displayText, toggleMenu, isMenuOpen, setIsMenuOpen }) => (
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
        <SimpleGrid columns={2} gap={6}>
          {data.getProductsByType.map((product) => (
            <GridItem key={product.id} w="100%">
              <ProductCard product={product} />
            </GridItem>
          ))}
        </SimpleGrid>
      </Flex>
    </Box>
);

export default MobileLayout;
