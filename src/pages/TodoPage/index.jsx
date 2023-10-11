import { useEffect, useState } from "react";
import TodoDate from "../../components/TodoDate";
import InputElement from "../../components/InputElement";
import TodoList from "../../components/TodoList";
import TodoOptions from "../../components/TodoOptions";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodoItem,
  clearAllTodoItem,
  todoItemChecked,
} from "../../store/slices/todoSlice";

const TodoPage = () => {
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState("");
  const todoItems = useSelector((state) => state.todo.data);

  const onChangeInputText = (event) => {
    setInputText(event.target.value);
  };

  const onSubmitTodoItem = (event) => {
    event.preventDefault();
    if (inputText !== "") {
      dispatch(addTodoItem(inputText));
      setInputText("");
    }
  };

  const onChangeTodoStatus = (id) => {
    dispatch(todoItemChecked(id));
  };

  const onClickClearDoneItems = () => {
    dispatch(clearAllTodoItem());
  };

  useEffect(() => {
    localStorage.setItem("todoItems", JSON.stringify(todoItems));
  }, [todoItems]);

  return (
    <div className="todo-container shadow rounded bg-light px-4 py-3">
      <TodoDate />
      <form onSubmit={onSubmitTodoItem}>
        <InputElement
          inputText={inputText}
          onChangeInputText={onChangeInputText}
        />
      </form>

      <TodoList todoItems={todoItems} onChangeTodoStatus={onChangeTodoStatus} />
      {todoItems.length !== 0 && (
        <TodoOptions onClickClearDoneItems={onClickClearDoneItems} />
      )}
    </div>
  );
};

export default TodoPage;
