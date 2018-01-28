import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Header from "../components/Header";
import "./index.scss";

// syntax highlighting
import "prismjs/themes/prism-okaidia.css";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title={process.env.SITETITLE}
      meta={[
        { name: "description", content: "My Blog" },
        {
          name: "keywords",
          content: "python, react, web, machine learning, ai",
        },
      ]}
    />
    <Header />
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "0 1.0875rem 1.45rem",
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
