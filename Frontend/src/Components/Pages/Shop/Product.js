import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useQuery, useMutation, gql } from '@apollo/client';
import { Text, Box, Image, Button, HStack, Flex, UnorderedList, ListItem, useToast } from '@chakra-ui/react';
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

  return (
    <Box mx="20px">
      <Image mt="20px" src={selectedColor?.imageUrl || product.baseUrl || 'https://via.placeholder.com/150'} alt={product.name} />
      {hasColors && (
        <HStack spacing={4} justifyContent="center" mt="20px">
          {product.colors.map((color, index) => (
            <Button key={index} size="xs" borderRadius="full" bg={color.colorName ? color.colorName.toLowerCase() : 'none'} color="white" _hover={{ bg: color.colorName ? `${color.colorName.toLowerCase()}.600` : 'gray.600' }} onClick={() => setSelectedColorIndex(index)}>
            </Button>
          ))}
        </HStack>
      )}

      <Flex justifyContent="center" mt={"20px"}>
        <HStack spacing={4} mt="20px">
          {selectedColor?.sizeVariants?.map((variant, index) => (
            <Button variant="outline" isDisabled={variant.quantity === 0} size="sm" key={variant.id} onClick={() => setSelectedSizeVariantId(variant.id)}>
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

      <Flex justifyContent="center" alignItems="center" position="fixed" bottom={0} left={0} right={0} h="100px" bg="gray.50" m={0}>
        <Button colorScheme="yellow" size="lg" onClick={handleAddToCart} isLoading={addToCartLoading}>
          Add to Bag
        </Button>
        
      </Flex>
    </Box>
  );
};

export default Product;

