import React from 'react';
import { Box , Flex, Text , SimpleGrid, Button} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import HomeSlider from '../Animations/HomeSlider'

import CollectionCard from '../Helpers/CollectionCard';
import AccessoryCard from '../Helpers/AccessoryCard';

const Home = () => {
  let navigate = useNavigate();

  function handleClothingShop() {
    navigate('/clothing');  // Change '/about' to your desired path
}

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

        <Button onClick={handleClothingShop} mb={"60px"} p='20px' fontSize='xl' textColor={"white"} bg={"black"} borderRadius={'full'} >Shop Now</Button>

      </Flex>

      <Flex direction={"column"} align={"center"}>

        {/* Item 1 */}
        <CollectionCard collectionId={"661205c221d45b8d18569a48"} color={"black"} textColor={'white'}/>

        {/* Item 2 */}
        <CollectionCard collectionId={"661406d536fb00a61841fe92"} color={"white"} textColor={"black"}/>

        {/* Item 3 */}
        <CollectionCard collectionId={"661408b436fb00a61841fe9b"} color={"black"} textColor={"white"}/>

        {/* Item 4 */}
        <CollectionCard collectionId={"6610ee901d9752c94d7fbed8"} color={"black"} textColor={"white"}/>

      </Flex>

      <Text fontWeight={"bold"} align={"center"}>Check out our accessory selection below!</Text>

      <Flex justifyContent={"center"} mt={"60px"}>

        <SimpleGrid columns={2} spacing={5}>

          {/* Ring 1 */}
          <AccessoryCard productId={"6610bc7d40206bab40065125"} color={"black"} textColor={'white'}/>

          {/* Ring 2 */}
          <AccessoryCard productId={"6614cd4d9ac75ca258e1d8d7"} color={"black"} textColor={"white"}/>

          {/* Ring 3 */}
          <AccessoryCard productId={"6610bd7e40206bab4006512c"} color={"white"} textColor={'black'}/>

          {/* Ring 4 */}
          <AccessoryCard productId={"6614e71a9ac75ca258e1d9ad"} color={"black"} textColor={'white'}/>
  
        </SimpleGrid>

      </Flex>

    </Box>
  );
};

export default Home;