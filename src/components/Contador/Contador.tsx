import { useEffect, useState } from 'react';
import { useVisivel } from '../../hooks/useVisivel';

const DURACAO_MS = 1200;

export function Contador({ valor }: { valor: number }) {
  const [ref, visivel] = useVisivel<HTMLSpanElement>();
  const [atual, setAtual] = useState(valor);

  useEffect(() => {
    if (!visivel) return;

    const inicio = performance.now();
    let quadro = requestAnimationFrame(function animar(agora) {
      const progresso = Math.min(Math.max((agora - inicio) / DURACAO_MS, 0), 1);
      setAtual(Math.round(valor * (1 - Math.pow(1 - progresso, 3))));
      if (progresso < 1) quadro = requestAnimationFrame(animar);
    });

    return () => cancelAnimationFrame(quadro);
  }, [visivel, valor]);

  return <span ref={ref}>{atual}</span>;
}
