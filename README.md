# Riethuram A K — Portfolio

A plain HTML/CSS/JS portfolio site styled like a code editor (tab bar, file
explorer sidebar, line numbers, git-log style education, "files" for skills).
No build step, no framework — just static files, so it deploys to Vercel as-is.

## File structure
```
index.html                 → home page (hero, about, education, skills)
css/style.css               → all styling
js/main.js                  → typewriter + scroll-reveal + active nav
assets/avatar-placeholder.svg  → placeholder photo — replace this
works/generative-ai.html    → "generative-ai.js" skill page
works/game-dev.html         → "game-dev.cs" skill page
works/web-dev.html          → "web-dev.jsx" skill page
works/blender.html          → "blender-3d.py" skill page (empty, ready for your work)
works/ai-video.html         → "ai-video.mp4" skill page (empty, ready for your work)
```

## 1. Add your real photo
Replace `assets/avatar-placeholder.svg` with your own photo file (e.g.
`assets/me.jpg`), then in `index.html` find:
```html
<img src="assets/avatar-placeholder.svg" alt="...">
```
and change the `src` to your new filename.

## 2. Add real work to Blender / AI Video pages
Open `works/blender.html` or `works/ai-video.html` and copy a `.proj-card`
block from `works/web-dev.html` as a template — swap in your own title,
description, tags, and a link (or an `<img>`/`<iframe>` for a render or clip).

## 3. Deploy to Vercel

**Easiest — no install needed:**
1. Go to https://vercel.com/new
2. Drag this whole `portfolio` folder onto the page (or "Import" it as a
   folder if prompted).
3. Framework preset: choose **Other** (it's a static site, no build command
   needed). Click **Deploy**.
4. You'll get a live URL like `riethuram.vercel.app` in about a minute.

**Using the Vercel CLI:**
```bash
npm i -g vercel      # one-time install
cd portfolio
vercel               # follow the prompts, deploys a preview
vercel --prod        # promotes it to your production URL
```

**Using GitHub (auto-deploys on every push):**
1. Push this folder to a new GitHub repo.
2. In Vercel, "Add New Project" → import that repo.
3. Framework preset **Other**, no build command, root directory `/`.
4. Deploy — future `git push`es redeploy automatically.

That's it — no `package.json`, no build step required.
