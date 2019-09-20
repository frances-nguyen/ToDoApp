package com.todo.react.webservices.restfulwebservices.todo;

import static java.time.LocalDate.of;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertSame;

import java.time.LocalDate;

import org.junit.jupiter.api.Test;;

public class TodoTest {
	public static final int ID = 1;
	public static final String USERNAME = "username";
	public static final String DESCRIPTION = "description";
	public static final LocalDate TARGET_DATE = of(2019,8,14);
	public static final Boolean IS_COMPLETED = false;
	Todo todo = new Todo(ID, USERNAME, DESCRIPTION, TARGET_DATE, IS_COMPLETED);
	
	@Test
	public void testGetId() {
		assertSame(ID, todo.getId());
	}
	
	@Test
	public void testSetId() {
		int newId = 2;
		todo.setId(newId);
		assertSame(newId, todo.getId());
	}
	
	@Test
	public void testGetUsername() {
		assertSame(USERNAME, todo.getUsername());
	}
	
	@Test
	public void testSetUsername() {
		String newUsername = "newUsername";
		todo.setUsername(newUsername);
		assertSame(newUsername, todo.getUsername());
	}
	
	@Test
	public void testGetDescription() {
		assertSame(DESCRIPTION, todo.getDescription());
	}
	
	@Test
	public void testSetDescription() {
		String newDescription = "new description";
		todo.setDescription(newDescription);
		assertSame(newDescription, todo.getDescription());
	}
	
	@Test
	public void testGetTargetDate() {
		assertSame(TARGET_DATE, todo.getTargetDate());
	}
	
	@Test
	public void testSetTargetDate() {
		LocalDate newDate = LocalDate.of(2019, 9, 1);
		todo.setTargetDate(newDate);
		assertSame(newDate, todo.getTargetDate());
	}
	
	@Test
	public void testGetIsCompleted() {
		assertSame(IS_COMPLETED, todo.isCompleted());
	}
	
	@Test
	public void testSetCompleted() {
		todo.setCompleted(true);
		assertEquals(true, todo.isCompleted());
	}
}
