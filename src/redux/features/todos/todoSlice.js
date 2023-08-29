import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const {title,description} = action.payload
      state.push({ id: Date.now(), title: title,description:description ,completed: false,timestamp: Date.now() });
    },
    fetchTodos: (state, action) => {
      return state
    },
    toggleTodo: (state, action) => {
      const todo = state.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
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
    findTodoById: (state, action) => {
      const idToFind = action.payload;
      return state.find(todo => todo.id === idToFind);
    },
  },
});

export const { addTodo, toggleTodo,fetchTodos, updateTodo, deleteTodo ,findTodoById} = todosSlice.actions;
export default todosSlice.reducer;
