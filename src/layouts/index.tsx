import * as React from "react";
import * as AdSense from "react-adsense";
import Header from "../components/Header";
import Meta from "../components/Meta";
import Footer from "../components/Footer";
import "./index.scss";

// syntax highlighting
import "prismjs/themes/prism-okaidia.css";

interface ITemplateProp {
  children: () => any;
}

const TemplateWrapper = ({ children }: ITemplateProp) => (
  <div>
    <Meta
      title={process.env.SITETITLE || "Mo's notes"}
      description={process.env.SITEDESCRIPTION || "Mo's notes"}
      tags={process.env.SITETAGS || "React"}
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

    <div className="container">
      <AdSense.Google client="ca-pub-2420244930131504" slot="8479628001" />
    </div>
    <Footer />
  </div>
);

export default TemplateWrapper;
