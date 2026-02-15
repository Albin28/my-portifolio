# Albin Joseph | Portfolio

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![Node.js](https://img.shields.io/badge/node.js-18.x-green.svg)
![Express.js](https://img.shields.io/badge/express-5.x-lightgrey.svg)
![License](https://img.shields.io/badge/license-ISC-blue.svg)

## 📖 Overview

Welcome to my personal portfolio repository. This project is a modern, responsive web application designed to showcase my skills, projects, and professional journey as a Computer Science student and DevOps Intern. 

Built with **Node.js** and **Express**, this portfolio emphasizes performance, clean code architecture, and a premium user experience. It features a custom design system employing **glassmorphism**, fluid animations, and a responsive layout that adapts seamlessly across all devices.

## ✨ Key Features

- **Modern UI/UX Design**: Features a dark-themed aesthetic with glassmorphism effects, smooth gradients, and interactive hover states.
- **Dynamic Content Rendering**: Utilizes **EJS (Embedded JavaScript)** templating to dynamically render pages and components, ensuring a modular and maintainable codebase.
- **Responsive Layout**: Fully responsive design implemented with CSS Flexbox and Grid, providing an optimal viewing experience on desktops, tablets, and mobile devices.
- **Static Site Generation**: Includes a custom build script (`build.js`) to generate static HTML files, facilitating easy deployment to platforms like **GitHub Pages**.
- **Interactive Elements**: Custom CSS animations (`fadeInUp`, `float`, and particle effects) to enhance user engagement without compromising performance.

## 🛠️ Tech Stack

### Frontend
- **HTML5 & CSS3**: Semantic HTML structure styled with modern CSS features (Custom Properties, Flexbox, Grid, Animations).
- **JavaScript (ES6+)**: Interactive client-side logic for DOM manipulation and effects.
- **Design**: Custom "Glassmorphism" UI with `backdrop-filter` and advanced gradient usage.

### Backend
- **Node.js**: Runtime environment for executing JavaScript on the server side.
- **Express.js**: Fast, unopinionated, minimalist web framework for Node.js used for routing and middleware.
- **EJS**: Templating engine for generating HTML markup with plain JavaScript.

## 🚀 Getting Started

Follow these instructions to set up the project locally on your machine.

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14.0.0 or later)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd task-1
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm start
    ```

4.  **Access the application:**
    Open your browser and navigate to `http://localhost:3000`.

## 📦 Build & Deployment

This project includes a build script to generate static assets for deployment.

To build the project for production (e.g., for GitHub Pages):

```bash
npm run build
```

This command will:
1.  Clean the `dist` directory.
2.  Compile EJS views into static HTML files.
3.  Copy static assets (CSS, images) to the `dist` folder.

To deploy to GitHub Pages (requires configuration):

```bash
npm run deploy
```

## 📂 Project Structure

```
task-1/
├── public/             # Static assets
│   └── css/            # Stylesheets
├── views/              # EJS templates
│   ├── partials/       # Reusable headers/footers
│   ├── index.ejs       # Home page
│   ├── about.ejs       # About page
│   ├── projects.ejs    # Projects showcase
│   └── contact.ejs     # Contact information
├── dist/               # Generated static files (post-build)
├── build.js            # Custom static site generation script
├── server.js           # Express application entry point
└── package.json        # Project manifest and scripts
```

## 📬 Contact

I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.

- **Email**: [albin.joseph@example.com](mailto:albin.joseph@example.com)
- **Location**: Kanjirapally, Kottayam
- **LinkedIn**: [Albin Joseph](#) <!-- Add your LinkedIn URL here -->

---

&copy; 2026 Albin Joseph. All Rights Reserved.
