import React, { useState, useEffect } from 'react';
import { Image, Box, Link } from '@chakra-ui/react';
import { gql, GraphQLClient } from 'graphql-request';

function ProductDetails({ productId }) {
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
        
      <Box mb="50px" w="175px" h="175px" bg="gray.300" display="flex" alignItems="center" justifyContent="center" overflow="hidden">
        {productDetails.imageUrl && (
      <Link href={productDetails.link} isExternal>

      <Image 
        src={productDetails.imageUrl} 
        alt="Product Image" 
        objectFit="contain"
        maxWidth="100%"
        maxHeight="100%"
        m="auto"
      />

    </Link>
  )}
</Box>

    );
}

export default ProductDetails;
