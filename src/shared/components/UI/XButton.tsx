import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
const MotionBox = motion(Box);

const XButton = (({children, ...props}: any)=> {

  return (
    <MotionBox
      className="box"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      {...props}
    >
      {children}
    </MotionBox>
  )
})

export default XButton