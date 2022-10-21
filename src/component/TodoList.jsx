import React from 'react';
import { useSelector } from 'react-redux';
import { selectTodo } from '../store/slice/todo';
import TodoItem from './TodoItem';

const TodoList = () => {
  const states = useSelector(selectTodo);
  return (
    <div>
      {states.todoList.map((item) => (
        <TodoItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default TodoList;
