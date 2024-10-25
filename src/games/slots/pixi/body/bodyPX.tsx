import { Container, Sprite } from '@pixi/react';
import bodyImage from '../../../../assets/slots/body.svg';
import lineImage from '../../../../assets/slots/lineIcon.svg';
import horizontalLine from '../../../../assets/slots/horizontal-line.svg';

import { FC } from 'react';

const BodyPX: FC = () => {
  return (
    <Container>
      <Sprite x={575} y={225} image={bodyImage} anchor={0.5} />

      <Sprite image={lineImage} x={380} y={50} />
      <Sprite image={lineImage} x={510} y={50} />
      <Sprite image={lineImage} x={640} y={50} />
      <Sprite image={lineImage} x={770} y={50} />
      <Sprite image={horizontalLine} x={380} y={200} />
    </Container>
  );
};

export default BodyPX;
