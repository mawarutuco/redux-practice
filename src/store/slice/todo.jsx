import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todoList: [
      { id: 1, name: '待辦', done: false },
      { id: 2, name: '待辦2', done: true },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todoList = state.todoList.filter(
        (item) => item.id !== action.payload
      );
    },
    checkTodo: (state, action) => {
      state.todoList = state.todoList.map((item) => {
        if (item.id === action.payload) item.done = !item.done;
        return item;
      });
    },
  },
});

export default todoSlice.reducer;
export const selectTodo = (state) => state.todo;
//↑跟著store/slice的reducer

export const { addTodo } = todoSlice.actions;
export const { deleteTodo } = todoSlice.actions;
export const { checkTodo } = todoSlice.actions;
