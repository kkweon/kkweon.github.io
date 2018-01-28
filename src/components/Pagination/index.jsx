import React from "react";
import Link from "gatsby-link";
import { rhythm } from "../../utils/typography";
import {
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  THIRD_COLOR,
} from "../../utils/variables";

const NavLink = props => {
  if (!props.test) {
    return (
      <Link
        css={{
          color: "black",
          backgroundColor: SECONDARY_COLOR,
          padding: rhythm(0.5),
          textDecoration: "none",

          "&:hover": {
            color: "white",
            backgroundColor: PRIMARY_COLOR,
          },
        }}
        to={props.url}
      >
        {" "}
        {props.text}{" "}
      </Link>
    );
  } else {
    return <span> </span>;
  }
};
export default function Pagination({ first, previousUrl, last, nextUrl }) {
  return (
    <div
      css={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: rhythm(2),
      }}
      className="pagination"
    >
      <div className="pagination__prev">
        <NavLink test={first} url={previousUrl} text="Prev Page" />
      </div>
      <div className="pagination__next">
        <NavLink test={last} url={nextUrl} text="Next Page" />
      </div>
    </div>
  );
}
