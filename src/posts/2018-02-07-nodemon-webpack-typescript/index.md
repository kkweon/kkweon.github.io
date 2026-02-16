---
title: Bundle TypeScript with Webpack and Nodemon for Node.js
date: 2018-02-07T10:16:40
updated: 2026-02-16
keywords: Webpack, Typescript, Nodemon
---

This post shows how to use Webpack to bundle TypeScript for Node.js with auto-reload during development.

## Why Webpack for Node.js?

Webpack bundles all your TypeScript files and dependencies into a single JavaScript file.

**Benefits:**
- Same bundled output for development and production
- Single distributable file
- Tree-shaking and optimization
- Source maps for debugging

## Installation

```bash
npm install --save-dev typescript webpack webpack-cli ts-loader nodemon concurrently @types/node
```

## webpack.config.js

```javascript
const path = require('path');

module.exports = {
  mode: 'development',
  target: 'node',
  entry: './src/index.ts',
  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },

  resolve: {
    extensions: ['.ts', '.js'],
  },

  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```

**Note:** Use `ts-loader` (not `awesome-typescript-loader`, which is deprecated).

## package.json

```json
{
  "scripts": {
    "dev": "concurrently \"npm run watch:build\" \"npm run watch:server\"",
    "watch:build": "webpack --watch",
    "watch:server": "nodemon ./dist/server.js --watch ./dist",
    "build": "webpack --mode production",
    "start": "node dist/server.js"
  }
}
```

## Why Nodemon?

Nodemon watches your files and restarts the server automatically. Webpack rebuilds the bundle, then nodemon restarts the Node.js process.

## How it works

1. **Development:** `webpack --watch` rebuilds on changes → nodemon detects new bundle → restarts server
2. **Production:** `webpack --mode production` creates optimized bundle → deploy single file

Same bundled output in both environments.

## Example: Simple Express Server

```typescript
// src/index.ts
import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Hello TypeScript!' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
```

Run `npm run dev` and visit `http://localhost:3000`.

## Summary

Webpack bundles your TypeScript code into a single file for both development and production:

- Use `webpack --watch` + nodemon for development with auto-reload
- Use `webpack --mode production` for optimized production builds
- Same bundled output in both environments ensures dev/prod parity
