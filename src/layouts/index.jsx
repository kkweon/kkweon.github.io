/**
 * @fileOverview Layout of the webpage
   @warning Do not change this file to tsx
 * @name index.jsx
 * @author Mo Kweon
 * @license MIT
 */
import React from "react";
import AdSense from "react-adsense";
import Header from "../components/Header";
import Meta from "../components/Meta";
import Footer from "../components/Footer";
import "./index.scss";

// syntax highlighting
import "prismjs/themes/prism-okaidia.css";

export default function({ children }) {
  return (
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
}
