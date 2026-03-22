# Vue.js Beginner's Toolkit 🚀

[![Vue.js](https://img.shields.io/badge/Vue.js-3.x-4FC08D?style=flat&logo=vue.js&logoColor=white)](https://vuejs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Moringa School](https://img.shields.io/badge/Moringa-AI%20Capstone-orange)](https://moringaschool.com/)

> A beginner-friendly Vue.js project created with Generative AI assistance to help newcomers quickly understand and start building with Vue.js

---

## 📖 Overview

**Vue.js Beginner's Toolkit** is a hands-on learning project designed for developers taking their first steps with Vue.js. This project demonstrates core Vue.js concepts through practical, working examples while leveraging AI-powered learning techniques to accelerate the learning process.

### What Makes This Project Special?

- 🎯 **AI-Powered Learning** - Built using structured prompts and AI assistance
- 🧩 **Practical Examples** - Real, working code you can see and interact with
- 📚 **Comprehensive Documentation** - Every concept explained step-by-step
- 🚀 **Ready to Run** - Clone, install, and start learning immediately
- 🔧 **Troubleshooting Guide** - Common issues and their solutions included

---

## ✨ Features

### Interactive Components

- ✅ **Real-time Greeting System** - Type your name and see instant personalized greetings
- ✅ **Interactive Counter** - Increment, decrement, and reset with visual feedback
- ✅ **Automatic Calculations** - Live math operations that update as data changes
- ✅ **Conditional Rendering** - Color-coded messages based on counter values
- ✅ **Two-Way Data Binding** - Experience Vue's reactive data system in action

### Learning Features

- 📝 **Inline Code Comments** - Every line explained for beginners
- 🎨 **Responsive Design** - Works on desktop, tablet, and mobile
- 🔍 **Clean Code Structure** - Best practices demonstrated throughout
- 💡 **Concept Demonstrations** - Each feature teaches a core Vue.js concept

---

## 🎯 Target Audience

This project is perfect for:

- **Complete Beginners** - New to Vue.js or JavaScript frameworks
- **Career Switchers** - Moving into frontend development
- **Students** - Learning modern web development
- **Bootcamp Participants** - Need practical examples to understand concepts
- **Self-Learners** - Want structured, hands-on Vue.js practice

**Prerequisites Knowledge:**
- Basic HTML & CSS
- JavaScript fundamentals (variables, functions, arrays)
- Familiarity with command line basics

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Vue.js** | 3.x | Progressive JavaScript framework |
| **Vite** | 5.x | Lightning-fast build tool and dev server |
| **JavaScript** | ES6+ | Programming language |
| **HTML5** | - | Markup structure |
| **CSS3** | - | Styling and layout |

### Why These Technologies?

- **Vue.js 3** - Modern, beginner-friendly framework with excellent documentation
- **Vite** - Instant server start, fast hot module replacement
- **Composition API** - Modern Vue.js pattern for better code organization

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

### Required Software

1. **Node.js** (v16.0 or higher)
   - Download: [https://nodejs.org/](https://nodejs.org/)
   - Verify installation: `node --version`

2. **npm** (comes with Node.js)
   - Verify installation: `npm --version`

3. **Code Editor** (recommended)
   - VS Code: [https://code.visualstudio.com/](https://code.visualstudio.com/)
   - WebStorm, Sublime Text, or any editor you prefer

4. **Git** (for cloning the repository)
   - Download: [https://git-scm.com/](https://git-scm.com/)
   - Verify installation: `git --version`

### Recommended VS Code Extensions

- **Volar** - Vue Language Features
- **ESLint** - Code quality
- **Prettier** - Code formatting

---

## 🚀 Installation

Follow these steps to get the project running on your local machine:

### Step 1: Clone the Repository
```bash
git clone https://github.com/marz-w/moringa-project.git
cd moringa-project
```

### Step 2: Install Dependencies
```bash
npm install
```

This will install all required packages (may take 1-2 minutes).

### Step 3: Start the Development Server
```bash
npm run dev
```

You should see output like:
```
  VITE v5.0.11  ready in 523 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

### Step 4: Open in Browser

Navigate to: **http://localhost:5173/**

🎉 **You should see the Vue.js application running!**

---

## 💻 Usage Guide

### Basic Usage

Once the app is running, you can:

1. **Type Your Name** in the input box
   - Watch the greeting update in real-time
   - See the welcome message appear

2. **Use the Counter**
   - Click **"Plus 1"** to increment
   - Click **"Minus 1"** to decrement
   - Click **"Reset"** to return to zero
   - Watch the color-coded messages change

3. **Observe the Math Section**
   - See calculations update automatically
   - Notice how everything stays in sync

### Code Examples

#### Example 1: Understanding Reactivity

Open `src/App.vue` and look at this code:
```javascript
const count = ref(0)  // Creates reactive data
```

In the template:
```vue
<p>{{ count }}</p>  <!-- Automatically updates when count changes -->
```

**Try this:** Change `ref(0)` to `ref(10)` and save. The counter starts at 10!

---

#### Example 2: Event Handling
```javascript
function increment() {
  count.value++  // Updates the value
}
```
```vue
<button @click="increment">Plus 1</button>
<!-- @click triggers the function when button is clicked -->
```

**Try this:** Add a new button that adds 5 instead of 1!

---

#### Example 3: Conditional Rendering
```vue
<p v-if="count < 0">Negative!</p>
<p v-else-if="count === 0">Zero!</p>
<p v-else>Positive!</p>
<!-- Only ONE of these shows at a time -->
```

**Try this:** Change the conditions to show different messages!

---

### Available Commands
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting (check code quality)
npm run lint

# Format code with Prettier
npm run format
```

---

## 📁 Project Structure
```
moringa-project/
├── node_modules/          # Dependencies (auto-generated, don't touch!)
├── public/                # Static assets
│   ├── favicon.svg        # Website icon
│   └── icons.svg          # SVG icons
├── src/                   # Your source code (main folder!)
│   ├── assets/            # Images, styles
│   │   ├── hero.png
│   │   ├── vite.svg
│   │   └── vue.svg
│   ├── components/        # Vue components
│   │   └── HelloWorld.vue # Example component
│   ├── App.vue            # Main application component
│   ├── main.js            # Application entry point
│   └── style.css          # Global styles
├── .gitignore             # Files Git should ignore
├── index.html             # HTML entry point
├── package.json           # Project dependencies and scripts
├── package-lock.json      # Locked dependency versions
├── README.md              # This file!
└── vite.config.js         # Vite configuration
```

### Key Files Explained

| File | Purpose | Should You Edit? |
|------|---------|------------------|
| `src/App.vue` | Main component - your app lives here | ✅ Yes - this is where you code! |
| `src/main.js` | Mounts Vue app to the page | ⚠️ Rarely - only for plugins |
| `package.json` | Lists dependencies | ⚠️ Only to add packages |
| `vite.config.js` | Build tool settings | ⚠️ Rarely - only for advanced config |
| `node_modules/` | Installed packages | ❌ Never - auto-generated |

---

## ⚙️ Configuration Options

### Vite Configuration

The `vite.config.js` file controls how your project is built and served.

**Default configuration:**
```javascript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
```

#### Common Customizations

**Change Port:**
```javascript
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000  // Change from 5173 to 3000
  }
})
```

**Add API Proxy (avoid CORS in development):**
```javascript
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true
      }
    }
  }
})
```

---

### ESLint Configuration

Control code quality rules in `.eslintrc.cjs`:
```javascript
module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended'
  ],
  rules: {
    'vue/multi-word-component-names': 'off',  // Allow single-word component names
    'no-console': 'warn'  // Warn on console.log
  }
}
```

---

### Prettier Configuration

Create `.prettierrc.json` for code formatting:
```json
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "none"
}
```

---

## 🐛 Troubleshooting

### Common Issues and Solutions

#### Issue 1: `npm install` fails

**Error:**
```
npm ERR! code EACCES
npm ERR! syscall access
```

**Solution:**
```bash
# Run as administrator (Windows)
# Right-click terminal → Run as administrator

# Or use npm's built-in fix
npm cache clean --force
npm install
```

---

#### Issue 2: Port 5173 already in use

**Error:**
```
Port 5173 is in use, trying another one...
```

**Solution A:** Use the suggested port (Vite will auto-select)

**Solution B:** Specify different port
```bash
npm run dev -- --port 3000
```

**Solution C:** Kill the process using port 5173
```bash
# Windows
netstat -ano | findstr :5173
taskkill /PID <process_id> /F

# Mac/Linux
lsof -ti:5173 | xargs kill
```

---

#### Issue 3: Changes not appearing in browser

**Solution:**

1. **Hard refresh** - Press `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
2. **Clear browser cache**
3. **Restart dev server**
```bash
   # Press Ctrl+C to stop
   npm run dev  # Start again
```

---

#### Issue 4: `Module not found` errors

**Error:**
```
Error: Cannot find module 'vue'
```

**Solution:**
```bash
# Delete and reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

---

#### Issue 5: ESLint/Prettier conflicts

**Solution:**

Make sure `.prettierrc.json` exists and has:
```json
{
  "semi": false,
  "singleQuote": true
}
```

Update `.eslintrc.cjs`:
```javascript
module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-prettier'  // Add this
  ]
}
```

Then restart VS Code.

---

#### Issue 6: Git push rejected

**Error:**
```
! [rejected] main -> main (fetch first)
```

**Solution:**
```bash
# Pull remote changes first
git pull origin main --allow-unrelated-histories

# Then push
git push -u origin main
```

---

### Still Having Issues?

1. **Check Node.js version:** `node --version` (must be v16+)
2. **Check npm version:** `npm --version`
3. **Try deleting `node_modules/`** and reinstalling
4. **Search GitHub Issues:** [Vue.js Issues](https://github.com/vuejs/core/issues)
5. **Ask on Stack Overflow:** Tag with `vue.js` and `vite`

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

### How to Contribute

1. **Fork the repository**
   - Click "Fork" button on GitHub

2. **Clone your fork**
```bash
   git clone https://github.com/YOUR-USERNAME/moringa-project.git
   cd moringa-project
```

3. **Create a feature branch**
```bash
   git checkout -b feature/amazing-feature
```

4. **Make your changes**
   - Add your code
   - Test thoroughly
   - Follow existing code style

5. **Commit your changes**
```bash
   git add .
   git commit -m "Add some amazing feature"
```

6. **Push to your fork**
```bash
   git push origin feature/amazing-feature
```

7. **Open a Pull Request**
   - Go to original repository
   - Click "New Pull Request"
   - Describe your changes

### Contribution Guidelines

- ✅ Write clear, commented code
- ✅ Test your changes before submitting
- ✅ Follow Vue.js style guide
- ✅ Update documentation if needed
- ✅ Be respectful and constructive

---

## 📚 Learning Resources

### Official Documentation

- [Vue.js Official Guide](https://vuejs.org/guide/)
- [Vue.js Tutorial](https://vuejs.org/tutorial/)
- [Vite Documentation](https://vitejs.dev/)

### Video Tutorials

- [Vue Mastery - Free Courses](https://www.vuemastery.com/courses/)
- [Vue School](https://vueschool.io/)
- [Net Ninja Vue 3 Tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1)

### Interactive Learning

- [Vue.js Playground](https://play.vuejs.org/)
- [Exercism Vue Track](https://exercism.org/tracks/javascript)

### Community

- [Vue.js Discord](https://discord.com/invite/vue)
- [Vue.js Forum](https://forum.vuejs.org/)
- [r/vuejs on Reddit](https://www.reddit.com/r/vuejs/)

---

## 📝 License

This project is licensed under the **MIT License** - see below for details:
```
MIT License

Copyright (c) 2026 [Your Name]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 👨‍💻 Author

**Martha Wambui**

- GitHub: [@marz-w]https://github.com/marz-w
- LinkedIn: https://www.linkedin.com/in/martha-wambui-4293873b5?utm_source=share_via&utm_content=profile&utm_medium=member_android(#)
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

Built with ❤️ by [Your Name] | Moringa School AI Capstone 2026

[⬆ Back to Top](#vuejs-beginners-toolkit-)

</div>