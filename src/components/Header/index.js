import React from "react";
import Link from "gatsby-link";
import { PRIMARY_COLOR } from "../../utils/variables";
import { rhythm } from "../../utils/typography";
import { css } from "glamor";
import glamorous from "glamorous";

const SlideDownFadeIn = css.keyframes({
  "100%": {
    opacity: 1,
    transform: "translatey(0)",
  },
});

const Nav = glamorous.div({
  marginBottom: rhythm(1),
  animation: `1s ${SlideDownFadeIn} .3s forwards`,
  opacity: 0,
  transform: `translatey(-20px)`,
});

const Ul = glamorous.ul({
  display: "flex",
  padding: `${rhythm(1)} ${rhythm(0.7)} ${rhythm(0.5)}`,
  listStyle: "none",
});

const noMarginBottom = css({
  marginBottom: 0,
});
const marginLeftAuto = css({
  marginLeft: "auto",
});

const Header = () => (
  <Nav>
    <Ul className="container">
      {" "}
      <li
        css={{
          display: "none",
          "@media screen and (max-width: 600px)": {
            display: "inline-block",
          },
        }}
      >
        <h2 {...noMarginBottom}>
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
        <h2 {...noMarginBottom}>
          <Link to="/" className="nav-link">
            Mo's Notes
          </Link>
        </h2>
      </li>
      <li {...noMarginBottom} {...marginLeftAuto}>
        <h2 {...noMarginBottom}>
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
);

export default Header;
