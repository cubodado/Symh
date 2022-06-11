import './SelectBox.css';

const SelectBox = (props) => {
  return (
    <div
      key={props.id}
      id={props.shapeNumber}
      className={props.shapeClass}
      onClick={props.onClick}
    >
      <h2>{props.shapeContent}</h2>
    </div>
  );
};

export default SelectBox;
