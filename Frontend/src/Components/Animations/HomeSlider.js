import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Box } from "@chakra-ui/react";
import { wrap } from "popmotion";
import { images } from "./image-data"; // Make sure this path is correct

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      position: "absolute"
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    position: "absolute"
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      position: "absolute"
    };
  }
};

const Example = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, images.length, page);

  useEffect(() => {
    const interval = setInterval(() => {
      // Change page to show next image
      setPage([page + 1, 1]);
    }, 10000); // Change image every 3000 milliseconds (3 seconds)

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [page]);

  return (
    <AnimatePresence initial={false} custom={direction}>
      <Box position="relative" overflow="hidden" width="100%" height={{base: "255px", lg: "600px"}}>
        <motion.img
          key={page}
          src={images[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "auto",
          }}
        />
      </Box>
    </AnimatePresence>
  );
};

export default Example;
