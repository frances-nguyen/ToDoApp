import React from 'react'
import LoginPage from '../../src/Components/Global/LoginPage'
import renderer from 'react-test-renderer'

describe('<Login /> rendering', () => {
  it('renders correctly', () => {
    let tree = renderer.create(<LoginPage />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('<Login /> interactions', () => {
  it('should change the state of username', () => {
    const event = { target: { name: 'username', value: 'username' } }
    let wrapper = shallow(<LoginPage />)
    wrapper
      .find('input')
      .first()
      .simulate('change', event)
    expect(wrapper.state('username')).toEqual('username')
    expect(wrapper.state('password')).toEqual('')
  })

  it('should change the state of password', () => {
    const event = { target: { name: 'password', value: 'password' } }
    let wrapper = shallow(<LoginPage />)
    wrapper
      .find('input')
      .first()
      .simulate('change', event)
    expect(wrapper.state('password')).toEqual('password')
    expect(wrapper.state('username')).toEqual('')
  })

  it('should call handleLoginChange', () => {
    const event = { target: { name: 'username', value: 'username' } }
    const handleLoginChange = jest.spyOn(
      LoginPage.prototype,
      'handleLoginChange'
    )
    let wrapper = shallow(<LoginPage />)
    wrapper
      .find('input')
      .first()
      .simulate('change', event)
    expect(wrapper.state('username')).toEqual('username')
    expect(handleLoginChange).toHaveBeenCalled()
  })
})
