/**
 * Lead Form Overlay Interaction Logic
 */
document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('lead-overlay');
    const closeBtn = document.getElementById('close-overlay');
    const overlayContent = overlay.querySelector('.overlay-content');

    // Open Overlay - Attach to all "Enquire" buttons
    // Using event delegation or finding all specific triggers
    const triggerButtons = document.querySelectorAll('a[href="#contact"], .btn-enquire');

    function openOverlay(e) {
        if (e) e.preventDefault();
        overlay.classList.remove('hidden');
        // Small timeout to allow display:block to apply before opacity transition
        requestAnimationFrame(() => {
            overlay.classList.add('is-visible');
        });
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
        overlay.setAttribute('aria-hidden', 'false');

        // Focus trap initial focus
        const firstInput = overlay.querySelector('input');
        if (firstInput) firstInput.focus();
    }

    function closeOverlay() {
        overlay.classList.remove('is-visible');
        overlay.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';

        // Wait for transition to finish before hiding
        setTimeout(() => {
            // Check if class didn't get added back (user didn't reopen quickly)
            if (!overlay.classList.contains('is-visible')) {
                // We don't strictly need display:none if opacity is 0 and pointer-events none
                // but might be good for accessibility/focus
            }
        }, 300);
    }

    // Event Listeners
    triggerButtons.forEach(btn => {
        btn.addEventListener('click', openOverlay);
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', closeOverlay);
    }

    // Close on click outside
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closeOverlay();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.classList.contains('is-visible')) {
            closeOverlay();
        }
    });

    // Expose globally if needed
    window.openLeadForm = openOverlay;
});
