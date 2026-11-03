/**
 * Dr. Sadek Mohsen Almaswari - Official Website JS
 * Main Language: Arabic (RTL) with Bilingual Switcher (AR / EN)
 * Keeps Netlify Forms, Netlify Identity & Decap CMS GitHub API News Loader
 */

(function () {
    // Set default language to Arabic ('ar')
    const savedLang = localStorage.getItem('dr_sadek_lang') || 'ar';
    applyLanguage(savedLang);
})();

function applyLanguage(lang) {
    const htmlEl = document.documentElement;
    htmlEl.setAttribute('lang', lang);
    htmlEl.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    localStorage.setItem('dr_sadek_lang', lang);

    // Update all text elements with data-ar / data-en
    document.querySelectorAll('[data-ar][data-en]').forEach(el => {
        const text = lang === 'ar' ? el.getAttribute('data-ar') : el.getAttribute('data-en');
        if (text !== null) {
            el.innerHTML = text;
        }
    });

    // Update form placeholders
    document.querySelectorAll('[data-placeholder-ar][data-placeholder-en]').forEach(el => {
        el.placeholder = lang === 'ar'
            ? el.getAttribute('data-placeholder-ar')
            : el.getAttribute('data-placeholder-en');
    });

    // Update language toggle button label
    document.querySelectorAll('.lang-switch-btn').forEach(btn => {
        btn.innerHTML = lang === 'ar'
            ? `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> <span>English</span>`
            : `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> <span>العربية</span>`;
    });
}

window.toggleSiteLanguage = function () {
    const current = document.documentElement.getAttribute('lang') || 'ar';
    const next = current === 'ar' ? 'en' : 'ar';
    applyLanguage(next);
};

document.addEventListener('DOMContentLoaded', () => {
    // Re-apply language once DOM is ready
    const currentLang = localStorage.getItem('dr_sadek_lang') || 'ar';
    applyLanguage(currentLang);

    // 1. Mobile Hamburger Menu
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // 2. CV Tabs Switching (on Homepage / CV section)
    const cvTabButtons = document.querySelectorAll('.cv-tab-trigger');
    const cvTabPanels = document.querySelectorAll('.cv-tab-panel');

    cvTabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-tab');
            cvTabButtons.forEach(b => b.classList.remove('active'));
            cvTabPanels.forEach(p => p.classList.remove('active'));

            btn.classList.add('active');
            const targetPanel = document.getElementById(targetId);
            if (targetPanel) targetPanel.classList.add('active');
        });
    });

    // 3. Success Cases Filter Tabs (on Homepage)
    const caseTabButtons = document.querySelectorAll('.case-tab-btn');
    const caseBoxes = document.querySelectorAll('.case-box[data-case-cat]');

    caseTabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const cat = btn.getAttribute('data-filter');
            caseTabButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            caseBoxes.forEach(box => {
                if (cat === 'all' || box.getAttribute('data-case-cat') === cat) {
                    box.style.display = 'block';
                } else {
                    box.style.display = 'none';
                }
            });
        });
    });

    // 4. Dynamic News Loader (for news.html or #news-feed)
    if (document.getElementById('news-feed')) {
        loadNews('news-feed');
    }
});

/**
 * Fetches posts from the GitHub repository (Decap CMS / Netlify)
 */
async function loadNews(containerId) {
    const newsFeed = document.getElementById(containerId);
    if (!newsFeed) return;

    const repoOwner = "alaaddinsadeq";
    const repoName = "dr-sadek-portfolio";
    const folderPath = "posts";

    try {
        const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/contents/${folderPath}`);
        if (!response.ok) throw new Error("GitHub API unreachable");
        const files = await response.json();

        newsFeed.innerHTML = '';
        const mdFiles = files.filter(f => f.name.endsWith('.md')).reverse();

        for (const file of mdFiles) {
            const postData = await fetchPostContent(file.download_url);
            renderPost(postData, newsFeed);
        }
    } catch (error) {
        console.warn("Using fallback news content:", error);
    }
}

async function fetchPostContent(url) {
    const res = await fetch(url);
    const text = await res.text();

    const title = text.match(/title:\s*"(.*)"/) || text.match(/title:\s*(.*)/);
    const date = text.match(/date:\s*(.*)/);
    const desc = text.match(/description:\s*"(.*)"/) || text.match(/description:\s*(.*)/);

    return {
        title: title ? title[1].replace(/['"]/g, '') : "مقال طبي",
        date: date ? date[1].split('T')[0].replace(/['"]/g, '') : "2026",
        description: desc ? desc[1].replace(/['"]/g, '') : "",
    };
}

function renderPost(post, container) {
    const article = document.createElement('article');
    article.className = 'news-card';
    article.innerHTML = `
        <div class="news-image"></div>
        <div class="news-content">
            <span class="news-date">${post.date}</span>
            <h3 class="news-title">${post.title}</h3>
            <p>${post.description}</p>
            <a href="news.html" class="read-more" data-ar="اقرأ المقال كاملاً ←" data-en="Read Full Post →">اقرأ المقال كاملاً ←</a>
        </div>
    `;
    container.appendChild(article);
}
