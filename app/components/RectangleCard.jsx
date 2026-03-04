"use client";

import Link from "next/link";

export default function RectangleCard({
  href,
  children,
  className = "",
  isExternal = false,
  delay = 0,
  ariaLabel,
}) {
  const content = (
    <>
      <span className="absolute inset-0"></span>
      {children}
    </>
  );

  return (
    <div
      className={`${className} animate-card`}
      style={{ animationDelay: `${delay}s` }}
    >
      {isExternal ? (
        <a href={href} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel}>
          {content}
        </a>
      ) : (
        <Link href={href} aria-label={ariaLabel}>{content}</Link>
      )}
    </div>
  );
}
