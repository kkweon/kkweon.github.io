import * as React from 'react'
import Layout from '../components'

export default function About() {
  return (
    <Layout>
      <div>
        <h2>About</h2>
        <p>My interests includes but not limited to</p>
        <ul>
          <li>Machine Learning</li>
          <li>Python</li>
          <li>C++</li>
          <li>Web Development</li>
        </ul>

        <p>
          {' '}
          This is a blog where I write down something I need to remember for
          future reference
        </p>
      </div>
    </Layout>
  )
}
