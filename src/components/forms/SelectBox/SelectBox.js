import './SelectBox.css';
import { useSelector } from 'react-redux';

const SelectBox = (props) => {
  const steps = useSelector((state) => state.steps);
  const active =
    props.number === steps[1].heartShape ||
    props.number === steps[2].heartAnimation
      ? 'active'
      : '';

  return (
    <div
      key={props.id}
      id={props.number}
      className={`${props.class} ${active}`}
      onClick={props.onClick}
    >
      <h2>{props.content}</h2>
    </div>
  );
};

export default SelectBox;
