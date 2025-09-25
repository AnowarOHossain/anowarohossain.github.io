// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavigation();
    initScrollEffects();
    initAnimations();
    initContactForm();
    initTypingEffect();
    initPerformanceOptimizations();
    initStatsCounter();
});

// Navigation functionality
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Navbar scroll effect with throttling
    let ticking = false;
    function updateNavbar() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        ticking = false;
    }

    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateNavbar);
            ticking = true;
        }
    });

    // Active navigation link based on scroll position
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section');
        const scrollPos = window.scrollY + 150;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) {
                    navLink.classList.add('active');
                }
            }
        });
    }

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Throttled scroll listener for active nav link
    let navTicking = false;
    window.addEventListener('scroll', function() {
        if (!navTicking) {
            requestAnimationFrame(updateActiveNavLink);
            navTicking = true;
        }
    });
    
    updateActiveNavLink(); // Initial call
}

// Scroll effects (scroll to top button, reveal animations)
function initScrollEffects() {
    const scrollToTopBtn = document.getElementById('scrollToTop');

    // Scroll to top button visibility with throttling
    let scrollTicking = false;
    function updateScrollButton() {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
        scrollTicking = false;
    }

    window.addEventListener('scroll', function() {
        if (!scrollTicking) {
            requestAnimationFrame(updateScrollButton);
            scrollTicking = true;
        }
    });

    // Scroll to top functionality
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Scroll reveal animations with Intersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Stop observing once element is revealed
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all sections and cards for reveal animation
    const elementsToReveal = document.querySelectorAll('.section, .skill-category, .project-card, .contact-item');
    elementsToReveal.forEach(element => {
        element.classList.add('reveal');
        observer.observe(element);
    });
}

// Animation effects
function initAnimations() {
    // Animate skill tags on hover
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) rotate(2deg)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });

    // Animate project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Enhanced button ripple effect
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                if (ripple.parentNode) {
                    ripple.remove();
                }
            }, 600);
        });
    });

    // Parallax effect for hero background (performance optimized)
    let heroParallaxTicking = false;
    function updateHeroParallax() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero && scrolled < hero.offsetHeight) {
            const speed = scrolled * 0.2;
            hero.style.transform = `translateY(${speed}px)`;
        }
        heroParallaxTicking = false;
    }

    window.addEventListener('scroll', function() {
        if (!heroParallaxTicking) {
            requestAnimationFrame(updateHeroParallax);
            heroParallaxTicking = true;
        }
    });

    // Floating animation for code snippet
    const codeSnippet = document.querySelector('.code-snippet');
    if (codeSnippet) {
        let floatDirection = 1;
        setInterval(() => {
            floatDirection *= -1;
            codeSnippet.style.transform = `translateY(${floatDirection * 5}px)`;
        }, 3000);
    }

    // Add hover effects to contact items
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Contact form functionality
function initContactForm() {
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        // Real-time validation
        const inputs = contactForm.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });

            input.addEventListener('input', function() {
                // Remove error styling on input
                this.style.borderColor = '';
                clearTimeout(this.validationTimeout);
                // Debounced validation
                this.validationTimeout = setTimeout(() => {
                    validateField(this);
                }, 500);
            });
        });

        contactForm.addEventListener('submit', function(e) {
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name').trim();
            const email = formData.get('email').trim();
            const message = formData.get('message').trim();
            
            // Validate all fields
            let isValid = true;
            isValid = validateField(this.querySelector('#name')) && isValid;
            isValid = validateField(this.querySelector('#email')) && isValid;
            isValid = validateField(this.querySelector('#message')) && isValid;
            
            if (!isValid) {
                e.preventDefault();
                showNotification('Please fill in all fields correctly.', 'error');
                return;
            }
            
            // Show loading state
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.innerHTML;
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitButton.disabled = true;
            
            // Add analytics event
            if (typeof gtag !== 'undefined') {
                gtag('event', 'form_submit', {
                    event_category: 'Contact',
                    event_label: 'Contact Form'
                });
            }
            
            // Let the form submit naturally to Formspree
            // The loading state will be reset when page redirects/reloads
        });
    }
}

// Field validation helper
function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    
    if (!value) {
        field.style.borderColor = '#f56565';
        isValid = false;
    } else if (field.type === 'email' && !isValidEmail(value)) {
        field.style.borderColor = '#f56565';
        isValid = false;
    } else if (field.name === 'message' && value.length < 10) {
        field.style.borderColor = '#f56565';
        isValid = false;
    } else {
        field.style.borderColor = '#48bb78';
    }
    
    return isValid;
}

// Typing effect for hero section
function initTypingEffect() {
    const tagline = document.querySelector('.hero-tagline');
    if (tagline) {
        const text = tagline.textContent;
        tagline.textContent = '';
        tagline.style.borderRight = '2px solid var(--primary-color)';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                tagline.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 80 + Math.random() * 40); // Variable speed for realistic typing
            } else {
                // Remove cursor after typing is done
                setTimeout(() => {
                    tagline.style.borderRight = 'none';
                }, 1000);
            }
        };
        
        // Start typing effect after page load
        setTimeout(typeWriter, 1000);
    }
}

// Stats counter animation
function initStatsCounter() {
    const stats = document.querySelectorAll('.stat-number');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const stat = entry.target;
                const targetText = stat.textContent;
                const target = parseInt(targetText);
                let current = 0;
                const increment = target / 50;
                
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        stat.textContent = targetText; // Keep original format with +
                        clearInterval(timer);
                    } else {
                        stat.textContent = Math.floor(current) + '+';
                    }
                }, 40);
                
                observer.unobserve(stat);
            }
        });
    }, { threshold: 0.5 });
    
    stats.forEach(stat => observer.observe(stat));
}

// Performance optimizations
function initPerformanceOptimizations() {
    // Lazy loading for project images
    const projectImages = document.querySelectorAll('.project-image img');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        img.classList.add('loaded');
                    }
                    imageObserver.unobserve(img);
                }
            });
        });

        projectImages.forEach(img => {
            if (img.src.includes('placeholder')) {
                img.dataset.src = img.src;
                img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PC9zdmc+';
                imageObserver.observe(img);
            }
        });
    }

    // Preload critical fonts
    const fontLink = document.createElement('link');
    fontLink.rel = 'preload';
    fontLink.as = 'font';
    fontLink.type = 'font/woff2';
    fontLink.crossOrigin = 'anonymous';
    fontLink.href = 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2';
    document.head.appendChild(fontLink);

    // Prefetch GitHub links
    const githubLinks = document.querySelectorAll('a[href*="github.com"]');
    githubLinks.forEach(link => {
        const prefetchLink = document.createElement('link');
        prefetchLink.rel = 'prefetch';
        prefetchLink.href = link.href;
        document.head.appendChild(prefetchLink);
    });
}

// Theme toggle functionality
function initThemeToggle() {
    const themeToggle = document.createElement('button');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    themeToggle.className = 'theme-toggle';
    themeToggle.setAttribute('aria-label', 'Toggle dark mode');
    
    // Add to navbar
    const navContainer = document.querySelector('.nav-container');
    if (navContainer) {
        navContainer.appendChild(themeToggle);
    }
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);
    }
    
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
        
        // Add ripple effect
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });
    
    function updateThemeIcon(theme) {
        const icon = themeToggle.querySelector('i');
        icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
}

// Utility functions
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${getNotificationIcon(type)}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Close functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        closeNotification(notification);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            closeNotification(notification);
        }
    }, 5000);
}

function getNotificationIcon(type) {
    switch (type) {
        case 'success': return 'fa-check-circle';
        case 'error': return 'fa-exclamation-circle';
        case 'warning': return 'fa-exclamation-triangle';
        default: return 'fa-info-circle';
    }
}

function closeNotification(notification) {
    notification.style.animation = 'slideOutRight 0.3s ease';
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 300);
}

// Progressive Web App functionality
function initPWA() {
    // Service Worker registration
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
            navigator.serviceWorker.register('/sw.js')
                .then(function(registration) {
                    console.log('SW registered: ', registration);
                })
                .catch(function(registrationError) {
                    console.log('SW registration failed: ', registrationError);
                });
        });
    }

    // Install prompt
    let deferredPrompt;
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        
        // Show install button
        const installBtn = document.createElement('button');
        installBtn.textContent = 'Install App';
        installBtn.className = 'install-btn btn btn-outline';
        installBtn.style.display = 'none';
        
        const heroButtons = document.querySelector('.hero-buttons');
        if (heroButtons) {
            heroButtons.appendChild(installBtn);
            installBtn.style.display = 'inline-flex';
        }
        
        installBtn.addEventListener('click', async () => {
            if (deferredPrompt) {
                deferredPrompt.prompt();
                const { outcome } = await deferredPrompt.userChoice;
                console.log(`User response to the install prompt: ${outcome}`);
                deferredPrompt = null;
                installBtn.style.display = 'none';
            }
        });
    });
}

// Keyboard navigation support
function initKeyboardNavigation() {
    document.addEventListener('keydown', function(e) {
        // ESC key to close mobile menu
        if (e.key === 'Escape') {
            const navMenu = document.getElementById('nav-menu');
            const navToggle = document.getElementById('nav-toggle');
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
        
        // Ctrl/Cmd + K for quick contact
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
                setTimeout(() => {
                    const nameInput = document.getElementById('name');
                    if (nameInput) nameInput.focus();
                }, 500);
            }
        }
        
        // Arrow keys for project navigation
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            const focusedElement = document.activeElement;
            if (focusedElement && focusedElement.classList.contains('project-link')) {
                e.preventDefault();
                const projectCards = Array.from(document.querySelectorAll('.project-card'));
                const currentCard = focusedElement.closest('.project-card');
                const currentIndex = projectCards.indexOf(currentCard);
                
                let nextIndex;
                if (e.key === 'ArrowLeft') {
                    nextIndex = currentIndex > 0 ? currentIndex - 1 : projectCards.length - 1;
                } else {
                    nextIndex = currentIndex < projectCards.length - 1 ? currentIndex + 1 : 0;
                }
                
                const nextCard = projectCards[nextIndex];
                const nextLink = nextCard.querySelector('.project-link');
                if (nextLink) {
                    nextLink.focus();
                    nextCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }
        }
    });
    
    // Add focus styles for accessibility
    const style = document.createElement('style');
    style.textContent = `
        .btn:focus,
        .nav-link:focus,
        .project-link:focus,
        .social-links a:focus,
        .skill-tag:focus {
            outline: 2px solid var(--primary-color);
            outline-offset: 2px;
        }
        
        .form-group input:focus,
        .form-group textarea:focus {
            box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }
        
        .theme-toggle {
            background: none;
            border: none;
            color: var(--text-secondary);
            font-size: 1.2rem;
            cursor: pointer;
            padding: 0.5rem;
            border-radius: 50%;
            transition: var(--transition);
            margin-left: 1rem;
        }
        
        .theme-toggle:hover {
            color: var(--primary-color);
            background: var(--background-secondary);
        }
        
        .install-btn {
            animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
            0% { opacity: 1; }
            50% { opacity: 0.7; }
            100% { opacity: 1; }
        }
    `;
    document.head.appendChild(style);
}

// Analytics and tracking
function initAnalytics() {
    // Track scroll depth
    let maxScrollDepth = 0;
    window.addEventListener('scroll', function() {
        const scrollDepth = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
        if (scrollDepth > maxScrollDepth) {
            maxScrollDepth = scrollDepth;
            
            // Track milestones
            if ([25, 50, 75, 100].includes(scrollDepth)) {
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'scroll_depth', {
                        event_category: 'Engagement',
                        event_label: `${scrollDepth}%`,
                        value: scrollDepth
                    });
                }
            }
        }
    });
    
    // Track project clicks
    const projectLinks = document.querySelectorAll('.project-link');
    projectLinks.forEach(link => {
        link.addEventListener('click', function() {
            const projectTitle = this.closest('.project-card').querySelector('.project-title').textContent;
            const linkType = this.href.includes('github.com') ? 'GitHub' : 'Live Demo';
            
            if (typeof gtag !== 'undefined') {
                gtag('event', 'project_click', {
                    event_category: 'Projects',
                    event_label: `${projectTitle} - ${linkType}`,
                    value: 1
                });
            }
        });
    });
}

// Error handling and logging
function initErrorHandling() {
    window.addEventListener('error', function(e) {
        console.error('Global error:', e.error);
        
        // Log to analytics if available
        if (typeof gtag !== 'undefined') {
            gtag('event', 'exception', {
                description: e.error.message,
                fatal: false
            });
        }
    });
    
    window.addEventListener('unhandledrejection', function(e) {
        console.error('Unhandled promise rejection:', e.reason);
        
        if (typeof gtag !== 'undefined') {
            gtag('event', 'exception', {
                description: e.reason.message || 'Promise rejection',
                fatal: false
            });
        }
    });
}

// Safe query selector helper
function safeQuerySelector(selector, callback) {
    const element = document.querySelector(selector);
    if (element && typeof callback === 'function') {
        callback(element);
    }
}

// Initialize additional features
document.addEventListener('DOMContentLoaded', function() {
    initThemeToggle();
    initPWA();
    initKeyboardNavigation();
    initAnalytics();
    initErrorHandling();
});

// Handle reduced motion preference
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.style.setProperty('--transition', 'none');
    document.documentElement.style.setProperty('--transition-fast', 'none');
}

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        isValidEmail,
        showNotification,
        validateField,
        closeNotification
    };
}

// Page visibility API for performance
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // Pause animations when page is not visible
        document.querySelectorAll('.image-bg').forEach(el => {
            el.style.animationPlayState = 'paused';
        });
    } else {
        // Resume animations when page becomes visible
        document.querySelectorAll('.image-bg').forEach(el => {
            el.style.animationPlayState = 'running';
        });
    }
});

// Smooth scrolling polyfill for older browsers
if (!('scrollBehavior' in document.documentElement.style)) {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js';
    script.onload = function() {
        window.__forceSmoothScrollPolyfill__ = true;
        window.smoothscroll.polyfill();
    };
    document.head.appendChild(script);
}

console.log('Portfolio loaded successfully! 🚀');
console.log('Anowar Hossain - Portfolio v1.0');
console.log('Contact: anowarhossain.dev@gmail.com');