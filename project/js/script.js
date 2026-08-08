/**
 * script.js — Core landing page layout interactions and animations
 */

import { auth } from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
    // ── 1. Auth Status Event Listener ──
    // Updates layout states when user logs in or out
    document.addEventListener('auth-changed', (e) => {
        const state = e.detail;
        updateMobileNavbarAuth(state.isAuthenticated);
    });

    // Initialize auth state
    auth.init();

    // ── 2. Sticky Header ──
    const navbar = document.querySelector('.top-navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY >= 100) {
            navbar?.classList.add('sticky');
        } else {
            navbar?.classList.remove('sticky');
        }
    });

    // ── 3. Back To Top Floating Button ──
    const backToTopBtn = document.getElementById('backtotop');
    window.addEventListener('scroll', () => {
        if (window.scrollY >= 100) {
            backToTopBtn?.classList.add('active');
        } else {
            backToTopBtn?.classList.remove('active');
        }
    });

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ── 4. Mobile Offcanvas Navbar Toggle ──
    const mobileNavbar = document.getElementById('navbarOffcanvas');
    const burgerMenuBtn = document.getElementById('mobileMenuToggler');
    const closeNavbarBtn = mobileNavbar?.querySelector('.close-btn');
    const mobileNavLinks = mobileNavbar?.querySelectorAll('.mobile-nav .nav-item');

    let isClosing = false;

    const openMobileNavbar = () => {
        if (mobileNavbar) {
            mobileNavbar.classList.add('show');
            document.body.classList.add('modal-open');
        }
    };

    const closeMobileNavbar = () => {
        if (!mobileNavbar || isClosing) return;
        isClosing = true;
        mobileNavbar.classList.add('closing');
        
        setTimeout(() => {
            mobileNavbar.classList.remove('show', 'closing');
            document.body.classList.remove('modal-open');
            isClosing = false;
        }, 300);
    };

    if (burgerMenuBtn) burgerMenuBtn.addEventListener('click', openMobileNavbar);
    if (closeNavbarBtn) closeNavbarBtn.addEventListener('click', closeMobileNavbar);

    // Close mobile menu when links are clicked
    mobileNavLinks?.forEach(link => {
        link.addEventListener('click', () => {
            closeMobileNavbar();
        });
    });

    // ── 5. Main Sidebar Toggle ──
    const sidebar = document.querySelector('.slide-bar-offcanvas');
    const sidebarToggler = document.querySelector('.side-bar-btn');
    const sidebarCloseBtn = sidebar?.querySelector('.btn-close');

    if (sidebar && sidebarToggler) {
        sidebarToggler.addEventListener('click', () => {
            sidebar.classList.toggle('show');
        });
    }
    if (sidebar && sidebarCloseBtn) {
        sidebarCloseBtn.addEventListener('click', () => {
            sidebar.classList.remove('show');
        });
    }

    // ── 6. Interactive Video Players ──
    // Player 1: Kamal Sir Info Video
    const infoVideo = document.querySelector('.video-container video');
    const playOverlay = document.querySelector('.play-overlay');
    const videoPoster = document.querySelector('.video-poster-img');

    const handlePlayInfoVideo = () => {
        if (infoVideo) {
            if (infoVideo.paused) {
                infoVideo.play();
                playOverlay?.classList.add('d-none');
                videoPoster?.classList.add('d-none');
            } else {
                infoVideo.pause();
                playOverlay?.classList.remove('d-none');
                videoPoster?.classList.remove('d-none');
            }
        }
    };

    if (playOverlay) playOverlay.addEventListener('click', handlePlayInfoVideo);
    if (videoPoster) videoPoster.addEventListener('click', handlePlayInfoVideo);
    if (infoVideo) {
        infoVideo.addEventListener('click', handlePlayInfoVideo);
        infoVideo.addEventListener('pause', () => {
            playOverlay?.classList.remove('d-none');
            videoPoster?.classList.remove('d-none');
        });
    }

    // Player 2: Executive Director Prof. Manna Video
    const directorVideoBox = document.querySelector('.video-preview-box');
    const directorVideo = directorVideoBox?.querySelector('video');
    const directorPoster = directorVideoBox?.querySelector('img');
    const directorPlayBtn = directorVideoBox?.querySelector('.play-btn-wrap');

    const handlePlayDirectorVideo = () => {
        if (directorVideo) {
            directorVideo.style.display = 'block';
            directorVideo.controls = true;
            directorVideo.play();
            if (directorPoster) directorPoster.style.display = 'none';
            if (directorPlayBtn) directorPlayBtn.style.display = 'none';
        }
    };

    if (directorVideoBox) directorVideoBox.addEventListener('click', handlePlayDirectorVideo);

    // ── 7. Eligibility Checklist Calculator ──
    const eligibilityModal = document.getElementById('eligibilityChecklistModal');
    const eligibilityCheckboxes = eligibilityModal?.querySelectorAll('.checkbox-item input');
    const successMsg = eligibilityModal?.querySelector('.success-message');
    const errorMsg = eligibilityModal?.querySelector('.error-message');

    const checkEligibility = () => {
        let allChecked = true;
        let anyChecked = false;

        eligibilityCheckboxes?.forEach(checkbox => {
            const label = checkbox.closest('label');
            if (checkbox.checked) {
                label?.classList.add('checked');
                // Insert checkmark icon inside checkbox
                const customBox = label?.querySelector('.custom-checkbox');
                if (customBox && !customBox.querySelector('.ti-check')) {
                    customBox.innerHTML = '<i class="ti ti-check"></i>';
                }
                anyChecked = true;
            } else {
                label?.classList.remove('checked');
                const customBox = label?.querySelector('.custom-checkbox');
                if (customBox) customBox.innerHTML = '';
                allChecked = false;
            }
        });

        if (allChecked) {
            successMsg?.classList.remove('d-none');
            errorMsg?.classList.add('d-none');
        } else if (anyChecked) {
            successMsg?.classList.add('d-none');
            errorMsg?.classList.remove('d-none');
        } else {
            successMsg?.classList.add('d-none');
            errorMsg?.classList.add('d-none');
        }
    };

    eligibilityCheckboxes?.forEach(checkbox => {
        checkbox.addEventListener('change', checkEligibility);
    });

    // Reset eligibility checklist state when opening
    const checkEligibilityBtn = document.querySelector('[onClick="toggleEligibilityModal"], .btn-check-eligibility');
    if (checkEligibilityBtn) {
        checkEligibilityBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Reset checklist checkboxes
            eligibilityCheckboxes?.forEach(cb => {
                cb.checked = false;
                cb.closest('label')?.classList.remove('checked');
                const customBox = cb.closest('label')?.querySelector('.custom-checkbox');
                if (customBox) customBox.innerHTML = '';
            });
            successMsg?.classList.add('d-none');
            errorMsg?.classList.add('d-none');

            const modal = new bootstrap.Modal(eligibilityModal);
            modal.show();
        });
    }

    // Close button check eligibility checklist modal
    const closeEligibilityBtn = eligibilityModal?.querySelector('.close-btn');
    if (closeEligibilityBtn) {
        closeEligibilityBtn.addEventListener('click', () => {
            const modalInstance = bootstrap.Modal.getInstance(eligibilityModal);
            modalInstance?.hide();
        });
    }

    // ── 8. Initialize Scroll Animation Reveal Library (AOS) ──
    if (window.AOS) {
        window.AOS.init({
            duration: 1000,
            once: true
        });
    }
});

// Helper function to update mobile navbar auth elements
function updateMobileNavbarAuth(isAuthenticated) {
    const mobileNavbar = document.getElementById('navbarOffcanvas');
    if (!mobileNavbar) return;

    const profileLink = mobileNavbar.querySelector('.mobile-nav .nav-item[href="/profile"]');
    const loginLink = mobileNavbar.querySelector('.mobile-nav .nav-item[href="/login"]');
    const logoutLink = mobileNavbar.querySelector('.mobile-nav .nav-item[onClick="handleLogout"]');

    if (isAuthenticated) {
        profileLink?.classList.remove('d-none');
        loginLink?.classList.add('d-none');
        logoutLink?.classList.remove('d-none');
    } else {
        profileLink?.classList.add('d-none');
        loginLink?.classList.remove('d-none');
        logoutLink?.classList.add('d-none');
    }
}
