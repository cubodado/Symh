import { Text } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';

const CardText = (props) => {
  const spring = useSpring({
    loop: { reverse: true },
    from: { scale: [0.1, 0.1, 0.1] },
    to: { scale: [0.12, 0.12, 0.12] },
  });

  return (
    <animated.mesh scale={spring.scale}>
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
        scale={[15, 15, 15]}
        position={[0, -3, 6]}
        color={'white'}
        anchorX={'center'}
        anchorY={'middle'}
      >
        from {props.heartSender}
      </Text>
    </animated.mesh>
  );
};

export default CardText;
