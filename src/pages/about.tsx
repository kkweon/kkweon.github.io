import React from 'react'
import Layout from '../components'

export function Head() {
  return <title>About - Mo's Notes</title>
}

export default function About() {
  return (
    <Layout>
      <div>
        <h2>About</h2>
        <p>My interests include the following but not limited to</p>
        <ul>
          <li>Machine Learning</li>
          <li>Microservice</li>
          <li>Web Development</li>
          <li>Kubernetes</li>
        </ul>

        <p>
          This is a blog where I write down something I need to remember for
          future reference
        </p>
      </div>
    </Layout>
  )
}
