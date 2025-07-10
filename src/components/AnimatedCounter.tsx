'use client';

import { useCountUp } from '@/hooks/useCountUp';

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
  className?: string;
}

export function AnimatedCounter({
  value,
  duration = 2000,
  decimals = 0,
  suffix = '',
  className = '',
}: AnimatedCounterProps) {
  const { count, elementRef } = useCountUp(value, {
    duration,
    decimals,
  });

  return (
    <div ref={elementRef} className={className}>
      {count}{suffix}
    </div>
  );
}