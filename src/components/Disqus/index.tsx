import * as React from 'react'
import ReactDisqusComments from 'react-disqus-comments'

interface IProp {
  identifier: string
}

interface IComment {
  text: string
}

const Disqus = ({ identifier }: IProp) => {
  return (
    <ReactDisqusComments
      shortname="kyungmokweon"
      identifier={identifier}
      url={process.env.SITEURL + '/' + identifier}
      title="My Disqus"
      onNewComment={(comment: IComment) => console.log(comment.text)}
    />
  )
}

export default Disqus
