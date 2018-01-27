import React from "react";
import Link from "gatsby-link";

const Post = ({ title, date, excerpt, path }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{date}</p>
      <p>{excerpt}</p>

      <Link to={path}>READ MORE</Link>
    </div>
  );
};

const IndexPage = ({ data }) => {
  const nodes = data.allMarkdownRemark.edges;
  console.log(nodes);
  return (
    <div className="container">
      {nodes.map(({ node }) => (
        <Post
          key={node.id}
          title={node.frontmatter.title}
          date={node.frontmatter.date}
          excerpt={node.excerpt}
          path={node.fields.slug}
        />
      ))}
    </div>
  );
};

export default IndexPage;

export const postIndexQuery = graphql`
  query PostIndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`;
