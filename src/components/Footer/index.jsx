import React from "react";
import { rhythm } from "../../utils/typography";

export default function Footer(props) {
  return (
    <div
      css={{
        backgroundColor: "#444",
        color: "#fff",
        minHeight: "15vh",
        marginTop: rhythm(1.5),
        padding: `${rhythm(1.5)} 0`,
      }}
    >
      <div className="container">
        <div
          className="icon-list"
          css={{
            display: "flex",
            justifyContent: "space-around",
            width: "20%",
            margin: "0 auto",
          }}
        >
          <a href="https://github.com/kkweon" target="_blank">
            <i className="fa fa-github-square fa-2x social-icon" />
          </a>
          <a href="https://facebook.com/kkweon" target="_blank">
            <i className="fa fa-facebook-square fa-2x social-icon" />
          </a>
          <a href="mailto:kkweon@gmail.com">
            <i className="fa fa-envelope-square fa-2x social-icon" />
          </a>
        </div>
        <p css={{ padding: `${rhythm(1)} 0 0`, textAlign: "center" }}>
          © 2018 Kyung Mo Kweon. All rights reserved.
        </p>
      </div>
    </div>
  );
}
