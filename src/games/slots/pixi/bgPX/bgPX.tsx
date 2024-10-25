import { Container, Sprite } from '@pixi/react';
import bgRoulette from '../../../../assets/slots/bg-main.png';
export const BGPX = () => {
  return (
    <Container>
      <Sprite x={-180} y={-110} image={bgRoulette} scale={1} />
    </Container>
  );
};
