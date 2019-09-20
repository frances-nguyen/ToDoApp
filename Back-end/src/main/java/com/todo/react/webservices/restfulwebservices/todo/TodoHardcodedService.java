package com.todo.react.webservices.restfulwebservices.todo;

import static java.time.LocalDate.now;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

/* We don't want to create an instance of this class, we want Spring to manage that */

@Service
public class TodoHardcodedService implements TodoService {
	
	private static List<Todo> todos = new ArrayList<>();
	private static int idCounter = 0;
	
	static {
		todos.add(new Todo(++idCounter, "Frances", "Learn to dance", now(), false));
		todos.add(new Todo(++idCounter, "Frances", "Learn React", now(), false));
		todos.add(new Todo(++idCounter, "Frances", "Learn Spring Boot", now(), false));
	}

	public List<Todo> getAllTodos(){
		return todos;
	}
	
	public Todo save(Todo todo) {
		if(todo.getId() == -1 || todo.getId() == 0) {
			todo.setId(++idCounter);
			todos.add(todo);
		} else {
			todos.set(todo.getId()-1, todo);
			//deleteById(todo.getId());
			//todos.add(todo);
		}
		return todo;
	}
	
	public Todo deleteById(int id) {
		Todo todo = findById(id);
		if(todo == null) {
			return null;
		}
		if(todos.remove(todo)) {
			return todo;
		}
		return null;
	}
	
	public Todo findById(int id) {
		for (Todo todo : todos) {
			if(id == todo.getId()) {
				return todo;
			}
		}
		return null;
	}
}
