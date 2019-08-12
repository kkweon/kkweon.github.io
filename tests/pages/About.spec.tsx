import * as React from 'react'
import About from '../../src/pages/about'
import { shallow } from 'enzyme'

test('<About /> has about text', () => {
  // Render a checkbox with label in the document
  const component = shallow(<About />)
  expect(component.find('div').text()).toContain('About')
})
