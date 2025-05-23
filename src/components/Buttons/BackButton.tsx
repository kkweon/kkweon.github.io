import React from 'react'
import { Link } from 'gatsby'

export const BackButton = () => (
  <div>
    <Link to="/" className="back-button-style">
      <i
        className="fa fa-backward back-button-icon-style"
        aria-hidden="true"
      ></i>
      Back to the posts
    </Link>
  </div>
)
