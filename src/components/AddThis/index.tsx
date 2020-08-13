import * as React from 'react'

declare var window: any

interface IProps {
  slug: string
  title: string
  description: string
}

class AddThis extends React.Component<IProps> {
  componentWillMount() {
    // Check if there is `document`

    if (typeof window !== 'undefined') {
      this.getAddthisGoogleAnalyticsScript()
      document.body.appendChild(this.getAddthisScript())
    }
  }

  // See https://www.addthis.com/academy/integrating-with-google-analytics/
  getAddthisGoogleAnalyticsScript() {
    window.addthis_config = {
      data_ga_property: 'UA-69116729-1',
      data_ga_social: true,
    }
  }

  componentDidMount() {
    if (window['addthis']['layers'] && window.addthis.layers.refresh)
      window.addthis.layers.refresh()
  }

  componentWillUnmount() {
    const node = document.querySelector('#addthis')
    if (node) document.body.removeChild(node)
  }

  getAddthisScript(): HTMLScriptElement {
    const script = document.createElement('script')

    script.id = 'addthis'
    script.src =
      'https://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5932152d13edaf2f'
    script.async = true
    script.onload = () => {
      window.addthis.init()
      window.addEventListener('load', () => {
        window.addthis.layers.refresh()
      })
    }

    return script
  }

  render() {
    return (
      <div>
        <div
          className="addthis_inline_share_toolbox"
          data-url={process.env.SITEURL + '/' + this.props.slug}
          data-title={this.props.title}
          data-description={this.props.description}
        />
      </div>
    )
  }
}

export default AddThis
