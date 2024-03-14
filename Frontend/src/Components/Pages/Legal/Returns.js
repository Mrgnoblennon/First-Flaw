import React from 'react';
import { Text, Box, Heading, Image } from '@chakra-ui/react'

const Returns = () => {
  return(
    <Box mx={"30px"}>
        
      <Image src='https://res.cloudinary.com/sagacity/image/upload/c_crop,h_3184,w_4776,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1200/shutterstock_1831476562_ywxzg6.jpg'/>
      <Box fontSize={"small"} bg={"gray.100"} p={"15px"}>
        <Heading mt={"30px"} fontSize={"large"}>Return Policy for First Flaw</Heading>
        <br/>
        <Text fontWeight={"bold"}>Introduction:</Text>
        <br/>
        <Text>At First Flaw, we are committed to ensuring our customers love their purchases. However, if you're not 100% satisfied with your purchase, we're here to help.</Text>
        <br/>
        <Text fontWeight={"bold"}>Return Window:</Text>
        <br/>
        <Text>You can return items within [number of days, typically 30 or 60] days of receipt of your shipment.</Text>
        <br/>
        <Text fontWeight={"bold"}>Items Eligible for Return:</Text>
        <br/>
        <Text>Items must be unworn, unwashed, and have original tags attached.</Text>
        <Text>Sale items are [only eligible for exchange or store credit / not eligible for return].</Text>
        <Text>Accessories, swimwear, and undergarments are final sale for hygienic reasons.</Text>
        <br/>
        <Text fontWeight={"bold"}>Non-Returnable Items:</Text>
        <br/>
        <Text>Please note that certain items are non-returnable. These include:</Text>
        <br/>
        <Text>Customized or personalized items.</Text>
        <Text>Gift cards.</Text>
        <br/>
        <Text fontWeight={"bold"}>Return Process:</Text>
        <br/>
        <Text>To initiate a return, please visit our online return center at [website link].</Text>
        <Text>Fill out the return form with your order number and email address.</Text>
        <Text>Follow the instructions to select the items you wish to return and print your return shipping label.</Text>
        <Text>Pack the items securely and attach the shipping label to the package.</Text>
        <Text>Drop off the package at your nearest [carrier] location.</Text>
        <br/>
        <Text fontWeight={"bold"}>Return Shipping:</Text>
        <br/>
        <Text>Return shipping is [free / the responsibility of the customer].</Text>
        <Text>Original shipping fees are non-refundable.</Text>
        <br/>
        <Text fontWeight={"bold"}>Refunds:</Text>
        <br/>
        <Text>Once we receive your returned item(s), we will inspect them and notify you of the status of your refund. If approved, a credit will automatically be applied to your original method of payment within [number of days] days.</Text>
        <br/>
        <Text fontWeight={"bold"}>Exchanges:</Text>
        <br/>
        <Text>If you wish to exchange an item for a different size or color, please return the original item and place a new order.</Text>
        <br/>
        <Text fontWeight={"bold"}>Damaged or Incorrect Items:</Text>
        <br/>
        <Text>If you receive a damaged or incorrect item, please contact us immediately at [customer service email or phone number].</Text>
        <br/>
        <Text fontWeight={"bold"}>Questions:</Text>
        <br/>
        <Text>If you have any questions regarding our return policy, please contact us at [customer service email or phone number].</Text>
      </Box>
    </Box>
  );
};

export default Returns;