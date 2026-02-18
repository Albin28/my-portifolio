const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle ? themeToggle.querySelector('i') : null;

// Check local storage or default to dark mode
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    body.classList.add(currentTheme);
} else {
    // Default to dark mode
    body.classList.add('dark-mode');
}

// Set initial icon based on applied class
if (body.classList.contains('dark-mode')) {
    if (icon) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
} else {
    if (icon) {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        // Toggle dark-mode class
        // Note: Since we default to Light in CSS :root and add .dark-mode for Dark,
        // toggling .dark-mode switches between them.
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark-mode');
            if (icon) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            }
        } else {
            localStorage.setItem('theme', ''); // removing it reverts to :root (Light)
            // Or explicitly set 'light-mode' if we had a class, but we just remove 'dark-mode'
            // Actually, to be consistent with persistence, let's just use empty or 'light'
            // But my logic above checks if (currentTheme) body.add(currentTheme).
            // So if I save 'light-mode', valid class? No, I didn't create .light-mode class, I just have :root.
            // So I should save '' or 'light' and handle it.
            // Simpler: Just toggle 'dark-mode'. If present = Dark. If not = Light.
            // Persistence:
            localStorage.setItem('theme', 'light');

            if (icon) {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
        }
    });
}
