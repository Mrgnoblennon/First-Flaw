import React from 'react';
import { useMutation, gql } from '@apollo/client';
import { Box, Text, VStack, HStack, Button, IconButton } from '@chakra-ui/react';
import { FaTrashCan } from "react-icons/fa6";

const REMOVE_CART_ITEM = gql`
  mutation RemoveFromCart($sessionId: String!, $sizeVariantId: String!) {
    removeFromCart(sessionId: $sessionId, sizeVariantId: $sizeVariantId) {
      sessionId
      items {
        productId
        name
        quantity
      }
    }
  }
`;

const VIEW_CART_QUERY = gql`
  query ViewCart {
    viewCart {
      sessionId
      items {
        productId
        name
        quantity
        imageUrl
        basePrice
        brand
        colorName
        size
      }
    }
  }
`;

const BagProductCard = ({ loading, error, data, sessionId }) => {

  const [removeFromCart, { loading: removing, error: removeError }] = useMutation(REMOVE_CART_ITEM);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text color="red.500">Error: {error.message}</Text>;

  // Ensure data and data.items are defined before accessing items
  const items = data && data.items ? data.items : [];

  // Function to call the mutation with the item's sizeVariantId
  const handleRemoveItem = async (sizeVariantId) => {
    try {
      const currentSessionId = localStorage.getItem('sessionId')
      await removeFromCart({
        variables: {
          sessionId: currentSessionId, // Assuming sessionId is passed as a prop
          sizeVariantId: sizeVariantId,
        },
        refetchQueries: [{ query: VIEW_CART_QUERY/* your query to refetch cart items */ }],
      });
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  return (
    <VStack spacing={4} align="stretch" m="20px" minHeight={"660px"}>
      {items.length === 0 && <Text>Your bag is empty.</Text>}
      {items.map((item, index) => (
        <Box key={index} p="5" boxShadow="md" borderWidth="1px">
          
          <HStack>
            
            {item.imageUrl && (
              <img src={item.imageUrl} alt={item.name} style={{ width: '100px', height: 'auto' }} />
            )}
  
            <Box>
              <VStack ml={"30px"} align={"left"}>
                <HStack>
                <Text fontWeight="bold">{item.brand}</Text>
                <IconButton
                  icon={<FaTrashCan />}
                  aria-label="Remove item"
                  bg={"none"}
                  ml={"80px"}
                  onClick={() => handleRemoveItem(item.sizeVariantId)}
                  isLoading={removing}
                />
                </HStack>
                <Text>{item.name}</Text>
                <Text textColor={"gray"}>{item.colorName}, {item.size}</Text>
  
                <HStack spacing="15px">
                  <Button variant="outline" borderRadius={"full"} size="sm">-</Button>
                  <Text>{item.quantity}</Text>
                  <Button variant="outline" borderRadius={"full"} size="sm">+</Button>
                  <Text ml={"20px"}>${item.basePrice}</Text>
                </HStack>
  
              </VStack>
            </Box>
  
          </HStack>

        </Box>
      ))}
    </VStack>
  );
};

export default BagProductCard;
