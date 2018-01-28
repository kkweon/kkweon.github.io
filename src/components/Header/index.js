import React from "react";
import Link from "gatsby-link";
import { PRIMARY_COLOR } from "../../utils/variables";

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
      <li>
        <h2 css={{ margin: 0 }}>
          <Link to="/" className="nav-link">
            Mo's Notes
          </Link>
        </h2>
      </li>

      <li css={{ marginLeft: "auto" }}>
        <h2 css={{ margin: 0 }}>
          <Link
            to="/about"
            className="nav-link"
            activeStyle={{ color: "grey" }}
          >
            About
          </Link>
        </h2>
      </li>
    </ul>
  </div>
);

export default Header;
