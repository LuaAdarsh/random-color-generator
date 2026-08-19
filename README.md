# 🎨 Random Color Generator

A simple, clean web app that generates random color palettes with a single click. Built with vanilla HTML, CSS, and JavaScript — no frameworks, no libraries.

## Features

- 🎲 Generates 9 random hex color codes at once (3x3 grid)
- 🔁 Refresh button to instantly generate a new palette
- 📋 Click any color box to copy its hex code to clipboard
- 🎨 Displays the hex code directly on each color swatch
- 💻 Fully responsive layout using Flexbox

## Demo

[Live Demo](https://luaadarsh.github.io/random-color-generator/) <!-- Add your GitHub Pages link here after deploying -->

## Tech Stack

- **HTML5** — structure
- **CSS3** — styling (Flexbox, custom fonts via Google Fonts)
- **JavaScript (Vanilla)** — DOM manipulation, event listeners, Clipboard API

## How It Works

- On page load, each `.colors` box is assigned a random hex color using `Math.random()`.
- Clicking **Refresh** regenerates a new random color for every box.
- Clicking on any individual box copies its hex code to the clipboard using the `navigator.clipboard.writeText()` API.

## Getting Started

Clone the repo and open `index.html` in your browser — no build steps or dependencies required.

```bash
git clone https://github.com/LuaAdarsh/random-color-generator.git
cd random-color-generator
```

Then simply open `index.html` in your browser.

## Project Structure

```
random-color-generator/
├── index.html
├── style.css
├── script.js
└── README.md
```

## What I Learned

- DOM manipulation with `querySelectorAll` and `NodeList.forEach`
- Difference between selecting a collection vs. an individual element
- Using the Clipboard API for copy-to-clipboard functionality
- Scoped element selection with `element.querySelector()` vs global `document.querySelector()`


