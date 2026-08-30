# AtomicBytes Marketing Site

Public studio site for [atomicbytes.com](https://atomicbytes.com).

Built with [Eleventy 3](https://www.11ty.dev/) and the [AtomicBytes design system](https://github.com/clanker1011/atomicbytes-design-system).

**Live preview:** [clanker1011.github.io/atomicbytes-marketing](https://clanker1011.github.io/atomicbytes-marketing/)

## What's here

- **Blog-first site**: Root (`/`) is the blog index; Studio page at `/studio/`
- **Blog workflow**: Markdown posts in `src/blog/` with RSS feed
- **Design tokens**: Vendored snapshot of `tokens.css` from the design system
- **Characters**: AtomicByte mark, Atom Salesman, Byte-Bot, and other mascots
- **Theme toggle**: Light (cream paper) and Dark (night paper) modes

## Running locally

```bash
# Install dependencies
npm install

# Start dev server
npm start
```

Open [localhost:8080](http://localhost:8080) to see the site.

## Publishing a blog post

See [POSTING.md](POSTING.md) for the full guide.

**Quick version:**

1. Add a markdown file to `src/blog/` named `YYYY-MM-DD-slug.md`
2. Fill in the frontmatter (title, date, description)
3. Write your post in markdown
4. Set `draft: false` when ready to publish
5. Commit and push to `main`
6. GitHub Actions builds and deploys in 1–2 minutes

You can also create posts directly on github.com without a local install.

## Design system

This site uses a vendored snapshot of tokens and assets from the [AtomicBytes design system](https://github.com/clanker1011/atomicbytes-design-system).

**To resync from the design system repo:**

1. Clone the design system: `git clone https://github.com/clanker1011/atomicbytes-design-system.git`
2. Copy updated files:
   - `tokens.css` → `src/css/tokens.css`
   - `assets/characters/*` → `src/assets/characters/`
   - `assets/labels/*` → `src/assets/labels/`
   - `assets/shapes/*` → `src/assets/shapes/`
3. Review `marketing.css` for recipe updates
4. Test locally and commit changes

The marketing CSS (`src/css/marketing.css`) rebuilds component recipes from the design system documentation, not the DS lab chrome (no sticky side-nav, no documentation playground).

## Deployment

The site deploys to GitHub Pages via Actions on every push to `main`.

**Path prefix:** `/atomicbytes-marketing/` (configured in `eleventy.config.js`)

This prefix is required for GitHub Pages project sites. If the site moves to a custom domain (atomicbytes.com), change `pathPrefix` to `/` and redeploy.

**Pages setup:**
- Source: GitHub Actions
- Branch: N/A (Actions deploys the artifact)
- No CNAME file (no custom domain attached yet)

## Project structure

```
.
├── src/
│   ├── _includes/
│   │   ├── base.njk          # Base layout with header/footer
│   │   └── post.njk          # Blog post layout
│   ├── _data/
│   │   └── metadata.json     # Site metadata (URL for RSS)
│   ├── blog/
│   │   ├── _template.md      # Post template to duplicate
│   │   └── *.md              # Blog posts (YYYY-MM-DD-slug.md)
│   ├── css/
│   │   ├── tokens.css        # Design system tokens
│   │   └── marketing.css     # Marketing site styles
│   ├── assets/
│   │   ├── characters/       # AtomicByte, Salesman, Bot, Rocket
│   │   ├── labels/           # Human Made stamps and stickers
│   │   └── shapes/           # Mid-century shape ornaments
│   ├── index.njk             # Blog index (paginated) — root `/` route
│   ├── blog.njk              # Blog archive at `/blog/`
│   ├── studio.njk            # Studio page at `/studio/`
│   ├── work.njk              # Work archive (legacy)
│   └── feed.njk              # RSS feed
├── eleventy.config.js        # Eleventy configuration
├── package.json
├── POSTING.md                # Blog posting guide
└── README.md
```

## Quality bar

- **Semantic HTML**: Skip link, one `h1` per page, real landmarks
- **WCAG contrast**: Ink on paper, `--on-accent` on stickers
- **Mobile-first**: Small-screen CSS is default; `min-width` adds columns
- **Accessibility**: ~44px tap targets, focus rings, no horizontal scroll
- **No invented content**: No fake case studies, testimonials, or client logos

## License

ISC

## Contact

Email: [hello@atomicbytes.com](mailto:hello@atomicbytes.com)
