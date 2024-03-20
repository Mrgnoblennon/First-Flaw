import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Text } from '@chakra-ui/react';
import { MdClose } from 'react-icons/md'; // Importing close icon from react-icons

const variants = {
  open: { opacity: 1, x: 0, display: 'block' },
  closed: { opacity: 0, x: "-100%", transitionEnd: { display: 'none' } }
};

const Filter = ({ isOpen, onClose }) => { // Adding onClose prop to handle closing the menu
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
        style={{ position: 'absolute', top: '0px', left: 0, backgroundColor: 'white', height: "100%", width: '80%', padding: '10px', boxSizing: 'border-box', zIndex: 1000, maxHeight: 'calc(100vh)', overflowY: 'auto' }}
      >
        <button onClick={onClose} style={{ position: 'sticky', top: '10px', left: '90%', background: 'none', border: 'none', cursor: 'pointer' }}>
          <MdClose size={24} />
        </button>
        <Text fontWeight={"bold"} fontSize={"l"}>Color</Text>

        <Text fontWeight={"bold"} fontSize={"l"}>Size</Text>

        <Text fontWeight={"bold"} fontSize={"l"}>Price</Text>

        <Text fontWeight={"bold"} fontSize={"l"}>More</Text>

      </motion.div>
      {isOpen && <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0, 0, 0, 0.5)', backdropFilter: 'blur(10px)', zIndex: 999 }} onClick={onClose}></div>}
    </>
  );
};

export default Filter;
