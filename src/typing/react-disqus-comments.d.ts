declare module 'react-disqus-comments' {
  import * as React from 'react'

  interface IComment {
    text: string
  }

  interface IProp {
    shortname: string
    identifier: string
    url: string
    title: string
    onNewComment(comment: IComment): void
  }

  class ReactDisqusComments extends React.Component<IProp, any> {}
  export default ReactDisqusComments
}
