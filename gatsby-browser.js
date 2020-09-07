/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
exports.onRouteUpdate = () => {
  // wrap inside a timeout to ensure the title has properly been changed
  setTimeout(() => {
    let data = window.dataLayer
    let eventName = `gatsby-route-change`

    data.push({ event: eventName })
  }, 50)
}
