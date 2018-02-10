/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");
const createPaginatedPages = require("gatsby-paginate");

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
}

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;
  if (node.internal.type === "MarkdownRemark") {
    const slug = node.frontmatter.slug || node.frontmatter.title;
    createNodeField({
      node,
      name: "slug",
      value: "posts/" + slugify(slug),
    });
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
              }
              excerpt
            }
          }
        }
      }
    `)
      .then(result => {
        createPaginatedPages({
          edges: result.data.allMarkdownRemark.edges,
          createPage: createPage,
          pageTemplate: "src/templates/Index.tsx",
          pageLength: 5,
          pathPrefix: "",
          context: {},
        });
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          createPage({
            path: node.fields.slug,
            component: path.resolve(
              __dirname,
              "src",
              "templates",
              "PostTemplate.tsx",
            ),
            context: {
              slug: node.fields.slug,
            },
          });
        });
        resolve();
      })
      .catch(error => {
        console.error("=====================");
        console.error(error);
        console.error("=====================");
      });
  });
};
