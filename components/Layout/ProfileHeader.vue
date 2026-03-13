<template>
    <nav class="navbar" :class="{ 'navbar--scrolled': isScrolled }">
        <div class="navbar__inner">

            <!-- Logo -->
            <a class="navbar__logo" href="/">
                <div class="navbar__logo-ring"></div>
                <img src="~/assets/Logo/Logo/GCC-School-Logo-White.jpeg" alt="logo" />
            </a>

            <!-- Desktop Actions -->
            <div class="navbar__actions">

                <!-- Bell -->
                <div class="navbar__action-wrap" ref="bellRef">
                    <div class="tip-wrap">
                        <button class="navbar__btn" :class="{ 'navbar__btn--active': dropdownOpen }"
                            @click="toggleDropdown" aria-label="Notifications">
                            <span class="navbar__btn-glow"></span>
                            <i class="ti ti-bell"></i>
                            <span class="navbar__badge" v-if="notifCount > 0">{{ notifCount }}</span>
                        </button>
                        <div class="tip-box">
                            <div class="tip-arrow"></div>
                            <span>Notifications</span>
                        </div>
                    </div>

                    <transition name="dropdown">
                        <div class="navbar__dropdown" v-if="dropdownOpen">
                            <div class="navbar__dropdown-header">
                                <span>Notifications</span>
                                <button v-if="notifications.length > 0" class="navbar__dropdown-clear"
                                    @click="clearNotifs">Clear all</button>
                            </div>
                            <ul class="navbar__dropdown-list">
                                <li v-for="(notif, i) in notifications" :key="i" class="navbar__notif-item">
                                    <span class="navbar__notif-dot"></span>
                                    <div>
                                        <p class="navbar__notif-title">{{ notif.title }}</p>
                                        <p class="navbar__notif-time">{{ notif.time }}</p>
                                    </div>
                                </li>
                                <!-- Empty state -->
                                <li v-if="notifications.length === 0" class="navbar__notif-empty">
                                    <i class="ti ti-bell-off navbar__notif-empty-icon"></i>
                                    <p class="navbar__notif-empty-text">No notifications</p>
                                    <p class="navbar__notif-empty-sub">You're all caught up!</p>
                                </li>
                            </ul>
                            <a v-if="notifications.length > 0" href="#" class="navbar__dropdown-footer">View all
                                notifications →</a>
                        </div>
                    </transition>
                </div>

                <!-- Divider -->
                <span class="navbar__divider"></span>

                <!-- Help -->
                <div class="tip-wrap">
                    <a href="/help-line">
                        <button class="navbar__btn" aria-label="Help">
                            <span class="navbar__btn-glow"></span>
                            <i class="ti ti-help"></i>
                        </button>
                    </a>
                    <div class="tip-box">
                        <div class="tip-arrow"></div>
                        <span>Help</span>
                    </div>
                </div>

                <!-- Logout -->
                <div class="tip-wrap">
                    <button class="navbar__btn navbar__btn--logout" aria-label="Logout" @click="handleLogout">
                        <span class="navbar__btn-glow"></span>
                        <i class="ti ti-logout"></i>
                    </button>
                    <div class="tip-box">
                        <div class="tip-arrow"></div>
                        <span>Logout</span>
                    </div>
                </div>

                <!-- Mobile Toggle -->
                <button class="navbar__hamburger" :class="{ 'navbar__hamburger--open': mobileOpen }"
                    @click="mobileOpen = !mobileOpen" aria-label="Menu">
                    <span></span><span></span><span></span>
                </button>
            </div>
        </div>

        <!-- Backdrop -->
        <transition name="fade">
            <div class="navbar__backdrop" v-if="mobileOpen" @click="mobileOpen = false"></div>
        </transition>

        <!-- Side Drawer -->
        <transition name="sidedrawer">
            <div class="navbar__sidedrawer" v-if="mobileOpen">

                <!-- Drawer Header -->
                <div class="navbar__sidedrawer-header">
                    <div class="navbar__sidedrawer-logo">
                        <img src="~/assets/Logo/Logo/GCC-School-Logo-White.jpeg" alt="logo" />

                    </div>
                    <button class="navbar__sidedrawer-close" @click="mobileOpen = false" aria-label="Close">
                        <i class="ti ti-x"></i>
                    </button>
                </div>

                <!-- Drawer Body -->
                <div class="navbar__sidedrawer-body">
                    <p class="navbar__sidedrawer-label">Navigation</p>

                    <a href="#" class="navbar__sidedrawer-item" @click="mobileOpen = false">
                        <span class="navbar__sidedrawer-icon navbar__sidedrawer-icon--bell">
                            <i class="ti ti-bell"></i>
                        </span>
                        <span class="navbar__sidedrawer-text">Notifications</span>
                        <span class="navbar__badge navbar__badge--inline" v-if="notifCount > 0">{{ notifCount }}</span>
                        <i class="ti ti-chevron-right navbar__sidedrawer-arrow"></i>
                    </a>

                    <a href="/help-line" class="navbar__sidedrawer-item" @click="mobileOpen = false">
                        <span class="navbar__sidedrawer-icon navbar__sidedrawer-icon--help">
                            <i class="ti ti-help"></i>
                        </span>
                        <span class="navbar__sidedrawer-text">Help & Support</span>
                        <i class="ti ti-chevron-right navbar__sidedrawer-arrow"></i>
                    </a>

                    <div class="navbar__sidedrawer-divider"></div>

                    <a href="#" class="navbar__sidedrawer-item navbar__sidedrawer-item--danger"
                        @click="() => { mobileOpen = false; handleLogout(); }">
                        <span class="navbar__sidedrawer-icon navbar__sidedrawer-icon--logout">
                            <i class="ti ti-logout"></i>
                        </span>
                        <span class="navbar__sidedrawer-text">Logout</span>
                        <i class="ti ti-chevron-right navbar__sidedrawer-arrow"></i>
                    </a>
                </div>

                <!-- Drawer Footer -->
                <div class="navbar__sidedrawer-footer">
                    <div class="navbar__sidedrawer-user">
                        <div class="navbar__sidedrawer-avatar">A</div>
                        <div>
                            <p class="navbar__sidedrawer-username">Alex Johnson</p>
                            <p class="navbar__sidedrawer-email">alex@example.com</p>
                        </div>
                    </div>
                </div>

            </div>
        </transition>
    </nav>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from "vue";
import { useAuth } from '~/composables/useAuth' // add auth composable


export default defineComponent({
    name: "ProfileHeader",
    setup() {
        const isScrolled = ref(false);
        const dropdownOpen = ref(false);
        const mobileOpen = ref(false);
        const bellRef = ref<HTMLElement | null>(null);
        const notifCount = ref(0);

        // auth state and helpers
        const { isAuthenticated, logout, init } = useAuth();

        const notifications = ref<{ title: string; time: string }[]>([]);

        const toggleDropdown = () => { dropdownOpen.value = !dropdownOpen.value; };

        const clearNotifs = () => {
            notifications.value = [];
            notifCount.value = 0;
            dropdownOpen.value = false;
        };

        const handleScroll = () => { isScrolled.value = window.scrollY > 10; };

        const handleClickOutside = (e: MouseEvent) => {
            if (bellRef.value && !bellRef.value.contains(e.target as Node)) {
                dropdownOpen.value = false;
            }
        };

        const handleKeydown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') mobileOpen.value = false;
        };

        onMounted(() => {
            window.addEventListener("scroll", handleScroll);
            document.addEventListener("click", handleClickOutside);
            document.addEventListener("keydown", handleKeydown);

            // set initial auth state
            init();
        });

        onUnmounted(() => {
            window.removeEventListener("scroll", handleScroll);
            document.removeEventListener("click", handleClickOutside);
            document.removeEventListener("keydown", handleKeydown);
        });

        const handleLogout = () => {
            logout();
            window.location.href = '/login';
        };

        return {
            isScrolled, dropdownOpen, mobileOpen, bellRef,
            notifCount, notifications, toggleDropdown, clearNotifs,
            handleLogout, isAuthenticated
        };
    },
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&display=swap');

/* ── Base ── */
.navbar {
    position: sticky;
    top: 0;
    z-index: 1000;
    font-family: 'DM Sans', sans-serif;
    background: #020103;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    transition: box-shadow 0.3s ease, background 0.3s ease;
}

.navbar--scrolled {
    background: rgba(9, 10, 15, 0.97);
    box-shadow: 0 4px 40px rgba(0, 0, 0, 0.5);
}

.navbar__inner {
    max-width: 1350px;
    margin: 0 auto;
    padding: 0 1.5rem;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    box-sizing: border-box;
}

/* ── Logo ── */
.navbar__logo {
    position: relative;
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    flex-shrink: 0;
}

.navbar__logo img {
    height: 70px;

    border-radius: 10px;
    position: relative;
    z-index: 1;
    transition: transform 0.3s ease;
}

.navbar__logo-ring {
    position: absolute;
    inset: -3px;
    border-radius: 13px;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 0;
}

.navbar__logo:hover .navbar__logo-ring {
    opacity: 1;
}

/* ── Actions ── */
.navbar__actions {
    display: flex;
    align-items: center;
    gap: 4px;
}

.navbar__divider {
    width: 1px;
    height: 22px;
    background: rgba(255, 255, 255, 0.1);
    margin: 0 8px;
}

/* ══════════════════════════════════
   TOOLTIP WRAPPER
══════════════════════════════════ */
.tip-wrap {
    position: relative;
    display: inline-flex;
}

/* Tooltip box — sits BELOW the icon */
.tip-box {
    position: absolute;
    top: calc(100% + 14px);
    left: 50%;
    transform: translateX(-50%) scale(0.88);
    transform-origin: top center;
    background: #a13e99;
    color: #ffffff;
    font-size: 0.72rem;
    font-weight: 500;
    white-space: nowrap;
    padding: 6px 11px;
    border-radius: 8px;
    border: 1px solid #a13e99;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(161, 62, 153, 0.15);
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.16s ease, transform 0.16s ease;
    z-index: 9999;
    letter-spacing: 0.01em;
}

/* Arrow pointing UP toward the icon */
.tip-arrow {
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid #a13e99;
}

.tip-arrow::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid #a13e99;
}

/* Show on hover */
.tip-wrap:hover .tip-box {
    opacity: 1;
    transform: translateX(-50%) scale(1);
}

/* ── Icon Buttons ── */
.navbar__btn {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 10px;
    border: 1px solid transparent;
    background: transparent;
    color: #ffffff;
    cursor: pointer;
    transition: color 0.2s, background 0.2s, border-color 0.2s, transform 0.15s;
    overflow: hidden;
}

.navbar__btn i {
    font-size: 1.35rem;
    position: relative;
    z-index: 1;
}

.navbar__btn-glow {
    position: absolute;
    inset: 0;
    border-radius: 10px;
    background: radial-gradient(circle at center, rgba(161, 62, 153, 0.28), transparent 70%);
    opacity: 0;
    transition: opacity 0.2s;
    pointer-events: none;
}

.navbar__btn:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.07);
    border-color: rgba(255, 255, 255, 0.1);
    transform: translateY(-1px);
}

.navbar__btn:hover .navbar__btn-glow {
    opacity: 1;
}

.navbar__btn--active {
    color: #c966c4;
    background: rgba(161, 62, 153, 0.1);
    border-color: rgba(161, 62, 153, 0.3);
}

.navbar__btn--logout:hover {
    color: #f87171;
    background: rgba(248, 113, 113, 0.08);
    border-color: rgba(248, 113, 113, 0.2);
}

/* ── Badge ── */
.navbar__badge {
    position: absolute;
    top: 5px;
    right: 5px;
    min-width: 16px;
    height: 16px;
    border-radius: 20px;
    background: red;
    color: #fff;
    font-size: 0.6rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 3px;
    border: 2px solid #020103;
    z-index: 2;
}

.navbar__badge--inline {
    position: static;
    border: none;
    margin-left: auto;
    padding: 2px 7px;
}

.navbar__action-wrap {
    position: relative;
}

/* ── Dropdown ── */
.navbar__dropdown {
    position: absolute;
    top: calc(100% + 12px);
    right: 0;
    width: 300px;

    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 14px;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(161, 62, 153, 0.15);
    background: #160F19;
}

.navbar__dropdown-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 16px 10px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    color: #fff;
    font-size: 0.85rem;
    font-weight: 500;
}

.navbar__dropdown-clear {
    background: none;
    border: none;
    color: #a13e99;
    font-size: 0.75rem;
    cursor: pointer;
    font-family: inherit;
    transition: color 0.2s;
}

.navbar__dropdown-clear:hover {
    color: #d472d0;
}

.navbar__dropdown-list {
    list-style: none;
    margin: 0;
    padding: 6px 0;
}

.navbar__notif-item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    padding: 10px 16px;
    transition: background 0.15s;
    cursor: pointer;
}

.navbar__notif-item:hover {
    background: rgba(255, 255, 255, 0.04);
}

.navbar__notif-dot {
    flex-shrink: 0;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #a13e99;
    margin-top: 5px;
    box-shadow: 0 0 8px #a13e99;
}

.navbar__notif-title {
    margin: 0;
    font-size: 0.82rem;
    color: rgba(255, 255, 255, 0.85);
    line-height: 1.4;
}

.navbar__notif-time {
    margin: 3px 0 0;
    font-size: 0.72rem;
    color: rgba(255, 255, 255, 0.35);
}

.navbar__dropdown-footer {
    display: block;
    text-align: center;
    padding: 10px 16px;
    border-top: 1px solid rgba(255, 255, 255, 0.06);
    color: #a13e99;
    font-size: 0.78rem;
    text-decoration: none;
    transition: color 0.2s, background 0.2s;
}

.navbar__dropdown-footer:hover {
    color: #d472d0;
    background: rgba(99, 102, 241, 0.05);
}

/* ── Empty notification state ── */
.navbar__notif-empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 32px 16px;
    gap: 6px;
    list-style: none;
}

.navbar__notif-empty-icon {
    font-size: 2rem;
    color: rgba(255, 255, 255, 0.18);
    margin-bottom: 4px;
}

.navbar__notif-empty-text {
    margin: 0;
    font-size: 0.85rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.5);
}

.navbar__notif-empty-sub {
    margin: 0;
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.25);
}

/* ── Hamburger ── */
.navbar__hamburger {
    display: none;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    width: 40px;
    height: 40px;
    background: none;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    cursor: pointer;
    padding: 10px;
    margin-left: 4px;
    transition: border-color 0.2s, background 0.2s;
}

.navbar__hamburger:hover {
    background: rgba(255, 255, 255, 0.06);
    border-color: rgba(255, 255, 255, 0.2);
}

.navbar__hamburger span {
    display: block;
    height: 1.5px;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 2px;
    transition: transform 0.3s ease, opacity 0.3s ease;
}

.navbar__hamburger--open span:nth-child(1) {
    transform: translateY(6.5px) rotate(45deg);
}

.navbar__hamburger--open span:nth-child(2) {
    opacity: 0;
}

.navbar__hamburger--open span:nth-child(3) {
    transform: translateY(-6.5px) rotate(-45deg);
}

/* ── Backdrop ── */
.navbar__backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.65);
    z-index: 1001;
    backdrop-filter: blur(3px);
}

/* ══════════════════════════════════
   SIDE DRAWER
══════════════════════════════════ */
.navbar__sidedrawer {
    position: fixed;
    top: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    background: #0a0b11;
    border-left: 1px solid rgba(255, 255, 255, 0.07);
    box-shadow: -24px 0 60px rgba(0, 0, 0, 0.8);
    z-index: 1002;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.navbar__sidedrawer-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px 18px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.07);
    flex-shrink: 0;
}

.navbar__sidedrawer-logo {
    display: flex;
    align-items: center;
    gap: 10px;
}

.navbar__sidedrawer-logo img {

    height: 60px;
    border-radius: 8px;
}

.navbar__sidedrawer-logo span {
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 0.02em;
}

.navbar__sidedrawer-close {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    border-radius: 9px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.04);
    color: rgba(255, 255, 255, 0.55);
    cursor: pointer;
    transition: background 0.2s, color 0.2s, border-color 0.2s, transform 0.25s ease;
}

.navbar__sidedrawer-close i {
    font-size: 1.05rem;
}

.navbar__sidedrawer-close:hover {
    background: rgba(248, 113, 113, 0.1);
    border-color: rgba(248, 113, 113, 0.35);
    color: #f87171;
    transform: rotate(90deg);
}

.navbar__sidedrawer-body {
    flex: 1;
    padding: 18px 12px;
    overflow-y: auto;
}

.navbar__sidedrawer-label {
    font-size: 0.67rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.22);
    margin: 0 0 8px 8px;
}

.navbar__sidedrawer-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 10px;
    border-radius: 11px;
    text-decoration: none;
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.88rem;
    font-weight: 400;
    margin-bottom: 3px;
    transition: background 0.18s, color 0.18s;
}

.navbar__sidedrawer-item:hover {
    background: rgba(255, 255, 255, 0.055);
    color: #fff;
}

.navbar__sidedrawer-text {
    flex: 1;
}

.navbar__sidedrawer-arrow {
    font-size: 0.82rem;
    color: rgba(255, 255, 255, 0.18);
    transition: transform 0.2s, color 0.2s;
}

.navbar__sidedrawer-item:hover .navbar__sidedrawer-arrow {
    transform: translateX(3px);
    color: rgba(255, 255, 255, 0.45);
}

.navbar__sidedrawer-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    border-radius: 9px;
    flex-shrink: 0;
}

.navbar__sidedrawer-icon i {
    font-size: 1.1rem;
}

.navbar__sidedrawer-icon--bell {
    background: rgba(161, 62, 153, 0.12);
    color: #c966c4;
}

.navbar__sidedrawer-icon--help {
    background: rgba(34, 197, 94, 0.1);
    color: #4ade80;
}

.navbar__sidedrawer-icon--logout {
    background: rgba(248, 113, 113, 0.1);
    color: #f87171;
}

.navbar__sidedrawer-item--danger {
    color: rgba(255, 255, 255, 0.45);
}

.navbar__sidedrawer-item--danger:hover {
    background: rgba(248, 113, 113, 0.07);
    color: #f87171;
}

.navbar__sidedrawer-divider {
    height: 1px;
    background: rgba(255, 255, 255, 0.06);
    margin: 8px 4px;
}

.navbar__sidedrawer-footer {
    padding: 14px 16px;
    border-top: 1px solid rgba(255, 255, 255, 0.07);
    flex-shrink: 0;
}

.navbar__sidedrawer-user {
    display: flex;
    align-items: center;
    gap: 11px;
}

.navbar__sidedrawer-avatar {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: linear-gradient(135deg, #a13e99, #d45fcf);
    color: #fff;
    font-size: 0.9rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.3);
}

.navbar__sidedrawer-username {
    margin: 0;
    font-size: 0.84rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.9);
}

.navbar__sidedrawer-email {
    margin: 2px 0 0;
    font-size: 0.71rem;
    color: rgba(255, 255, 255, 0.32);
}

/* ── Transitions ── */
.dropdown-enter-active,
.dropdown-leave-active {
    transition: opacity 0.2s ease, transform 0.2s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
    opacity: 0;
    transform: translateY(-6px);
}

.sidedrawer-enter-active {
    transition: transform 0.32s cubic-bezier(0.16, 1, 0.3, 1);
}

.sidedrawer-leave-active {
    transition: transform 0.22s cubic-bezier(0.4, 0, 1, 1);
}

.sidedrawer-enter-from,
.sidedrawer-leave-to {
    transform: translateX(100%);
}

.fade-enter-active {
    transition: opacity 0.25s ease;
}

.fade-leave-active {
    transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

/* ── Responsive ── */
@media (max-width: 640px) {
    .navbar__divider {
        display: none;
    }

    .navbar__btn {
        display: none;
    }

    .navbar__hamburger {
        display: flex;
    }

    .tip-wrap {
        display: none;
    }
}
</style>