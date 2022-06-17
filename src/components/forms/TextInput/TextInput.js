import './TextInput.css';

const TextInput = (props) => {
  return (
    <input
      onChange={props.onChange}
      className="user-input"
      ref={props.userInputRef}
      value={props.userInput}
    ></input>
  );
};

export default TextInput;
