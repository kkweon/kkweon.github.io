const path = require("path");
module.exports = {
  siteMetadata: {
    title: process.env.TITLE,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-glamor",
    {
      resolve: "gatsby-plugin-sass",
      options: {
        precision: 8,
      },
    },
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography.js",
      },
    },

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
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 590,
            },
          },
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-responsive-iframe",
          "gatsby-remark-katex",
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              classPrefix: "language-",
            },
          },
        ],
      },
    },
  ],
};
