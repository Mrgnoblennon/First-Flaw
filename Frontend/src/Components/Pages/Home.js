import React from 'react';
import { Box , Flex , SimpleGrid, Button} from '@chakra-ui/react';
import HomeSlider from '../Animations/HomeSlider'

import ProductDetails from '../Helpers/ProductDetails';

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
        <ProductDetails productId={"7363116597301"}/>

        {/* Shirt 2 */}
        <ProductDetails productId={"7363135668277"}/>

      </Flex>

      <Flex justifyContent={"center"}>

        <SimpleGrid columns={2} spacing={10}>

          {/* Ring 1 */}
          <Box w={"120px"} h={"120px"} bg={"gray.300"}>

          </Box>

          {/* Ring 2 */}
          <Box w={"120px"} h={"120px"} bg={"gray.300"}>
            
          </Box>

          {/* Ring 3 */}
          <Box w={"120px"} h={"120px"} bg={"gray.300"}>
            
          </Box>

          {/* Ring 4 */}
          <Box w={"120px"} h={"120px"} bg={"gray.300"}>
            
          </Box>

        </SimpleGrid>

      </Flex>

    </Box>
  );
};

export default Home;