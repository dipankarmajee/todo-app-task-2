const TodoOptions = (props) => {
  return (
    <div className="d-flex justify-content-around">
      <button
        onClick={props.onClickClearDoneItems}
        className="bg-transparent border-0 outline-0text-muted fw-semibold"
      >
        Clear All Items
      </button>
    </div>
  );
};

export default TodoOptions;
