import { Container, Sprite } from '@pixi/react';
import bgRoulette from '@/assets/roulette/bg-main-roulette.png';
export const BGPX = () => {
  return (
    <Container>
      <Sprite
        x={-30}
        y={-30}
        anchor={{
          x: 0,
          y: 0,
        }}
        // rotation={rotationInternal}
        image={bgRoulette}
        scale={0.493}
      />
    </Container>
  );
};
