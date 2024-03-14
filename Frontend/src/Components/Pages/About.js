import React from 'react';
import { Text, Box, Heading, Image } from '@chakra-ui/react'

const About = () => {
  return(
    <Box mx={"30px"}>
        
      <Image src='https://images.toopa.com/414367_fremantle-street-art-art-trail-too-much-colour.jpg'/>

      <Box fontSize={"small"} bg={"gray.100"} p={"15px"}>

        <Heading mt={"30px"} fontSize={"large"}>Welcome to First Flaw: Unveiling Unique Fashion from Fremantle!</Heading>
        <br/>
        <Text>At First Flaw, we celebrate the beauty in imperfection, the allure of uniqueness, and the charm of individuality. Nestled in the vibrant heart of Fremantle, Western Australia, our online clothing store offers a curated collection of fashion pieces that embody the spirit of our coastal community.</Text>
        <br/>
        <Text fontWeight={"bold"}>Our Story</Text>
        <br/>
        <Text>First Flaw was born out of a passion for embracing flaws as inherent elements of beauty. Founded by a team of fashion enthusiasts with a deep connection to Fremantle's rich cultural tapestry, our journey began with a simple yet profound belief: every imperfection tells a story, and every flaw is an opportunity for expression.</Text>
        <br/>
        <Text fontWeight={"bold"}>Our Philosophy</Text>
        <br/>
        <Text>We believe that fashion is more than just clothing; it's a form of self-expression, a reflection of personality, and a means of storytelling. At First Flaw, we celebrate diversity in all its forms, offering a carefully curated selection of clothing that caters to different tastes, styles, and body types.</Text>
        <br/>
        <Text fontWeight={"bold"}>Our Collections</Text>
        <br/>
        <Text>Explore our diverse range of clothing collections, each inspired by the eclectic spirit of Fremantle. From bohemian-chic dresses to laid-back beachwear, from edgy streetwear to timeless classics, our collections are as diverse as the people who wear them.</Text>
        <br/>
        <Text fontWeight={"bold"}>Our Commitment to Sustainability</Text>
        <br/>
        <Text>As custodians of our planet, we are committed to promoting sustainability and ethical practices in the fashion industry. That's why we partner with brands that share our values, prioritizing eco-friendly materials, ethical production methods, and fair labor practices.</Text>
        <br/>
        <Text fontWeight={"bold"}>Our Community</Text>
        <br/>
        <Text>First Flaw is more than just a clothing store; it's a community of like-minded individuals who share a passion for fashion, creativity, and authenticity. Join us on social media to connect with fellow fashion enthusiasts, share styling tips, and stay updated on the latest trends.</Text>
        <br/>
        <Text fontWeight={"bold"}>Our Promise</Text>
        <br/>
        <Text>When you shop at First Flaw, you're not just buying clothes; you're investing in quality, style, and individuality. We strive to provide an exceptional shopping experience, from seamless online browsing to personalized customer service. Your satisfaction is our top priority.</Text>
      </Box>
    </Box>
  );
};

export default About;