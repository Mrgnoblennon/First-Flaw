import React from 'react';
import { Box , Flex , SimpleGrid, Button} from '@chakra-ui/react';
import HomeSlider from '../Animations/HomeSlider'

import ProductDetailTorso from '../Helpers/ProductDetailTorso';
import ProductDetailRing from '../Helpers/ProductDetailRing';

const Home = () => {
  return (
    <Box>
      
      <Box h={"275px"}>

        <HomeSlider/>

      </Box>

      {/* "Shop Now" button */}
      <Flex justifyContent={"center"}>

        <Button mb={"60px"} h={"25px"} textColor={"white"} bg={"black"} borderRadius={20} >Shop Now</Button>

      </Flex>

      <Flex direction={"column"} align={"center"}>

        {/* Shirt 1 */}
        <ProductDetailTorso productId={"7363116597301"} name={"Tame"} color={"white"}/>

        {/* Shirt 2 */}
        <ProductDetailTorso productId={"7363365175349"} name={"Street"} color={"black"} textColor={"white"}/>

      </Flex>

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