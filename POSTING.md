# How to publish a blog post

Publishing a post is simple: add a markdown file, commit it, and push to `main`. GitHub Actions builds and deploys the site in a minute or two.

You can do this entirely on github.com (no local install required) or run the site locally to preview.

## Quick start (GitHub web editor)

1. Go to [github.com/clanker1011/atomicbytes-marketing](https://github.com/clanker1011/atomicbytes-marketing)
2. Navigate to `src/blog/`
3. Click **Add file → Create new file**
4. Name it `YYYY-MM-DD-your-slug.md` (e.g. `2026-08-30-rebuilding-the-site.md`)
5. Paste this template and fill it in:

```markdown
---
layout: post.njk
title: Your post title here
date: 2026-08-30
description: A short excerpt for the index and RSS feed.
tags:
  - example
draft: false
humanMade: false
---

Write your post content here using markdown.

## Subheadings work

Use `h2` for sections since the title is `h1`.

Code blocks:

\`\`\`typescript
const feelGood = true;
\`\`\`

That's it.
```

6. Scroll down and click **Commit changes**
7. Wait 1–2 minutes for GitHub Actions to build and deploy
8. Visit [clanker1011.github.io/atomicbytes-marketing](https://clanker1011.github.io/atomicbytes-marketing) (blog is the homepage)

## Frontmatter fields

Every post needs these fields at the top:

```yaml
---
layout: post.njk          # Always use this
title: Your post title    # Required — appears as h1
date: 2026-08-30          # Required — sorts posts, shows in index
description: Short excerpt # Optional but recommended for SEO
tags:                      # Optional — list of tags
  - design
  - craft
draft: false              # Set to true to hide from production
humanMade: false          # Set to true only if YOU wrote it
---
```

### About `humanMade`

The `humanMade` field controls whether the "Human Made" sticker appears in the post header.

- Set it to `true` only if you actually wrote the post yourself.
- Leave it `false` (or omit it) for drafts, AI-assisted posts, or anything you wouldn't claim as fully authored by a human.

This is an honest signal, not decoration.

### About `draft`

Posts with `draft: true` won't appear in the blog index or RSS feed. Use this to work on a post in the repo without publishing it yet.

## Local development (optional)

If you want to preview posts before pushing:

```bash
# Clone the repo (first time only)
git clone https://github.com/clanker1011/atomicbytes-marketing.git
cd atomicbytes-marketing

# Install dependencies (first time only)
npm install

# Start the dev server
npm start
```

Open [localhost:8080](http://localhost:8080) to see the site.

Changes to markdown, templates, or CSS rebuild automatically.

## Adding images

Put images in `src/blog/img/` or `src/img/` and reference them relatively:

```markdown
![Alt text](/blog/img/example.png)
```

The site uses a path prefix (`/atomicbytes-marketing/`) for GitHub Pages, so all paths should start with `/` and the build will handle the prefix automatically.

## Markdown syntax

Standard markdown works:

- **Bold** with `**bold**`
- _Italic_ with `_italic_`
- [Links](https://atomicbytes.com) with `[text](url)`
- Inline code with `` `code` ``
- Code blocks with triple backticks + language tag:

````markdown
```typescript
export const feelGood = true;
```
````

- Headings: `## h2`, `### h3`, `#### h4`
- Lists: `-` or `1.` for bullets or numbered
- Quotes: `>` at the start of a line

## Publishing workflow

1. **Draft**: Create a post with `draft: true` to work on it without publishing
2. **Write**: Fill in title, date, description, and content
3. **Preview** (optional): Run `npm start` locally to see how it looks
4. **Publish**: Set `draft: false` and push to `main`
5. **Deploy**: GitHub Actions builds and deploys in 1–2 minutes

## RSS feed

The site generates an RSS feed at `/feed.xml` automatically. New posts appear in the feed as soon as they're published. The RSS link is in the site footer.

## Troubleshooting

**Post isn't showing up:**
- Check that `draft: false`
- Check that the filename matches `YYYY-MM-DD-slug.md`
- Check that the `date` field is valid (ISO format: `YYYY-MM-DD`)
- Wait a minute for the GitHub Actions build to finish

**Images aren't loading:**
- Check that the image path starts with `/` (e.g. `/img/example.png`)
- Check that the file exists in `src/img/` or `src/blog/img/`
- The build adds `/atomicbytes-marketing/` automatically — don't include it in your paths

**Build failed:**
- Check the [Actions tab](https://github.com/clanker1011/atomicbytes-marketing/actions) for error logs
- Common issues: invalid frontmatter YAML, missing closing code fence, or broken markdown

## Template file

A full template lives at `src/blog/_template.md`. Duplicate it to start a new post:

```bash
cp src/blog/_template.md src/blog/2026-08-30-my-post.md
```

Or on GitHub: view `_template.md`, copy the raw content, and paste into a new file.

## That's it

Markdown file → git → deployed. No CMS, no build system on your machine, no vendor lock-in.

Small-team craft.
