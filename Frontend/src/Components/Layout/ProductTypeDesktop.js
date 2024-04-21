import React, { useState } from 'react';
import { SimpleGrid, GridItem, Flex, Box, Text, HStack, Link, List, ListItem, Button, VStack } from '@chakra-ui/react';
import ProductCard from '../Helpers/ProductCard';
import { motion } from 'framer-motion';
import { IoIosArrowDown } from 'react-icons/io';

const DesktopLayout = ({ data, displayText }) => {

  const [collectionIsVisible, collectionSetIsVisible] = useState(false);
  const [brandIsVisible, brandSetIsVisible] = useState(false);
  const [colorIsVisible, colorSetIsVisible] = useState(false);
  const [sizeIsVisible, sizeSetIsVisible] = useState(false);

  return(
    <HStack align={"start"}>

      <Box h={"500px"} w={"300px"}>
        <Text fontWeight="bold" fontSize="2xl" m="30px">{displayText}</Text>

        <Flex justifyContent={"space-between"} ml={"10px"}>
          <Button 
            bg={"white"}
            variant="none"
            leftIcon={<IoIosArrowDown />} 
            onClick={() => collectionSetIsVisible(!collectionIsVisible)}
          >
            Collections
          </Button>
          
        </Flex>
    
          {collectionIsVisible && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <List>
                <ListItem m={"20px 60px"}><Link href='/clothing' style={{ textDecoration: 'none' }}>View All Clothing</Link></ListItem>
                <ListItem m={"20px 60px"}><Link href='/products/tshirt' style={{ textDecoration: 'none' }}>T-Shirts</Link></ListItem>
                <ListItem m={"20px 60px"}><Link href='/products/pants' style={{ textDecoration: 'none' }}>Pants</Link></ListItem>
                <ListItem m={"20px 60px"}><Link href='/products/hoodie' style={{ textDecoration: 'none' }}>Hoodies</Link></ListItem>
                <ListItem m={"20px 60px"}><Link href={'/products/hat'.toLowerCase()} style={{ textDecoration: 'none' }}>Hats</Link></ListItem>
                <ListItem m={"20px 60px"}><Link href='/products/socks' style={{ textDecoration: 'none' }}>Socks</Link></ListItem>
              </List>
            </motion.div>
          )}

        <Flex justifyContent={"space-between"} ml={"10px"}>
          <Button 
            bg={"white"}
            variant="none"
            leftIcon={<IoIosArrowDown />} 
            onClick={() => brandSetIsVisible(!brandIsVisible)}
            // Optionally, use leftIcon prop for icon placement to the left
          >
            Brand
          </Button>
        
        </Flex>
    
        {brandIsVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Box my={"20px"} ml={"50px"}>
              <VStack align={"left"}>
                <Link>First Flaw</Link>
                <Link>Passport</Link>
                <Link>Butter</Link>
              </VStack>
            </Box>
          </motion.div>
        )}

        <Flex justifyContent={"space-between"} ml={"10px"}>
          <Button 
            bg={"white"}
            variant="none"
            leftIcon={<IoIosArrowDown />} 
            onClick={() => colorSetIsVisible(!colorIsVisible)}
            // Optionally, use leftIcon prop for icon placement to the left
          >
            Colours
          </Button>
          
        </Flex>
    
          {colorIsVisible && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Box my={"20px"} ml={"60px"}>
                <SimpleGrid columns={6} spacing={"10px"}>
                <Box borderWidth={"1px"} borderColor={"black"} borderRadius={"full"} w={"30px"} h={"30px"} bg={"yellow"}/>
                <Box borderWidth={"1px"} borderColor={"black"} borderRadius={"full"} w={"30px"} h={"30px"} bg={"red"}/>
                <Box borderWidth={"1px"} borderColor={"black"} borderRadius={"full"} w={"30px"} h={"30px"} bg={"green"}/>
                <Box borderWidth={"1px"} borderColor={"black"} borderRadius={"full"} w={"30px"} h={"30px"} bg={"blue"}/>
                <Box borderWidth={"1px"} borderColor={"black"} borderRadius={"full"} w={"30px"} h={"30px"} bg={"brown"}/>
                <Box borderWidth={"1px"} borderColor={"black"} borderRadius={"full"} w={"30px"} h={"30px"} bg={"white"}/>
                <Box borderWidth={"1px"} borderColor={"black"} borderRadius={"full"} w={"30px"} h={"30px"} bg={"gray"}/>
                <Box borderWidth={"1px"} borderColor={"black"} borderRadius={"full"} w={"30px"} h={"30px"} bg={"pink"}/>
                <Box borderWidth={"1px"} borderColor={"black"} borderRadius={"full"} w={"30px"} h={"30px"} bg={"black"}/>
                <Box borderWidth={"1px"} borderColor={"black"} borderRadius={"full"} w={"30px"} h={"30px"} bg={"purple"}/>
                </SimpleGrid>
              </Box>
            </motion.div>
          )}
        
        <Flex justifyContent={"space-between"} ml={"10px"}>
          <Button 
            bg={"white"}
            variant="none"
            leftIcon={<IoIosArrowDown />} 
            onClick={() => sizeSetIsVisible(!sizeIsVisible)}
            // Optionally, use leftIcon prop for icon placement to the left
          >
            Size
          </Button>
          
        </Flex>
    
          {sizeIsVisible && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Box my={"20px"} ml={"50px"}>
                <SimpleGrid columns={3} spacingY={"10px"}>
                <Button w={"80px"} size={"sm"} variant={"outline"}>XS</Button>
                <Button w={"80px"} size={"sm"} variant={"outline"}>S</Button>
                <Button w={"80px"} size={"sm"} variant={"outline"}>M</Button>
                <Button w={"80px"} size={"sm"} variant={"outline"}>L</Button>
                <Button w={"80px"} size={"sm"} variant={"outline"}>XL</Button>
                <Button w={"80px"} size={"sm"} variant={"outline"}>XXL</Button>
                </SimpleGrid>
              </Box>
            </motion.div>
          )}

          

        
      </Box>

      <Box ml={"80px"} minH="500px" mt={"30px"}>
        <SimpleGrid columns={3} gap={10}>
          {data.getProductsByType.map((product) => (
            <GridItem key={product.id} w="100%">
              <ProductCard product={product} />
            </GridItem>
          ))}
        </SimpleGrid>
      </Box>

    </HStack>
    ) 
  };
export default DesktopLayout;
