const path = require("path");
module.exports = {
  siteMetadata: {
    title: "Gatsby Default Starter",
  },
  plugins: [
    "gatsby-plugin-react-helmet",

    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: path.resolve(__dirname, "src", "posts"),
        name: "blog posts",
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        classPrefix: "language-",
      },
    },
  ],
};
