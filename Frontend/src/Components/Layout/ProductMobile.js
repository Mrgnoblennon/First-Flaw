import React from 'react';
import { Box, Image, Button, HStack, Flex, Text, ListItem, VStack, UnorderedList } from '@chakra-ui/react';
 
import ProductCard from '../Helpers/ProductCard';

const ProductMobile = ({ product, selectedColor, handleAddToCart, selectedSizeVariantId, setSelectedSizeVariantId, selectedColorIndex, setSelectedColorIndex, randomProductData,  addToCartLoading, hasColors }) => {
  return(
    <Box mx="20px">
      <Image mt="20px" src={selectedColor?.imageUrl || product.baseUrl || 'https://via.placeholder.com/150'} alt={product.name} />
      {hasColors && (
        <HStack spacing={4} justifyContent="center" mt="20px">
          {product.colors.map((color, index) => (
            <Button 
              key={index} 
              size="xs" 
              borderRadius="full" 
              bg={color.colorName ? color.colorName.toLowerCase() : 'none'} 
              color="white"
              // Change the border color and width conditionally based on the selected color
              border={selectedColorIndex === index ? '2px solid' : '1px solid'} 
              borderColor={selectedColorIndex === index ? 'blue.500' : color.colorName ? `${color.colorName.toLowerCase()}.200` : 'gray.200'} 
              _hover={{
                bg: color.colorName ? `${color.colorName.toLowerCase()}.600` : 'gray.600',
                // Optionally, make the border more pronounced on hover for all buttons or keep as is for selected
                borderColor: 'blue.500' // Example to make the border color uniform on hover
              }}
              onClick={() => setSelectedColorIndex(index)}
            >
            </Button>
          ))}
        </HStack>
      )}

      <Flex justifyContent="center" mt={"20px"}>
        <HStack spacing={4} mt="20px">
          {selectedColor?.sizeVariants?.map((variant, index) => (
            <Button 
              variant="outline" 
              isDisabled={variant.quantity === 0} 
              size="sm" 
              key={variant.id} 
              onClick={() => setSelectedSizeVariantId(variant.id)}
              bg={selectedSizeVariantId === variant.id ? "black" : "transparent"} // Change background for selected size
              color={selectedSizeVariantId === variant.id ? "white" : "black"} // Change text color for better visibility
            >
              {variant.size}
            </Button>
          ))}
        </HStack>
      </Flex>

      <Text textColor={"gray.400"} mt="60px">{product.brand}</Text>
      <Text fontWeight="bold" fontSize="xl">{product.name}</Text>
      <Text fontSize="lg" mb="30px">${product.basePrice}</Text>

      <Box>
        <UnorderedList>
          {product.descriptions.map((desc, index) => (
            <ListItem key={index} mt="2">{desc}</ListItem>
          ))}
        </UnorderedList>
      </Box>


      {/* ShowcaseImageUrl */}
      <Flex mt="50px" Flex justifyContent="center" alignItems="center">
        <VStack spacing="40px">
          {selectedColor?.showcaseImageUrl ? (
            selectedColor.showcaseImageUrl.map((imageUrl, index) => (
              <Image key={index} src={imageUrl} bg="gray" h="300px" w="300px" alt={`Showcase Image ${index + 1}`} />
            ))
          ) : (
            <Text>No showcase images available</Text>
          )}
        </VStack>
      </Flex>
      
      <Box>
        <Text mt={"50px"} fontWeight={"bold"} fontSize="2xl"> Related </Text>
        <Button mt="20px" bg="black" color="white" borderRadius="full" > All Clothing </Button>
      </Box>

      <Box
        mt={"50px"} 
        mr={"-20px"}
        style={{ 
          width: 'inherit', // Inherits width from the parent
          height: 'inherit', // Inherits height from the parent
          overflowX: 'scroll', // Enables horizontal scrolling
          overflowY: 'hidden', // Hides vertical overflow
          whiteSpace: 'nowrap', // Ensures content stays in a single line
          position: 'relative' // Depending on your layout needs
        }}
      >
        <HStack spacing="30px">
        {randomProductData?.getRandomProductsByType.map((product) => ( 
          <ProductCard key={product._id} product={product} />
        ))}
        </HStack>
      </Box>

      <Flex justifyContent="center" alignItems="center" position="fixed" bottom={0} left={0} right={0} h="100px" bg="gray.100" m={0} zIndex={3}>
        <Button
          bg={selectedSizeVariantId ? "black" : "gray.200" }
          color={selectedSizeVariantId ? "white" : "black" }
          size="lg"
          onClick={handleAddToCart}
          isLoading={addToCartLoading}
          // Disable the button if no size variant has been selected
          isDisabled={selectedSizeVariantId === ""}
          zIndex={-2}
        >
        {/* Change button text based on whether a size variant is selected */}
        {selectedSizeVariantId ? "Add to Bag" : "Select a size"}
        </Button>
      </Flex>

    </Box>
  )
};

export default ProductMobile;