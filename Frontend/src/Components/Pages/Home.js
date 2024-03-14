import React from 'react';
import { Box , Flex, Text , SimpleGrid, Button} from '@chakra-ui/react';
import HomeSlider from '../Animations/HomeSlider'

import ProductDetailTorso from '../Helpers/ProductDetailTorso';
import ProductDetailRing from '../Helpers/ProductDetailRing';
import CollectionDetailTorso from '../Helpers/CollectionDetailTorso'

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


        <Button mb={"60px"} h={"25px"} textColor={"white"} bg={"black"} borderRadius={20} >Shop Now</Button>

      </Flex>

      <Flex direction={"column"} align={"center"}>

        {/* <CollectionDetailTorso productId={"290114797621"} name={"Tame"} color={"white"}/> */}

        {/* Item 1 */}
        <ProductDetailTorso productId={"7386699792437"} name={"Tame"} color={"white"}/>

        {/* Item 2 */}
        <ProductDetailTorso productId={"7363365175349"} name={"Street"} color={"white"} textColor={"black"}/>

        {/* Item 3 */}
        <ProductDetailTorso productId={"7386700415029"} name={"New Balance"} color={"black"} textColor={"white"}/>

        {/* Item 4 */}
        <ProductDetailTorso productId={"7363135668277"} name={"Butter"} color={"white"} textColor={"black"}/>

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