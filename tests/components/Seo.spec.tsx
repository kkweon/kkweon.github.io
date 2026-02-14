import React from 'react'
import { Seo } from '../../src/components/Seo'

// Mock useStaticQuery
jest.mock('gatsby', () => ({
  useStaticQuery: jest.fn(() => ({
    site: {
      siteMetadata: {
        title: 'Default Title',
        description: 'Default Description',
        siteUrl: 'https://example.com',
        author: '@defaultauthor',
      },
    },
  })),
  graphql: jest.fn(),
}))

describe('Seo', () => {
  const renderSeo = (props: any = {}) => {
    // @ts-ignore
    const result = Seo(props) as React.ReactElement
    // If it's a fragment, children are in props.children
    return React.Children.toArray((result.props as any).children)
  }

  it('returns correct meta tags', () => {
    const children = renderSeo()
    
    // Helper to find props of a specific type
    const findTitle = () => children.find((child: any) => child.type === 'title')
    const findMeta = (matcher: (props: any) => boolean) => children.find((child: any) => 
      child.type === 'meta' && matcher(child.props)
    )

    const titleElement = findTitle() as React.ReactElement
    expect((titleElement.props as any).children).toBe('Default Title')

    const descMeta = findMeta(p => p.name === 'description') as React.ReactElement
    expect((descMeta.props as any).content).toBe('Default Description')
  })
  
  it('handles custom title and description', () => {
    const children = renderSeo({ title: 'Custom Title', description: 'Custom Description' })

    const findTitle = () => children.find((child: any) => child.type === 'title')
    const findMeta = (matcher: (props: any) => boolean) => children.find((child: any) => 
        child.type === 'meta' && matcher(child.props)
    )

    expect((findTitle() as any).props.children).toBe('Custom Title')
    expect(findMeta(p => p.name === 'description' && p.content === 'Custom Description')).toBeDefined()
  })

  it('renders Open Graph tags', () => {
     const children = renderSeo()
     
     const findMeta = (matcher: (props: any) => boolean) => children.find((child: any) => 
        child.type === 'meta' && matcher(child.props)
     )

     expect(findMeta(p => p.property === 'og:type' && p.content === 'website')).toBeDefined()
  })

    it('renders article specific tags', () => {
     const children = renderSeo({ isArticle: true })
     
     const findMeta = (matcher: (props: any) => boolean) => children.find((child: any) => 
        child.type === 'meta' && matcher(child.props)
     )

     expect(findMeta(p => p.property === 'og:type' && p.content === 'article')).toBeDefined()
  })

  it('renders keywords', () => {
    const children = renderSeo({ keywords: 'test, keywords' })
    const findMeta = (matcher: (props: any) => boolean) => children.filter((child: any) => 
        child.type === 'meta' && matcher(child.props)
    )
    
    expect(findMeta(p => p.property === 'article:tag').length).toBe(2)
  })

  it('renders published time and section', () => {
    const children = renderSeo({ isArticle: true, publishedTime: '2023-01-01', section: 'Tech' })
    const findMeta = (matcher: (props: any) => boolean) => children.find((child: any) => 
        child.type === 'meta' && matcher(child.props)
    )
    
    expect(findMeta(p => p.property === 'article:published_time' && p.content === '2023-01-01')).toBeDefined()
    expect(findMeta(p => p.property === 'article:section' && p.content === 'Tech')).toBeDefined()
  })
})
