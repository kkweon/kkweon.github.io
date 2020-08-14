import React from 'react'
import { Link } from 'gatsby'
import { css } from 'glamor'
import { rhythm } from '../../utils'
import { PRIMARY_COLOR } from '../../utils/variables'

const buttonStyle = css({
  //   padding: `${rhythm(0.5)} ${rhythm(1)}`,
  display: 'inline-block',
  marginBottom: rhythm(1),
  cursor: 'pointer',
  color: PRIMARY_COLOR,
})

export const BackButton = () => (
  <div>
    <Link to="/" {...buttonStyle}>
      <i
        style={{ marginRight: rhythm(0.5) }}
        className="fa fa-backward"
        aria-hidden="true"
      ></i>
      Back to the posts
    </Link>
  </div>
)
