import React, { useState } from 'react';
import { Box, Flex, IconButton, Link } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { FaInstagram } from "react-icons/fa";
import { HiShoppingBag } from "react-icons/hi";
import MenuVariant from '../Layout/MenuVariant'; // Adjust the path based on your file structure

import Logo from './Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <Box as="header" h={"50px"} w="100%" bg="white">
      <Flex alignItems="center" justifyContent="space-between">
        
        {/* Dropdown Menu on the Right */}
        <Flex align={"center"}>
        <IconButton
          icon={<HamburgerIcon />}
          bg={"none"}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        <MenuVariant isOpen={isMenuOpen} />

        {/* Text in the Middle */}
          <Link href='https://457a75-25.myshopify.com/'>
            <HiShoppingBag size={"20px"} />
          </Link>

        </Flex>

        <Link href='/'>
          <Logo/>
        </Link>
        

        {/* Icon on the Left */}
        <Link href='https://www.instagram.com/'>
        <FaInstagram size="20px" />
        </Link>

      </Flex>
    </Box>
  );
};

export default Header;
