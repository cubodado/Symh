import './TextInput.css';

const TextInput = (props) => {
  return <input onChange={props.onChange} className="user-input"></input>;
};

export default TextInput;
