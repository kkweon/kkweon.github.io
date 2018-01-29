import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Header from "../components/Header";
import Meta from "../components/Meta";
import Footer from "../components/Footer";
import "./index.scss";

// syntax highlighting
import "prismjs/themes/prism-okaidia.css";

const TemplateWrapper = ({ children }) => (
  <div>
    <Meta
      title={process.env.SITETITLE}
      description={process.env.SITEDESCRIPTION}
      tags={process.env.SITETAGS}
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
