import React, { Component } from 'react'
import TodoDataService from '../../API/TodoDataService'
import Authentication from '../AuthenticationService/Authentication'
import moment from 'moment'
import PropTypes from 'prop-types'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      message: null
    }
    this.addTodoClicked = this.addTodoClicked.bind(this)
    this.updateTodoClicked = this.updateTodoClicked.bind(this)
    this.deleteTodoClicked = this.deleteTodoClicked.bind(this)
    this.refreshTodos = this.refreshTodos.bind(this)
  }

  componentDidMount() {
    this.refreshTodos()
  }

  addTodoClicked() {
    this.props.history.push(`/todos/-1`)
  }

  updateTodoClicked(id) {
    this.props.history.push(`/todos/${id}`)
  }

  deleteTodoClicked(id) {
    let username = Authentication.getUsername()
    TodoDataService.deleteTodo(username, id)
      .then(response => {
        this.setState({ message: `Todo removed.` })
        this.refreshTodos()
        }
      )
  }

  refreshTodos() {
    let username = Authentication.getUsername()
    TodoDataService.retrieveAllTodos(username)
      .then(response =>
        this.setState({ todos: response.data }))
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <h1 className="float-left">Todo</h1>
          </div>
          {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
          <div className="row">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Description</th>
                    <th scope="col">Date</th>
                    <th scope="col">Complete</th>
                    <th scope="col">Update</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.todos.map(todo => (
                    <tr key={todo.id}>
                      <td>{todo.description}</td>
                      <td>{moment(todo.targetDate).format('MMMM Do, YYYY')}</td>
                      <td>{todo.completed.toString()}</td>
                      <td>
                        <button
                          className="btn btn-success"
                          onClick={() => this.updateTodoClicked(todo.id)}>Update
                    </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-warning"
                          onClick={() => this.deleteTodoClicked(todo.id)}>Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="row">
            <button
              className="btn btn-success"
              onClick={this.addTodoClicked}>Add
            </button>
          </div>
        </div>
      </div>
    )
  }
}

TodoList.propTypes = {
  history: PropTypes.object
}

export default TodoList
