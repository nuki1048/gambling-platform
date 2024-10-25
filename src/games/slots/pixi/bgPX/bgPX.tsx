import { Container, Sprite } from '@pixi/react';
import bgRoulette from '@/assets/slots/bg.png';
export const BGPX = () => {
  return (
    <Container>
      <Sprite
        x={-40}
        y={-35}
        anchor={{
          x: 0,
          y: 0,
        }}
        image={bgRoulette}
        scale={1}
      />
    </Container>
  );
};
