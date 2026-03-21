        // Generate stars covering full viewport
        function generateStars(selector, count) {
            const el = document.querySelector(selector);
            if (!el) return;
            const w = window.screen.width;
            const h = window.screen.height * 3;
            const shadows = Array.from({ length: count }, () =>
                `${Math.floor(Math.random() * w)}px ${Math.floor(Math.random() * h)}px #FFF`
            ).join(', ');
            el.style.boxShadow = shadows;
        }
        generateStars('.stars', 300);
        generateStars('.stars2', 150);
        generateStars('.stars3', 100);

        // Smooth scrolling for navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    // Close mobile menu after clicking
                    navMenu.classList.remove('active');
                    hamburger.classList.remove('active');
                }
            });
        });

        // Hamburger menu toggle
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });

        console.log('🏓 Welcome to the pickleball portfolio! Ready to play?');
