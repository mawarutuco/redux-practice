import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, checkTodo } from '../store/slice/todo';

const TodoItem = ({ item }) => {
  const dispatch = useDispatch();
  const { id, name, done } = item;
  return (
    <div>
      <input
        type="checkbox"
        checked={done}
        onChange={() => dispatch(checkTodo(id))}
      />
      {name}
      <button onClick={() => dispatch(deleteTodo(id))}>刪除</button>
    </div>
  );
};

export default TodoItem;
