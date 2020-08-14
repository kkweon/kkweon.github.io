import * as React from 'react'
import { rhythm } from '../../utils'
import { css } from 'glamor'
import glamorous from 'glamorous'
import { Link } from 'gatsby'

const Nav = glamorous.div({
  marginBottom: rhythm(1),
})

const Ul = glamorous.ul({
  display: 'flex',
  padding: `${rhythm(1)} ${rhythm(0.7)} ${rhythm(0.5)}`,
  listStyle: 'none',
})

const noMarginBottom = css({
  marginBottom: 0,
})
const marginLeftAuto = css({
  marginLeft: 'auto',
})

const marginLeft1R = css({
  marginLeft: rhythm(1),
})

const smallScreenDisplayNone = css({
  '@media screen and (max-width: 600px)': {
    display: 'none',
  },
})
const smallScreenDisplayInline = css({
  display: 'none',
  '@media screen and (max-width: 600px)': {
    display: 'inline-block',
  },
})

const Header = () => (
  <Nav>
    <Ul className="container">
      {' '}
      <li {...smallScreenDisplayInline}>
        <h2 {...noMarginBottom}>
          <Link to="/" className="nav-link">
            Mo
          </Link>
        </h2>
      </li>
      <li {...smallScreenDisplayNone}>
        <h2 {...noMarginBottom}>
          <Link to="/" className="nav-link">
            Mo's Notes
          </Link>
        </h2>
      </li>
      <li {...noMarginBottom} {...marginLeftAuto}>
        <h2 {...noMarginBottom}>
          <Link
            to="/about/"
            className="nav-link"
            activeClassName="nav-link--active"
          >
            About
          </Link>
        </h2>
      </li>
      <li {...marginLeft1R}>
        <h2 {...noMarginBottom}>
          <a
            href="https://kkweon.github.io/projects"
            className="nav-link"
            target="_blank"
          >
            Projects
          </a>
        </h2>
      </li>
    </Ul>
  </Nav>
)

export default Header
