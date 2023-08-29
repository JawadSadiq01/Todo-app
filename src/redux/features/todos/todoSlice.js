import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const {title,description} = action.payload
      state.push({ id: Date.now(), title: title,description:description ,completed: false,timestamp: Date.now() });
    },
    updateTodo: (state, action) => {
      const { id, title ,description} = action.payload;
      const todo = state.find(todo => todo.id === id);
      if (todo) {
        todo.title = title;
        todo.description = description;
        todo.timestamp = Date.now();
      }
    },
    deleteTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload);
    },
  },
});

export const { addTodo, updateTodo, deleteTodo} = todosSlice.actions;
export default todosSlice.reducer;
