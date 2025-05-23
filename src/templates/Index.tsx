import React from 'react'
import Pagination from '../components/Pagination'
import Layout from '../components'
import { Link } from 'gatsby'

const ReadMoreBtn = ({ to }: { to: string }) => {
  return (
    <Link className="template-index-read-more-btn" to={to}>
      Read More
    </Link>
  )
}

interface IPost {
  slug: string
  title: string
  date: string
  excerpt: string
}

const Post = ({ slug, title, date, excerpt }: IPost) => {
  return (
    <div className="post template-index-post-link">
      <h3 className="template-index-post-title">{title}</h3>
      <p className="template-index-post-date">{date}</p>
      <p>{excerpt}</p>
      <ReadMoreBtn to={'/' + slug} />
    </div>
  )
}

export interface IPostNode {
  node: {
    id: number | string
    excerpt: string

    fields: {
      slug: string
    }

    frontmatter: {
      title: string
      date: string
    }
  }
}

export interface IPathContext {
  group: IPostNode[]
  index: number
  first: boolean
  last: boolean
  pageCount: number
}

export interface IData {
  data: IPostNode
  pageContext: IPathContext
}

export default function ({ pageContext }: IData) {
  const { group, index, first, last } = pageContext
  const previousUrl = index - 1 == 1 ? '' : (index - 1).toString()
  const nextUrl = (index + 1).toString()

  return (
    <Layout>
      <div>
        {group.map(({ node }) => (
          <Post
            key={node.id}
            slug={node.fields.slug}
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            excerpt={node.excerpt}
          />
        ))}
        <Pagination
          first={first}
          previousUrl={previousUrl}
          last={last}
          nextUrl={nextUrl}
        />
      </div>
    </Layout>
  )
}
