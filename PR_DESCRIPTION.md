# Pull Request: Build AtomicBytes marketing website

## Overview

Complete, shippable marketing site for AtomicBytes — rebuilt from the design system, ready to deploy.

**Live preview (after merge):** https://clanker1011.github.io/atomicbytes-marketing/

## What's included

### Site structure
- **Home page** (`/`) — Hero, service cards, about, blog teaser, contact CTA
- **Work page** (`/work/`) — Portfolio (honest empty state, no fake case studies)
- **Blog index** (`/blog/`) — Paginated post list with RSS feed
- **Studio page** (`/studio/`) — About AtomicBytes and services
- **Sample blog post** — "Paper, not pixels" demonstrating the workflow

### Design system integration
- Vendored `tokens.css` from the [design system repo](https://github.com/clanker1011/atomicbytes-design-system)
- All characters: AtomicByte mark, Atom Salesman, Byte-Bot, Byte Rocket, AtomicMark
- Human Made stamps and stickers for authored content
- Mid-century shape ornaments (20 SVGs)
- Marketing CSS rebuilt from DS recipes (not the DS lab chrome)

### Features
- **Theme toggle**: Light (cream paper) and Dark (night paper) with localStorage persistence
- **Blog workflow**: Markdown posts in `src/blog/` — add a file, push to deploy
- **RSS feed**: Auto-generated at `/feed.xml`
- **Mobile-first**: Small-screen CSS is default, `min-width` adds columns
- **Accessibility**: Skip link, semantic HTML, WCAG contrast, ~44px tap targets

### Developer experience
- **Eleventy 3** static site generator
- **Simple posting**: See [POSTING.md](POSTING.md) — Matt can publish from github.com or locally
- **GitHub Actions**: Builds and deploys to Pages on every push to `main`
- **Path prefix**: `/atomicbytes-marketing/` for GitHub Pages (documented how to drop it for custom domain)

## Quality checklist

- ✅ Semantic HTML with proper landmarks
- ✅ One h1 per page
- ✅ Skip link to main content
- ✅ WCAG contrast on cream and night paper
- ✅ Mobile-first layout (usable at 320px)
- ✅ ~44px tap targets
- ✅ Focus indicators (3px cobalt ring)
- ✅ Theme toggle persists and honors `prefers-color-scheme`
- ✅ No invented content (no fake case studies, testimonials, or client logos)
- ✅ Favicon using AtomicByte mark

## Design decisions

**Visual system**: Mid-century atomic optimism, not dark SaaS. Warm cream paper (light mode default), ink outlines, stickers and stamps. One character per page (Atom Salesman in home hero).

**Blog workflow**: Markdown files in git. No CMS, no Notion, no headless admin. A post is a file. Matches small-studio craft. `humanMade` frontmatter field for the "Human Made" badge — only set when Matt actually wrote it.

**Empty states**: Work page and (if no posts) blog index show honest empty trays with "first case coming" copy. No specimens invented to make the page look populated.

## How to post

See [POSTING.md](POSTING.md) for the full guide. Quick version:

1. Create `src/blog/YYYY-MM-DD-slug.md`
2. Fill frontmatter (title, date, description, `draft: false`)
3. Write markdown
4. Commit and push to `main`
5. GitHub Actions deploys in 1–2 minutes

Can be done entirely on github.com or locally with `npm start`.

## Deployment

GitHub Actions workflow builds Eleventy and deploys to GitHub Pages on push to `main`.

**After merging this PR:**
1. Enable GitHub Pages in repo settings:
   - Go to Settings → Pages
   - Source: GitHub Actions
   - No custom domain yet (do not add `atomicbytes.com` CNAME)
2. The next push to `main` will deploy the site
3. Visit https://clanker1011.github.io/atomicbytes-marketing/

**To attach custom domain later:**
- Update `pathPrefix` in `eleventy.config.js` from `/atomicbytes-marketing/` to `/`
- Add CNAME in Pages settings
- Rebuild and deploy

## Design system resync

Assets are vendored (not live-linked). To resync later:

```bash
# Clone DS repo
git clone https://github.com/clanker1011/atomicbytes-design-system.git

# Copy updated files
cp atomicbytes-design-system/tokens.css src/css/
cp -r atomicbytes-design-system/assets/characters/* src/assets/characters/
cp -r atomicbytes-design-system/assets/labels/* src/assets/labels/
cp -r atomicbytes-design-system/assets/shapes/* src/assets/shapes/

# Review marketing.css for recipe updates
# Test locally and commit
```

## Notes

- No Lab Tech character (retired from the system)
- No Inter font (only Sixtyfour Convergence, Fraunces, Figtree)
- No neon glows, glass, or old colors (#0b0c10, cyan, violet, pink)
- Code blocks use warm ink slabs with paper type
- Sample post is agent-drafted (`humanMade: false`) — demonstrates the workflow without claiming human authorship

Ready to ship. 🚀

---

**Create this PR at:** https://github.com/clanker1011/atomicbytes-marketing/compare/main...cursor/marketing-site-8587
