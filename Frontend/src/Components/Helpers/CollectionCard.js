import React from 'react';
import { Box, Text, } from '@chakra-ui/react';
import { gql, useQuery } from '@apollo/client';

const GET_COLLECTION_BY_ID = gql`
  query GetCollectionById($getCollectionByIdId: ID!) {
    getCollectionById(id: $getCollectionByIdId) {
      title
      id
      collectionImageUrl
    }
  }
  `;

const CollectionCard = ({ collectionId, color, textColor}) => {

const { data: product } = useQuery(GET_COLLECTION_BY_ID, { variables: { getCollectionByIdId: collectionId } });

// Destructure data if it exists
const { title, collectionImageUrl } = product?.getCollectionById || {};


    return (
        <Box
        mb="50px"
        w="350px"
        h="350px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        overflow="hidden"
        bg="gray.300"
        backgroundImage={collectionImageUrl}
        backgroundSize="contain"  // Or "cover", depending on how you want the image to fit
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
       >
          <Box bg={color} borderRadius={20} px={5} py={1} position={"relative"} top={"130px"}>
            <Text fontSize={"xl"} textColor={textColor}>
              {title}
            </Text>
          </Box>
        </Box>
  );
}

export default CollectionCard;
