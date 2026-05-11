document.addEventListener('DOMContentLoaded', () => {
    // --- 1. NAVIGATION ---
    const sideNav = document.getElementById('side-nav');
    const navToggle = document.getElementById('nav-toggle');
    const navItems = document.querySelectorAll('.nav-item');
    const tabContents = document.querySelectorAll('.tab-content');

    navToggle.onclick = () => sideNav.classList.toggle('collapsed');

    navItems.forEach(btn => {
        btn.onclick = () => {
            navItems.forEach(el => el.classList.remove('active'));
            tabContents.forEach(el => el.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById(btn.getAttribute('data-target')).classList.add('active');
        };
    });

    // --- 2. SEARCH & GAMES ---
    const searchInput = document.getElementById('game-search');
    const gameCards = document.querySelectorAll('.game-card');

    gameCards.forEach(card => {
        card.onclick = () => {
            const url = card.getAttribute('data-url');
            if (url) window.open(url, '_blank');
        };
    });

    if (searchInput) {
        searchInput.addEventListener('input', () => {
            const filter = searchInput.value.toLowerCase();
            gameCards.forEach(card => {
                const title = card.querySelector('p').textContent.toLowerCase();
                card.style.display = title.includes(filter) ? "flex" : "none";
            });
        });
    }

    // --- 3. SETTINGS & IMAGE IMPORT ---
    const modal = document.getElementById('settings-modal');
    const avatarUpload = document.getElementById('avatar-upload');
    const importBtn = document.getElementById('import-btn');
    const avatarPreview = document.getElementById('profile-avatar');
    const avatarInput = document.getElementById('avatar-input');

    document.getElementById('settings-btn').onclick = () => modal.showModal();
    document.getElementById('close-modal-top').onclick = () => modal.close();

    // Handle Image Import
    if (importBtn) importBtn.onclick = () => avatarUpload.click();
    
    if (avatarUpload) {
        avatarUpload.onchange = (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    avatarInput.value = event.target.result; // Set DataURL to hidden input
                    avatarPreview.src = event.target.result;
                };
                reader.readAsDataURL(file);
            }
        };
    }

    // Theme Applier
    const applyTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('hub_theme', theme);
    };

    // Save Settings
    document.getElementById('save-settings').onclick = () => {
        const name = document.getElementById('username-input').value;
        const color = document.getElementById('color-input').value;
        const theme = document.getElementById('theme-select').value;
        const avatarData = avatarInput.value;

        if (name) {
            document.getElementById('welcome-text').innerText = `Welcome, ${name}!`;
            localStorage.setItem('hub_name', name);
        }
        if (avatarData) {
            avatarPreview.src = avatarData;
            localStorage.setItem('hub_avatar', avatarData);
        }

        applyTheme(theme);
        document.documentElement.style.setProperty('--accent', color);
        localStorage.setItem('hub_color', color);
        
        modal.close();
    };

    // --- 4. INITIALIZE (LOAD) ---
    function load() {
        const sName = localStorage.getItem('hub_name');
        const sColor = localStorage.getItem('hub_color');
        const sTheme = localStorage.getItem('hub_theme') || 'dark';
        const sAvatar = localStorage.getItem('hub_avatar');

        if (sName) document.getElementById('welcome-text').innerText = `Welcome, ${sName}!`;
        if (sColor) document.documentElement.style.setProperty('--accent', sColor);
        if (sAvatar) avatarPreview.src = sAvatar;
        
        applyTheme(sTheme);
        document.getElementById('theme-select').value = sTheme;
    }

    load();
});