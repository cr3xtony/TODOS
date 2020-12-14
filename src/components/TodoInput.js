import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './todo.css';

const Todo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const handleDelete = (id) => {
    console.log(id);
    dispatch({
      type: 'DELETE_TODO',
      payload: id,
    });
  };

  if (!todos.length) {
    return <p>No Todos</p>;
  }
  return (
    <ul>
      {todos.map((todo) => (
        <li>
          {todo.label}
          <button onClick={() => handleDelete(todo.id)}>X</button>
        </li>
      ))}
    </ul>
  );
};

const TodoInput = () => {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState();
  const handleChange = (e) => setNewTodo(e.target.value);
  const handleClick = () => {
    dispatch({
      type: 'ADD_TODO',
      payload: {
        label: newTodo,
        id: Math.ceil(Math.random() * 10000),
      },
    });
  };

  return (
    <div className="body">
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
          <div className="card-title">TODOS</div>
          <Todo />
          <input value={newTodo} onChange={handleChange} type="text" />
          <button onClick={handleClick}>Add Todo</button>
        </div>
      </div>
    </div>
  );
};

export default TodoInput;
