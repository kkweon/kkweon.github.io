import * as React from 'react'
import { DiscussionEmbed } from 'disqus-react'

interface IProp {
  identifier: string
}

const Disqus = ({ identifier }: IProp) => {
  const shortname = 'kyungmokweon'
  const url = (process.env.SITEURL || 'https://kkweon.dev') + '/' + identifier
  const config = {
    url,
    identifier,
    title: 'My Disqus',
    language: 'en',
  }
  return <DiscussionEmbed shortname={shortname} config={config} />
}

export default Disqus
