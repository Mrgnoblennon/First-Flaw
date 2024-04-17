import React, { useState } from 'react';
import { Box, Flex, IconButton, Link } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
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
    <Box as="header" h={"60px"} w="100%" bg="white" position={'sticky'} top={0} zIndex={10} borderBottom="1px solid" borderBottomColor="gray.100">
      <Flex alignItems="center" justifyContent="space-between" height={"60px"}>
        
        {/* Dropdown Menu on the Left */}
        
          <IconButton
            icon={<HamburgerIcon />}
            bg={"none"}
            onClick={toggleMenu}
            ml={{lg: "10px"}}
          />
          <Menu isOpen={isMenuOpen} onClose={closeMenu} /> {/* Pass closeMenu function to MenuVariant */}
        

        <Link href='/'>
          <Icon/>
        </Link>

        {/* Icon on the Left */}
        <Box >
          <IconButton
            icon={<HiShoppingBag/>}
            bg={"none"}
            onClick={toggleBag}
            mr={{lg: "10px"}}
          />
  
          <Bag isOpen={isBagOpen} onClose={closeBag} />
        </Box>

      </Flex>
    </Box>
  );
};

export default Header;
