import * as React from 'react'
import Link from 'gatsby-link'
import { rhythm } from '../../utils'
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../utils/variables'
import { css } from 'glamor'

interface INavLinkProp {
  test: boolean
  url: string
  text: string
}

const NavLink = (props: INavLinkProp) => {
  if (!props.test) {
    const linkStyle = css({
      color: 'black',
      backgroundColor: SECONDARY_COLOR,
      padding: rhythm(0.5),
      textDecoration: 'none',

      '&:hover': {
        color: 'white',
        backgroundColor: PRIMARY_COLOR,
      },
    })
    return (
      <Link {...linkStyle} to={props.url}>
        {' '}
        {props.text}{' '}
      </Link>
    )
  } else {
    return <span> </span>
  }
}

interface IPagination {
  first: boolean
  last: boolean
  previousUrl: string
  nextUrl: string
}

export default function Pagination({
  first,
  previousUrl,
  last,
  nextUrl,
}: IPagination) {
  const paginationStyle = css({
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: rhythm(2),
  })
  return (
    <div {...paginationStyle} className="pagination">
      <div className="pagination__prev">
        <NavLink test={first} url={previousUrl} text="Prev Page" />
      </div>
      <div className="pagination__next">
        <NavLink test={last} url={nextUrl} text="Next Page" />
      </div>
    </div>
  )
}
