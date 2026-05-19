import { useEffect, useRef } from 'react';

export function useScrollReveal() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    const el = ref.current;
    if (el) {
      const revealEls = el.querySelectorAll('.reveal, .reveal-left, .reveal-right');
      revealEls.forEach((r) => observer.observe(r));
    }

    return () => {
      if (el) {
        const revealEls = el.querySelectorAll('.reveal, .reveal-left, .reveal-right');
        revealEls.forEach((r) => observer.unobserve(r));
      }
    };
  }, []);

  return ref;
}
