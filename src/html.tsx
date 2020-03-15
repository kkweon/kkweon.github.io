import * as React from 'react'

interface IHtmlProps {
  body: any
  postBodyComponents: any
  headComponents: any

  htmlAttributes: any
  bodyAttributes: any
  preBodyComponents: any
}

export default class HTML extends React.Component<IHtmlProps, void> {
  public render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="google-site-verification"
            content="qkC75RnsheKNWwHlXFRM0UoSTIq5Tm230sYmIKUCS2E"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <script
            async
            src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          />
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}
