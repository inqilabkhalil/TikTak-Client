import { useEffect, useRef, useState } from "react";

interface UseCountUpOptions {
  duration?: number;
}

interface ParsedValue {
  target: number;
  suffix: string;
  digits: number;
}

const DEFAULT_DURATION = 1200;
const MIN_FLIP_INTERVAL = 16;
const MAX_FLIP_INTERVAL = 136;

const parseValue = (value: string): ParsedValue => {
  const match = value.match(/^(\d+)(.*)$/);

  if (!match) {
    return { target: 0, suffix: value, digits: 1 };
  }

  const [, numeric, suffix] = match;
  return { target: Number(numeric), suffix, digits: numeric.length };
};

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export const useCountUp = (value: string, options: UseCountUpOptions = {}) => {
  const { duration = DEFAULT_DURATION } = options;
  const { target, suffix, digits } = parseValue(value);

  const ref = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);
  const frameRef = useRef<number | null>(null);
  const [display, setDisplay] = useState(() => `${"0".repeat(digits)}${suffix}`);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const animate = () => {
      const maxRandom = Math.pow(10, digits) - 1;
      const startTime = performance.now();
      let lastFlipTime = startTime;

      const tick = (now: number) => {
        const elapsed = now - startTime;
        const linearT = Math.min(elapsed / duration, 1);
        const easedT = easeOutCubic(linearT);

        if (linearT >= 1) {
          setDisplay(`${target}${suffix}`);
          frameRef.current = null;
          return;
        }

        const flipInterval = MIN_FLIP_INTERVAL + easedT * (MAX_FLIP_INTERVAL - MIN_FLIP_INTERVAL);

        if (now - lastFlipTime >= flipInterval) {
          lastFlipTime = now;

          const range = Math.max(1, Math.round(maxRandom * (1 - easedT)));
          const low = Math.max(0, target - range);
          const high = Math.min(maxRandom, target + range);
          const randomValue = Math.floor(low + Math.random() * (high - low + 1));

          setDisplay(`${randomValue}${suffix}`);
        }

        frameRef.current = requestAnimationFrame(tick);
      };

      frameRef.current = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) return;

        hasAnimated.current = true;
        observer.disconnect();
        animate();
      },
      { threshold: 0.3 },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, [target, suffix, digits, duration]);

  return { ref, display };
};
