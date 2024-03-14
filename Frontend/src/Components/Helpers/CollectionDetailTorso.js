import React, { useState, useEffect } from 'react';
import { Box, Link, Text } from '@chakra-ui/react';
import { gql, GraphQLClient } from 'graphql-request';

function CollectionDetailTorso({ collectionId, name, color = 'gray', textColor = 'black' }) {
  const [collectionDetails, setCollectionDetails] = useState({ imageUrl: '', link: '' });

  useEffect(() => {
    const client = new GraphQLClient('https://457a75-25.myshopify.com/api/2021-10/graphql.json', {
      headers: {
        'X-Shopify-Storefront-Access-Token': process.env.REACT_APP_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
      },
    });
    const query = gql`
      query getCollection($id: ID!) {
        collection(id: $id) {
          handle
          image {
            originalSrc
          }
        }
      }
    `;
    client
      .request(query, { id: `gid://shopify/Collection/${collectionId}` })
      .then(data => {
        if (data && data.collection) {
          const imageUrl = data.collection.image ? data.collection.image.originalSrc : '';
          const collectionLink = data.collection.handle ? `https://457a75-25.myshopify.com/collections/${data.collection.handle}` : '';
          setCollectionDetails({ imageUrl, link: collectionLink });
        } else {
          console.error("Collection data not found:", data);
        }
      })
      .catch(error => console.error("Error fetching collection data:", error));
  }, [collectionId]);

  return (
    <Link href={collectionDetails.link} isExternal style={{ textDecoration: 'none' }}>
      <Box
        mb="50px"
        w="350px"
        h="350px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        overflow="hidden"
        bg="gray.300"
        backgroundImage={`url('${collectionDetails.imageUrl}')`}
        backgroundSize="contain" // Or "cover", depending on how you want the image to fit
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
      >
        {collectionDetails.imageUrl && (
          <Box bg={color} borderRadius={20} px={5} py={1} position={"relative"} top={"130px"}>
            <Text fontSize={"xl"} textColor={textColor}>
              {name}
            </Text>
          </Box>
        )}
      </Box>
    </Link>
  );
}

export default CollectionDetailTorso;
