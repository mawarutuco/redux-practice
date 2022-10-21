import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/slice/todo';
import { useState } from 'react';

const TodoAdd = () => {
  const [todoInput, setTodoInput] = useState('');
  const resetInput = () => setTodoInput('');

  const dispatch = useDispatch();
  const handleTodo = () => {
    dispatch(
      addTodo({ id: new Date().getTime(), name: todoInput, done: false })
    );
    resetInput();
  };

  return (
    <div>
      <input value={todoInput} onChange={(e) => setTodoInput(e.target.value)} />
      <button onClick={handleTodo}>新增</button>
    </div>
  );
};

export default TodoAdd;
