import React from "react";
import ReactDisqusThread from "react-disqus-thread";

const Disqus = ({ identifier, url }) => {
  return (
    <ReactDisqusThread
      shortname="kyungmokweon"
      identifier={identifier}
      title="My Disqus"
      url={process.env.SITEURL + "/" + url}
      category_id="123456"
      onNewComment={comment => console.log(comment)}
    />
  );
};

export default Disqus;
