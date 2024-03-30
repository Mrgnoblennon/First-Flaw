import React from 'react';
import { Box, Flex, Link } from '@chakra-ui/react';
import Icon from '../../../Layout/Icon';

const SummaryHeader = () => {

  return (
    <Box as="header" h={"50px"} w="100%" bg="white" position={'sticky'} top={0} zIndex={10}>
      <Flex alignItems="center" justifyContent="center" height={"50px"}>

        <Link href='/'>
          <Icon/>
        </Link>

      </Flex>
    </Box>
  );
};

export default SummaryHeader;
