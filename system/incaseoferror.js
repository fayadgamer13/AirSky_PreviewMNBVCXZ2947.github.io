document.addEventListener('DOMContentLoaded', () => {
    // --- 1. SELECTORS ---
    const sideNav = document.getElementById('side-nav');
    const navToggle = document.getElementById('nav-toggle');
    const navItems = document.querySelectorAll('.nav-item');
    const tabContents = document.querySelectorAll('.tab-content');
    const modal = document.getElementById('settings-modal');
    const settingsBtn = document.getElementById('settings-btn');
    const closeBtn = document.getElementById('close-modal-top');
    const cursorFollower = document.getElementById('custom-cursor-follower');
    
    // --- 2. NOTIFICATION SYSTEM ---
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

    // --- 3. WIDGETS (Time & Battery) ---
// --- Optimized Battery Widget ---
function startWidgets() {
    // 1. Clock stays the same
    setInterval(() => {
        const clockEl = document.getElementById('live-clock');
        if (clockEl) clockEl.innerText = new Date().toLocaleTimeString();
    }, 1000);

    // 2. Faster Battery Loading
    if (navigator.getBattery) {
        navigator.getBattery().then(batt => {
            const levelEl = document.getElementById('battery-level');
            const iconEl = document.getElementById('battery-icon');

            const update = () => {
                if (levelEl) levelEl.innerText = `${Math.round(batt.level * 100)}%`;
                if (iconEl) iconEl.innerText = batt.charging ? '⚡' : '🔋';
            };

            // Force the update immediately as soon as the promise returns
            update(); 

            // Listen for changes later
            batt.onlevelchange = update;
            batt.onchargingchange = update;
        }).catch(() => {
            // If battery API fails, show "N/A" instead of "Checking..."
            document.getElementById('battery-level').innerText = "N/A";
        });
    } else {
        document.getElementById('battery-level').innerText = "N/A";
    }
}

    // --- 4. RECENTLY PLAYED SYSTEM (FIXED) ---
    function initRecentTracker() {
        const games = document.querySelectorAll('.game-card:not(.folder-card)');
        games.forEach(game => {
            game.addEventListener('click', () => {
                const url = game.getAttribute('data-url');
                if (!url) return;

                const info = {
                    name: game.querySelector('p').innerText,
                    img: game.querySelector('img').src,
                    url: url
                };
                saveToRecent(info);
                
                // Navigate to the game
                window.location.href = url;
            });
        });
        renderRecent();
    }

    function saveToRecent(game) {
        let recent = JSON.parse(localStorage.getItem('recent_games') || '[]');
        // Remove duplicate if it exists, then add to front
        recent = [game, ...recent.filter(g => g.name !== game.name)].slice(0, 4);
        localStorage.setItem('recent_games', JSON.stringify(recent));
    }

    function renderRecent() {
        const container = document.getElementById('recent-played-container');
        const grid = document.getElementById('recent-grid');
        const recent = JSON.parse(localStorage.getItem('recent_games') || '[]');
        
        if (recent.length > 0 && grid) {
            container.style.display = 'block';
            grid.innerHTML = recent.map(g => `
                <div class="game-card" onclick="window.location.href='${g.url}'">
                    <img src="${g.img}">
                    <p>${g.name}</p>
                </div>
            `).join('');
        }
    }

    // --- 5. NAVIGATION ---
    if (navToggle) navToggle.onclick = () => sideNav.classList.toggle('collapsed');

// --- 5. NAVIGATION (Fixed) ---
    navItems.forEach(btn => {
        btn.onclick = () => {
            const targetId = btn.getAttribute('data-target');
            if (!targetId) return;

            // 1. Remove active class from all buttons
            navItems.forEach(i => i.classList.remove('active'));
            
            // 2. Hide ALL tab contents
            tabContents.forEach(t => {
                t.classList.remove('active');
                t.style.display = 'none'; // Force hide
            });

            // 3. Add active class to clicked button
            btn.classList.add('active');

            // 4. Show only the target tab
            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                targetContent.classList.add('active');
                // Use flex for browser, block for others
                targetContent.style.display = (targetId === 'browser-tab-content') ? 'flex' : 'block';
            }
        };
    });

    // --- 6. SETTINGS ---
    if (settingsBtn) settingsBtn.onclick = () => modal.showModal();
    if (closeBtn) closeBtn.onclick = () => modal.close();

    const saveBtn = document.getElementById('save-settings');
    if (saveBtn) {
        saveBtn.onclick = () => {
            localStorage.setItem('hub_name', document.getElementById('username-input').value);
            localStorage.setItem('hub_theme', document.getElementById('theme-select').value);
            localStorage.setItem('hub_color', document.getElementById('color-input').value);
            localStorage.setItem('hub_cloak', document.getElementById('cloak-toggle').checked);
            showToast("Settings Saved!");
            setTimeout(() => location.reload(), 1000);
        };
    }

    // --- 7. CURSOR LOGIC ---
    document.addEventListener('mousemove', (e) => {
        if (cursorFollower && cursorFollower.style.display !== 'none') {
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        }
    });

    // --- FOLDER LOGIC ---
    const folderCards = document.querySelectorAll('.folder-card');
    folderCards.forEach(card => {
        card.onclick = () => {
            const folderId = card.getAttribute('data-folder');
            const folderModal = document.getElementById(folderId);
            if (folderModal) {
                folderModal.showModal();
            }
        };
    });

    // Close buttons for folder modals
    const closeFolderBtns = document.querySelectorAll('.close-folder');
    closeFolderBtns.forEach(btn => {
        btn.onclick = () => {
            btn.closest('dialog').close();
        };
    });

    // --- 8. INITIALIZE ---
    function init() {
        const sName = localStorage.getItem('hub_name');
        const sTheme = localStorage.getItem('hub_theme') || 'dark';
        const sColor = localStorage.getItem('hub_color') || '#ffcc00';
        const sCursor = localStorage.getItem('hub_cursor');

        if (sName) {
            const welcomeText = document.getElementById('welcome-text');
            if (welcomeText) welcomeText.innerText = `Welcome, ${sName}!`;
        }

        document.documentElement.setAttribute('data-theme', sTheme);
        document.documentElement.style.setProperty('--accent', sColor);

        if (sCursor) {
            cursorFollower.src = sCursor;
            cursorFollower.style.display = 'block';
            document.body.classList.add('hide-default-cursor');
        }

        startWidgets();
        initRecentTracker();
    }

    init();
});