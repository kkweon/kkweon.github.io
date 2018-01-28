import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Header from "../components/Header";
import Footer from "../components/Footer";
import "./index.scss";

// syntax highlighting
import "prismjs/themes/prism-okaidia.css";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title={process.env.SITETITLE}
      meta={[
        { name: "description", content: process.env.SITETITLE },
        {
          name: "keywords",
          content: "python, react, web, machine learning, ai",
        },
      ]}
    />
    <Header />
    <div
      className="container"
      style={{
        padding: "0 1.0875rem 1.45rem",
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
