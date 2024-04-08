import React from 'react';
import { Box , Flex, Text , SimpleGrid, Button} from '@chakra-ui/react';
import HomeSlider from '../Animations/HomeSlider'

import ProductDetailTorso from '../Helpers/ProductDetailTorso';
import ProductDetailRing from '../Helpers/ProductDetailRing';

const Home = () => {
  return (
    <Box>
      
      <Box h={"275px"}>

        <HomeSlider/>

      </Box>

      <Flex justifyContent={"center"} my={"30px"}>

        <Text fontWeight={"bold"} fontSize={"2xl"}>FirstFlaw</Text>

      </Flex>

      {/* "Shop Now" button */}
      <Flex justifyContent={"center"}>

        <Button mb={"60px"} p='20px' fontSize='xl' textColor={"white"} bg={"black"} borderRadius={'full'} >Shop Now</Button>

      </Flex>

      <Flex direction={"column"} align={"center"}>

        {/* Item 1 */}
        <ProductDetailTorso collectionId={"661205c221d45b8d18569a48"} color={"black"} textColor={'white'}/>

        {/* Item 2 */}
        <ProductDetailTorso collectionId={"661406d536fb00a61841fe92"} color={"white"} textColor={"black"}/>

        {/* Item 3 */}
        <ProductDetailTorso collectionId={"661408b436fb00a61841fe9b"} color={"black"} textColor={"white"}/>

        {/* Item 4 */}
        <ProductDetailTorso collectionId={"6610ee901d9752c94d7fbed8"} color={"black"} textColor={"white"}/>

      </Flex>

      <Text fontWeight={"bold"} align={"center"}>Check out our ring selection below!</Text>

      <Flex justifyContent={"center"} mt={"60px"}>

        <SimpleGrid columns={2} spacing={5}>

          {/* Ring 1 */}
          <ProductDetailRing productId={"7363395616821"} name={"Karate"} color={"white"}/>

          {/* Ring 2 */}
          <ProductDetailRing productId={"7363399974965"} name={"Crown Jewel"} color={"white"}/>

          {/* Ring 3 */}
          <ProductDetailRing productId={"7363403841589"} name={"Chime"} color={"white"}/>

          {/* Ring 4 */}
          <ProductDetailRing productId={"7363403677749"} name={"Livingston"} color={"white"}/>
  
        </SimpleGrid>

      </Flex>

    </Box>
  );
};

export default Home;