const ejs = require('ejs');
const fs = require('fs-extra');
const path = require('path');

const viewsDir = path.join(__dirname, 'views');
const publicDir = path.join(__dirname, 'public');
const distDir = path.join(__dirname, 'dist');

const pages = ['index', 'about', 'projects', 'contact'];

async function build() {
    try {
        console.log('Starting build...');

        // 1. Clean dist folder
        await fs.emptyDir(distDir);
        console.log('Cleaned dist/ folder.');

        // 2. Copy static assets (CSS, JS, Images)
        // We copy contents of public/ directly to dist/ so paths remain same (e.g. /css/style.css)
        if (await fs.pathExists(publicDir)) {
            await fs.copy(publicDir, distDir);
            console.log('Copied static assets to dist/.');
        } else {
            console.log('No public folder found, skipping assets copy.');
        }

        // 3. Render EJS to HTML
        for (const page of pages) {
            const fileName = `${page}.ejs`;
            const outName = `${page}.html`;
            const filePath = path.join(viewsDir, fileName);

            if (await fs.pathExists(filePath)) {
                const html = await ejs.renderFile(filePath, {
                    title: page.charAt(0).toUpperCase() + page.slice(1) || 'Home',
                    currentPage: page
                });
                await fs.outputFile(path.join(distDir, outName), html);
                console.log(`Generated ${outName}`);
            } else {
                console.warn(`Warning: ${fileName} not found in views/`);
            }
        }

        console.log('Build complete! content is in dist/');
    } catch (err) {
        console.error('Build failed:', err);
        process.exit(1);
    }
}

build();
