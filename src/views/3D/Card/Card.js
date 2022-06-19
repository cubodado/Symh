import { Canvas } from '@react-three/fiber';
import { HeartShape } from '../../../components/layout/3D/index';
import { useSelector } from 'react-redux';

const Card = () => {
  const steps = useSelector((state) => state.steps);

  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[5, 5, 5]} />
      <HeartShape heartColor={steps[1].heartColor} />
    </Canvas>
  );
};

export default Card;
