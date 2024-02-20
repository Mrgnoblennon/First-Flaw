import React, { useState, useEffect } from 'react';
import { Box, Link, Text } from '@chakra-ui/react';
import { gql, GraphQLClient } from 'graphql-request';

function ProductDetailRing({ productId, name, color }) {
  const [productDetails, setProductDetails] = useState({ imageUrl: '', link: '' });

useEffect(() => {
    const client = new GraphQLClient('https://457a75-25.myshopify.com//api/2021-10/graphql.json', {
        headers: {
            'X-Shopify-Storefront-Access-Token': process.env.REACT_APP_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
        },
    });
    const query = gql`
        query getProduct($id: ID!) {
            product(id: $id) {
                handle
                images(first: 1) {
                    edges {
                        node {
                            src
                        }
                    }
                }
            }
        }
    `;
    client.request(query, { id: `gid://shopify/Product/${productId}` })
        .then(data => {
            const imageUrl = data.product.images.edges[0].node.src;
            const productLink = `https://457a75-25.myshopify.com//products/${data.product.handle}`;
            setProductDetails({ imageUrl, link: productLink });
            })
            .catch(error => console.error("Error fetching product data:", error));
    }, [productId]);

    return (
        <Link href={productDetails.link} isExternal style={{ textDecoration: 'none' }}>
        <Box
        w="140px"
        h="140px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        overflow="hidden"
        bg="gray.300"
        backgroundImage={`url('${productDetails.imageUrl}')`}
        backgroundSize="contain"  // Or "cover", depending on how you want the image to fit
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
      >
        {productDetails.imageUrl && (
            
              <Box bg={color} borderRadius={20} px={3} py={1} position={"relative"} top={"40px"}>
                <Text fontSize={"x-small"}>
                  {name}
                </Text>
              </Box>
        
        )}
      </Box>
          </Link>
  );
}

export default ProductDetailRing;
