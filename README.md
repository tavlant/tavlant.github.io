# tavlant.github.io

Personal portfolio of Taulant Gashi, AI Engineer. Plain HTML + CSS, no build step.

## Files

- `index.html` - the page
- `styles.css` - all styling (light + dark mode)
- `script.js` - theme toggle and footer year
- `favicon.svg` - "TG" icon
- `assets/` - photo (JPG + WebP) and `Taulant_Gashi_CV.pdf`

## Preview locally

Double-click `index.html`, or run this in this folder and open http://localhost:8000:

```
python -m http.server 8000
```

## Publish on GitHub Pages

1. Go to https://github.com/new
2. Repository name: **`tavlant.github.io`** (exactly this). Set it to **Public**. Click **Create repository**.
3. On the new repo page, click **uploading an existing file**.
4. Drag in **everything inside this `site` folder** (`index.html`, `styles.css`, `script.js`, `favicon.svg`, `README.md` and the `assets` folder). `index.html` must be at the top level of the repo, not inside a subfolder.
5. Click **Commit changes**.
6. Go to **Settings > Pages**. Under **Build and deployment**, set Source = **Deploy from a branch**, Branch = **main**, folder = **/ (root)**. Click **Save**.
7. Wait 1-2 minutes, then open **https://tavlant.github.io**

## Updating later

Edit the file on GitHub (pencil icon) or upload the new version over the old one, then commit. The site updates by itself in a minute or two.

- New CV: replace `assets/Taulant_Gashi_CV.pdf` (keep the same file name).
- New project: in `index.html`, search for "Second project card goes here" and follow the note.
