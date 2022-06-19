import { Text } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const CardText = (props) => {
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.02;
  });

  return (
    <mesh ref={ref} scale={[0.12, 0.12, 0.12]}>
      <Text
        scale={[30, 30, 30]}
        position={[0, 2, 6]}
        color={'white'}
        anchorX={'center'}
        anchorY={'middle'}
      >
        {props.cardText}
      </Text>
      <Text
        scale={[30, 30, 30]}
        position={[0, 2, -2]}
        color={'white'}
        anchorX={'center'}
        anchorY={'middle'}
      >
        {props.cardText}
      </Text>
    </mesh>
  );
};

export default CardText;
