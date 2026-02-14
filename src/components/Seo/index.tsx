import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

interface ISeoProps {
  description?: string
  lang?: string
  meta?: Array<{ name: string; content: string }>
  title?: string
  isArticle?: boolean
  noindex?: boolean
  siteUrl?: string // For overriding the default
  author?: string // For overriding default author
  keywords?: string | string[]
  publishedTime?: string
  section?: string
  pathname?: string // To construct canonical URL
}

export const Seo = ({
  description,
  title,
  isArticle = false,
  noindex = false,
  author,
  keywords,
  publishedTime,
  section,
  pathname,
}: ISeoProps) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            author
            image
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata.title
  const currentTitle = title || defaultTitle
  const siteUrl = site.siteMetadata.siteUrl
  const canonical = pathname
    ? `${siteUrl}${pathname}${pathname.endsWith('/') ? '' : '/'}`
    : `${siteUrl}/`
  const ogImage = `${siteUrl}${site.siteMetadata.image}`

  const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: siteUrl,
      name: defaultTitle,
      alternateName: site.siteMetadata.description,
    },
  ]

  if (isArticle) {
    schemaOrgJSONLD.push({
      '@context': 'http://schema.org',
      '@type': 'BlogPosting',
      url: canonical,
      name: currentTitle,
      alternateName: defaultTitle,
      headline: currentTitle,
      image: {
        '@type': 'ImageObject',
        url: ogImage,
      },
      description: metaDescription,
      author: {
        '@type': 'Person',
        name: author || site.siteMetadata.author,
      },
      publisher: {
        '@type': 'Organization',
        name: site.siteMetadata.author,
        logo: {
          '@type': 'ImageObject',
          url: ogImage,
        },
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': siteUrl,
      },
      datePublished: publishedTime,
    } as any)
  }

  return (
    <>
      <title>{currentTitle}</title>
      <meta name="description" content={metaDescription} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={currentTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={isArticle ? 'article' : 'website'} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={defaultTitle} />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={site.siteMetadata.author || ''} />
      <meta
        name="twitter:creator"
        content={author || site.siteMetadata.author || ''}
      />
      <meta name="twitter:title" content={currentTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />

      {isArticle && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {isArticle && section && (
        <meta property="article:section" content={section} />
      )}
      {isArticle && author && <meta property="article:author" content={author} />}

      {(keywords
        ? Array.isArray(keywords)
          ? keywords
          : keywords.split(',')
        : []
      ).map((keyword, i) => (
        <meta key={i} property="article:tag" content={keyword.trim()} />
      ))}

      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>
    </>
  )
}
