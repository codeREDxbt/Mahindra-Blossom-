/**
 * Mahindra Blossom - Main JavaScript
 * Performance-optimized: minimal third-party scripts, lazy loading
 */

console.log('Mahindra Blossom site loaded');

document.addEventListener('DOMContentLoaded', () => {

    // ============================================
    // NAVBAR SCROLL BEHAVIOR (Transparent → Solid)
    // ============================================
    const header = document.getElementById('main-header');
    const mobileMenuBtn = document.querySelector('.nav-menu-btn');
    const logoWhite = document.querySelector('.logo-white');
    const logoDark = document.querySelector('.logo-dark');
    const SCROLL_THRESHOLD = 100;

    const updateNavbar = () => {
        const scrolled = window.scrollY > SCROLL_THRESHOLD;
        
        if (scrolled) {
            // Scrolled state: white background, dark logo
            header.classList.add('bg-white/95', 'backdrop-blur-sm', 'shadow-sm');
            header.classList.remove('bg-transparent');
            if (mobileMenuBtn) {
                mobileMenuBtn.classList.remove('text-white');
                mobileMenuBtn.classList.add('text-[#4b4d4c]');
            }
            // Switch to dark logo (red mahindra + black LIFESPACES)
            if (logoWhite) logoWhite.classList.add('hidden');
            if (logoDark) {
                logoDark.classList.remove('hidden');
            }
        } else {
            // Hero state: transparent, white logo
            header.classList.remove('bg-white/95', 'backdrop-blur-sm', 'shadow-sm');
            header.classList.add('bg-transparent');
            if (mobileMenuBtn) {
                mobileMenuBtn.classList.add('text-white');
                mobileMenuBtn.classList.remove('text-[#4b4d4c]');
            }
            // Switch to white logo
            if (logoWhite) logoWhite.classList.remove('hidden');
            if (logoDark) {
                logoDark.classList.add('hidden');
            }
        }
    };

    // Initial state and scroll listener
    updateNavbar();
    window.addEventListener('scroll', updateNavbar, { passive: true });

    // ============================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                // Offset for fixed header (80px)
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const mobileMenu = document.getElementById('mobile-menu');
                if (mobileMenu && !mobileMenu.classList.contains('translate-x-full')) {
                    mobileMenu.classList.add('translate-x-full');
                }
            }
        });
    });

    // ============================================
    // SCROLL ANIMATIONS WITH INTERSECTION OBSERVER
    // ============================================
    const initScrollAnimations = () => {
        if (!('IntersectionObserver' in window)) return;

        // Animate sections on scroll
        const sections = document.querySelectorAll('section[id]:not(#hero)');
        
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    sectionObserver.unobserve(entry.target);
                }
            });
        }, {
            rootMargin: '0px 0px -50px 0px',
            threshold: 0.1
        });

        sections.forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            sectionObserver.observe(section);
        });

        // Animate individual elements within sections
        const animatedElements = document.querySelectorAll('.scroll-animate');
        const elementObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Add staggered delay
                    setTimeout(() => {
                        entry.target.classList.add('is-visible');
                    }, index * 100);
                    elementObserver.unobserve(entry.target);
                }
            });
        }, {
            rootMargin: '0px 0px -30px 0px',
            threshold: 0.1
        });

        animatedElements.forEach(el => {
            elementObserver.observe(el);
        });
    };

    initScrollAnimations();

    // ============================================
    // MOBILE MENU TOGGLE
    // ============================================
    const mobileMenuBtnEl = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('translate-x-full');
        });

        // Close menu when clicking links
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('translate-x-full');
            });
        });
    }

    // ============================================
    // GALLERY TOGGLE (Grid vs 3D)
    // ============================================
    const btnGrid = document.getElementById('btn-grid');
    const btn3d = document.getElementById('btn-3d');
    const galleryContainer = document.getElementById('gallery-container');

    if (btnGrid && btn3d && galleryContainer) {
        btn3d.addEventListener('click', () => {
            galleryContainer.classList.add('gallery-tilted');
            
            // Toggle Button Styles
            btn3d.classList.remove('bg-white', 'text-gray-700', 'border-gray-200');
            btn3d.classList.add('bg-[#ed3237]', 'text-white', 'border-transparent');
            
            btnGrid.classList.remove('bg-[#ed3237]', 'text-white');
            btnGrid.classList.add('bg-white', 'text-gray-700', 'border', 'border-gray-200');
        });

        btnGrid.addEventListener('click', () => {
            galleryContainer.classList.remove('gallery-tilted');
            
            // Toggle Button Styles
            btnGrid.classList.remove('bg-white', 'text-gray-700', 'border', 'border-gray-200');
            btnGrid.classList.add('bg-[#ed3237]', 'text-white');
            
            btn3d.classList.remove('bg-[#ed3237]', 'text-white', 'border-transparent');
            btn3d.classList.add('bg-white', 'text-gray-700', 'border-gray-200');
        });
    }

    // ============================================
    // FLOOR PLAN MODAL / LIGHTBOX
    // ============================================
    const planModal = document.getElementById('plan-modal');
    const planModalImage = document.getElementById('plan-modal-image');
    const planModalTitle = document.getElementById('plan-modal-title');
    const closePlanModal = document.getElementById('close-plan-modal');
    const viewPlanBtns = document.querySelectorAll('.view-plan-btn');

    if (planModal && viewPlanBtns.length > 0) {
        // Open modal when clicking View Plan button
        viewPlanBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const planSrc = btn.getAttribute('data-plan');
                const planTitle = btn.getAttribute('data-title');
                
                if (planSrc && planModalImage) {
                    planModalImage.src = planSrc;
                    planModalImage.alt = planTitle || 'Floor Plan';
                }
                if (planTitle && planModalTitle) {
                    planModalTitle.textContent = planTitle;
                }
                
                planModal.classList.remove('hidden');
                planModal.setAttribute('aria-hidden', 'false');
                document.body.style.overflow = 'hidden';
            });
        });

        // Close modal functions
        const closePlanModalFn = () => {
            planModal.classList.add('hidden');
            planModal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
            if (planModalImage) planModalImage.src = '';
        };

        if (closePlanModal) {
            closePlanModal.addEventListener('click', closePlanModalFn);
        }

        // Close on backdrop click
        planModal.addEventListener('click', (e) => {
            if (e.target === planModal) {
                closePlanModalFn();
            }
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !planModal.classList.contains('hidden')) {
                closePlanModalFn();
            }
        });
    }

    // ============================================
    // PERFORMANCE BUDGET MONITOR (Dev only)
    // ============================================
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        window.addEventListener('load', () => {
            setTimeout(() => {
                if (window.performance) {
                    const timing = performance.getEntriesByType('navigation')[0];
                    if (timing) {
                        console.log('Performance Metrics:');
                        console.log(`  DOM Content Loaded: ${Math.round(timing.domContentLoadedEventEnd)}ms`);
                        console.log(`  Load Complete: ${Math.round(timing.loadEventEnd)}ms`);
                    }
                    const resources = performance.getEntriesByType('resource');
                    const largeResources = resources.filter(r => r.transferSize > 500000);
                    if (largeResources.length > 0) {
                        console.warn('Large resources detected (>500KB):');
                        largeResources.forEach(r => {
                            console.warn(`  ${r.name}: ${Math.round(r.transferSize / 1024)}KB`);
                        });
                    }
                }
            }, 100);
        });
    }

    // ============================================
    // SCROLL TO TOP BUTTON
    // ============================================
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    
    if (scrollToTopBtn) {
        // Show/hide button based on scroll position
        const toggleScrollBtn = () => {
            if (window.scrollY > 500) {
                scrollToTopBtn.classList.remove('opacity-0', 'invisible');
                scrollToTopBtn.classList.add('opacity-100', 'visible');
            } else {
                scrollToTopBtn.classList.add('opacity-0', 'invisible');
                scrollToTopBtn.classList.remove('opacity-100', 'visible');
            }
        };

        // Throttle scroll event for performance
        let scrollTimeout;
        window.addEventListener('scroll', () => {
            if (scrollTimeout) return;
            scrollTimeout = setTimeout(() => {
                toggleScrollBtn();
                scrollTimeout = null;
            }, 100);
        }, { passive: true });

        // Scroll to top on click
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Initial check
        toggleScrollBtn();
    }

    // ============================================
    // STICKY BOTTOM BAR - Always visible
    // ============================================
    // Sticky bar is now always visible via CSS, no JS toggle needed
});
