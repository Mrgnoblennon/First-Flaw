import React from 'react';
import { Text, Box , Flex , SimpleGrid} from '@chakra-ui/react';
import HomeSlider from '../Animations/HomeSlider'

const Home = () => {
  return (
    <Box>
      
      <Box h={"300px"}>

        <HomeSlider/>

      </Box>

      <Flex direction={"column"} align={"center"}>
      {/* Shirt 1 */}
      <Box mb={"50px"} w={"175px"} h={"175px"} bg={"gray.300"}>
        
      </Box>

      {/* Shirt 2 */}
      <Box mb={"75px"} w={"175px"} h={"175px"} bg={"gray.300"}>
        
      </Box>
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