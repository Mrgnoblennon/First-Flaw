import React from 'react';
import { useMutation, gql } from '@apollo/client';
import { Box, Text, VStack, HStack, Button, IconButton } from '@chakra-ui/react';
import { FaTrashCan } from "react-icons/fa6";
import { REMOVE_CART_ITEM, VIEW_CART_QUERY, UPDATE_CART_ITEM_QUANTITY } from './apolloRequest/apollo';

const BagProductCard = ({ loading, error, data }) => {

  const [removeFromCart, { loading: removing, error: removeError }] = useMutation(REMOVE_CART_ITEM);
  const [adjustCartItemQuantity, { loading: updatingQuantity }] = useMutation(UPDATE_CART_ITEM_QUANTITY);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text color="red.500">Error: {error.message}</Text>;

  // Ensure data and data.items are defined before accessing items
  const items = data && data.items ? data.items : [];

  const currentSessionId = localStorage.getItem('sessionId')

  // Function to call the mutation with the item's sizeVariantId
  const handleRemoveItem = async (sizeVariantId) => {
    try {
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

  const handleQuantityChange = async (productId, sizeVariantId, isIncrement) => {
    const delta = isIncrement ? 1 : -1; // Determine delta based on whether we're incrementing or decrementing
  
    try {
      await adjustCartItemQuantity({
        variables: {
          sessionId: currentSessionId,
          productId,
          sizeVariantId,
          delta, // Use delta instead of quantity
        },
        refetchQueries: [{ query: VIEW_CART_QUERY }],
      });
    } catch (error) {
      console.error("Error adjusting item quantity in cart:", error);
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
                  ml={"70px"}
                  onClick={() => handleRemoveItem(item.sizeVariantId)}
                  isLoading={removing}
                />
                </HStack>
                <Text>{item.name}</Text>
                <Text textColor={"gray"}>{item.colorName}, {item.size}</Text>
  
                <HStack spacing="15px">
                <Button
                  variant="outline"
                  borderRadius={"full"}
                  size="sm"
                  onClick={() => handleQuantityChange(item.productId, item.sizeVariantId, false)} // Decrement
                  isDisabled={item.quantity <= 1 || updatingQuantity}
                >   

                  -
                    
                </Button>

                  <Text>{item.quantity}</Text>

                <Button
                  variant="outline"
                  borderRadius={"full"}
                  size="sm"
                  onClick={() => handleQuantityChange(item.productId, item.sizeVariantId, true)} // Increment
                  isLoading={updatingQuantity}
                >

                +
                
                </Button>

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
