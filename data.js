/* =======================================================================
   YOUR PORTFOLIO CONTENT  —  EDIT THIS FILE ONLY
   =======================================================================
   Everything you see on the website is controlled from this one file.
   To add a project, skill, or achievement, just copy an existing block
   inside the [ square brackets ] and change the text. Keep the commas.

   Quotes "..." hold text. Items in [ ] are lists separated by commas.
   You do NOT need to touch index.html, styles.css, or app.js.
   ======================================================================= */

window.PORTFOLIO_DATA = {

  /* ---------------------------------------------------------------------
     1. BASIC INFO  — who you are
     --------------------------------------------------------------------- */
  name: "Alviadi Fauzan",
  initials: "AF",                       // fallback shown if no photo is set
  role: "Student",
  location: "Jakarta, Indonesia",
  email: "your.name@gmail.com",
  available: true,                      // shows the green "available" dot

  // Your cover photo. Put your image in the "assets" folder and write its
  // file name here, e.g. "assets/profile.jpg". Leave "" to show initials.
  profilePhoto: "assets/profile.jpg",

  // Optional: link to your resume/CV (Google Drive, PDF, etc.). "" hides it.
  resumeUrl: "",

  // Words that rotate in the hero headline. Add or remove freely.
  rotatingWords: ["Student", "Chemical & Energy Researcher", "Debater", "MUN Delagate"],

  // One or two punchy sentences under your name.
  tagline: "Research is to see what everybody else has seen, and to think what nobody else has thought." 


  /* ---------------------------------------------------------------------
     2. SOCIAL LINKS
     icon options: "github", "linkedin", "twitter", "instagram",
                   "youtube", "dribbble", "mail"
     --------------------------------------------------------------------- */
  socials: [
    { icon: "github",    label: "GitHub",    url: "https://github.com/yourname" },
    { icon: "linkedin",  label: "LinkedIn",  url: "https://linkedin.com/in/yourname" },
    { icon: "instagram", label: "Instagram", url: "https://instagram.com/yourname" },
    { icon: "mail",      label: "Email",     url: "mailto:you@example.com" }
  ],


  /* ---------------------------------------------------------------------
     3. STATS  — the big animated numbers near the top
     --------------------------------------------------------------------- */
  stats: [
    { value: 20,  suffix: "+", label: "Projects Built" },
    { value: 3,   suffix: "",  label: "Years Experience" },
    { value: 1500, suffix: "", label: "Chess Elo" },
    { value: 12,  suffix: "+", label: "Awards & Wins" }
  ],


  /* ---------------------------------------------------------------------
     4. ABOUT
     --------------------------------------------------------------------- */
  about: {
    heading: "About Me",
    paragraphs: [
      "Hey — I'm a curious builder who loves making things that look great and actually work. Whether it's code, a design, or a chessboard, I care about the details.",
      "When I'm not at my keyboard you'll find me experimenting in the kitchen, entering competitions, or chasing the next personal best. This site is part portfolio, part trophy shelf."
    ],
    // Small fact chips shown beside the about text.
    facts: [
      { label: "Based in",   value: "Jakarta" },
      { label: "Focus",      value: "Research, Public Speaking, & Physics" },
      { label: "Currently",  value: "On the Grind" },
      { label: "Goal",   value: "To Never Become Average" }
    ]
  },


  /* ---------------------------------------------------------------------
     5. SKILLS  — grouped into categories.
     "level" is 0–100 and controls the bar width.
     --------------------------------------------------------------------- */
  skills: [
    {
      category: "Development",
      items: [
        { name: "JavaScript", level: 90 },
        { name: "HTML & CSS", level: 95 },
        { name: "React",      level: 80 },
        { name: "Python",     level: 75 }
      ]
    },
    {
      category: "Design & Tools",
      items: [
        { name: "UI / UX Design", level: 85 },
        { name: "Figma",          level: 80 },
        { name: "Git",            level: 80 }
      ]
    },
    {
      category: "Beyond the Screen",
      items: [
        { name: "Chess Strategy", level: 88 },
        { name: "Cooking",        level: 70 },
        { name: "Public Speaking", level: 65 }
      ]
    }
  ],


  /* ---------------------------------------------------------------------
     6. PROJECTS  — your main portfolio work.
     - "featured: true" makes a card span wider (use for your best 1–2).
     - "image" is optional (path or URL). Leave "" for a gradient cover.
     - "link" / "repo" buttons hide automatically when left as "".
     --------------------------------------------------------------------- */
  projects: [
    {
      title: "Project One",
      description: "A short, punchy description of what this project does and why it's cool. One or two sentences is perfect.",
      tags: ["React", "API", "Design"],
      image: "",
      link: "https://example.com",
      repo: "https://github.com/yourname/project-one",
      featured: true
    },
    {
      title: "Project Two",
      description: "Describe the problem you solved and the result. Mention any standout numbers if you have them.",
      tags: ["JavaScript", "CSS"],
      image: "",
      link: "",
      repo: "https://github.com/yourname/project-two",
      featured: false
    },
    {
      title: "Project Three",
      description: "Another great piece of work. Keep descriptions consistent in length so the grid looks tidy.",
      tags: ["Python", "Automation"],
      image: "",
      link: "https://example.com",
      repo: "",
      featured: false
    }
  ],


  /* ---------------------------------------------------------------------
     7. EXPERIENCE / JOURNEY  — vertical timeline. Set to [] to hide.
     --------------------------------------------------------------------- */
  experience: [
    {
      date: "2024 — Now",
      title: "Freelance Developer",
      place: "Self-employed",
      description: "Building websites and apps for clients while leveling up my craft."
    },
    {
      date: "2023",
      title: "Started My Journey",
      place: "Self-taught",
      description: "Fell in love with building things for the web and never looked back."
    }
  ],


  /* =====================================================================
     8. PORTFOLIO DOCUMENTATION  — the SECOND TAB.
     This is your trophy shelf: competition wins, chess elo, cooking,
     certificates, personal records — anything worth showing off.

     - "category" must match one of the words in "achievementFilters".
     - "metric" is the big highlighted number/value (optional — use "" to hide).
     - "image" optional (a photo of the trophy, dish, certificate...).
     - icon options: "trophy", "chess", "cooking", "medal", "star",
                     "book", "code", "target", "music", "camera"
     ===================================================================== */
  achievementFilters: ["All", "Competitions", "Games", "Culinary", "Academic", "Personal"],

  achievements: [
    {
      title: "1st Place — Regional Hackathon",
      category: "Competitions",
      date: "Mar 2025",
      icon: "trophy",
      metric: { value: "1st", label: "Place" },
      description: "Built a working prototype in 24 hours and took home first place out of 40 teams.",
      image: "",
      link: ""
    },
    {
      title: "Chess Rating Milestone",
      category: "Games",
      date: "2025",
      icon: "chess",
      metric: { value: "1500", label: "Elo" },
      description: "Crossed 1500 Elo on chess.com through daily tactics and endgame study.",
      image: "",
      link: "https://chess.com/member/yourname"
    },
    {
      title: "Homemade Tonkotsu Ramen",
      category: "Culinary",
      date: "2024",
      icon: "cooking",
      metric: { value: "18h", label: "Broth" },
      description: "Simmered a pork broth for 18 hours from scratch. Worth every minute.",
      image: "",
      link: ""
    },
    {
      title: "Dean's List",
      category: "Academic",
      date: "2024",
      icon: "book",
      metric: { value: "Top 5%", label: "of class" },
      description: "Recognised for academic performance two semesters running.",
      image: "",
      link: ""
    },
    {
      title: "Ran My First 10K",
      category: "Personal",
      date: "2025",
      icon: "target",
      metric: { value: "52:30", label: "Finish" },
      description: "Went from couch to 10K in three months. A goal I'm genuinely proud of.",
      image: "",
      link: ""
    },
    {
      title: "Speedcubing PB",
      category: "Personal",
      date: "2024",
      icon: "star",
      metric: { value: "14.2s", label: "3x3 solve" },
      description: "Shaved my Rubik's cube solve down to a sub-15 second average.",
      image: "",
      link: ""
    }
  ],


  /* ---------------------------------------------------------------------
     9. CONTACT  — the closing call-to-action
     --------------------------------------------------------------------- */
  contact: {
    heading: "Let's network a bit",
    text: "Got an idea, or just wanna say hi? My inbox is always open",
    buttonLabel: "Say hello"
  },

  // Shown in the footer. The year updates automatically.
  footerNote: "Never be satisfied with mediocrity"
};
