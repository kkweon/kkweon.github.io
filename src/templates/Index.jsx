import React, { Component } from "react";
import Link from "gatsby-link";
import { rhythm } from "../utils/typography";
import {
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  THIRD_COLOR,
} from "../utils/variables";

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

const Post = ({ slug, title, date, excerpt }) => {
  return (
    <div
      className="post"
      css={{
        padding: rhythm(1),
        border: "1px solid black",
        marginBottom: rhythm(1),
        boxShadow: "0 3px 3px #696969",
      }}
    >
      <h3>{title}</h3>
      <p>{date}</p>
      <p>{excerpt}</p>
      <Link
        css={{
          color: "white",
          textDecoration: "none",
          border: `1px solid ${PRIMARY_COLOR}`,
          background: PRIMARY_COLOR,
          padding: rhythm(0.4),
          "&:hover": {
            color: "black",
            border: `1px solid ${SECONDARY_COLOR}`,
            background: SECONDARY_COLOR,
          },
        }}
        to={slug}
      >
        Read More
      </Link>
    </div>
  );
};

const IndexPage = ({ data, pathContext }) => {
  const { group, index, first, last, pageCount } = pathContext;
  const previousUrl = index - 1 == 1 ? "" : (index - 1).toString();
  const nextUrl = (index + 1).toString();

  return (
    <div>
      {group.map(({ node }) => (
        <Post
          key={node.id}
          slug={node.fields.slug}
          title={node.frontmatter.title}
          date={node.frontmatter.date}
          excerpt={node.excerpt}
        />
      ))}

      <div
        css={{
          display: "flex",
          justifyContent: "space-between",
        }}
        className="pagination"
      >
        <div className="pagination__prev">
          <NavLink test={first} url={previousUrl} text="Go to Previous Page" />
        </div>
        <div className="pagination__next">
          <NavLink test={last} url={nextUrl} text="Go to Next Page" />
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
