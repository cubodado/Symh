import { Canvas } from '@react-three/fiber';
import { HeartShape } from '../../../components/layout/3D/index';

const Card = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[5, 5, 5]} />
      <HeartShape />
    </Canvas>
  );
};

export default Card;
