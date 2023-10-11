const InputElement = (props) => {
  return (
    <div className="my-4 input-container d-flex">
      <input
        onChange={props.onChangeInputText}
        placeholder="What is next?"
        className="input-field form-control border-0 bg-light outline-none"
        value={props.inputText}
      />
      <button type="submit" className="text-success fs-5 add-todo-item-button">
        Add
      </button>
    </div>
  );
};

export default InputElement;
