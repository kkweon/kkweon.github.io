import React from 'react'
import { Seo } from '../components/Seo'

export function Head() {
  return <Seo title="Not Found - Mo's Notes" noindex={true} />
}

const NotFoundPage = () => (
  <div style={{ padding: '2rem', textAlign: 'center' }}>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </div>
)

export default NotFoundPage
