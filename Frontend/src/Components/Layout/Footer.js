import React from 'react';
import { Box, Text, Grid, Link } from '@chakra-ui/react'

const Footer = () => {
  return(
    <Box mt={"70px"} width={"100%"} height={"300px"} bg={"gray.200"} px={"20px"} pt={"30px"}>
       <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      <Box textAlign="center">
        <Text fontWeight={"bold"} p={2} color="black">
          Company
        </Text>
        <Link href='/about' mt={1}>About</Link>
        <Text mt={1}>Shipping</Text>
        <Text mt={1}>Returns</Text>
        <Text mt={1}>Payment</Text>
      </Box>

      <Box textAlign="center">
        <Text fontWeight={"bold"} p={2} color="black">
          Stores
        </Text>
        <Text mt={1}>Fremantle</Text>
        <Text mt={1}>Rottnest Island</Text>
        <Text mt={1}>Broome</Text>
      </Box>

      <Box textAlign="center">
        <Text fontWeight={"bold"} p={2} color="black">
          Social
        </Text>
        <Text mt={1}>Instagram</Text>
        <Text mt={1}>Facebook</Text>
        <Text mt={1}>Youtube</Text>
      </Box>
      {/* You can add more grid items with subtexts here */}
    </Grid>
    </Box>
  );
};

export default Footer;