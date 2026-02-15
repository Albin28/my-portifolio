document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio loaded');

    // 1. Kinetic/Parallax Background Effect
    const shapes = document.querySelectorAll('.shape');

    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 20; // Different speeds for depth
            const xOffset = (window.innerWidth / 2 - e.clientX) / speed;
            const yOffset = (window.innerHeight / 2 - e.clientY) / speed;

            shape.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        });
    });

    // 2. 3D Tilt Effect for Project Cards
    const cards = document.querySelectorAll('.project-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const maxRotate = 10;

            const rotateX = ((y - centerY) / centerY) * -maxRotate;
            const rotateY = ((x - centerX) / centerX) * maxRotate;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });

    // 3. Hamburger Menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '70px';
                navLinks.style.right = '5%';
                navLinks.style.background = '#1e293b';
                navLinks.style.padding = '1rem';
                navLinks.style.borderRadius = '10px';
                navLinks.style.zIndex = '1000';
                navLinks.style.boxShadow = '0 10px 25px rgba(0,0,0,0.5)';
            }
        });
    }

    // 4. Cursor Sparkle Effect (Quadrupled Intensity)
    const colors = ['#6C63FF', '#fca311', '#ffffff', '#3b82f6'];

    function createSparkle(x, y) {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');

        const size = Math.random() * 5 + 2;
        const color = colors[Math.floor(Math.random() * colors.length)];

        sparkle.style.left = `${x}px`;
        sparkle.style.top = `${y}px`;
        sparkle.style.width = `${size}px`;
        sparkle.style.height = `${size}px`;
        sparkle.style.background = color;
        sparkle.style.boxShadow = `0 0 ${size * 2}px ${color}, 0 0 ${size * 4}px ${color}`;

        const destX = (Math.random() - 0.5) * 50;
        const destY = (Math.random() - 0.5) * 50;
        sparkle.style.setProperty('--dest-x', `${destX}px`);
        sparkle.style.setProperty('--dest-y', `${destY}px`);

        document.body.appendChild(sparkle);

        setTimeout(() => sparkle.remove(), 1000);
    }

    document.addEventListener('mousemove', (e) => {
        // Quadruple sparkles: Create 4 sparkles per event
        for (let i = 0; i < 4; i++) {
            // Add slight random offset so they don't stack perfectly
            const offsetX = (Math.random() - 0.5) * 10;
            const offsetY = (Math.random() - 0.5) * 10;
            createSparkle(e.clientX + offsetX, e.clientY + offsetY);
        }
    });

    // 5. Firecracker Burst Effect on Click
    function createBurst(x, y) {
        const particleCount = 30; // Explosion size

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('burst');

            const size = Math.random() * 6 + 2;
            const color = colors[Math.floor(Math.random() * colors.length)];

            particle.style.left = `${x}px`;
            particle.style.top = `${y}px`;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.background = color;
            particle.style.boxShadow = `0 0 ${size * 2}px ${color}`;

            // Random angle and distance
            const angle = Math.random() * Math.PI * 2;
            const velocity = Math.random() * 100 + 50; // Burst radius

            const destX = Math.cos(angle) * velocity;
            const destY = Math.sin(angle) * velocity;

            particle.style.setProperty('--dest-x', `${destX}px`);
            particle.style.setProperty('--dest-y', `${destY}px`);

            document.body.appendChild(particle);

            setTimeout(() => particle.remove(), 500);
        }
    }

    // Attach to all clicks (can restrict to buttons if desired, but "everytime a button... clicked" usually implies interactive feedback)
    // Let's attach specifically to links and buttons as requested
    const clickables = document.querySelectorAll('a, button, .btn');
    clickables.forEach(el => {
        el.addEventListener('click', (e) => {
            // Use e.clientX/Y if available, otherwise get element center
            const x = e.clientX || el.getBoundingClientRect().left + el.offsetWidth / 2;
            const y = e.clientY || el.getBoundingClientRect().top + el.offsetHeight / 2;
            createBurst(x, y);
        });
    });

    // Also allow clicking anywhere for fun? User specifically said "button like home, about etc"
    // I'll stick to the specific listener above, but maybe add a global one for testing feels nice.
    // Let's stick to the prompt: "everytime a button like home, about etc clicked"
});
