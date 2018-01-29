import React, { Component } from "react";
import Script from "react-load-script";

class AddThis extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    // Check if there is `document`

    if (typeof window !== "undefined") {
      const script = document.createElement("script");

      script.id = "addthis";
      script.src =
        "https://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5932152d13edaf2f";
      script.async = true;
      script.onload = () => {
        window.addthis.init();
        window.addEventListener("load", () => {
          window.addthis.layers.refresh();
        });
      };

      document.body.appendChild(script);
    }
  }

  componentDidMount() {
    if (window["addthis"]["layers"] && window.addthis.layers.refresh)
      window.addthis.layers.refresh();
  }

  componentWillUnmount() {
    document.body.removeChild(document.querySelector("#addthis"));
  }

  render() {
    return (
      <div>
        <div
          className="addthis_inline_share_toolbox"
          data-url={process.env.SITEURL + "/" + this.props.slug}
          data-title={this.props.title}
          data-description={this.props.description}
        />
      </div>
    );
  }
}

export default AddThis;
