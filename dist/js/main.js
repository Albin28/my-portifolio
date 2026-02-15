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

            // Calculate rotation
            // Center of card is (rect.width/2, rect.height/2)
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            // Max rotation degrees
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

    // 4. Cursor Sparkle Effect
    const colors = ['#6C63FF', '#fca311', '#ffffff', '#3b82f6'];

    document.addEventListener('mousemove', (e) => {
        // Create sparkle particle
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');

        // Random properties
        const x = e.clientX;
        const y = e.clientY;
        const size = Math.random() * 5 + 2; // 2px to 7px
        const color = colors[Math.floor(Math.random() * colors.length)];

        // Set styles
        sparkle.style.left = `${x}px`;
        sparkle.style.top = `${y}px`;
        sparkle.style.width = `${size}px`;
        sparkle.style.height = `${size}px`;
        sparkle.style.background = color;
        sparkle.style.boxShadow = `0 0 ${size * 2}px ${color}, 0 0 ${size * 4}px ${color}`; // Glow effect

        // Random movement direction
        const destX = (Math.random() - 0.5) * 50;
        const destY = (Math.random() - 0.5) * 50;
        sparkle.style.setProperty('--dest-x', `${destX}px`);
        sparkle.style.setProperty('--dest-y', `${destY}px`);

        document.body.appendChild(sparkle);

        // Remove after animation
        setTimeout(() => {
            sparkle.remove();
        }, 1000);
    });
});
