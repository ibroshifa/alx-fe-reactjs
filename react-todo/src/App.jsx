import React, { useState } from 'react';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos(state=>state = [...state, {id:Date.now(),text:text,completed:false}])
  };

  const toggleTodo = (id) => {
  setTodos(state=> state.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    
  ))
  };

  const deleteTodo = (id) => {
    setTodos(state=>state.filter(todo=>todo.id!=id));
   
  };

  return (
    <div>
      <AddTodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;