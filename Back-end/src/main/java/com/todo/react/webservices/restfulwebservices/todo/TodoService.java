package com.todo.react.webservices.restfulwebservices.todo;

import java.util.List;

interface TodoService {
	
	/**
	 * 
	 * Return the list of todos.
	 * 
	 * @return the list of todos. May be empty. 
	 */
	public List<Todo> getAllTodos();
	
	/**
	 * Save an existing and updated todo or add a new todo to the todo list.
	 * 
	 * @param todo the todo to add or update
	 * @return the saved todo
	 */
	public Todo save(Todo todo);
	
	/**
	 * 
	 * Remove a todo from the list of todos
	 * 
	 * @param id the id of the {@link Todo}
	 * @return the deleted todo. May be {@code null}.
	 */
	public Todo deleteById(int id);
	
	/**
	 * 
	 * Return the todo using its ID.
	 * 
	 * @param id the id of the todo
	 * @return the todo. May be {@code null}.
	 */
	public Todo findById(int id);
}
