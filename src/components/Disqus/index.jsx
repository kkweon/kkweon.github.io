import React from "react";
import ReactDisqusComments from "react-disqus-comments";

const Disqus = ({ identifier }) => {
  return (
    <ReactDisqusComments
      shortname="kyungmokweon"
      identifier={identifier}
      url={process.env.SITEURL + "/" + identifier}
      title="My Disqus"
      onNewComment={comment => console.log(comment.text)}
    />
  );
};

export default Disqus;
