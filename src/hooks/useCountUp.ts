import { useEffect, useRef, useState } from 'react';

interface UseCountUpOptions {
  duration?: number;
  start?: number;
  decimals?: number;
}

export function useCountUp(
  end: number,
  options: UseCountUpOptions = {}
) {
  const { duration = 2000, start = 0, decimals = 0 } = options;
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            setCount(start); // Reset count when becoming visible
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [start]);

  useEffect(() => {
    if (!isVisible) return;

    let animationFrameId: number;
    const startTime = Date.now();

    const animate = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out cubic function for smooth deceleration
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      
      const currentCount = start + (end - start) * easeOutCubic;
      setCount(currentCount);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible, start, end, duration]);

  const formattedCount = count.toFixed(decimals);

  return { count: formattedCount, elementRef };
}