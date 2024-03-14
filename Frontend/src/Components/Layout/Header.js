import React, { useState } from 'react';
import { Box, Flex, IconButton, Link } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { FaInstagram } from "react-icons/fa";
import { HiShoppingBag } from "react-icons/hi";
import MenuVariant from '../Layout/MenuVariant'; // Adjust the path based on your file structure

import Logo from './Logo';
import Icon from './Icon';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to close the menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Box as="header" h={"50px"} w="100%" bg="white" position={'sticky'} top={0} zIndex={10}>
      <Flex alignItems="center" justifyContent="space-between" height={"50px"}>
        
        {/* Dropdown Menu on the Right */}
        <Flex align={"center"}>
          <IconButton
            icon={<HamburgerIcon />}
            bg={"none"}
            onClick={toggleMenu}
          />
          <MenuVariant isOpen={isMenuOpen} onClose={closeMenu} /> {/* Pass closeMenu function to MenuVariant */}
          
          {/* Text in the Middle */}
          <Link href='https://457a75-25.myshopify.com/'>
            <HiShoppingBag size={"20px"} />
          </Link>

        </Flex>

        <Link href='/'>
          <Icon/>
        </Link>

        {/* Icon on the Left */}
        <Box mr={"10px"}>
          <Link href='https://www.instagram.com/'>
            <FaInstagram size="20px" />
          </Link>
        </Box>

      </Flex>
    </Box>
  );
};

export default Header;
