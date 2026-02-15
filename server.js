const express = require('express');
const app = express();
const path = require('path');

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (CSS, Images, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const pages = ['index', 'about', 'projects', 'contact'];

pages.forEach(page => {
    // Handle root, /page, and /page.html
    const routes = page === 'index' ? ['/', '/index.html'] : [`/${page}`, `/${page}.html`];

    app.get(routes, (req, res) => {
        res.render(page, {
            title: page.charAt(0).toUpperCase() + page.slice(1) || 'Home',
            currentPage: page
        });
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Development server running at http://localhost:${PORT}`));
