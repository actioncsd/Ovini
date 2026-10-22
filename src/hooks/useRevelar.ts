import { useVisivel } from './useVisivel';

export function useRevelar<T extends Element>(indice = 0) {
  const [ref, visivel] = useVisivel<T>();

  return {
    ref,
    className: visivel ? 'reveal visivel' : 'reveal',
    style: { animationDelay: `${(indice % 4) * 90}ms` },
  };
}
