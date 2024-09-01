// TodoList.test.js
import React from 'react';
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent ,waitFor } from '@testing-library/react';
import TodoList from '../components/TodoList';
import {  jest } from '@jest/globals';
import App from '../App';
const todos = [
  { id: 1, text: 'Learn React', completed: false },
  { id: 2, text: 'Build a Todo List', completed: false },
];
describe('App Component', () => {
test('renders todos correctly', () => {
  render(<TodoList todos={todos} />);
  todos.forEach((todo) => {
    const todoItem = screen.getByText(todo.text);
    expect(todoItem).toBeInTheDocument();
  });
});

test('adds a new todo', () => {
    render(<App />); 
    const newTodoText = 'Write tests';
    const input = screen.getByPlaceholderText('Add a new todo'); 
    fireEvent.change(input, { target: { value: newTodoText } });
    fireEvent.click(screen.getByText('Add Todo'));
    expect(screen.getByText(newTodoText)).toBeInTheDocument(); })

    test('toggles a todo item', () => {
        render(<App />);
        
        // Add a todo item
        const input = screen.getByPlaceholderText(/add a new todo/i);
        const addButton = screen.getByText(/add todo/i);
    
        fireEvent.change(input, { target: { value: 'Test Todo' } });
        fireEvent.click(addButton);
    
        // Verify the todo is added
        const todoItem = screen.getByText('Test Todo');
        expect(todoItem).toBeInTheDocument();
        expect(todoItem).toHaveStyle('text-decoration: none');
    
        // Toggle the todo item
        const toggleButton = screen.getByText(/toggle/i);
        fireEvent.click(toggleButton);
    
        // Verify the todo is toggled
        expect(todoItem).toHaveStyle('text-decoration: line-through');
      });

      test('deletes a todo item', () => {
        render(<App />);
        
        // Add a todo item
        const input = screen.getByPlaceholderText(/add a new todo/i);
        const addButton = screen.getByText(/add todo/i);
    
        fireEvent.change(input, { target: { value: 'Test Todo' } });
        fireEvent.click(addButton);
    
        // Verify the todo is added
        const todoItem = screen.getByText('Test Todo');
        expect(todoItem).toBeInTheDocument();
    
        // Delete the todo item
        const deleteButton = screen.getByText(/delete/i);
        fireEvent.click(deleteButton);
    
        
        expect(todoItem).not.toBeInTheDocument();
      });
    });