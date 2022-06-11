import './SelectBox.css';

const SelectBox = (props) => {
  return (
    <div
      key={props.id}
      id={props.number}
      className={props.class}
      onClick={props.onClick}
    >
      <h2>{props.content}</h2>
    </div>
  );
};

export default SelectBox;
