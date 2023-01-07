'use client';
import { motion } from "framer-motion";
import styles from "../styles";

import {textContainer, textVariant2 } from "../utils/motion";

export const TypingText = ({title, textStyles}) => (
  <motion.p
  variants={textContainer}
className={`font-normal text-[14px] text-white ${textStyles}`}
  >
{Array.from(title).map((letter,index) =>(
  <motion.span
  variants={textVariant2}
  key={index}
  className="text-[#C7C7C7]"
  >
    {letter === ' ' ? '\u00A0' :letter}
  </motion.span>
))}

  </motion.p>
);

export const TitleText = ({title, textStyles}) => (
  <motion.h2
  variants={textVariant2}
  initial='hidden'
  whileInView='show'
  className={`mt-[8px] font-bold mt:text-[64px] text-[40px] text-white ${textStyles}`}
  >
    {title}

  </motion.h2>
);
