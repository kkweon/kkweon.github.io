import React from 'react'
import Disqus from '../components/Disqus'
import Meta from '../components/Meta'
import AddThis from '../components/AddThis'
import 'katex/dist/katex.min.css'
import { graphql } from 'gatsby'
import Layout from '../components'
import { BackButton } from '../components/Buttons/BackButton'

interface IBlogPost {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string
        date: string
        keywords: string
        description: string
      }

      html: string
      fields: {
        slug: string
      }

      excerpt: string
    }
  }
}

export default function Template({ data }: IBlogPost) {
  const {
    frontmatter,
    html,
    fields: { slug },
    excerpt,
  } = data.markdownRemark

  const description = frontmatter.description || excerpt

  return (
    <Layout>
      <BackButton />
      <section className="post-container">
        <Meta
          title={frontmatter.title}
          date={frontmatter.date}
          description={description}
          tags={frontmatter.keywords}
        />
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

        <AddThis
          slug={slug}
          title={frontmatter.title}
          description={description}
        />
        <Disqus identifier={slug} />
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        keywords
        description
      }
      fields {
        slug
      }
    }
  }
`
