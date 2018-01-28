---
title: HTML Preprocessor
date: 2018-01-16
---

## What is Pug?
Lately, I started using "[Pug](https://pugjs.org/api/getting-started.html)" HTML preprocessor. It allows to write a concise HTML. At first, I thought why the hell I would use this when there is [Emmet](https://emmet.io/ "Emmet"). But I was wrong. As soon as I started using it, it brings the joy of writing HTML.

## How to use

```pug
h1 Your title goes here
```

Typically, you want something like this

```pug
section.container
  .header
    h1 My name is Kyung Mo #[span.lastname Kweon]
    p If #[em interested], please checkout the following
```

will result in

```html
<section class="container">
  <div class="header">
    <h1>My name is Kyung Mo <span class="lastname">Kweon</span></h1>
    <p>If <em>interested</em>, please checkout the following</p>
  </div>
</section>
```

Anchor tag or any tag that has many attributes can be written like a JS function.

```pug
a(href="https://github.com/kkweon" target="_blank") GitHub
```

## Dealing with Whitespace
One caveat is that if you don't want to use the inline tag as above, you have to use many ugly pipes(|) like below because **whitespace is not automatically generated**.

```pug
section.container
  .header
    h1 My name is Kyung Mo
       |
       |
       span.lastname Kweon
    p If
      |
      |
      em interested
      | , please checkout the following
```

## Final Result

<p data-height="512" data-theme-id="light" data-slug-hash="vePBbK" data-default-tab="html,result" data-user="kkweon" data-embed-version="2" data-pen-title="portfolio" class="codepen">See the Pen <a href="https://codepen.io/kkweon/pen/vePBbK/">portfolio</a> by Mo Kweon (<a href="https://codepen.io/kkweon">@kkweon</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
