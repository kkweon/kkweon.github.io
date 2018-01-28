import React from "react";
import Link from "gatsby-link";
import { PRIMARY_COLOR } from "../../utils/variables";
import { rhythm } from "../../utils/typography";

const LinkStyle = {
  color: "black",
  textDecoration: "none",
  "&:hover": {
    color: PRIMARY_COLOR,
  },
};

const Header = () => (
  <div
    css={{
      marginBottom: "1.45rem",
    }}
  >
    <ul
      css={{
        margin: "0 auto",
        display: "flex",
        maxWidth: 960,
        padding: "1.45rem 1.0875rem",
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
        <h2>
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
        <h2>
          <Link to="/" className="nav-link">
            Mo's Notes
          </Link>
        </h2>
      </li>

      <li css={{ marginLeft: "auto" }}>
        <h2>
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
        <h2>
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
