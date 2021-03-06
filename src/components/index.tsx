/**
 * @fileOverview Layout of the webpage
 */
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Meta from '../components/Meta'
import './index.scss'

// syntax highlighting
import 'prismjs/themes/prism-okaidia.css'

export default function ({ children }: { children: any }) {
  return (
    <div>
      <Meta
        title={process.env.SITETITLE || "Mo's notes"}
        description={process.env.SITEDESCRIPTION || "Mo's notes"}
        tags={process.env.SITETAGS || 'React'}
      />
      <Header />
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
