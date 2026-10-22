import { useEffect, useRef, useState } from 'react';

export function useVisivel<T extends Element>() {
  const ref = useRef<T>(null);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const elemento = ref.current;
    if (!elemento) return;

    const observer = new IntersectionObserver(
      ([entrada]) => {
        if (!entrada.isIntersecting) return;
        setVisivel(true);
        observer.disconnect();
      },
      { threshold: 0.15 },
    );

    observer.observe(elemento);
    return () => observer.disconnect();
  }, []);

  return [ref, visivel] as const;
}
