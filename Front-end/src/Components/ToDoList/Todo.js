import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import TodoDataService from '../../API/TodoDataService'
import Authentication from '../AuthenticationService/Authentication'

class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            description: '',
            targetDate: moment(new Date()).format('YYYY-MM-DD')
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }

    componentDidMount() {
        if (parseInt(this.state.id) === -1) {
            return
        }
        let username = Authentication.getUsername();
        TodoDataService.retrieveTodo(username, this.state.id)
            .then(response => {
                console.log(response.data.targetDate)
                this.setState({
                description: response.data.description,
                targetDate: moment(response.data.targetDate).format('YYYY-MM-DD')
            })})
    }

    validate(values) {
        let errors = {}
        if (!values.description) {
            errors.description = 'Enter a description.'
        } else if (values.description.length < 5) {
            errors.description = 'Enter atleast 5 characters in the description.'
        }

        if (!moment(values.targetDate, 'YYYY-MM-DD', true).isValid()) {
            errors.targetDate = 'Enter a valid target date.'
        }

        return errors
    }

    onSubmit(values) {
        let username = Authentication.getUsername();
        let todo = {
            id: this.state.id,
            description: values.description,
            targetDate: values.targetDate
        }

        if (this.state.id === -1) {
            TodoDataService.addTodo(username, todo)
                .then(() => this.props.history.push('/todolist'))
        } else {
            TodoDataService.updateTodo(username, this.state.id, todo)
                .then(() => this.props.history.push('/todolist'))
        }
    }

    render() {
        let { description, targetDate } = this.state

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <h1 className="float-left">Todo</h1>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Formik
                                initialValues={{ description, targetDate }}
                                onSubmit={this.onSubmit}
                                validate={this.validate}
                                validateOnChange={false}
                                validateOnBlur={false}
                                enableReinitialize={true}
                            >
                                {
                                    (props) => (
                                        <Form>
                                            <ErrorMessage
                                                name="description"
                                                component="div"
                                                className="alert alert-warning"
                                            />
                                            <ErrorMessage
                                                name="targetDate"
                                                component="div"
                                                className="alert alert-warning"
                                            />
                                            <fieldset className="form-group">
                                                <label className="float-left">Description</label>
                                                <Field
                                                    className="form-control"
                                                    type="text"
                                                    name="description">
                                                </Field>
                                            </fieldset>
                                            <fieldset className="form-group">
                                                <label className="float-left">Target Date</label>
                                                <Field
                                                    className="form-control"
                                                    type="date"
                                                    name="targetDate">
                                                </Field>
                                            </fieldset>
                                            <button className="btn btn-success float-left" type="submit">Save</button>
                                        </Form>
                                    )
                                }
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Todo.propTypes = {
    match: PropTypes.object
}

export default Todo