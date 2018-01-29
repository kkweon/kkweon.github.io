---
title: Migrating to GatsbyJS
date: 2018-01-29T11:43:40
keywords: ReactJS, GatsbyJS, Blog
---

I decided to migrate my current blog to [GatsbyJS](https://www.gatsbyjs.org/) (previously, I was using [Pelican](http://docs.getpelican.com/en/stable/ "Pelican")).


## Why GatsbyJS
Though Pelican was okay, I moved to [Gatsby](https://www.gatsbyjs.org/) due to the following reasons:


### [React](https://reactjs.org/)
Gatsby uses React to generate static sites. So, I can build my blog using React components.
For example, my post list is represented as a `PostLink`.

```jsx
<PostLink className="post">
  <h3 css={{ marginBottom: rhythm(0.2) }}>{title}</h3>
  <p css={{ color: "#999", marginBottom: rhythm(0.5) }}>{date}</p>
  <p>{excerpt}</p>
  <ReadMoreBtn to={slug} />
</PostLink>
```

### JavaScript (NPM)

I get to use lots of NPM packages. Though I can use NPM packages in Pelican, it wasn't clean because Pelican heavily relies on its plugins (pelican-plugins). Some packages were outdated.


### Fast Loading & SEO

There is no loading between posts because it's loaded in JavaScript. Yet, I was able to do SEOs thanks to [react-helmet](https://github.com/nfl/react-helmet). In fact, components based approach made it SEO so simple since there is no need to define a new function/filter in HTML Template Engine(Jinja).

For example, I defined `Meta` component.

```jsx
export default function Meta({
  title,
  tags,
  description,
  date,
  modifiedDate,
  image,
}) {
  return (
    <Helmet>
      <meta charset="utf-8" />
      <title>{title}</title>
      <meta name="keywords" content={tags} />
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      <meta itemprop="name" content={title} />
      <meta itemprop="description" content={description} />
      <meta itemprop="image" content={image} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image:src" content={image} />

      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:image" content={image} />
      <meta name="og:url" content={process.env.SITEURL} />
      <meta name="og:site_name" content={title} />
      <meta name="og:locale" content="en_US" />
      <meta name="og:type" content="article" />

      <meta name="article:section" content="Technology" />
      <meta name="article:published_time" content={date} />
      <meta name="article:author" content="Kyung Mo Kweon" />
      <meta name="article:tag" content={tags} />
      <meta name="article:modified_time" content={modifiedDate} />
    </Helmet>
  );
}

```

and then I simply re use it just like any other React component.


```jsx
<Meta
  title={frontmatter.title}
  date={frontmatter.date}
  description={description}
  tags={frontmatter.keywords}
/>
```


## Caveats

There are some caveats I didn't know before migrating into GatsbyJS.


### iOS Safari

Currently, there is a bug in iOS Safari that swiping to previous page freezes the service worker ([source](https://github.com/gatsbyjs/gatsby/issues/2842)). Though it's not Gatsby's fault, it's really annoying.


### AddThis

[AddThis](http://www.addthis.com/) helps to create/track social sharing buttons. However, they don't provide a plugin for React. Since there is no page-loading (using react-router), additional fixes were necessary. But, it looks ugly and there should be better ways of doing this.


```jsx
class AddThis extends Component {
  componentWillMount() {
    // Check if there is `document`

    if (typeof window !== "undefined") {
      const script = document.createElement("script");

      script.id = "addthis";
      script.src =
        "https://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5932152d13edaf2f";
      script.async = true;
      script.onload = () => {
        window.addthis.init();
        window.addEventListener("load", () => {
          window.addthis.layers.refresh();
        });
      };

      document.body.appendChild(script);
    }
  }

  componentDidMount() {
    if (window["addthis"]["layers"] && window.addthis.layers.refresh)
      window.addthis.layers.refresh();
  }

  componentWillUnmount() {
    document.body.removeChild(document.querySelector("#addthis"));
  }

  render() {
    return (
      <div>
        <div
          className="addthis_inline_share_toolbox"
          data-url={process.env.SITEURL + "/" + this.props.slug}
          data-title={this.props.title}
          data-description={this.props.description}
        />
      </div>
    );
  }
}
```


## Summary

Gatsby is so much better than Jekyll and Pelican due to maintainability that comes from using React.
Also, no page loading is awesome. Note that Gatsby does not load "everything" just like other SPAs. Instead, it offers server side rendering. During the build time, it generate necessary HTML pages.
