document.addEventListener('DOMContentLoaded', () => {
    // --- 1. NAVIGATION & CORE VARIABLES ---
    const sideNav = document.getElementById('side-nav');
    const navToggle = document.getElementById('nav-toggle');
    const navItems = document.querySelectorAll('.nav-item');
    const tabContents = document.querySelectorAll('.tab-content');
    
    const downloadDialog = document.getElementById('download-dialog');
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const gameWindow = document.getElementById('game-window');
    const gameFrame = document.getElementById('game-frame');
    const titleDisplay = document.getElementById('now-playing-title');

    // --- 2. GAME ENGINE (Unified Download + Window) ---
    window.openGame = (url, gameTitle = "Game") => {
        if (!downloadDialog) return;

        // Show progress bar dialog
        downloadDialog.showModal();
        let progress = 0;
        
        const interval = setInterval(() => {
            progress += Math.random() * 25;
            const displayProgress = Math.min(Math.round(progress), 100);
            
            if (progressBar) progressBar.style.width = displayProgress + '%';
            if (progressText) progressText.innerText = displayProgress + '%';

            if (progress >= 100) {
                clearInterval(interval);
                downloadDialog.close();
                
                // Reset progress tracking graphics safely
                if (progressBar) progressBar.style.width = '0%';
                if (progressText) progressText.innerText = '0%';
                
                // Handle Cloaking or In-App Window
                if (localStorage.getItem('hub_cloak') === 'true') {
                    const win = window.open();
                    win.document.body.style.margin = '0';
                    win.document.body.style.height = '100vh';
                    win.document.body.innerHTML = `<iframe src="${url}" style="width:100%; height:100%; border:none;"></iframe>`;
                    win.document.title = "Google Drive";
                } else {
                    if (titleDisplay) titleDisplay.innerText = "Playing: " + gameTitle;
                    if (gameWindow) gameWindow.style.display = 'flex';
                    if (gameFrame) gameFrame.src = url;
                }
            }
        }, 300);
    };

    window.closeGameWindow = () => {
        if (gameWindow) gameWindow.style.display = 'none';
        if (gameFrame) gameFrame.src = ''; // Stops the game execution in the background
    };

    window.toggleFullScreen = () => {
        if (!gameFrame) return;
        if (gameFrame.requestFullscreen) gameFrame.requestFullscreen();
        else if (gameFrame.webkitRequestFullscreen) gameFrame.webkitRequestFullscreen();
    };

// --- AUTOMATIC GAME CARD ENGINE ---
    function initGameCards() {
        document.querySelectorAll('.game-card').forEach(card => {
            card.addEventListener('click', (e) => {
                // This stops the browser from trying to follow a link if there is one
                e.preventDefault();
                
                const url = card.getAttribute('data-url');
                const titleElement = card.querySelector('p');
                const gameTitle = titleElement ? titleElement.textContent : "Game";

                if (!url) return; 

                // Route 1: If Tab Cloaking is ON in settings
                if (localStorage.getItem('hub_cloak') === 'true') {
                    const win = window.open();
                    if (win) {
                        win.document.body.style.margin = '0';
                        win.document.body.style.height = '100vh';
                        win.document.body.innerHTML = `<iframe src="${url}" style="width:100%; height:100%; border:none;"></iframe>`;
                        win.document.title = "Google Drive";
                    }
                } else {
                    // Route 2: Normal behavior - trigger the Download Progress + In-App Window
                    window.openGame(url, gameTitle);
                }
            });
        });
    }

    // Sidebar toggler
    if (navToggle) {
        navToggle.onclick = () => sideNav.classList.toggle('collapsed');
    }

    // Navigation item panel switching
    navItems.forEach(btn => {
        btn.onclick = () => {
            navItems.forEach(el => el.classList.remove('active'));
            tabContents.forEach(el => el.classList.remove('active'));
            btn.classList.add('active');
            const target = document.getElementById(btn.getAttribute('data-target'));
            if (target) target.classList.add('active');
        };
    });

    // Reset System Data button
    const clearDataBtn = document.getElementById('clear-data-btn');
    if (clearDataBtn) {
        clearDataBtn.onclick = () => {
            if (confirm("Are you sure you want to reset everything? This will clear all your settings and data.")) {
                localStorage.clear();
                location.reload();
            }
        };
    }

    // --- 3. SEARCH UTILS ---
    const searchInput = document.getElementById('game-search');
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            const filter = searchInput.value.toLowerCase();
            document.querySelectorAll('.game-card').forEach(card => {
                const title = card.querySelector('p').textContent.toLowerCase();
                card.style.display = title.includes(filter) ? "flex" : "none";
            });
        });
    }

    // --- 4. SETTINGS MODAL & PROFILE AVATARS ---
    const modal = document.getElementById('settings-modal');
    const avatarUpload = document.getElementById('avatar-upload');
    const importBtn = document.getElementById('import-btn');
    const avatarPreview = document.getElementById('profile-avatar');
    const avatarInput = document.getElementById('avatar-input');
    
    // Custom Cursor Variables
    const cursorUpload = document.getElementById('cursor-upload');
    const cursorInput = document.getElementById('cursor-input');
    const cursorFollower = document.getElementById('custom-cursor-follower');
    const resetCursorBtn = document.getElementById('reset-cursor');

    const settingsBtn = document.getElementById('settings-btn');
    const closeBtnTop = document.getElementById('close-modal-top');
    
    if (settingsBtn) settingsBtn.onclick = () => modal.showModal();
    if (closeBtnTop) closeBtnTop.onclick = () => modal.close();

    if (importBtn) importBtn.onclick = () => avatarUpload.click();
    
    if (avatarUpload) {
        avatarUpload.onchange = (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    if (avatarInput) avatarInput.value = event.target.result;
                    if (avatarPreview) avatarPreview.src = event.target.result;
                };
                reader.readAsDataURL(file);
            }
        };
    }

    // --- CUSTOM CURSOR ENGINE ---
    if (cursorUpload) {
        cursorUpload.onchange = (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    if (cursorInput) cursorInput.value = event.target.result;
                    showToast("Custom cursor prepared! Save to apply.");
                };
                reader.readAsDataURL(file);
            }
        };
    }

    function initCustomCursor(base64Data) {
        if (!base64Data || !cursorFollower) return;
        
        cursorFollower.src = base64Data;
        cursorFollower.style.display = 'block';
        document.body.classList.add('hide-default-cursor');

        // Track mouse coordinates
        window.addEventListener('mousemove', (e) => {
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        });
    }

    if (resetCursorBtn) {
        resetCursorBtn.onclick = () => {
            localStorage.removeItem('hub_cursor');
            if (cursorInput) cursorInput.value = '';
            if (cursorFollower) {
                cursorFollower.style.display = 'none';
                cursorFollower.src = 'system/rounded.png';
            }
            document.body.classList.remove('hide-default-cursor');
            showToast("Cursor reset to system default.");
        };
    }

    // --- VISUAL STYLING ENGINE ---
    const applyTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('hub_theme', theme);
    };

    const applyLiquidGlass = (enabled) => {
        const elementsToGlass = document.querySelectorAll('.side-nav, .game-card, dialog, .chat-container, .browser-ui');
        elementsToGlass.forEach(el => {
            if (enabled) {
                el.classList.add('liquid-glass-active');
            } else {
                el.classList.remove('liquid-glass-active');
            }
        });
    };

    const applyHighContrast = (enabled) => {
        if (enabled) {
            document.documentElement.setAttribute('data-contrast', 'high');
        } else {
            document.documentElement.removeAttribute('data-contrast');
        }
    };

    // --- SAVE ALL SYSTEM CONFIGURATIONS ---
    const saveSettingsBtn = document.getElementById('save-settings');
    if (saveSettingsBtn) {
        saveSettingsBtn.onclick = () => {
            const name = document.getElementById('username-input').value;
            const color = document.getElementById('color-input').value;
            const theme = document.getElementById('theme-select').value;
            const avatarData = avatarInput ? avatarInput.value : '';
            const cursorData = cursorInput ? cursorInput.value : '';
            const isCloak = document.getElementById('cloak-toggle').checked;
            const isGlass = document.getElementById('glass-toggle').checked;
            const isHighContrast = document.getElementById('high-contrast-toggle').checked;
            const sidePos = document.getElementById('sidebar-pos-select').value;
localStorage.setItem('hub_side_pos', sidePos);
document.body.setAttribute('data-side', sidePos);
            
            // Save settings values to LocalStorage
            localStorage.setItem('hub_cloak', isCloak);
            localStorage.setItem('hub_glass', isGlass);
            localStorage.setItem('hub_high_contrast', isHighContrast);

            if (name) {
                const welcomeText = document.getElementById('welcome-text');
                if (welcomeText) welcomeText.innerText = `Welcome, ${name}!`;
                localStorage.setItem('hub_name', name);
            }
            if (avatarData && avatarPreview) {
                avatarPreview.src = avatarData;
                localStorage.setItem('hub_avatar', avatarData);
            }
            if (cursorData) {
                localStorage.setItem('hub_cursor', cursorData);
                initCustomCursor(cursorData);
            }

            // Apply style parameters immediately
            applyTheme(theme);
            applyLiquidGlass(isGlass);
            applyHighContrast(isHighContrast);

            document.documentElement.style.setProperty('--accent', color);
            localStorage.setItem('hub_color', color);
            
            showToast("Settings Saved!");
            modal.close();
        };
    }

    // --- 5. NOTIFICATION TOASTS ---
    window.showToast = (message) => {
        const container = document.getElementById('notification-container');
        if (!container) return;
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `<span>🔔</span> <span>${message}</span>`;
        container.appendChild(toast);
        
        setTimeout(() => {
            toast.classList.add('fade-out');
            toast.addEventListener('animationend', () => toast.remove());
        }, 3000);
    };

    // --- 6. OPTIMIZED WIDGET ENGINE ---
    function startWidgets() {
        setInterval(() => {
            const clockEl = document.getElementById('live-clock');
            if (clockEl) {
                clockEl.innerText = new Date().toLocaleTimeString([], { 
                    hour: '2-digit', 
                    minute: '2-digit', 
                    second: '2-digit' 
                });
            }
        }, 1000);

        if (navigator.getBattery) {
            navigator.getBattery().then(batt => {
                const levelEl = document.getElementById('battery-level');
                const iconEl = document.getElementById('battery-icon');

                const updateBattery = () => {
                    if (levelEl) levelEl.innerText = `${Math.round(batt.level * 100)}%`;
                    if (iconEl) iconEl.innerText = batt.charging ? '⚡' : '🔋';
                };

                updateBattery();
                batt.onlevelchange = updateBattery;
                batt.onchargingchange = updateBattery;
            });
        } else {
            const levelEl = document.getElementById('battery-level');
            if (levelEl) levelEl.innerText = "N/A";
        }
    }

    // --- 7. APP INITIALIZE (LOAD) ---
    function load() {
        const sName = localStorage.getItem('hub_name');
        const sColor = localStorage.getItem('hub_color');
        const sTheme = localStorage.getItem('hub_theme') || 'dark';
        const sAvatar = localStorage.getItem('hub_avatar');
        const sCursor = localStorage.getItem('hub_cursor');
        const sGlass = localStorage.getItem('hub_glass') === 'true';
        const sHighContrast = localStorage.getItem('hub_high_contrast') === 'true';
        const sCloak = localStorage.getItem('hub_cloak') === 'true';
        const sSidePos = localStorage.getItem('hub_side_pos') || 'left';
document.body.setAttribute('data-side', sSidePos);
document.getElementById('sidebar-pos-select').value = sSidePos;

        // Restore textual identities and assets
        if (sName && document.getElementById('welcome-text')) {
            document.getElementById('welcome-text').innerText = `Welcome, ${sName}!`;
            document.getElementById('username-input').value = sName;
        }
        if (sColor) {
            document.documentElement.style.setProperty('--accent', sColor);
            document.getElementById('color-input').value = sColor;
        }
        if (sAvatar && avatarPreview) {
            avatarPreview.src = sAvatar;
            if (avatarInput) avatarInput.value = sAvatar;
        }
        
        // Form field checked statuses initialization
        document.getElementById('cloak-toggle').checked = sCloak;
        document.getElementById('glass-toggle').checked = sGlass;
        document.getElementById('high-contrast-toggle').checked = sHighContrast;

        // Run theme parameters execution
        applyTheme(sTheme);
        const themeSelect = document.getElementById('theme-select');
        if (themeSelect) themeSelect.value = sTheme;

        applyLiquidGlass(sGlass);
        applyHighContrast(sHighContrast);
        if (sCursor) {
            if (cursorInput) cursorInput.value = sCursor;
            initCustomCursor(sCursor);
        }

        startWidgets();
        initGameCards();
        if (typeof initRecentTracker === "function") initRecentTracker();
    }

    load();
});

// --- 8. GLOBAL FOLDER MANAGEMENT ---
function openFolder(folderId) {
    const mainDashboard = document.querySelector('.main-dashboard');
    if (mainDashboard) mainDashboard.classList.add('hidden');
    
    const folder = document.getElementById(folderId);
    if (folder) {
        folder.style.display = 'block';
        folder.classList.add('active');
    }
}

function closeFolder(folderId) {
    const mainDashboard = document.querySelector('.main-dashboard');
    if (mainDashboard) mainDashboard.classList.remove('hidden');
    
    const folder = document.getElementById(folderId);
    if (folder) {
        folder.style.display = 'none';
        folder.classList.remove('active');
    }
}

window.onload = function() {
    const dialog = document.getElementById("myModal");
    dialog.showModal(); // Opens the dialog automatically as a modal
};

