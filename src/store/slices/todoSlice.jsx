import { createSlice, nanoid } from "@reduxjs/toolkit";
import { DateFormat } from "../../utilities/DateFormat";

const initialState = {
  data: JSON.parse(localStorage.getItem("todoItems")) || [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodoItem: (state, actions) => {
      const newTodoItem = {
        id: nanoid(),
        timeStamp: DateFormat(new Date()),
        isMarked: false,
        item: actions.payload,
      };
      state.data.push(newTodoItem);
    },
    todoItemChecked: (state, actions) => {
      const filterTodoItems = state.data.map((eachItem) => {
        if (eachItem.id === actions.payload) {
          return { ...eachItem, isMarked: !eachItem.isMarked };
        }
        return eachItem;
      });
      state.data = filterTodoItems;
    },
    clearAllTodoItem: (state) => {
      state.data = [];
    },
  },
});

export const { addTodoItem, todoItemChecked, clearAllTodoItem } =
  todoSlice.actions;
export default todoSlice.reducer;
