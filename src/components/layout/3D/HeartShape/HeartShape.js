import './HeartShape.css';
import { Shape, DoubleSide } from 'three';
import { Extrude } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';

const HeartShape = (props) => {
  const getHeartShape = () => {
    const x = -5;
    const y = -10;

    const basicShape = new Shape();

    basicShape.moveTo(x + 5, y + 5);
    basicShape.bezierCurveTo(x + 5, y + 5, x + 4, y, x, y);
    basicShape.bezierCurveTo(x - 6, y, x - 6, y + 7, x - 6, y + 7);
    basicShape.bezierCurveTo(x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19);
    basicShape.bezierCurveTo(x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7);
    basicShape.bezierCurveTo(x + 16, y + 7, x + 16, y, x + 10, y);
    basicShape.bezierCurveTo(x + 7, y, x + 5, y + 5, x + 5, y + 5);

    return basicShape;
  };

  const heartShape = getHeartShape();
  const extrudeSettings = {
    steps: 2,
    depth: 4,
    bevelEnabled: true,
    bevelThickness: 1.5,
    bevelSize: 2,
    bevelSegments: 8,
  };
  const springScale = useSpring({
    loop: { reverse: true },
    from: { scale: [0.1, 0.1, 0.1] },
    to: { scale: [0.12, 0.12, 0.12] },
  });

  return (
    <animated.mesh scale={springScale.scale}>
      <Extrude args={[heartShape, extrudeSettings]} rotation={[0, 0, 3.1]}>
        <meshStandardMaterial
          flatshading
          color={props.heartColor}
          side={DoubleSide}
          roughness={0.2}
        />
      </Extrude>
    </animated.mesh>
  );
};

export default HeartShape;
