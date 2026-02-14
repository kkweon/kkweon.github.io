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
            name="naver-site-verification"
            content="2940df2084492807092ef910b250ecf3a90a679f"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <script
            data-ad-client="ca-pub-2420244930131504"
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            integrity="sha512-SfTiTlX6kk+qitfevl/7LibUOeJWlt9rByDn93BE3jUJHMbY00/Cr/XQ9z/GBkD3PE3hFFnfnit3F6Q+sK9lg=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
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
