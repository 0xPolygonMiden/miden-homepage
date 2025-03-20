# Miden Homepaghe

## Getting Started

### Writing a blogpost

Create a new file in:

```
./app/content/[resource].[blog].[blogpost-url].mdx
```

Fill in the metadata by adding this to the top of the file:

```mdx
---
title: Title of your blogpost
author: By Author 1 and Author 2
date: 17.03.25
featured: true or false
---
```

Write your blog post as normal markdown.
[Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/)

### Custom markdown components

If you want to use a custom component like Scribble or Highlight you need to import it right below the metadata inside a mdx file.

```jsx
import Scribble from "../components/scribble";
import Highlight from "../components/highlight";
```

This is how the **Scribble** component works:

```mdx
---
title: Title of your blogpost
author: By Author 1 and Author 2
date: 17.03.25
featured: true or false
---

import Scribble from "../components/scribble";

<Scribble text="This is the scribble text">
  This series of blog posts has covered an overview of Miden’s architecture and
  a deep dive into its transaction model, which allows for concurrent
  computation, client-side proving, and public smart contracts at the same time.
</Scribble>
```

This is how the **Highlight** component works:

```mdx
---
title: Title of your blogpost
author: By Author 1 and Author 2
date: 17.03.25
featured: true or false
---

import Highlight from "../components/highlight";

This series of blog <Highlight>posts has covered an overview</Highlight> of Miden’s architecture and
a deep dive into its transaction model, which allows for concurrent
computation, client-side proving, and public smart contracts at the same time.
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
