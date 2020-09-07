const path = require('path')

const googleOptions = {
  analyticsID: 'UA-69116729-1',
  tagmanagerID: 'GTM-P5Q4LPN',
  optimizeID: 'GTM-KZ96TKD',
}

module.exports = {
  siteMetadata: {
    title: "Mo's Notes",
    siteUrl: 'https://kkweon.dev',
  },
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-glamor',
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        jsxPragma: `jsx`,
        allExtensions: true,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },

    {
      resolve: 'gatsby-plugin-google-marketing-platform',
      options: {
        includeInDevelopment: true,
        dataLayer: {
          gaPropertyId: googleOptions.analyticsID,
        },
        tagmanager: {
          id: googleOptions.tagmanagerID,
        },
        optimize: {
          id: googleOptions.optimizeID,
        },
        analytics: {
          id: googleOptions.analyticsID,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        precision: 8,
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils',
      },
    },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.resolve(__dirname, 'src', 'posts'),
        name: 'blog posts',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
            },
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-responsive-iframe',
          'gatsby-remark-katex',
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
            },
          },
        ],
      },
    },
  ],
}
