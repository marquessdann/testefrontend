'use client';

import { useEffect, useRef } from 'react';

/**
 * Hook leve de scroll-reveal baseado em IntersectionObserver.
 * Substitui bibliotecas de animação pesadas mantendo o efeito
 * de fade-up discreto usado em toda a página.
 */
export function useReveal<T extends HTMLElement>(delayMs = 0) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      node.classList.add('is-visible');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.setTimeout(() => {
              node.classList.add('is-visible');
            }, delayMs);
            observer.unobserve(node);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [delayMs]);

  return ref;
}
