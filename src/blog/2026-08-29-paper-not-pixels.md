---
layout: post.njk
title: Paper, not pixels
date: 2026-08-29
description: Why this site sits on warm cream instead of dark SaaS void, and why that matters for how software feels.
tags:
  - design
  - craft
draft: true
humanMade: false
---

This site sits on warm cream paper. Not a dark void with neon glows. Not flat white with gray hairlines. Cream.

That choice is a product decision.

## Software doesn't need to feel like a terminal

Most developer tools and SaaS products default to dark mode now. A near-black field with bright type and neon accents. The aesthetic says "serious engineering"—but it also says "late night incident response" and "too many open tabs."

That's not the vibe for a studio site.

AtomicBytes builds products that feel good to use. That means designing for daylight, not just dark mode. It means paper texture instead of glass blur. It means stamps and stickers instead of drop shadows.

> Make software feel good.

The cream paper field isn't decoration. It's a constraint that keeps the UI honest. If an accent color only works on black, it probably fails WCAG on cream. If a layout only looks good in dark mode, it probably isn't mobile-first.

The paper forces us to design in daylight.

## Mid-century optimism, not cyberpunk dystopia

The visual system pulls from mid-century atomic optimism: risograph prints, toy workshops, hand-set stamps. Ink on paper. Chunky borders. A smirking atom mascot.

It's whimsical without being childish. Serious craft with a wink.

That tone matches how the studio works: small team, no agency theater, sensible defaults. Software that holds up over time. The last 10% people actually notice.

The design system lives at [github.com/clanker1011/atomicbytes-design-system](https://github.com/clanker1011/atomicbytes-design-system). Tokens, type, characters, and component recipes—all on cream paper.

## Dark mode is opt-in

This site does ship a dark theme. Night paper: a warm ink field with soft cream type. Same stickers, same stamps, same chunky borders.

But light is the default.

Dark mode is opt-in, not the only option. The theme toggle sits in the header. It persists in localStorage and honors `prefers-color-scheme` if you haven't picked yet.

Try it. Toggle between Light and Dark. The cards, buttons, code slabs, and mascots all track the theme. Nothing glows. Nothing pulses.

Just ink on paper—day or night.

## Shipping it

This marketing site is built with [Eleventy 3](https://www.11ty.dev/). Static HTML. No framework runtime. No build-time graph queries.

Blog posts are markdown files in git. Add a file, push to main, GitHub Actions deploys to Pages. That workflow matches a small studio: no CMS, no Notion API, no vendor lock-in.

The site you're reading shipped from this repo: [github.com/clanker1011/atomicbytes-marketing](https://github.com/clanker1011/atomicbytes-marketing).

Open it. Poke the templates. Fork it if it's useful.

That's the point: software that feels good to use, and simple enough to own.
