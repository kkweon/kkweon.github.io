import * as React from 'react'
import { Link } from 'gatsby'

interface INavLinkProp {
  test: boolean
  url: string
  text: string
}

const NavLink = (props: INavLinkProp) => {
  if (!props.test) {
    return (
      <Link className="pagination-nav-link" to={props.url}>
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
  return (
    <div className="pagination pagination-style">
      <div className="pagination__prev">
        <NavLink test={first} url={'/' + previousUrl} text="Prev Page" />
      </div>
      <div className="pagination__next">
        <NavLink test={last} url={'/' + nextUrl} text="Next Page" />
      </div>
    </div>
  )
}
