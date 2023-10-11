const TodoList = (props) => {
  return (
    <div className="d-flex flex-column">
      {props.todoItems.length === 0 ? (
        <div className="d-flex justify-content-center align-items-center py-5">
          <h4>Please add items</h4>
        </div>
      ) : (
        <ul className="d-flex flex-column justify-content-between align-items-center p-2">
          {props.todoItems.map((eachTodoItem) => (
            <>
              <li
                key={eachTodoItem.id}
                className="d-flex align-items-center gap-4 w-100"
              >
                <input
                  type="checkbox"
                  id={eachTodoItem.id}
                  checked={eachTodoItem.isMarked}
                  onChange={() => props.onChangeTodoStatus(eachTodoItem.id)}
                />
                <label
                  className={`d-flex justify-content-between align-items-center w-100 py-1 my-auto`}
                  htmlFor={eachTodoItem.id}
                >
                  <span
                    className={`${
                      eachTodoItem.isMarked
                        ? "text-decoration-line-through todo-text-transform"
                        : ""
                    }`}
                  >
                    {eachTodoItem.item}
                  </span>

                  <span
                    className={`my-auto p-1 todo-color-status rounded-circle border-0 ${
                      eachTodoItem.isMarked
                        ? ""
                        : "todo-color-status-done shadow"
                    }`}
                  ></span>
                </label>
              </li>
              <div className="d-flex justify-content-end w-100">
                <span className="todo-item-date">{eachTodoItem.timeStamp}</span>
              </div>
            </>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
