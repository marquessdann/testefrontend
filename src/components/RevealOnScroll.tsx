'use client';

import { ReactNode } from 'react';
import { useReveal } from '@/lib/useReveal';

type RevealOnScrollProps = {
  children: ReactNode;
  delayMs?: number;
  className?: string;
  as?: 'div' | 'li';
};

export default function RevealOnScroll({
  children,
  delayMs = 0,
  className = '',
  as = 'div',
}: RevealOnScrollProps) {
  const ref = useReveal<HTMLDivElement>(delayMs);
  const Tag = as;

  return (
    <Tag ref={ref as never} className={`reveal ${className}`}>
      {children}
    </Tag>
  );
}
