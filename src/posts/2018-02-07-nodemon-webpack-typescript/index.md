---
title: Webpack, Typescript, Nodemon, and Node.js
date: 2018-02-07T10:16:40
keywords: Webpack, Typescript, Nodemon
---

This post is to describe how to use Webpack, Typescript, and Nodemon with Node.js.

## Why Webpack?

Webpack bundles all JavaScript into a single file. It works great for bundling front end applications, but you can also use that with Node.js application.
It produces a single js file and other HTML/CSS asset files. With sourcemaps, there is no problem in debugging the file.
It works great because if I am using typescript, it has to be compiled into JavaScript, preferrably in a separate directory such as `/dist` or `/build`. Since TypeScript does not bundle into one js file (unless you use `systemjs`), there will be so many JavaScript files created, but you don't have to care because the source code is in TypeScript anyway. But, I believe there is no performance gain in bundling into a single file, but it's much portable.

## Why Typescript?

TypeScript is so awesome. It's the future of JavaScript. One caveat is that it needs more setups. For example, you will need to install

- typescript
- tslint
- ts-node
- awesome-typescript-loader

and more such as typescript-formatter.

## Why Nodemon?

Nodemon is almost required for every express project.

> Monitor for any changes in your node.js application and automatically restart the server - perfect for development http://nodemon.io/

## How to make it work together?

These tools are so powerful that I lost how to set up because there would be so many ways of doing it.
For example, `tsc` will compile `**/*.ts` to `./dist/**/*.js`. But what about HTML/CSS Files?

If you let webpack do it, you have to be careful when using native node modules because the default webpack config will try to bundle as it would run on browsers. So, here is how I did it.

It's same as normal ts project, but `target: "node"` and `file-loader` for HTML files, and then I import `html` files in source file, such that it'll be copied during webpack build.

Here's the entire `webpack.config.ts` Note that I used `.ts`.

```typescript
import * as path from "path";
import * as webpack from "webpack";

const config: webpack.Configuration = {
  devtool: "source-map",
  entry: {
    server: "./src/index.ts",
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "awesome-typescript-loader",
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "file-loader",
            options: {
              publicPath: "dist/",
            },
          },
        ],
      },
    ],
  },

  output: {
    filename: "[name].js",
    path: path.join(__dirname, "dist/"),
  },

  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
  target: "node",
};

export default config;
```

and then how to watch? After trying gulpfile, nodmeon.json, and ..., I settled down using the following NPM scripts.
[npm-run-all](https://www.npmjs.com/package/npm-run-all) helps to run webpack and nodemon in parallel. Also it's cross-platform.


```json
"scripts": {
  # Mostly for development
  "start": "PORT=4000 yarn npm-run-all --parallel watch:server watch:build",
  "watch:build": "webpack --watch",
  "watch:server": "nodemon \"./dist/server.js\" --watch \"./dist\"",

  # Mostly for production
  "build": "yarn clean && webpack --optimize-minimize",
  "serve": "node dist/server.js",

  # Cleaning
  "clean": "rm -rf dist"
},
```
