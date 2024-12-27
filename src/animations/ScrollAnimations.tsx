"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

const SectionToScroll = ({ children }: { children: React.ReactNode }) => {

    const ref = useRef(null);
    
    return (
        <motion.section
            ref={ref}
        >
            {children}
        </motion.section>
    )

}

const DivToScroll = ({ children }: { children: React.ReactNode }) => {

    const ref = useRef(null);
    
    return (
        <motion.div
            ref={ref}
        >
            {children}
        </motion.div>
    )

}

const ShowOnScroll = ({ 
    children, 
    index,
    className 
}: { 
    children: React.ReactNode, 
    index: number,
    className: string 
}) => {

    return (
        <motion.li
            initial={{
                opacity: 0,
                y: 100,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            transition={{ 
                duration: 0.5, 
                delay: 0.05 * index,
            }}
            viewport={{
                once: true,
            }}
            className={className}
        >
            {children}
        </motion.li>
    )

}

export {
    SectionToScroll,
    DivToScroll,
    ShowOnScroll,
}