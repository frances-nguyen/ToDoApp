import React from 'react'
import ErrorPage from '../src/Components/ErrorPage'
import renderer from 'react-test-renderer'

describe('<ErrorPage /> rendering', () => {
    it('renders correctly', () => {
        let tree = renderer.create(<ErrorPage />).toJSON()
        expect(tree).toMatchSnapshot();
    })
})
