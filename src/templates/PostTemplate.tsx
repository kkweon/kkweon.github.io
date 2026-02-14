import React from 'react'
import Disqus from '../components/Disqus'
import 'katex/dist/katex.min.css'
import { graphql, HeadProps } from 'gatsby'
import Layout from '../components'
import { BackButton } from '../components/Buttons/BackButton'
import { Seo } from '../components/Seo'

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
  } = data.markdownRemark

  return (
    <Layout>
      <BackButton />
      <section className="post-container">
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

        <Disqus identifier={slug} />
      </section>
    </Layout>
  )
}

export function Head({ data }: HeadProps<IBlogPost['data']>) {
  const { frontmatter, excerpt, fields } = data.markdownRemark
  const description = frontmatter.description || excerpt
  const title = frontmatter.title

  return (
    <Seo
      title={title}
      description={description}
      pathname={`/${fields.slug}`}
      isArticle={true}
      publishedTime={frontmatter.date}
      keywords={frontmatter.keywords}
      section="Technology"
      author="Kyung Mo Kweon"
    />
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
