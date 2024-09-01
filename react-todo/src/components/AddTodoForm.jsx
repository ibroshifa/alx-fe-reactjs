import React, { useState } from 'react';

const AddTodoForm = ({ addTodo }) => {
  const [newTodoText, setNewTodoText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodoText.trim() !== '') {
      addTodo(newTodoText);
      setNewTodoText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new todo"
        value={newTodoText}
        onChange={(e) => setNewTodoText(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodoForm;