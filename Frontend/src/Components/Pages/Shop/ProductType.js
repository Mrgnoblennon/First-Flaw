import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { Box, useBreakpointValue } from '@chakra-ui/react';

import DesktopLayout from '../../Layout/ProductTypeDesktop';
import MobileLayout from '../../Layout/ProductTypeMobile';

const GET_PRODUCTS_BY_TYPE = gql`
query GetProductsByType($productType: String!) {
  getProductsByType(productType: $productType) {
    id
    name
    basePrice
    baseUrl
    colors {
      imageUrl
    }
  }
}
`;

const formatProductType = (text) => {
    if (!text) return "";
    if (text.toLowerCase() === 'tshirt') {
        return 'T-Shirts';
    }
    const formattedText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    return formattedText.endsWith('s') ? formattedText : formattedText + 's';
}

const ProductType = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { productType } = useParams();
  const { loading, error, data } = useQuery(GET_PRODUCTS_BY_TYPE, {
    variables: { productType }
  });

  const displayText = formatProductType(productType);
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Box minH="500px">
      {isDesktop ? (
        <DesktopLayout 
        data={data}
        displayText={displayText}
        toggleMenu={() => setIsMenuOpen(!isMenuOpen)}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}/>
      ) : (
        <MobileLayout
          data={data}
          displayText={displayText}
          toggleMenu={() => setIsMenuOpen(!isMenuOpen)}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
      )}
    </Box>
  );
};

export default ProductType;
