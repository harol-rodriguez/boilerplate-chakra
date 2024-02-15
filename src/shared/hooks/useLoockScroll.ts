"use client";
import { useEffect } from 'react';

const useLockScrollSection = (ref: React.RefObject<HTMLElement>, lockPosition: number) => {
  useEffect(() => {
    const handleScroll = () => {
      const sectionTop = ref.current?.offsetTop || 0;
      const sectionHeight = ref.current?.offsetHeight || 0;

      // Verifica si el scroll está dentro de la sección específica
      if (window.scrollY >= sectionTop && window.scrollY <= sectionTop + sectionHeight) {
        window.scrollTo({
          top: lockPosition,
          behavior: 'auto'
        });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref, lockPosition]);
};

export default useLockScrollSection;
