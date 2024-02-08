import React from 'react';
import { Box, Flex, Text, IconButton, Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons'; // For the menu icon
import { SocialIcon } from 'react-social-icons';

const Header = () => {
  return (
    <Box as="header" w="100%" bg="black" p="1em">
      <Flex alignItems="center" justifyContent="space-between">
        
        {/* Icon on the Left */}
        <SocialIcon
          url="https://instagram.com"
          size="1em"
        />

        {/* Text in the Middle */}
        <Text fontSize="lg" fontWeight="bold" color={"white"}>First Floor</Text>

        {/* Dropdown Menu on the Right */}
        <Menu>
          <MenuButton as={Button} rightIcon={<HamburgerIcon />}>Menu</MenuButton>
          <MenuList>
            <MenuItem>Menu Item 1</MenuItem>
            <MenuItem>Menu Item 2</MenuItem>
            <MenuItem>Menu Item 3</MenuItem>
          </MenuList>
        </Menu>

      </Flex>
    </Box>
  );
};

export default Header;
