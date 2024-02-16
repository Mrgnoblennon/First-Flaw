import React, { useState } from 'react';
import { Box, Flex, Image, IconButton, MenuButton, Button } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { FaInstagram } from "react-icons/fa";
import { HiShoppingBag } from "react-icons/hi";
import MenuVariant from '../Layout/MenuVariant'; // Adjust the path based on your file structure


import MyLogo from '../../FirstFlaw.svg';
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
          <HiShoppingBag size={"20px"} />
        </Flex>

        <Logo/>
        

        {/* Icon on the Left */}
        <FaInstagram size="20px" />

      </Flex>
    </Box>
  );
};

export default Header;
