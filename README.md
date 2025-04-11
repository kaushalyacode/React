# Learn React Practical
## L0 : Create React App

## 📦 Create the App

To create this project, run the following command:
```bash
npm create vite@latest pegusas -- --template react
```

### 🔍 Command Breakdown
- npm create vite@latest: npm create is similar to npm init, but it's used for scaffolding a project using a specific starter/template tool.

- vite@latest ensures you're using the latest version of the Vite project creation tool.

  This will download and run the latest Vite project scaffolder.

- pegusas: Name of the project directory that will be created.

- --: Passes the next flags directly to the Vite CLI.

- --template react: tells Vite to use the React template, so it sets up a React-based project (including React, ReactDOM, and default boilerplate).

### What is Vite

> Vite (French word for "quick", pronounced /vit/, like "veet") is a build tool that aims to provide a faster and leaner development experience for modern web projects. It consists of two major parts:

   - A dev server that provides rich feature enhancements over native ES modules, for example extremely fast Hot Module Replacement (HMR).

   - A build command that bundles your code with Rollup, pre-configured to output highly optimized static assets for production.

### Vite is Build tool.
So what is build tools generaly does.

A build tool like Vite helps developers transform and optimize their source code into something a browser can understand and run efficiently.

🛠️ What a Build Tool Typically Does:
1. Transpilation
  Converts newer JavaScript (ES6+) or TypeScript into older JavaScript that all browsers can understand.
  Example: Turns let, const, or arrow functions into compatible code.

2. Bundling
  Combines all your modules (import/export files) into one or a few files.
  This reduces the number of requests the browser has to make (faster loading!).

3. Minification
  Removes whitespace, comments, and shortens variable names to make the file size smaller.
  This helps improve page load speed.

4. Hot Module Replacement (HMR)
  While you're developing, a build tool like Vite can update modules in the browser without a full reload, making development much faster.

5. Asset Optimization
  Compresses images, optimizes fonts, and handles stylesheets (like Sass/SCSS or PostCSS).  
  Can also inline small assets directly into your JavaScript or CSS.

6. Environment Handling
  Supports different builds for development (with debugging) and production (optimized).
  You can use .env files for setting variables.

7. Code Splitting
   Breaks your app into smaller chunks so that only necessary code is loaded when needed.

   ### Next Steps
    ```
      cd pegusas
      npm install
      npm run dev
```

