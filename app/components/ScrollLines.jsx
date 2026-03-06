'use client';
import { useEffect, useRef } from 'react';

export default function ScrollLines() {
  const refVer = useRef(null);
  const refHor = useRef(null);

  useEffect(() => {
    const elVer = refVer.current;
    const elHor = refHor.current;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const onScroll = () => {
      if (prefersReduced) return;
      const rate = (window.innerWidth * 0.3) / window.innerHeight;
      elVer.style.transform = `translateX(${window.scrollY * rate}px)`;
      elHor.style.transform = `translateY(${-window.scrollY * 0.4}px)`;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div
        ref={refVer}
        className="fixed top-0 left-3/4 h-screen w-[15px] sm:border-2 border-blue-300 pointer-events-none z-0"
      />
      <div
        ref={refHor}
        className="fixed hidden sm:block top-80 left-0 w-screen border-t border-blue-300 mt-4 pointer-events-none z-0"
      />
    </>
  );
}
