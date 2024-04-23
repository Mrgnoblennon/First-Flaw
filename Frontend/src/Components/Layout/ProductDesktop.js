import React from 'react';
import { Text, Image, HStack, VStack, Box, Button, Flex, ListItem, UnorderedList } from '@chakra-ui/react' 

import ProductCard from '../Helpers/ProductCard';

const ProductDesktop = ({ product, selectedColor, handleAddToCart, selectedSizeVariantId, setSelectedSizeVariantId, selectedColorIndex, setSelectedColorIndex, randomProductData,  addToCartLoading, hasColors }) => {
  return(
    <Box mx="20px">
    <Flex p={"30px"} justifyContent={"center"}>
      <HStack align="flex-start" spacing={"100px"}>
        <Box>
          <Box w={"fit-content"} height={"fit-content"} p={"30px"} bg={"gray.200"}>
            <Image width={"600px"} mt="20px" src={selectedColor?.imageUrl || product.baseUrl || 'https://via.placeholder.com/150'} alt={product.name} />
          </Box>
    
          
            <VStack spacing="40px">
              {selectedColor?.showcaseImageUrl ? (
                selectedColor.showcaseImageUrl.map((imageUrl, index) => (
                <Box p={"30px"} bg={"gray.200"}>
                  <Image key={index} src={imageUrl} bg="gray" w="600px" alt={`Showcase Image ${index + 1}`} />
                </Box>
                ))
              ) : (
                <Text>No showcase images available</Text>
              )}
            </VStack>
    
        </Box>

        <Box alignItems={"none"} w={"400px"} position="sticky" top={0} left={0} right={0} bottom={0}>
  
          <Text textColor={"gray.400"} mt={"80px"} fontSize={"xl"}>{product.brand}</Text>
          <Text fontWeight="bold" fontSize="3xl" mb={"40px"}>{product.name}</Text>
       

          <UnorderedList>
          {product.descriptions.map((desc, index) => (
            <ListItem key={index} mt="2">{desc}</ListItem>
          ))}
          </UnorderedList>

          {hasColors && (
            <HStack spacing={4} mt="50px">
              {product.colors.map((color, index) => (
                
                <Button 
                  key={index} 
                  size="md" 
                  borderRadius="full" 
                  bg={color.colorName ? color.colorName.toLowerCase() : 'none'} 
                  color="white"
                  // Change the border color and width conditionally based on the selected color
                  border={selectedColorIndex === index ? '1px solid' : '1px solid'} 
                  borderColor={selectedColorIndex === index ? 'black' : color.colorName ? `${color.colorName.toLowerCase()}.200` : 'gray.200'} 
                  _hover={{
                    bg: color.colorName ? `${color.colorName.toLowerCase()}.600` : 'gray.600',
                    // Optionally, make the border more pronounced on hover for all buttons or keep as is for selected
                    borderColor: 'black' // Example to make the border color uniform on hover
                  }}
                  onClick={() => setSelectedColorIndex(index)}
                />
                
              ))}
            </HStack>
            )}

           <Flex mt={"20px"}>
              <HStack spacing={4} mt="20px" mb={"50px"}>
                {selectedColor?.sizeVariants?.map((variant, index) => (
                  <Button 
                    width={"80px"}
                    variant="outline" 
                    isDisabled={variant.quantity === 0} 
                    size="md" 
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
                
            <HStack spacing={5}>
            <Button
              bg={selectedSizeVariantId ? "black" : "gray.200" }
              color={selectedSizeVariantId ? "white" : "black" }
              size="lg"
              onClick={handleAddToCart}
              isLoading={addToCartLoading}
              // Disable the button if no size variant has been selected
              isDisabled={selectedSizeVariantId === ""}
              w={"200px"}
              
            >
              {/* Change button text based on whether a size variant is selected */}
              {selectedSizeVariantId ? "Add to Bag" : "Select a size"}
            </Button>

            <Box>
              <Text fontSize="lg" >${product.basePrice.toFixed(2)}</Text>
              <Text as={"u"}> Or 4 split payments </Text>
            </Box>

            </HStack>

        </Box>
      </HStack>
      </Flex>
      


      <Box mt={"150px"}>
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

    </Box>
  )
};

export default ProductDesktop;