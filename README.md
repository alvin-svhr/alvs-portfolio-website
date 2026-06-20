# Your Portfolio Website

A fast, modern, single-file-editable portfolio with a built-in **Documentation**
tab for your achievements (competition wins, chess elo, cooking, milestones…).

No build tools, no installs. It's plain HTML/CSS/JS.

---

## ▶️ How to view it

Just **double-click `index.html`** — it opens in your browser. That's it.

> Tip: to see live edits, keep the file open in your browser and refresh (F5)
> after saving.

**Optional — preview with a local server** (nicer for testing): right-click
`server.ps1` → *Run with PowerShell*, then open <http://localhost:8099> in your
browser. Close the PowerShell window to stop it. (Not required — double-clicking
`index.html` works fine.)

---

## ✏️ How to edit your content

**You only ever edit one file: [`data.js`](data.js).**

Open it in any text editor (Notepad works, but [VS Code](https://code.visualstudio.com/)
is nicer and free). Everything is labelled with comments. Change the text
between the `"quotes"`.

### Add a project
Find the `projects:` list and copy one `{ ... }` block, then change the text:
```js
{
  title: "My New Project",
  description: "What it does and why it's great.",
  tags: ["React", "Design"],
  image: "",                       // optional — leave "" for a gradient cover
  link: "https://...",             // live link  (leave "" to hide the button)
  repo: "https://github.com/...",  // source code (leave "" to hide)
  featured: false                  // true = wider card for your best work
},
```

### Add an achievement (Documentation tab)
Find the `achievements:` list and copy a block:
```js
{
  title: "1st Place — Some Competition",
  category: "Competitions",        // must match a word in achievementFilters
  date: "2025",
  icon: "trophy",                  // see the icon list in data.js
  metric: { value: "1st", label: "Place" },   // big highlighted number
  description: "A sentence about it.",
  image: "",                       // optional photo
  link: ""                         // optional proof link
},
```

Keep the commas between blocks. If the site goes blank after an edit, you
probably deleted a comma, quote, or bracket — undo and try again.

---

## 🖼️ Add your photo

1. Put your image inside the **`assets`** folder (e.g. `assets/profile.jpg`).
2. In `data.js`, set `profilePhoto: "assets/profile.jpg"`.

If you leave it blank or the file is missing, the site shows a clean gradient
with your initials instead — so it always looks intentional.

---

## 🎨 Change the colors

Open [`styles.css`](styles.css) and edit the few lines at the very top under
`:root` (`--accent-1`, `--accent-2`, `--accent-warm`). The whole site re-themes
automatically. There's also a light/dark toggle in the top-right corner.

---

## 🌐 Put it online (free)

Drag the whole `portfolio` folder onto [netlify.com/drop](https://app.netlify.com/drop),
or push it to a GitHub repo and enable **GitHub Pages**. Both are free and give
you a shareable link.
