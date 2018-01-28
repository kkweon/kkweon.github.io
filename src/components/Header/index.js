import React from "react";
import Link from "gatsby-link";
import { PRIMARY_COLOR } from "../../utils/variables";
import { rhythm } from "../../utils/typography";
import { css } from "glamor";

const LinkStyle = css({
  color: "black",
  textDecoration: "none",
  "&:hover": {
    color: PRIMARY_COLOR,
  },
});

const noMarginBottom = css({
  marginBottom: 0,
});
const marginLeftAuto = css({
  marginLeft: "auto",
});

const Header = () => (
  <div
    css={{
      marginBottom: "1.45rem",
    }}
  >
    <ul
      className="container"
      css={{
        display: "flex",
        padding: `${rhythm(1)} ${rhythm(0.7)} ${rhythm(0.5)}`,
        listStyle: "none",
      }}
    >
      <li
        css={{
          display: "none",
          "@media screen and (max-width: 600px)": {
            display: "inline-block",
          },
        }}
      >
        <h2 css={{ noMarginBottom }}>
          <Link to="/" className="nav-link">
            Mo
          </Link>
        </h2>
      </li>
      <li
        css={{
          "@media screen and (max-width: 600px)": {
            display: "none",
          },
        }}
      >
        <h2 css={{ noMarginBottom }}>
          <Link to="/" className="nav-link">
            Mo's Notes
          </Link>
        </h2>
      </li>

      <li {...css(noMarginBottom, marginLeftAuto)}>
        <h2 css={{ noMarginBottom }}>
          <Link
            to="/about"
            className="nav-link"
            activeStyle={{ color: "grey" }}
          >
            About
          </Link>
        </h2>
      </li>

      <li css={{ marginLeft: rhythm(1) }}>
        <h2 css={{ noMarginBottom }}>
          <a
            href="https://kkweon.github.io/projects"
            className="nav-link"
            target="_blank"
          >
            Projects
          </a>
        </h2>
      </li>
    </ul>
  </div>
);

export default Header;
