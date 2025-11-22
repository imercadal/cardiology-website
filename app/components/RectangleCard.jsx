"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const transition = {
  duration: 0.8,
  ease: [0, 0.71, 0.2, 1.01],
};

export default function RectangleCard({
  href,
  children,
  className = "",
  isExternal = false,
}) {
  const isAnchor = href.startsWith("http");

  const content = (
    <>
      <span className="absolute inset-0"></span>
      {children}
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={transition}
      className={className}
    >
      {isExternal ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      ) : (
        <Link href={href}>{content}</Link>
      )}
    </motion.div>
  );
}
