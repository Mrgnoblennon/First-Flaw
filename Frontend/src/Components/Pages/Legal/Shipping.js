import React from 'react';
import { Text, Box, Heading, Image} from '@chakra-ui/react'

const Shipping = () => {
  return(
    
    <Box mx={"30px"} >
        
      <Image src='https://www.themandarin.com.au/wp-content/uploads/2023/06/australia-post.jpg?w=1024'/>
      <Box fontSize={"small"} bg={"gray.100"} p={"15px"}>
      <Heading mt={"30px"} fontSize={"large"}>Shipping Policy for First Flaw</Heading>
      <br/>
      <Text fontWeight={"bold"}>Introduction:</Text>
      <br/>
      <Text>At First Flaw, we strive to deliver your purchases in a timely and efficient manner. Below are the details of our shipping policy.</Text>
      <br/>
      <Text fontWeight={"bold"}>Shipping Options:</Text>
      <br/>
      <Text>We offer the following shipping options:</Text>
      <br/>
      <Text>Standard Shipping: [Provide details on delivery timeframe, e.g., 5-7 business days].</Text>
      <br/>
      <Text>Expedited Shipping: [Provide details, e.g., 2-3 business days].</Text>
      <br/>
      <Text>Overnight Shipping: [Provide details, if offered].</Text>
      <br/>
      <Text fontWeight={"bold"}>Shipping Costs:</Text>
      <br/>
      <Text>Standard shipping is [free / a flat rate / based on order value].</Text>
      <Text>Expedited and Overnight shipping costs will vary based on the weight and destination of the order.</Text>
      <br/>
      <Text fontWeight={"bold"}>Processing Time:</Text>
      <br/>
      <Text>Orders are typically processed within [number of days, e.g., 1-2] business days.</Text>
      <Text>Orders placed on weekends or holidays will be processed on the next business day.</Text>
      <br/>
      <Text fontWeight={"bold"}>International Shipping:</Text>
      <br/>
      <Text>We [do / do not] offer international shipping.</Text>
      <Text>[If yes, include details about shipping costs, estimated delivery times, and any relevant customs/duty information.]</Text>
      <br/>
      <Text fontWeight={"bold"}>Order Tracking:</Text>
      <br/>
      <Text>Once your order has shipped, you will receive an email with a tracking number and a link to track your package.</Text>
      <br/>
      <Text fontWeight={"bold"}>Delivery Issues:</Text>
      <br/>
      <Text>If you encounter any issues with delivery, such as a missing or damaged package, please contact us immediately at [customer service email or phone number].</Text>
      <Text>[Your Store Name] is not responsible for lost or stolen packages confirmed to be delivered to the address entered for an order.</Text>
      <br/>
      <Text fontWeight={"bold"}>Address Changes:</Text>
      <br/>
      <Text>To change your shipping address after placing an order, please contact us as soon as possible at [customer service email or phone number]. We cannot guarantee address changes if the order has already been shipped.</Text>
      <br/>
      <Text fontWeight={"bold"}>Customs and Duties for International Orders:</Text>
      <br/>
      <Text>International customers are responsible for any customs, duties, and taxes imposed by their respective countries.</Text>
      <br/>
      <Text fontWeight={"bold"}>Questions:</Text>
      <br/>
      <Text>If you have any questions or concerns about our shipping policy, please contact us at [customer service email or phone number].</Text>
      </Box>
    </Box>
    );
};

export default Shipping;