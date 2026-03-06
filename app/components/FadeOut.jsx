'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

export function FadeOut({ children, className }) {
  const ref = useRef(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0.25, 0.95], [1, 0]);

  return (
    <motion.div
      ref={ref}
      style={prefersReduced ? undefined : { opacity }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
