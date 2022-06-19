import './Card.css';
import { Canvas } from '@react-three/fiber';
import { HeartShape, CardText } from '../../../components/layout/3D/index';
import { useSelector } from 'react-redux';

const Card = () => {
  const steps = useSelector((state) => state.steps);

  return (
    <Canvas className="canvas">
      <ambientLight />
      <pointLight position={[5, 5, 8]} />
      <HeartShape heartColor={steps[1].heartColor} />
      <CardText cardText={steps[0].inputText} />
    </Canvas>
  );
};

export default Card;
