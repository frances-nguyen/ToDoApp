import React from 'react'
import ToDoApp from '../src/Components/ToDoApp'
import MyRoutes from '../src/Components/MyRoutes'
import renderer from 'react-test-renderer'

describe('<ToDoApp /> rendering', () => {
  it('renders correctly', () => {
    let tree = renderer.create(<ToDoApp />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders <MyRoutes />', () => {
    let wrapper = shallow(<ToDoApp />)
    expect(wrapper.find(MyRoutes)).toHaveLength(1)
  })
})
