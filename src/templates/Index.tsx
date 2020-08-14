import React from 'react'
import Link from 'gatsby-link'
import Pagination from '../components/Pagination'
import { css } from 'glamor'
import glamorous from 'glamorous'
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../utils/variables'
import Layout from '../components'
import Typography from '../utils'

const rhythm = Typography.rhythm

const PostLink = glamorous.div({
  padding: rhythm(1),
  border: '1px solid black',
  marginBottom: rhythm(1),
  boxShadow: '0 3px 3px #696969',
})

const ReadMoreBtn = ({ to }: { to: string }) => {
  const buttonStyle = css({
    color: 'white',
    textDecoration: 'none',
    border: `1px solid ${PRIMARY_COLOR}`,
    background: PRIMARY_COLOR,
    padding: rhythm(0.4),
    transition: 'all 0.2s',
    '&:hover': {
      color: 'black',
      border: `1px solid ${SECONDARY_COLOR}`,
      background: SECONDARY_COLOR,
    },
  })
  return (
    <Link {...buttonStyle} to={to}>
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
  const titleStyle = css({
    marginBottom: rhythm(0.2),
  })

  const dateStyle = css({
    color: '#999',
    marginBottom: rhythm(0.5),
  })
  return (
    <PostLink className="post">
      <h3 {...titleStyle}>{title}</h3>
      <p {...dateStyle}>{date}</p>
      <p>{excerpt}</p>
      <ReadMoreBtn to={'/' + slug} />
    </PostLink>
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
  pathContext: IPathContext
}

export default function ({ pathContext }: IData) {
  const { group, index, first, last } = pathContext
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
