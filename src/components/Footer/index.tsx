import * as React from 'react'

export function getCurrentYear(): number {
  return new Date().getFullYear()
}

export default function Footer() {
  return (
    <div className="footer-style">
      <div className="container">
        <div className="icon-list footer-icon-list-style">
          <a href="https://github.com/kkweon" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-github-square fa-2x social-icon" />
          </a>
          <a href="https://facebook.com/kkweon" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-facebook-square fa-2x social-icon" />
          </a>
          <a href="mailto:kkweon@gmail.com">
            <i className="fa fa-envelope-square fa-2x social-icon" />
          </a>
        </div>
        <p className="footer-text-style">
          © {getCurrentYear()} Mo Kweon. All rights reserved.
        </p>
      </div>
    </div>
  )
}
