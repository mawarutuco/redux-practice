import React from 'react';
import { Provider } from 'react-redux';
import store from './store/index';
import TodoList from './component/TodoList';
import TodoAdd from './component/TodoAdd';

export default function App() {
  return (
    <Provider store={store}>
      <TodoAdd />
      <TodoList />
    </Provider>
  );
}
