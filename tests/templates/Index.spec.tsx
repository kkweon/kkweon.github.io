import * as React from 'react'
import Index, { IData, IPathContext } from '../../src/templates/Index'
import { shallow } from 'enzyme'

const pathContext: IPathContext = {
  group: [
    {
      node: {
        frontmatter: {
          date: '2017-11-20T04:42:53.962Z',
          title: 'magna ad',
        },
        fields: {
          slug: 'ex',
        },
        excerpt:
          'Est consectetur mollit commodo aute incididunt laborum officia nisi aliqua in.',
        id: '5a7f459a6b8609720af19b9e',
      },
    },
    {
      node: {
        frontmatter: {
          date: '2015-01-04T16:51:23.859Z',
          title: 'velit magna',
        },
        fields: {
          slug: 'labore',
        },
        excerpt:
          'Ea sint consectetur occaecat aliquip amet cupidatat et ad consectetur adipisicing nostrud irure esse voluptate.',
        id: '5a7f459ad29e73acc3ed687a',
      },
    },
    {
      node: {
        frontmatter: {
          date: '2014-07-31T21:43:25.264Z',
          title: 'deserunt ut',
        },
        fields: {
          slug: 'est',
        },
        excerpt:
          'Duis sunt ullamco voluptate laboris mollit deserunt esse veniam adipisicing laboris ut exercitation.',
        id: '5a7f459a2ae42c1fe7565901',
      },
    },
  ],
  index: 1,
  first: true,
  last: false,
  pageCount: 3,
}

const data: IData = {
  pageContext: pathContext,
  data: {
    node: {
      frontmatter: {
        date: '2017-11-20T04:42:53.962Z',
        title: 'magna ad',
      },
      fields: {
        slug: 'ex',
      },
      excerpt:
        'Est consectetur mollit commodo aute incididunt laborum officia nisi aliqua in.',
      id: '5a7f459a6b8609720af19b9e',
    },
  },
}

test('<Index /> has posts compoent', () => {
  // Render a checkbox with label in the document
  const wrapper = shallow(<Index {...data} />)
  expect(wrapper.find('Post').length).toBe(pathContext.group.length)
})
