import React from "react";

import { Text, Box, Image, Button, HStack, IconButton } from '@chakra-ui/react'
import { FaHeart } from 'react-icons/fa'; // Example icon import

const Product = () => {
  return(
    <Box mx={"20px"}>

    {/* Highlighted Product Image */}
    <Image mt={"20px"} src="https://res.cloudinary.com/dwzlmgxqp/image/upload/v1710815312/Green_Passport_oybndw.webp"/>

    {/* Color selector circles: each circle will represent the different colors available to the product variants */}
    <HStack spacing={4} justifyContent="center" mt={"20px"}>
        
        <Box
            as="button"
            borderRadius="full"
            width="40px"
            height="40px"
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            backgroundColor="gray.200" // Example background color
            backgroundImage="https://res.cloudinary.com/dwzlmgxqp/image/upload/v1710815312/Green_Passport_oybndw.webp"
            backgroundSize="cover"
            border="none"
        />
        <Box
            as="button"
            borderRadius="full"
            width="40px"
            height="40px"
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            backgroundColor="gray.200" // Example background color
            backgroundImage="https://res.cloudinary.com/dwzlmgxqp/image/upload/v1710815312/Green_Passport_oybndw.webp"
            backgroundSize="cover"
            border="none"
        />
    </HStack>

    {/* Size selector: a size will appear for each product size specified in variants */}

    <HStack justifyContent={"center"} mt={"20px"}>
        <Button>XS</Button>
        <Button>S</Button>
        <Button>M</Button>
        <Button>L</Button>
        <Button>XL</Button>
    </HStack>

    <Text fontWeight={"bold"} fontSize={"xl"} mt={"20px"}>Passport Slick</Text>

    <Text fontSize={"lg"}>$40</Text>

    </Box>
  )
}

export default Product;