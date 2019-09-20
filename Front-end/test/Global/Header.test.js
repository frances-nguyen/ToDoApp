import React from 'react'
import Header from '../../src/Components/Global/Header'
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import LoginPage from '../../src/Components/Global/LoginPage';
import ToDoList from '../../src/Components/ToDoList/ToDoList';

describe('<Header /> rendering', () => {
  it('renders correctly', () => {
    let tree = renderer
      .create(
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
