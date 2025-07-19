# ⚡ LazyFetch – Lightweight Fetch Utility

## 🧠 Description

**LazyFetch** is a zero‑config JavaScript/TypeScript utility that allows you to fetch public APIs with just one line of code. Designed to work in both **vanilla** projects and modern frameworks like **React**, its goal is to simplify API consumption through a consistent and extensible API.

With LazyFetch, you can either inject data directly into the DOM or handle it programmatically using its `render()` and `generic()` methods — all without the need for external libraries or complex setups.

> ⚠️ Ideal for beginners looking to consume APIs effortlessly, or professionals who need to prototype quickly.

---

## 🖼️ Demo



![Demo](./public/GIF.gif)


---

## 🚀 Features

- 🔌 **Zero configuration:** just include the script and start using it.
- ⚙️ **Predefined endpoints:** define your APIs once in a simple config.
- 🧩 **Framework-agnostic:** works in JS, TS, React, Vue, and more.
- 📦 **Lightweight and fast:** no external dependencies.
- 🧠 **Full TypeScript support** for seamless integration in TSX.

---

## 🔧 Usage Example

```html
<script src="https://lazy-fetch.vercel.app/lazyfetch.js"></script>

<button onclick="lazyFetch.render('Advice', '#result')">Get Advice</button>
<div id="result"><p></p></div>

```

---

## 🧠 What I Learned

- 🛠️ **Designed** a library from scratch with no external dependencies.  
- ⚙️ **Implemented** dynamic data extraction using dot notation paths.  
- 🔁 **Built** a modular structure for consistent API usage across vanilla and React.  
- 💡 **Deployed** the tool to the web with Vercel and made it CDN-accessible.  
- 🎯 **Used** advanced TypeScript features to create generic, typed functions for use in TSX environments.


---

## 📦 Tech Stack




### 🧠 Languages & Core Technologies    
[![Tech Stack](https://skillicons.dev/icons?i=ts,react,styledcomponents)](https://skillicons.dev) <img src="https://cdn.simpleicons.org/reactrouter/CA4245" height="24">  **REACT ROUTER**

### 🧩 Core of the Library  
[![Tech Stack](https://skillicons.dev/icons?i=js)](https://skillicons.dev)


### 🧰  Development Tools 
[![Tech Stack](https://skillicons.dev/icons?i=vite,vscode)](https://skillicons.dev)

### 🚀 Deployment & Backend  
[![Tech Stack](https://skillicons.dev/icons?i=vercel,firebase)](https://skillicons.dev)

### 🎨 Design and Icon 
[![Tech Stack](https://skillicons.dev/icons?i=figma,ai)](https://skillicons.dev)

### 🔄 Version Control   
[![Tech Stack](https://skillicons.dev/icons?i=git,github)](https://skillicons.dev)





---

## 📁 Project Structure

```text
📦 lazyfetch
┣ 📂 public                    
┃ ┗ 📂 lib                      # Core library code
┃   ┣ 📜 lazyfetch.js           # Main library logic
┃   ┗ 📜 libTranslator.js       # Translations and utilities
┣ 📂 src                       
┃ ┗ 📜 main.tsx           
┣ 📜 index.html               
┣ 📜 vite.config.ts             
┗ 📜 tsconfig.json      

```

---
## 📌 Limitations (Current)

- Only GET requests supported by default
- No caching mechanism built-in
- Works with JSON responses only
- Endpoints must be defined ahead of use
---
## 📍 Roadmap (Coming Soon)

- Custom headers and authentication token support
- Retry logic with exponential backoff
- `useLazyFetch` – a React hook for elegant API handling
---
## 🔗 Useful Links

- 🌐 [Visit the web](https://lazy-fetch.vercel.app)
- 📺 [LazyFetch YouTube Channel](https://www.youtube.com/@LazyFetch)

---
## ✨ About the Project

This project was developed as the final project for a web development course. It represents a synthesis of my knowledge in modern JavaScript, TypeScript, React, modular architecture, deployment, and the creation of reusable libraries.

My goal was to build something real, useful, and extensible — a tool I would personally use and that other developers can benefit from.

## 💬 Have questions, suggestions, or want to contribute?
I’m open to ideas, improvements, and collaborations!

---

## 👩‍💻 Author

**Marcos** – Web developer passionate about clean, functional code.

- 📫 Contact: [linkedin.com/in/your-link](https://linkedin.com/in/your-link)
- 🌐 Portfolio: [your-portfolio.dev](https://your-portfolio.dev)

⭐ Thanks for checking out **LazyFetch**!

---


