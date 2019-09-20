import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LoginPage from './Global/LoginPage'
import WelcomePage from './Welcome/WelcomePage'
import ErrorPage from './ErrorPage'
import TodoList from './ToDoList/TodoList'
import LogOut from './Global/LogOut'
import AuthenticatedRoute from './AuthenticationService/AuthenticatedRoute'
import Todo from './ToDoList/Todo'

const MyRoutes = () => (
  <Switch>
    <Route exact path="/" component={LoginPage} />
    <Route path="/login" component={LoginPage} />
    <AuthenticatedRoute path="/welcome/:name" component={WelcomePage} />
    <AuthenticatedRoute path="/todolist" component={TodoList} />
    <AuthenticatedRoute path="/logout" component={LogOut} />
    <AuthenticatedRoute path="/todos/:id" component={Todo} />
    <Route component={ErrorPage} />
  </Switch>
)

export default MyRoutes