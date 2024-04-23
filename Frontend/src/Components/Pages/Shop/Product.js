import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useQuery, useMutation, gql } from '@apollo/client';
import { Text, Box, useToast, useBreakpointValue } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid'; 

import ProductDesktop from '../../Layout/ProductDesktop';
import ProductMobile from "../../Layout/ProductMobile";

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

const GET_RANDOM_PRODUCTS_BY_TYPE = gql`
query GetRandomProductsByType($productType: String!, $excludeProductId: String!) {
  getRandomProductsByType(productType: $productType, excludeProductId: $excludeProductId) {
    _id
    name
    basePrice
    baseUrl
    productType
    brand
    colors {
      colorName
      imageUrl
    }
  }
}
`;

const Product = () => {
  const isDesktop = useBreakpointValue({ base: false, md: true });
  const toast = useToast();
  const { productId } = useParams();
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [selectedSizeVariantId, setSelectedSizeVariantId] = useState("");
  const [sessionId, setSessionId] = useState("");

  const { loading, error, data } = useQuery(GET_PRODUCT_DETAILS, { variables: { productId } });
  const productType = data?.getProductById?.productType;
  const { data: randomProductData, } = useQuery(GET_RANDOM_PRODUCTS_BY_TYPE, { variables: { productType, excludeProductId: productId} });

  const [addToCart, { data: addToCartData, loading: addToCartLoading, error: addToCartError }] = useMutation(ADD_TO_CART);

  useEffect(() => {
    let currentSessionId = localStorage.getItem('sessionId');
    if (!currentSessionId) {
      currentSessionId = uuidv4();
      localStorage.setItem('sessionId', currentSessionId);
    }
    setSessionId(currentSessionId);

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
    <Box>
      {isDesktop ? (
        <ProductDesktop
          product={product}
          selectedColor={selectedColor}
          handleAddToCart={handleAddToCart}
          selectedSizeVariantId={selectedSizeVariantId}
          setSelectedSizeVariantId={setSelectedSizeVariantId}
          selectedColorIndex={selectedColorIndex}
          setSelectedColorIndex={setSelectedColorIndex}
          randomProductData={randomProductData}
          addToCartLoading={addToCartLoading}
          hasColors={hasColors}
        />
      ) : (
        <ProductMobile
          product={product}
          selectedColor={selectedColor}
          handleAddToCart={handleAddToCart}
          selectedSizeVariantId={selectedSizeVariantId}
          setSelectedSizeVariantId={setSelectedSizeVariantId}
          selectedColorIndex={selectedColorIndex}
          setSelectedColorIndex={setSelectedColorIndex}
          randomProductData={randomProductData}
          addToCartLoading={addToCartLoading}
          hasColors={hasColors}
        />
      )}
    </Box>
  );
};

export default Product;

