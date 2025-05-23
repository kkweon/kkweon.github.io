import * as React from 'react'
import { Link } from 'gatsby'

const Header = () => (
  <div className="header-nav">
    <ul className="container header-ul">
      {' '}
      <li className="util-small-screen-display-inline">
        <h2 className="util-no-margin-bottom">
          <Link to="/" className="nav-link">
            Mo
          </Link>
        </h2>
      </li>
      <li className="util-small-screen-display-none">
        <h2 className="util-no-margin-bottom">
          <Link to="/" className="nav-link">
            Mo's Notes
          </Link>
        </h2>
      </li>
      <li className="util-no-margin-bottom util-margin-left-auto">
        <h2 className="util-no-margin-bottom">
          <Link
            to="/about/"
            className="nav-link"
            activeClassName="nav-link--active"
          >
            About
          </Link>
        </h2>
      </li>
      <li className="util-margin-left-1r">
        <h2 className="util-no-margin-bottom">
          <a
            href="https://kkweon.github.io/projects"
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer" // Added for security with target="_blank"
          >
            Projects
          </a>
        </h2>
      </li>
    </ul>
  </div>
)

export default Header
