/**
 * @fileOverview Layout of the webpage
 */
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import './index.scss'

// syntax highlighting
import 'prismjs/themes/prism-okaidia.css'

export default function ({
  children,
  isHome,
}: {
  children: any
  isHome?: boolean
}) {
  return (
    <div>
      <Header isHome={isHome} />
      <div
        className="container"
        style={{
          padding: '0 1.0875rem 1.45rem',
          paddingTop: 0,
        }}
      >
        {children}
      </div>
      <Footer />
    </div>
  )
}
