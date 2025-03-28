# Miden Homepage - Documentation

## Getting Started with Content Creation

This guide explains how to work with Markdown files in the Miden repository to create and manage content.

### Creating a Blog Post

1. **Create a new MDX file** in the following format:

   ```
   ./app/content/[resource].[blog].[blogpost-url].mdx
   ```

2. **Add required metadata** at the top of your file:

   ```mdx
   ---
   title: Title of your blogpost
   author: By Author 1 and Author 2
   date: 17.03.25
   featured: true or false
   ---
   ```

3. **Write your content** using standard Markdown syntax. If you need a refresher, check out the [Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/).

### Adding Images

Images are stored in the `./public/` directory and referenced from the root domain:

1. **Place your image** in the `./public/` directory (e.g., `./public/images/hello-world.jpg`)

2. **Reference the image** in your MDX file using standard Markdown:

   ```markdown
   ![Image description](/images/hello-world.jpg)
   ```

3. The image URL will be resolved as `https://example.com/images/hello-world.jpg`

Feel free to create your own folder structure within the `public` directory to organize your images.

### Using Custom Components

Miden supports custom React components that enhance your content:

#### Scribble Component

The Scribble component adds a handwritten-style highlight to text:

1. **Import the component** after your metadata:

   ```markdown
   import Scribble from "../components/scribble";
   ```

2. **Use the component** in your content:
   ```markdown
   <Scribble text="This is the scribble text">
     This series of blog posts has covered an overview of Miden's architecture and a deep dive into its transaction model, which allows for concurrentcomputation, client-side proving, and public smart contracts at the same time.
   </Scribble>
   ```

#### Highlight Component

The Highlight component emphasizes specific text inline:

1. **Import the component** after your metadata:

   ```markdown
   import Highlight from "../components/highlight";
   ```

2. **Use the component** in your content:
   ```markdown
   This series of blog <Highlight>posts has covered an overview</Highlight> of Miden's architecture and a deep dive into its transaction model.
   ```

### Example Complete Blog Post

```mdx
---
title: Understanding Miden Architecture
author: By Jane Smith and John Doe
date: 20.03.25
featured: true
---

import Highlight from "../components/highlight";
import Scribble from "../components/scribble";

# Understanding Miden Architecture

This article explores the core concepts behind <Highlight>Miden's innovative approach</Highlight> to blockchain architecture.

<Scribble text="Key innovation">
  Miden's transaction model enables concurrent computation, client-side
  proving,and public smart contracts simultaneously.
</Scribble>

![Miden Architecture Diagram](/images/miden-architecture.jpg)
```

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

Deployment is done using the Wrangler CLI.

To build and deploy directly to production:

```sh
npm run deploy
```

To deploy a preview URL:

```sh
npx wrangler versions upload
```

You can then promote a version to production after verification or roll it out progressively.

```sh
npx wrangler versions deploy
```