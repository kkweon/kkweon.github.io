import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import About from '../../src/pages/about'

test('<About /> has about text', () => {
  const { getAllByText } = render(<About />)
  // There are multiple elements with 'About', so check that at least one exists
  expect(getAllByText(/About/i).length).toBeGreaterThan(0)
})
