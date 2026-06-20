# ✏️ The Complete Editing Guide

Everything on your website is controlled by **one file: `data.js`**.
You do **not** need to touch `index.html`, `styles.css`, or `app.js` to change
your content. (Colors are the one exception — see the very bottom.)

---

## 📖 Table of contents
1. [3 golden rules (read first)](#-3-golden-rules-read-first)
2. [How to open `data.js` to edit](#-how-to-open-datajs-to-edit)
3. [Your name, role & intro](#1-your-name-role--intro)
4. [Your photo](#2-your-photo)
5. [Social links](#3-social-links)
6. [The big stat numbers](#4-the-big-stat-numbers)
7. [About section](#5-about-section)
8. [Skills](#6-skills)
9. [Projects](#7-projects)
10. [Experience / timeline](#8-experience--timeline)
11. [Documentation tab (achievements)](#9-documentation-tab-achievements)
12. [Contact section](#10-contact-section)
13. [Icon names you can use](#-icon-names-you-can-use)
14. [Saving your changes](#-saving-your-changes)
15. [Help! The page went blank](#-help-the-page-went-blank)
16. [Changing the colors (bonus)](#-changing-the-colors-bonus)

---

## ⭐ 3 golden rules (read first)

Editing is just changing text between `"quotes"`. But the file is code, so keep
these 3 rules and you'll never break it:

1. **Only change the text *inside* the quotes.** ✅ `name: "Alvin"`
   Don't delete the quotes themselves or the word before the colon.
2. **Keep every comma `,` and bracket `{ } [ ]`.** Each item ends with a comma.
3. **To add an item, copy a whole existing block and edit the copy.** Don't
   build one from scratch — copying guarantees the commas/brackets are right.

> Think of `{ ... }` as one "card" and `[ ... ]` as the "stack" that holds the
> cards. You copy a card and change its words.

---

## 📂 How to open `data.js` to edit

You have three ways. Pick whichever you like:

**A) Quick edit on GitHub (easiest)**
1. Go to your repo → click **`data.js`**.
2. Click the **pencil ✏️** icon (top-right of the file).
3. Make changes → scroll down → **Commit changes**. Done — site updates.

**B) Full editor in your browser (best for bigger edits)**
1. On your repo's main page, press the **`.`** (period) key.
2. A full VS Code editor opens in your browser (github.dev).
3. Edit `data.js`, then use the **Source Control** tab (left side) to commit.

**C) On your computer**
1. Open the `portfolio` folder, right-click `data.js` → open with Notepad or
   [VS Code](https://code.visualstudio.com/).
2. Save, then **double-click `index.html`** to preview.
3. To send changes to GitHub: `git add . && git commit -m "update" && git push`.

---

## 1) Your name, role & intro

Near the top of `data.js`, find the **BASIC INFO** block:

```js
name: "Your Name",
initials: "YN",                 // shown if you have no photo (e.g. "AS")
role: "Creative Developer & Builder",
location: "Your City, Country",
email: "you@example.com",
available: true,                // true = green "Available for work" dot. false = "busy"
profilePhoto: "assets/profile.jpg",
resumeUrl: "",                  // paste a link to your CV, or leave "" to hide the button

rotatingWords: ["Developer", "Designer", "Chess Player", "Problem Solver"],

tagline: "I turn ideas into clean, interactive experiences ...",
```

- **`name`** → the big name in the hero and navbar.
- **`rotatingWords`** → the words that auto-type and change in the headline
  ("I'm a ___"). Add or remove words inside the `[ ]`, each in `"quotes"`,
  separated by commas.
- **`tagline`** → the sentence under your name.

---

## 2) Your photo

1. Put your image file in the **`assets`** folder. A portrait photo (taller than
   wide, e.g. 800×1000px) looks best.
2. Set the file name:

```js
profilePhoto: "assets/my-photo.jpg",
```

If you leave it `""` or the file is missing, the site shows your initials on a
gradient instead — so it always looks intentional, never broken.

> **Uploading a photo on GitHub:** open the `assets` folder in your repo →
> **Add file ▾ → Upload files** → drag your photo in → **Commit changes**.
> Then set `profilePhoto` to match the file name.

---

## 3) Social links

```js
socials: [
  { icon: "github",    label: "GitHub",    url: "https://github.com/yourname" },
  { icon: "linkedin",  label: "LinkedIn",  url: "https://linkedin.com/in/yourname" },
  { icon: "instagram", label: "Instagram", url: "https://instagram.com/yourname" },
  { icon: "mail",      label: "Email",     url: "mailto:you@example.com" }
],
```

- Change the `url` to your real profiles.
- **To remove one:** delete its whole `{ ... },` line.
- **To add one:** copy a line, change the `icon`, `label`, and `url`.
- Valid `icon` values: see [icon list](#-icon-names-you-can-use).

---

## 4) The big stat numbers

The four animated numbers near the top.

```js
stats: [
  { value: 20,   suffix: "+", label: "Projects Built" },
  { value: 3,    suffix: "",  label: "Years Experience" },
  { value: 1500, suffix: "",  label: "Chess Elo" },
  { value: 12,   suffix: "+", label: "Awards & Wins" }
],
```

- **`value`** is a number (no quotes). It counts up when scrolled into view.
- **`suffix`** is text glued after the number, e.g. `"+"`, `"k"`, `"%"`.
- **`label`** is the caption underneath.

---

## 5) About section

```js
about: {
  heading: "About Me",
  paragraphs: [
    "First paragraph about you...",
    "Second paragraph..."
  ],
  facts: [
    { label: "Based in",  value: "Your City" },
    { label: "Focus",     value: "Web & Design" },
    { label: "Currently", value: "Open to work" },
    { label: "Fun fact",  value: "I cook a mean ramen" }
  ]
},
```

- **`paragraphs`** → add as many `"..."` lines as you want (comma between each).
- **`facts`** → the small info chips. Each is `{ label, value }`.

---

## 6) Skills

Skills are grouped into categories. Each skill has a `level` from 0 to 100 that
sets how full its bar is.

```js
skills: [
  {
    category: "Development",
    items: [
      { name: "JavaScript", level: 90 },
      { name: "HTML & CSS", level: 95 }
    ]
  },
  {
    category: "Beyond the Screen",
    items: [
      { name: "Chess Strategy", level: 88 },
      { name: "Cooking",        level: 70 }
    ]
  }
],
```

- **Add a skill:** copy a `{ name, level }` line inside an `items: [ ]`.
- **Add a whole category:** copy one `{ category, items: [...] }` block.

---

## 7) Projects

Your main portfolio work.

```js
projects: [
  {
    title: "Project One",
    description: "A short, punchy description of what it does.",
    tags: ["React", "API", "Design"],
    image: "",                       // optional cover image; "" = gradient cover
    link: "https://example.com",     // live link; "" hides the "Live" button
    repo: "https://github.com/...",  // source code; "" hides the "Code" button
    featured: true                   // true = big wide card (use for your best)
  },
  // ... copy the block above to add more projects ...
],
```

- **`tags`** → the little labels; add/remove inside `[ ]`, each in `"quotes"`.
- **`image`** → to add a cover, upload it to `assets/` and write
  `image: "assets/project-one.jpg"`. Leave `""` for an auto gradient.
- **`featured: true`** makes the card span the full width. Use it for 1–2 best
  projects; keep the rest `false`.

---

## 8) Experience / timeline

The vertical "road so far" timeline. Set it to `experience: []` to hide the
whole section.

```js
experience: [
  {
    date: "2024 — Now",
    title: "Freelance Developer",
    place: "Self-employed",
    description: "What you did here."
  },
  // ... copy to add more steps (newest at the top) ...
],
```

---

## 9) Documentation tab (achievements)

This is your **trophy shelf** — the second tab. Wins, chess elo, cooking,
certificates, personal records.

**First, the filter buttons** at the top of that tab:

```js
achievementFilters: ["All", "Competitions", "Games", "Culinary", "Academic", "Personal"],
```

- Keep `"All"` first. Add/rename the rest to your own categories.
- ⚠️ Each achievement's `category` **must exactly match** one of these words
  (capital letters matter: `"Games"` ≠ `"games"`).

**Then, the achievements themselves:**

```js
achievements: [
  {
    title: "1st Place — Regional Hackathon",
    category: "Competitions",            // must match a word in achievementFilters
    date: "Mar 2025",
    icon: "trophy",                      // see the icon list below
    metric: { value: "1st", label: "Place" },   // the big highlighted number
    description: "What you achieved, in a sentence.",
    image: "",                           // optional photo (trophy, dish, cert...)
    link: ""                             // optional "View proof" link
  },
  {
    title: "Chess Rating Milestone",
    category: "Games",
    date: "2025",
    icon: "chess",
    metric: { value: "1500", label: "Elo" },
    description: "Crossed 1500 Elo through daily tactics.",
    image: "",
    link: "https://chess.com/member/yourname"
  },
  // ... copy a block to add more achievements ...
],
```

- **`metric`** is the big coloured highlight, like `{ value: "1500", label: "Elo" }`
  or `{ value: "1st", label: "Place" }`. To hide it, write `metric: { value: "", label: "" }`.
- **`icon`** → pick from the achievement icons below.
- **`link`** → e.g. your chess.com profile, a certificate, an article. `""` hides it.

---

## 🎨 Icon names you can use

Type these exact words (lowercase, in quotes).

**For `socials` (the `icon:` field):**
`github`, `linkedin`, `twitter`, `instagram`, `youtube`, `dribbble`, `mail`

**For `achievements` (the `icon:` field):**
`trophy`, `chess`, `cooking`, `medal`, `star`, `book`, `target`, `music`, `camera`

> Used a name that isn't on the list? It safely falls back to a star — nothing
> breaks.

---

## 10) Contact section

```js
contact: {
  heading: "Let's build something",
  text: "Got a project or idea? My inbox is always open.",
  buttonLabel: "Say hello"
},

footerNote: "Designed & built with care."
```

The contact button automatically emails the address you set in `email` at the
top. The year in the footer updates itself.

---

## 💾 Saving your changes

**On GitHub (web):** after editing, scroll down and click the green
**Commit changes** button. Your site/repo updates within seconds.

**On your computer:** save the file, then in the `portfolio` folder run:
```bash
git add .
git commit -m "Update my content"
git push
```

---

## 🆘 Help! The page went blank

99% of the time this means a **comma, quote, or bracket** got deleted by
accident. Fix it like this:

- **On GitHub:** open the file's history (the 🕘 clock icon on the file), find the
  last version that worked, and copy it back — or just undo your edit.
- **In your browser/computer:** press **Ctrl+Z** to undo until it works again.
- Common culprits: a missing comma `,` at the end of a line, a deleted `"`
  quote, or a removed `}` / `]` bracket. Compare your block to a neighbouring
  one that still works.

You can't permanently break anything — every old version is saved in GitHub's
history.

---

## 🎨 Changing the colors (bonus)

This is the **only** thing not in `data.js`. Open **`styles.css`** and edit the
few lines at the very top under `:root`:

```css
--accent-1: #6366f1;     /* main colour (indigo)  */
--accent-2: #22d3ee;     /* second colour (cyan)  */
--accent-warm: #f59e0b;  /* achievements colour (amber) */
```

Replace the `#......` hex codes with any colours you like (grab codes from
[coolors.co](https://coolors.co) or Google "color picker"). The whole site
re-themes automatically. There's also a 🌙/☀️ light-dark toggle in the top-right.

---

Happy editing! Everything is recoverable, so experiment freely. 🚀
