import React from 'react';
import { Text, Box, Image, Heading } from '@chakra-ui/react'

const Payment = () => {
  return(
    <Box mx={"30px"}>
      <Image src='https://images.pexels.com/photos/3507802/pexels-photo-3507802.jpeg'/>
        <Box fontSize={"small"} bg={"gray.100"} p={"15px"}>
          <Heading mt={"30px"} fontSize={"large"}>Payment Policy for First Flaw</Heading>
          <br/>
          <Text fontWeight={"bold"}>Introduction:</Text>
          <br/>
          <Text>At First Flaw, we offer a variety of secure and convenient payment options for our customers. This policy outlines the payment methods we accept and the security measures we have in place to protect your information.</Text>
          <br/>
          <Text fontWeight={"bold"}>Accepted Payment Methods:</Text>
          <br/>
          <Text fontStyle={"italic"}>We accept the following forms of payment:</Text>
          <br/>
          <Text>Credit Cards: Visa, MasterCard, American Express, Discover.</Text>
          <Text>Debit Cards: Must have a Visa or MasterCard logo.</Text>
          <Text>Online Payment Platforms: PayPal, Apple Pay, Google Pay.</Text>
          <br/>  
          <Text fontWeight={"bold"}>Payment Security:</Text>
          <br/>
          <Text>We take your security seriously. Our website is SSL-certified, ensuring that your personal and payment information is encrypted and secure.</Text>
          <Text>We do not store any credit card information on our servers.</Text>
          <br/>  
          <Text fontWeight={"bold"}>Order Confirmation:</Text>
          <br/>
          <Text>After placing your order, you will receive an email confirmation containing your order details.</Text>
          <Text>Your credit/debit card will be charged as soon as your order is accepted and processed.</Text>
          <br/>  
          <Text fontWeight={"bold"}>Billing Information:</Text>
          <br/>
          <Text>Ensure that your billing information is entered correctly and matches the information on file with your bank or credit card provider.</Text>
          <Text>Incorrect billing information may result in delays in processing your order.</Text>
          <br/>  
          <Text fontWeight={"bold"}>Taxes:</Text>
          <br/>
          <Text>Applicable sales tax will be added to your order total based on your shipping address and the current tax rate.</Text>
          <br/>  
          <Text fontWeight={"bold"}>Cancellations and Modifications:</Text>
          <br/>
          <Text>If you need to cancel or modify your order, please contact us as soon as possible at firstflaw@management.com.au. We cannot guarantee changes if the order has already been processed.</Text>
          <br/>
          <Text fontWeight={"bold"}>Payment Issues:</Text>
          <br/>
          <Text>If you encounter issues with your payment, please contact us at firstflaw@support.com.au or +61-0412366284. We're here to help!</Text>
          <br/>
          <Text fontWeight={"bold"}>Questions:</Text>
          <br/>
          <Text>For any questions or concerns regarding our payment policy, please reach out to us at firstflaw@questions.com.au or +61-0412366284.</Text>
        </Box>
      </Box>
  );
};

export default Payment;