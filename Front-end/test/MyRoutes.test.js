import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import MyRoutes from '../src/Components/MyRoutes'
import LoginPage from '../src/Components/Global/LoginPage'
import WelcomePage from '../src/Components/Welcome/WelcomePage'
import ToDoList from '../src/Components/ToDoList/ToDoList'
import ErrorPage from '../src/Components/ErrorPage'

describe('<MyRoutes /> rendering', () => {
  it('renders <LoginPage />', () => {
    let wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <MyRoutes />
      </MemoryRouter>
    )
    expect(wrapper.find(LoginPage)).toHaveLength(1)
    expect(wrapper.find(WelcomePage)).toHaveLength(0)
    expect(wrapper.find(ToDoList)).toHaveLength(0)
    expect(wrapper.find(ErrorPage)).toHaveLength(0)
  })

  it('renders <WelcomePage />', () => {
    let wrapper = mount(
      <MemoryRouter initialEntries={['/welcome/user']}>
        <MyRoutes />
      </MemoryRouter>
    )
    expect(wrapper.find(WelcomePage)).toHaveLength(1)
    expect(wrapper.find(LoginPage)).toHaveLength(0)
    expect(wrapper.find(ToDoList)).toHaveLength(0)
    expect(wrapper.find(ErrorPage)).toHaveLength(0)
  })

  it('renders <ToDoList />', () => {
    let wrapper = mount(
      <MemoryRouter initialEntries={['/todolist']}>
        <MyRoutes />
      </MemoryRouter>
    )
    expect(wrapper.find(ToDoList)).toHaveLength(1)
    expect(wrapper.find(WelcomePage)).toHaveLength(0)
    expect(wrapper.find(LoginPage)).toHaveLength(0)
    expect(wrapper.find(ErrorPage)).toHaveLength(0)
  })

  it('renders <ErrorPage />', () => {
    let wrapper = mount(
      <MemoryRouter initialEntries={['/random']}>
        <MyRoutes />
      </MemoryRouter>
    )
    expect(wrapper.find(ErrorPage)).toHaveLength(1)
    expect(wrapper.find(ToDoList)).toHaveLength(0)
    expect(wrapper.find(WelcomePage)).toHaveLength(0)
    expect(wrapper.find(LoginPage)).toHaveLength(0)
  })
})
