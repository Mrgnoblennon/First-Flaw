import React, { useEffect } from 'react';
import { gql, useMutation, useQuery } from '@apollo/client';

import { Box, Text, Button } from '@chakra-ui/react'

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
        sizeVariantId
      }
    }
  }
`;

const CREATE_ORDER_MUTATION = gql`
  mutation CreateOrder($items: [CartItemInput!]!) {
    createOrder(orderInput: { items: $items }) {
      id
      items {
        name
        quantity
        basePrice
        colorName
        size
        imageUrl
      }
    }
  }
`;



const OrderConfirmation = () => {

    const { data, loading: queryLoading, error: queryError } = useQuery(VIEW_CART_QUERY);
    const items = data?.viewCart.items || [];

  console.log(items);

  const [createOrder, { data: orderData, loading, error }] = useMutation(CREATE_ORDER_MUTATION);


  const handleCreateOrder = async () => {
    // Replace this with actual items structure expected by your GraphQL API
    const formattedItems = items.map(item => ({
      name: item.name,
      quantity: item.quantity,
      imageUrl: item.imageUrl,
      basePrice: item.basePrice,
      colorName: item.colorName,
      size: item.size,
    }));

    try {
      await createOrder({ variables: { items: formattedItems } });
      if (error) {
        console.log('Error creating order:', error);
      } else {
        console.log('Order created successfully', data);
        // You can redirect or show a success message here
      }
    } catch (err) {
      console.error('Exception when creating order:', err);
    }
  };

  useEffect(() => {
    console.log('Query loading status:', queryLoading ? 'Loading...' : 'Idle');
    if (queryError) {
      console.error('Error fetching items:', queryError);
    }
  }, [queryLoading, queryError]);
    
  return(
    <Box>
      <Text>Order Confirmation Test</Text>

      <Button onClick={handleCreateOrder}> Send Confirmation </Button>
    </Box>
  )
}

export default OrderConfirmation;