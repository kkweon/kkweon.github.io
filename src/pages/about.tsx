import React from 'react'
import Layout from '../components'
import { Seo } from '../components/Seo'

export function Head() {
  return <Seo title="About - Mo's Notes" pathname="/about" />
}

export default function About() {
  return (
    <Layout>
      <div>
        <h2>About</h2>
        <p>
          This is where I write down things I need to remember—mostly because
          I've either spent too long figuring them out or I know I'll forget them
          in six months.
        </p>

        <p>
          My notes tend to cover machine learning, web development, Kubernetes,
          and whatever tools I'm currently debugging. If you've googled your way
          here looking for how to do something specific, there's a decent chance
          I've already made the same mistake.
        </p>

        <p>
          I write the posts I wish existed when I was stuck. If they help you too,
          that's a bonus.
        </p>
      </div>
    </Layout>
  )
}
