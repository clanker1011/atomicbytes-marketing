---
layout: post.njk
title: Your post title here
date: 2026-08-30
description: A short excerpt that appears in the blog index and RSS feed.
tags:
  - example
  - tag
draft: true
humanMade: false
eleventyExcludeFromCollections: true
permalink: false
---

Write your post content here using markdown.

## Subheadings

Use headings to structure your post. The title above is `h1`, so start with `h2` for sections.

### Code snippets

Inline code looks like this: `const feelGood = true;`

Code blocks with syntax highlighting:

```typescript
export function feelGood(ms = 180) {
  return {
    duration: ms,
    easing: 'linear',
  };
}
```

### Lists

- First item
- Second item
- Third item

Or numbered:

1. Step one
2. Step two
3. Step three

### Links and images

[Link to something](https://atomicbytes.com)

Images go in `src/blog/img/` or `src/img/`:

![Alt text](/img/example.png)

### Quotes

> A pull quote or emphasized text sits here. Keep it short—one thought, then keep writing.

## Publishing checklist

- [ ] Fill in title, date, and description
- [ ] Write your content
- [ ] Set `draft: false` when ready to publish
- [ ] Set `humanMade: true` only if you wrote it yourself
- [ ] Commit and push to deploy
