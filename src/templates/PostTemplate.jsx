import React from "react";

export default function Template({ data }) {
  const { frontmatter, html } = data.markdownRemark;

  return (
    <section className="container">
      <article className="post">
        <header className="post__header">
          <h2>{frontmatter.title}</h2>
          <p>
            <time>{frontmatter.date}</time>
          </p>
        </header>
        <main
          className="post__body"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
    </section>
  );
}

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        keywords
        description
      }
    }
  }
`;
