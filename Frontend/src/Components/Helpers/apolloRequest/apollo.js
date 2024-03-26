import { gql } from '@apollo/client'

export const REMOVE_CART_ITEM = gql`
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

export const VIEW_CART_QUERY = gql`
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

export const UPDATE_CART_ITEM_QUANTITY = gql`
  mutation adjustCartItemQuantity($sessionId: String!, $productId: ID!, $sizeVariantId: String!, $delta: Int!) {
    adjustCartItemQuantity(sessionId: $sessionId, productId: $productId, sizeVariantId: $sizeVariantId, delta: $delta) {
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