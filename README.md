# 🌱 moringa-project

![Vue.js](https://img.shields.io/badge/Vue.js-3.x-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-Latest-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)
![Beginner Friendly](https://img.shields.io/badge/Beginner-Friendly-brightgreen?style=for-the-badge)

> **A beginner-friendly Vue.js starter project powered by Generative AI guidance.**
> Learn Vue.js from scratch with step-by-step AI-assisted setup, a working multi-page demo app, and practical troubleshooting tips.

---

## 📖 Table of Contents

- [Project Overview](#-project-overview)
- [Features](#-features)
- [Prerequisites](#-prerequisites)
- [Installation & Setup](#-installation--setup)
- [Usage Guide](#-usage-guide)
- [Project Structure](#-project-structure)
- [Configuration Options](#-configuration-options)
- [AI Prompts Used](#-ai-prompts-used)
- [Troubleshooting](#-troubleshooting)
- [Beginner Checklist](#-beginner-checklist)
- [Helpful Resources](#-helpful-resources)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌟 Project Overview

**moringa-project** is a learning-focused Vue.js starter built for complete beginners. It was created with the help of Generative AI tools (like ChatGPT or Claude) to guide setup, explain concepts, and debug issues in plain English.

The project demonstrates:

- How to scaffold a Vue.js app using **Vite**
- How to navigate between pages using **Vue Router**
- Core Vue concepts: **data binding**, **reactivity**, **events**, **v-model**, and **conditional rendering**
- How to use AI prompts to accelerate your learning journey

Whether you're a student, a career-changer, or just curious about frontend development — this project is your launchpad. 🚀

---

## ✨ Features

- ✅ **Step-by-step setup guide** — from zero to running app in minutes
- ✅ **AI-assisted learning** — includes ready-to-use prompts for every learning stage
- ✅ **Multi-page demo app** — see routing in action across 6 example pages
- ✅ **Core Vue concepts demonstrated** — data binding, events, v-model, conditions
- ✅ **Beginner-friendly code** — every file is commented and explained
- ✅ **Troubleshooting guide** — common errors and their fixes
- ✅ **Beginner checklist** — before you debug, check the basics!
- ✅ **Component-based structure** — learn best practices from day one

---

## 🔧 Prerequisites

Before you begin, make sure you have the following installed:

| Tool | Version | Purpose |
|------|---------|---------|
| [VS Code](https://code.visualstudio.com/) | Latest | Code editor |
| [Node.js](https://nodejs.org/en/download) | 18+ | JavaScript runtime |
| npm | Comes with Node | Package manager |
| [Git Bash](https://gitforwindows.org/) | Latest | Terminal (Windows) |

> 💡 **Tip:** If you're on Mac/Linux, you can use the built-in Terminal instead of Git Bash.

---

## 🚀 Installation & Setup

Follow these steps carefully. Each step builds on the previous one.

---

### Step 1: Install a Code Editor (VS Code)

1. Go to [https://code.visualstudio.com/](https://code.visualstudio.com/)
2. Click **"Download for Windows"**
3. Run the installer
4. Accept all defaults
5. ✅ Check **"Add to PATH"** during installation — this is important!

---

### Step 2: Install Node.js

1. Download from: [https://nodejs.org/en/download](https://nodejs.org/en/download)
2. Run the downloaded installer
3. Click **"Next"** on the welcome screen
4. Accept the license agreement → Click **"Next"**
5. Choose installation location (leave default: `C:\Program Files\nodejs\`) → Click **"Next"**
6. Custom Setup — Leave all defaults selected → Click **"Next"**
7. Tools for Native Modules — Check the box: **"Automatically install the necessary tools"** → Click **"Next"**
8. Click **"Install"**
9. Click **"Finish"**

**Verify installation** — open Git Bash and run:

```bash
node -v
npm -v
```

Expected output (versions may differ):
```
v20.11.0
10.2.4
```

---

### Step 3: Create Vue App using Vite

Open **Git Bash** or your terminal. Navigate to your desired folder (e.g., Documents):

```bash
cd Documents
npm create vite@latest moringa-project
```

When prompted, select:
- **Framework:** `Vue`
- **Variant:** `JavaScript`

---

### Step 4: Navigate into the Project

```bash
cd moringa-project
```

---

### Step 5: Install Dependencies

```bash
npm install
```

This downloads all required packages into the `node_modules/` folder.

---

### Step 6: Run the Development Server

```bash
npm run dev
```

You should see output like:

```
  VITE v5.x.x  ready in 300ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

Open [http://localhost:5173/](http://localhost:5173/) in your browser. 🎉

---

### Step 7: Verify Installation Success

If you see the default Vite + Vue welcome page in your browser — you're all set!

---

## 📘 Usage Guide

### Running the App

```bash
# Start the development server
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview
```

### Adding a New Page

1. Create a new `.vue` file inside `src/pages/`
2. Add a route in `src/router/index.js`
3. Add a navigation link in `App.vue`

**Example — Creating a new page:**

```vue
<!-- src/pages/MyNewPage.vue -->
<template>
  <div>
    <h1>My New Page</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello from my new page!"
    };
  }
};
</script>
```

**Then register it in `src/router/index.js`:**

```js
import MyNewPage from '../pages/MyNewPage.vue';

const routes = [
  // ...existing routes
  { path: '/my-new-page', component: MyNewPage }
];
```

### Demo Pages Included

| Page | File | What it demonstrates |
|------|------|---------------------|
| Hello | `Hello.vue` | Basic template rendering |
| Show Data | `ShowData.vue` | Data binding with `{{ }}` |
| Button Click | `Button.vue` | Events with `@click` & reactivity |
| Text Input | `TextInput.vue` | Two-way binding with `v-model` |
| Conditions | `MyConditions.vue` | Conditional rendering with `v-if / v-else` |
| Complete App | `CompleteSimpleApp.vue` | All concepts combined |

---

## 📁 Project Structure

After following the setup and adding the demo pages, your project looks like this:

```
moringa-project/
├── node_modules/           ←  Installed packages (don't touch!)
├── public/                 ←  Static files (images, fonts)
├── src/                    ←  YOUR CODE GOES HERE!
│   ├── assets/             ←  Images, styles, media
│   ├── components/         ←  Reusable Vue components
│   ├── pages/              ←  Page-level components (views)
│   │   ├── Hello.vue
│   │   ├── ShowData.vue
│   │   ├── Button.vue
│   │   ├── TextInput.vue
│   │   ├── MyConditions.vue
│   │   └── CompleteSimpleApp.vue
│   ├── router/
│   │   └── index.js        ←  Routing configuration (edit this!)
│   ├── App.vue             ←  Root component (navigation lives here)
│   └── main.js             ←  Application entry point
├── .eslintrc.cjs           ←  Code quality rules
├── .gitignore              ←  Files Git should ignore
├── .prettierrc.json        ←  Code formatting rules
├── index.html              ←  HTML entry point
├── package.json            ←  Project info & dependencies
├── package-lock.json       ←  Locked dependency versions
├── README.md               ←  Project documentation (this file!)
└── vite.config.js          ←  Build tool configuration
```

### What Each File Does

| File/Folder | Purpose |
|-------------|---------|
| `src/` | All your source code lives here |
| `src/App.vue` | The root component — think of it as the "frame" of your app |
| `src/main.js` | Boots the app — the very first file Vue reads |
| `src/pages/` | Each file here is a full page/screen |
| `src/components/` | Smaller reusable pieces (buttons, cards, etc.) |
| `src/router/index.js` | Maps URLs to page components |
| `package.json` | Lists your project's dependencies and scripts |
| `vite.config.js` | Configures the Vite build tool |
| `index.html` | The single HTML file your app lives inside |
| `node_modules/` | Downloaded packages — never edit this manually |

---

## ⚙️ Configuration Options

### Vite Config (`vite.config.js`)

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,      // Change dev server port (default: 5173)
    open: true       // Auto-open browser on npm run dev
  }
})
```

### Router Config (`src/router/index.js`)

```js
import { createRouter, createWebHistory } from 'vue-router'
import Hello from '../pages/Hello.vue'

const routes = [
  { path: '/', component: Hello },
  // Add new routes here
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
```

### ESLint (`eslint.config.js` or `.eslintrc.cjs`)

The default config uses Vue's recommended rules. You can disable specific rules:

```js
rules: {
  'vue/no-unused-vars': 'warn',   // Warn instead of error
  'no-console': 'off'             // Allow console.log
}
```

---

## 🤖 AI Prompts Used

This project was built using Generative AI tools. Below are the exact prompts used — copy and paste them into ChatGPT, Claude, or any AI assistant to get the same guidance.

---

### Prompt 1 — Initial Setup & Environment Configuration

> **Use when:** Starting with any new framework, library, or tool
>
> **Expected Output:** Complete setup guide with commands

```
I'm a beginner developer learning vue.js. Please provide:
1. A step-by-step guide to set up vue.js on Windows
2. Required dependencies and how to install them
3. Recommended configuration options for a beginner
4. How to verify the installation was successful
5. Common installation issues and their solutions
Include terminal commands I should run and expected output for each step.
```

**Follow-up prompt:**
```
The installation failed at step X with error Y. How do I fix this?
```

---

### Prompt 2 — Architecture & Project Structure Understanding

> **Use when:** After setup, before writing code
>
> **Expected Output:** Clear explanation of project anatomy

```
I've just set up a vue.js project. Help me understand:
1. What each folder and file in the project structure does
2. The purpose of configuration files (package.json, config files, etc.)
3. Where I should write my application code
4. How the build/compilation process works
5. Best practices for organizing my code as the project grows
Use analogies where helpful and explain in simple terms.
```

**Follow-up prompt:**
```
Where should I put [specific type of file/code]?
```

---

### Prompt 3 — Core Concepts Deep Dive

> **Use when:** Learning fundamental concepts (e.g., reactivity, state, props, hooks)
>
> **Expected Output:** Conceptual explanation with code examples

```
I am a beginner developer in vue.js:
1. Show me a simple, minimal example easy to understand for a beginner with inline comments
2. Explain the syntax/pattern line by line
3. Common mistakes beginners make
Use simple analogies, visual diagrams (ASCII art if needed), and provide code examples with inline comments.
```

---

### Prompt 4 — Documentation and README

> **Use when:** You need to document your project
>
> **Expected Output:** A complete, professional README.md

```
Generate a comprehensive README.md for my moringa-project:
Description: This project aims to help beginners quickly understand and start using Vue.js by leveraging Generative AI tools. It provides step-by-step setup instructions, a minimal working project, and practical troubleshooting tips.
Tech Stack: vuejs
Target Audience: Beginners
Include:
1. Project overview with badges
2. Features list
3. Prerequisites and installation
4. Usage guide with examples
5. Project structure explanation
6. Configuration options
7. Troubleshooting
8. Contributing guidelines
9. License information
Make it beginner-friendly and professionally formatted.
```

---

## 🛠 Troubleshooting

### ❌ `npm: command not found`

Node.js is not installed or not added to PATH.

**Fix:** Reinstall Node.js and make sure to check **"Add to PATH"** during installation. Then restart your terminal.

---

### ❌ `npm run dev` fails with `Cannot find module`

Dependencies aren't installed yet.

**Fix:**
```bash
npm install
npm run dev
```

---

### ❌ Port 5173 already in use

Another process is using the port.

**Fix:** Either stop the other process, or change the port in `vite.config.js`:
```js
server: { port: 3001 }
```

---

### ❌ Blank white page in the browser

Usually a JavaScript error. Check the browser console.

**Fix:**
1. Press `F12` to open DevTools
2. Click the **Console** tab
3. Read the red error message — it tells you what's wrong

---

### ❌ Component not showing up

You probably forgot to register the route or import the component.

**Fix checklist:**
- Did you import the component in `router/index.js`?
- Did you add `{ path: '/my-page', component: MyPage }` to the routes array?
- Did you add `<router-view />` in `App.vue`?
- Did you save all files?

---

### ❌ Changes not reflecting in the browser

**Fix:**
- Make sure `npm run dev` is still running in your terminal
- Hard refresh the browser: `Ctrl + Shift + R`
- Check for errors in the terminal output

---

### ❌ `v-model` not updating

Likely a missing `data()` property.

**Fix:** Make sure the variable you're using in `v-model` is declared in `data()`:
```js
data() {
  return {
    myInput: ''   // ← must be declared here
  }
}
```

---

## ✅ Beginner Checklist

Before asking "Why doesn't it work?" — run through this checklist:

- [ ] Ran `npm install`
- [ ] Entered the project folder (`cd moringa-project`)
- [ ] `npm run dev` running without errors in terminal
- [ ] Checked browser console (`F12`) for red errors
- [ ] Correct file paths used (`../` vs `./`)
- [ ] All components are imported at the top of the file
- [ ] File names match exactly (Vue is **case-sensitive** — `MyPage.vue` ≠ `mypage.vue`)
- [ ] Added `<router-view />` in `App.vue`
- [ ] Saved all open files before refreshing

---

## 📚 Helpful Resources

| Resource | Link |
|----------|------|
| Vue.js Official Tutorial | [https://vuejs.org/tutorial/](https://vuejs.org/tutorial/) |
| Vue.js Official Guide | [https://vuejs.org/guide/](https://vuejs.org/guide/) |
| Vite Documentation | [https://vitejs.dev/](https://vitejs.dev/) |
| Vue Router Guide | [https://router.vuejs.org/](https://router.vuejs.org/) |
| VS Code Vue Setup | [https://vuejs.org/guide/scaling-up/tooling.html](https://vuejs.org/guide/scaling-up/tooling.html) |
| Node.js Download | [https://nodejs.org/en/download](https://nodejs.org/en/download) |
| VS Code Download | [https://code.visualstudio.com/](https://code.visualstudio.com/) |

---

## 🤝 Contributing

Contributions are welcome — especially from fellow beginners who found something confusing and want to help others!

### How to Contribute

1. **Fork** this repository
2. **Create** a new branch:
   ```bash
   git checkout -b feature/my-improvement
   ```
3. **Make** your changes
4. **Commit** with a clear message:
   ```bash
   git commit -m "Add: explanation for v-model in README"
   ```
5. **Push** your branch:
   ```bash
   git push origin feature/my-improvement
   ```
6. Open a **Pull Request** on GitHub

### Contribution Ideas

- Add more example pages (e.g., a To-Do list, a counter app)
- Improve explanations or fix typos in the README
- Add more troubleshooting cases
- Translate the README to another language
- Add screenshots or a demo GIF

### Code Style

- Use clear, readable variable names
- Add comments to explain *why*, not just *what*
- Keep components small and focused on one thing
- Follow the existing file/folder naming conventions

---

## 📄 License

This project is licensed under the **MIT License**.

```
MIT License

Copyright (c) 2025 moringa-project contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
```

---

## 👨‍💻 Author

**Martha Wambui**

- GitHub: [@marz-w](https://github.com/marz-w)
- LinkedIn: [Martha Wambui](https://www.linkedin.com/in/martha-wambui-4293873b5?utm_source=share_via&utm_content=profile&utm_medium=member_android)
- Email: marthamichellewambui@gmail.com

---

## 🙏 Acknowledgments

This project was created as part of the **Moringa School AI Capstone Project**. Special thanks to:

- **Moringa School** - For providing the learning framework and AI tools
- **Vue.js Team** - For creating an amazing framework with excellent documentation
- **Vite Team** - For the blazing-fast build tool
- **Claude AI** - For assistance in learning and building this project
- **The Vue.js Community** - For countless tutorials, examples, and support

---

## 🌟 Show Your Support

If this project helped you learn Vue.js, please consider:

- ⭐ **Starring this repository**
- 🍴 **Forking it** to create your own version
- 📢 **Sharing it** with other beginners
- 💬 **Providing feedback** via issues or discussions

---

## 🗺️ Roadmap

Future improvements planned:

- [ ] Add more interactive examples
- [ ] Include Vue Router demonstration
- [ ] Add state management with Pinia
- [ ] Create video tutorials
- [ ] Add unit tests with Vitest
- [ ] Deploy to GitHub Pages for live demo
- [ ] Add dark mode toggle
- [ ] Create mobile-optimized version

---

## 📊 Project Stats

![GitHub repo size](https://img.shields.io/github/repo-size/marz-w/moringa-project)
![GitHub last commit](https://img.shields.io/github/last-commit/marz-w/moringa-project)
![GitHub issues](https://img.shields.io/github/issues/marz-w/moringa-project)

---

## 💡 Tips for Beginners

1. **Start Small** - Don't try to understand everything at once
2. **Code Along** - Type the code yourself, don't just copy-paste
3. **Break Things** - Experiment! You can always undo changes
4. **Read Error Messages** - They usually tell you exactly what's wrong
5. **Use the Docs** - Vue's official documentation is excellent
6. **Join the Community** - Ask questions, help others
7. **Build Projects** - Best way to learn is by doing

---

## 🎓 What You'll Learn

By completing this project, you will understand:

- ✅ Vue.js reactivity system (`ref()`, reactive data)
- ✅ Template syntax and interpolation (`{{ }}`)
- ✅ Directives (`v-if`, `v-for`, `v-model`, `@click`)
- ✅ Event handling and methods
- ✅ Component structure (script, template, style)
- ✅ Two-way data binding
- ✅ Conditional rendering
- ✅ Modern JavaScript (ES6+)
- ✅ Project setup with Vite
- ✅ Git and GitHub workflows

---

<div align="center">

**Happy Coding! 🚀**

Built with ❤️ by Martha Wambui | Moringa School AI Capstone 2026

[⬆ Back to Top](#vuejs-beginners-toolkit-)

</div>