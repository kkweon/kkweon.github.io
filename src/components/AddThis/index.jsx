import React, { Component } from "react";

class AddThis extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    // Check if there is `document`
    if (typeof window !== "undefined") {
      const script = document.querySelector("#addthis");
      if (script) document.body.removeChild(script);
    }
  }

  componentDidMount() {
    // Check if there is `document`
    if (typeof window !== "undefined") {
      const script = document.createElement("script");

      script.id = "addthis";
      script.src =
        "https://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5932152d13edaf2f";
      script.async = true;

      document.body.appendChild(script);
    }
  }

  render() {
    return <div className="addthis_inline_share_toolbox" />;
  }
}

export default AddThis;
