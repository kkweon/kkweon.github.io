const path = require("path");
module.exports = {
  siteMetadata: {
    title: "Gatsby Default Starter",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
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
