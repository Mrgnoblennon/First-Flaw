import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button, Text, Flex, Box } from '@chakra-ui/react';
import { MdClose } from 'react-icons/md'; // Importing close icon from react-icons

const variants = {
  open: { opacity: 1, x: 0, display: 'block' },
  closed: { opacity: 0, x: "100%", transitionEnd: { display: 'none' } }
};

const Bag = ({ isOpen, onClose }) => { // Adding onClose prop to handle closing the menu
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }

    return () => {
      document.body.style.overflowY = 'auto';
    };
  }, [isOpen]);

  return (
    <>
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        transition={{ duration: 0.5 }}
        style={{ position: 'absolute', top: '0px', right: 0, backgroundColor: 'white', width: '100%', boxSizing: 'border-box', zIndex: 1000, maxHeight: 'calc(100vh)', overflowY: 'auto' }}
      >
        <button onClick={onClose} style={{ position: 'sticky', top: '10px', left: '90%', background: 'none', border: 'none', cursor: 'pointer' }}>
          <MdClose size={24} />
        </button>

        <Text ml={"20px"} fontWeight={"bold"} mb={"30px"} fontSize={"x-large"}>Bag</Text> 

        <Box bg={"blue"} h={"1000px"}>

        </Box>
        
        
        <Flex position={"sticky"} bottom={"0"} justifyContent={"center"} alignItems={"center"} bg="green" h="100px">
          <Button px={"40px"}>Checkout</Button>
        </Flex>
        
      </motion.div>
      {isOpen && <div style={{ position: 'fixed', top: 0, right: 0, right: 0, bottom: 0, background: 'rgba(0, 0, 0, 0.5)', backdropFilter: 'blur(10px)', zIndex: 999 }} onClick={onClose}></div>}
    </>
  );
};

export default Bag;
