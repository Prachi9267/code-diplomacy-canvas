
import { Flower, Flower2 } from 'lucide-react';
import { useMemo } from 'react';

const FlowerBackground = () => {
  const flowers = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => {
      const top = `${Math.random() * 100}%`;
      const left = `${Math.random() * 100}%`;
      const size = `${Math.random() * 24 + 12}px`;
      const rotation = `${Math.random() * 360}deg`;
      const animationDelay = `${Math.random() * 8}s`;
      const Icon = Math.random() > 0.5 ? Flower : Flower2;

      return {
        id: i,
        style: {
          top,
          left,
          width: size,
          height: size,
          transform: `rotate(${rotation})`,
        },
        animationDelay,
        Icon,
      };
    });
  }, []);

  return (
    <div className="absolute inset-0 -z-20 overflow-hidden" aria-hidden="true">
      {flowers.map(({ id, style, animationDelay, Icon }) => (
        <div key={id} className="absolute" style={style}>
          <Icon
            className="text-primary/20 animate-subtle-pulse"
            style={{ animationDelay, width: '100%', height: '100%' }}
            strokeWidth={1.5}
          />
        </div>
      ))}
    </div>
  );
};

export default FlowerBackground;
