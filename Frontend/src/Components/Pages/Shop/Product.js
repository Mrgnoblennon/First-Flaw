import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useQuery, useMutation, gql } from '@apollo/client';
import { Text, Box, Image, Button, HStack, VStack, Flex, UnorderedList, ListItem, useToast } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid'; // Ensure you have uuid installed

const GET_PRODUCT_DETAILS = gql`
  query GetProductById($productId: ID!) {
    getProductById(productId: $productId) {
      id
      name
      productType
      basePrice
      brand
      baseUrl
      descriptions
      colors {
        colorName
        imageUrl
        showcaseImageUrl
        sizeVariants {
          id 
          additionalPrice
          quantity
          size
        }
      }
    }
  }
`;

const ADD_TO_CART = gql`
  mutation AddToCart($sessionId: String!, $productId: ID!, $sizeVariantId: String!, $quantity: Int!) {
    addToCart(sessionId: $sessionId, productId: $productId, sizeVariantId: $sizeVariantId, quantity: $quantity) {
      sessionId
      items {
        name
        colorName
        size
        quantity
        imageUrl
        sizeVariantId
        additionalPrice
        productId
        basePrice
        brand
      }
    }
  }
`;

const Product = () => {
  const toast = useToast();
  const { productId } = useParams();
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [selectedSizeVariantId, setSelectedSizeVariantId] = useState("");
  const [sessionId, setSessionId] = useState("");

  // Fetch product details
  const { loading, error, data } = useQuery(GET_PRODUCT_DETAILS, { variables: { productId } });

  // Mutation hook
  const [addToCart, { data: addToCartData, loading: addToCartLoading, error: addToCartError }] = useMutation(ADD_TO_CART);

  useEffect(() => {
    // Initialize session ID, in a real app, you'd fetch this from localStorage or generate it once per user session
    let currentSessionId = localStorage.getItem('sessionId');
    if (!currentSessionId) {
      currentSessionId = uuidv4();
      localStorage.setItem('sessionId', currentSessionId);
    }
    setSessionId(currentSessionId);

    // Default selections
    if (data?.getProductById?.colors?.length > 0) {
      setSelectedColorIndex(0);
    }
  }, [data]);

  const handleAddToCart = () => {
    if (!selectedSizeVariantId) {
      toast({
        title: "Selection missing",
        description: "Please choose a size before adding to bag.",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top",
      })
      return;
    }

    addToCart(
      { variables: { sessionId, productId, sizeVariantId: selectedSizeVariantId, quantity: 1 } 
    }).then(response => {
      toast({
        title: "Success",
        description: "Item added to bag",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });

    }).catch(error => {
      // Log or handle error as needed
      toast({
        title: "An Error Occurred",
        description: error.message || "Failed to add the item to the cart. Please try again.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    });
  };

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  const product = data.getProductById;
  const hasColors = product.colors && product.colors.length > 0;
  const selectedColor = hasColors ? product.colors[selectedColorIndex] : null;

  console.log(data)

  return (
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
          <Image src="https://res.cloudinary.com/dwzlmgxqp/image/upload/v1710815311/Black_Converse_wtbfh6.webp" h="190px" w="160px"></Image>
          <Image src="https://res.cloudinary.com/dwzlmgxqp/image/upload/v1710815311/Black_Converse_wtbfh6.webp" h="190px" w="160px"></Image>
          <Image src="https://res.cloudinary.com/dwzlmgxqp/image/upload/v1710815311/Black_Converse_wtbfh6.webp" h="190px" w="160px"></Image>
          <Image src="https://res.cloudinary.com/dwzlmgxqp/image/upload/v1710815311/Black_Converse_wtbfh6.webp" h="190px" w="160px"></Image>
          <Image src="https://res.cloudinary.com/dwzlmgxqp/image/upload/v1710815311/Black_Converse_wtbfh6.webp" h="190px" w="160px"></Image>
        </HStack>
      </Box>

      <Flex justifyContent="center" alignItems="center" position="fixed" bottom={0} left={0} right={0} h="100px" bg="gray.100" m={0} zIndex={9999}>
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
  );
};

export default Product;

