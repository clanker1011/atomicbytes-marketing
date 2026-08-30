---
layout: post.njk
title: Design system patterns and paper textures
date: 2026-08-30
description: Exploring how paper patterns create visual hierarchy and brand consistency across interfaces.
tags:
  - design
  - systems
draft: false
humanMade: true
paperPattern: sparks
coverImage: /blog/img/demo-cover.jpg
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.

## Foundation patterns

Design systems need consistent foundations. Grid structures, dot paper, and decorative sparks each serve different purposes in visual hierarchy. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

> Paper texture isn't decoration—it's a constraint that keeps the interface honest.

Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Cras mattis consectetur purus sit amet fermentum.

## Implementation approach

When implementing pattern systems, start with configuration. Define patterns in a central location, then apply them contextually based on page requirements:

```typescript
interface PaperPattern {
  type: 'grid' | 'dots' | 'sparks';
  density?: 'sparse' | 'normal' | 'dense';
  opacity?: number;
}

export function applyPattern(pattern: PaperPattern) {
  const className = `paper-${pattern.type}`;
  document.body.classList.add(className);
}
```

The pattern system uses CSS custom properties and background gradients to create the visual texture. Each pattern is defined once and can be applied with a simple class name like `paper-sparks`.

<div class="callout-quote">
Patterns should enhance readability, not compete with content.
</div>

## Configuration layers

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Here's what matters:

- **Site default**: Configure once in `site.json`
- **Page override**: Set `paperPattern` in frontmatter
- **Dynamic switching**: Apply patterns based on context

Inline code examples like `paperPattern: 'sparks'` demonstrate the frontmatter syntax. The system falls back gracefully from page to site to default.

## Visual hierarchy

Vestibulum id ligula porta felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla. Maecenas faucibus mollis interdum.

Nullam quis risus eget urna mollis ornare vel eu leo. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.

## Putting it together

The result is a flexible pattern system that works across the entire site while allowing per-page customization. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

Cards, forms, and code blocks maintain solid surfaces. The paper pattern lives in the background, creating atmosphere without interfering with readability.
