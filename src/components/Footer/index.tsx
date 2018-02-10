import * as React from "react";
import { rhythm } from "../../utils/typography";
import { css } from "glamor";

export default function Footer() {
  const footerStyle = css({
    backgroundColor: "#444",
    color: "#fff",
    minHeight: "15vh",
    marginTop: rhythm(1.5),
    padding: `${rhythm(1.5)} 0`,
  });
  const footerTextStyle = css({
    padding: `${rhythm(1)} 0 0`,
    textAlign: "center",
  });

  const iconListStyle = css({
    display: "flex",
    justifyContent: "space-around",
    maxWidth: "200px",
    margin: "0 auto",
  });
  return (
    <div {...footerStyle}>
      <div className="container">
        <div className="icon-list" {...iconListStyle}>
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
        <p {...footerTextStyle}>© 2018 Kyung Mo Kweon. All rights reserved.</p>
      </div>
    </div>
  );
}
