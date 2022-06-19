import './HeartShape.css';
import { useRef } from 'react';
import { Shape, DoubleSide } from 'three';
import { useFrame } from '@react-three/fiber';
import { Extrude } from '@react-three/drei';

const HeartShape = (props) => {
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.02;
  });

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

  return (
    <mesh ref={ref} scale={[0.12, 0.12, 0.12]}>
      <Extrude args={[heartShape, extrudeSettings]}>
        <meshStandardMaterial
          flatshading
          color={props.heartColor}
          side={DoubleSide}
          roughness={0.2}
        />
      </Extrude>
    </mesh>
  );
};

export default HeartShape;
