import React, { Component } from "react";
import Link from "gatsby-link";
import { rhythm } from "../utils/typography";
import Pagination from "../components/Pagination";
import { css } from "glamor";
import glamorous from "glamorous";
import {
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  THIRD_COLOR,
} from "../utils/variables";

const SlideFadeIn = css.keyframes({
  "100%": {
    opacity: 1,
    transform: "translateX(0)",
  },
});

const PostLink = glamorous.div({
  padding: rhythm(1),
  border: "1px solid black",
  marginBottom: rhythm(1),
  boxShadow: "0 3px 3px #696969",
  opacity: 0,
  animation: `1s ${SlideFadeIn} 0.1s forwards`,
  transform: "translateX(-50px)",
});

const ReadMoreBtn = ({ to }) => {
  return (
    <Link
      css={{
        color: "white",
        textDecoration: "none",
        border: `1px solid ${PRIMARY_COLOR}`,
        background: PRIMARY_COLOR,
        padding: rhythm(0.4),
        transition: "all 0.2s",
        "&:hover": {
          color: "black",
          border: `1px solid ${SECONDARY_COLOR}`,
          background: SECONDARY_COLOR,
        },
      }}
      to={to}
    >
      Read More
    </Link>
  );
};

const Post = ({ slug, title, date, excerpt }) => {
  return (
    <PostLink className="post">
      <h3 css={{ marginBottom: rhythm(0.2) }}>{title}</h3>
      <p css={{ color: "#999", marginBottom: rhythm(0.5) }}>{date}</p>
      <p>{excerpt}</p>
      <ReadMoreBtn to={slug} />
    </PostLink>
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
      <Pagination
        first={first}
        previousUrl={previousUrl}
        last={last}
        nextUrl={nextUrl}
      />
    </div>
  );
};

export default IndexPage;
