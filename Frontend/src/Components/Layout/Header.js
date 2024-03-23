import React, { useState } from 'react';
import { Box, Flex, IconButton, Link } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { FaInstagram } from "react-icons/fa";
import { HiShoppingBag } from "react-icons/hi";
import Menu from '../Layout/Menu'; // Adjust the path based on your file structure
import Bag from '../Layout/Bag';

import Icon from './Icon';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBagOpen, setIsBagOpen] = useState(false);

  // Function to close the menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close the bag
  const closeBag = () => {
    setIsBagOpen(false);
  };

  // Function to toggle the menu
  const toggleBag = () => {
    setIsBagOpen(!isBagOpen);
  };

  return (
    <Box as="header" h={"50px"} w="100%" bg="white" position={'sticky'} top={0} zIndex={10}>
      <Flex alignItems="center" justifyContent="space-between" height={"50px"}>
        
        {/* Dropdown Menu on the Left */}
        <Flex align={"center"}>
          <IconButton
            icon={<HamburgerIcon />}
            bg={"none"}
            onClick={toggleMenu}
          />
          <Menu isOpen={isMenuOpen} onClose={closeMenu} /> {/* Pass closeMenu function to MenuVariant */}
        </Flex>

        <Link href='/'>
          <Icon/>
        </Link>

        {/* Icon on the Left */}
        <Box >
          <IconButton
            icon={<HiShoppingBag/>}
            bg={"none"}
            onClick={toggleBag}
          />
  
          <Bag isOpen={isBagOpen} onClose={closeBag} />
        </Box>

      </Flex>
    </Box>
  );
};

export default Header;
