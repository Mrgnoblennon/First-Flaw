import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import { Text, Box, Image, Button, HStack } from '@chakra-ui/react';

// Mock fetch function for demonstration
const fetchProductDetails = async (productId) => {
  // Your fetch logic here, returning the example product structure
  const exampleProduct = {
    name: "Butter Flex",
    id: "65f8f4fbf84c767a99ee4dc3",
    basePrice: 30,
    imageUrl: "https://res.cloudinary.com/dwzlmgxqp/image/upload/v1710811648/Orange_Butter_nqs3w4.webp",
    variants: [
      { color: "Orange", 
        size: "XS" 
      },
      { 
        color: "Orange",
        size: "S" 
      },
      { 
        color: "Orange",
        size: "L" 
      },
      { 
        color: "Green",
        size: "S" 
      },
      { 
        color: "Green",
        size: "L" 
      }
    
    ]
  };
  return exampleProduct;
};

const Product = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState("");

  useState(() => {
    fetchProductDetails(productId).then(product => {
      setProduct(product);
      // Optionally, set the first color as default selected color
      setSelectedColor(product.variants[0].color);
    });
  }, [productId]);

  if (!product) return <Box>Loading...</Box>;

  // Extract unique color options
  const colorOptions = [...new Set(product.variants.map(variant => variant.color))];

  // Filter sizes for the selected color
  const sizeOptions = product.variants
    .filter(variant => variant.color === selectedColor)
    .map(variant => variant.size);

  return (
    <Box mx={"20px"}>
      <Image mt={"20px"} src={product.imageUrl} alt={product.name} />
      
      {/* Color Options */}
      <HStack spacing={4} justifyContent="center" mt={"20px"}>
        {colorOptions.map(color => (
        <Button
          key={color}
          size="xs"
          borderRadius="full" // equivalent to borderRadius={100} for a circular shape
          bg={color.toLowerCase()} // Set the background color to match the variant color
          color="white" // Set a fixed text color that contrasts well with your button colors
          _hover={{
            bg: `${color.toLowerCase()}.600`, // Darken the button on hover, adjust value based on your color naming convention
          }}
          onClick={() => setSelectedColor(color)}
        />
      ))}
      </HStack>
      
      {/* Size Options */}
      <HStack justifyContent={"center"} mt={"20px"}>
        {sizeOptions.map(size => (
          <Button key={size}>{size}</Button>
        ))}
      </HStack>
      
      <Text fontWeight={"bold"} fontSize={"xl"} mt={"20px"}>{product.name}</Text>
      <Text fontSize={"lg"}>${product.basePrice}</Text>
    </Box>
  );
};

export default Product;
