import React from 'react'
import renderer from 'react-test-renderer'
import WelcomePage from '../../src/Components/Welcome/WelcomePage'
import ToDoList from '../../src/Components/ToDoList/ToDoList'
import { MemoryRouter } from 'react-router-dom'

const match = {
  params: {
    name: 'username'
  }
}
describe('<WelcomePage /> rendering', () => {
  it('renders <WelcomePage />', () => {
    let tree = renderer
      .create(
        <MemoryRouter>
          <WelcomePage match={match} />
        </MemoryRouter>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
