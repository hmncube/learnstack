import React from "react";
import { motion } from 'framer-motion';
import { css } from '../../styled-system/css';

const AnimatedDiv = ({ children, id,  backgroundColor}: { children: React.ReactNode, id: string, backgroundColor: string }) => {
  return (
    <motion.div
    initial={{ y: 100, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.2, delay: 0.5, type: 'spring', stiffness: 100 }}
    id={id} className={css({ backgroundColor, height: '100vh' })}>
    {children}
</motion.div>
  )
};

export default AnimatedDiv;
