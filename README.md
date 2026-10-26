# gemma-zhenyangchen.github.io

Personal site of Zhenyang Chen, served by GitHub Pages at https://gemma-zhenyangchen.github.io.

It is a hand-built set of static pages (plain HTML/CSS/JS, no framework, no build
step). GitHub Pages serves the files as-is on every push.

## Updating content

| What | Where |
|---|---|
| Publications (shared by the Research page and the Publications page) | `js/publications.js` |
| Bio, education, interests, contact links | `index.html` |
| Research page structure (the three module cards) | `research.html` |
| Colors, type, layout | `css/style.css` |
| Profile photo | `images/profile-photo.webp` |
| Homepage research-module photos | `images/home-computing.webp`, `images/home-renewable.webp`, `images/home-ewaste.webp` |
| Research-page line-art illustrations | `images/research-computing.webp`, `images/research-renewable.webp`, `images/research-ewaste.webp` |

### Adding or editing a publication

`js/publications.js` is the single source of truth — both the Research page
(per-topic lists) and the Publications page (the filterable list + stats) render
from the same `PUBLICATIONS` array. Add an entry like this:

```js
{
  title: "Paper title",
  venue: "Author, A., Author, B. &amp; Author, C. &mdash; Journal Name 12(3), 45&ndash;67",
  year: 2026,
  type: "journal",        // journal | conference | poster | patent | working-paper
  status: "published",    // published | under-review | granted | working-paper
  topic: "computing",     // computing | renewable | ewaste
  link: "https://doi.org/..."   // optional — omit if there's nothing to link to yet
},
```

Notes:
- `venue` is raw HTML (so `&amp;`, `&mdash;`, `&ndash;` etc. for special characters);
  list every author, not just the first + "et al."
- Under-review papers: omit the journal name from `venue` until it's safe to name
  (convention used elsewhere on the site).
- `topic` controls which Research-page module (and which Publications filter) a
  paper shows up in.
- If you want a paper's PDF hosted directly on this site rather than linked
  externally, add a `papers/` folder, commit the PDF there, and point `link` at
  `papers/filename.pdf`.

### Changing the three research topics

The topic names/order live in two places that need to stay in sync:
- `TOPIC_LABELS` in `js/publications.js`
- The `<h3>` headings in `research.html` and `index.html`

## Local preview

No build step — just serve the folder and open it:

```bash
python -m http.server 8787
```

Then open `http://localhost:8787`.

## Deploying

Push to `master`. GitHub Pages rebuilds automatically within a minute or two.
