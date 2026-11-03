/**
 * Dr. Sadek Mohsen Almaswari - Official Website JS
 * Main Language: Arabic (RTL) with Bilingual Switcher (AR / EN)
 * Includes:
 * - Bilingual Language Switcher (AR/EN)
 * - Click-to-View Success Stories & Cases on Services Page (practice.html)
 * - Modern Interactive Certificate Slider & Fullscreen Lightbox (awards.html)
 * - Keeps Netlify Forms, Netlify Identity & Decap CMS GitHub API News Loader
 */

// Certificate Slider Data (6 Verified Certificates in ./certificate/)
const CERTIFICATES_DATA = [
    {
        src: "certificate/IMG_3381.jpg",
        cmeAr: "10 ساعات تعليم طبي مستمر (10 CME Hours)",
        cmeEn: "Accredited for 10 CME Hours",
        titleAr: "الدورة الجراحية الثالثة لمناظير وجراحات مجرى الهواء المفتوحة",
        titleEn: "The 3rd Endoscopic & Open Airway Surgical Course",
        issuerAr: "الخدمات الطبية الملكية بقوة دفاع البحرين - مركز ولي العهد للتدريب والبحوث الطبية",
        issuerEn: "BDF Royal Medical Services - Crown Prince Center for Training & Medical Research",
        metaAr: "ورشة عمل وتدريب جراحي متقدم على جراحات مجرى الهواء بالمنظار والجراحة المفتوحة - مملكة البحرين (7 - 8 سبتمبر 2024).",
        metaEn: "Advanced hands-on surgical course in endoscopic and open airway reconstruction — Kingdom of Bahrain (07–08 September 2024)."
    },
    {
        src: "certificate/IMG_3382.jpg",
        cmeAr: "24 ساعة تعليم طبي مستمر (SCFHS - 24 CME Hours)",
        cmeEn: "Accredited by SCFHS for 24 CME Hours",
        titleAr: "المؤتمر الدولي 39 للجمعية السعودية للأنف والأذن والحنجرة و13 للأكاديمية الآسيوية لتجميل الوجه",
        titleEn: "The 39th SORL International Conference & 13th Pan Asian Facial Plastic Surgery Conference",
        issuerAr: "الجمعية السعودية للأنف والأذن والحنجرة والهيئة السعودية للتخصصات الصحية - جدة",
        issuerEn: "Saudi Otorhinolaryngology Society & SCFHS — Hilton Hotel, Jeddah",
        metaAr: "مشاركة علمية معتمدة بـ 24 ساعة تعليم طبي مستمر في فندق هيلتون جدة (30 يناير - 1 فبراير 2025).",
        metaEn: "International joint conference on ORL-HNS and Facial Plastic & Reconstructive Surgery — Jeddah (Jan 30 – Feb 1, 2025)."
    },
    {
        src: "certificate/IMG_3383.jpg",
        cmeAr: "13 ساعة تعليم طبي مستمر (13 CME Hours)",
        cmeEn: "Accredited for 13 CME Hours",
        titleAr: "الدورة العملية الخامسة لتشريح العظم الصدغي وجراحات الأذن المجهرية",
        titleEn: "The 5th Temporal Bone Hands-On Dissection Course",
        issuerAr: "الخدمات الطبية الملكية بقوة دفاع البحرين - مركز ولي العهد للتدريب والبحوث الطبية",
        issuerEn: "BDF Royal Medical Services - Crown Prince Center for Training & Medical Research",
        metaAr: "تدريب تشريحي عملي دقيق على العظم الصدغي وجراحات الأذن الدقيقة وقاع الجمجمة الجانبي - مملكة البحرين (5 - 6 سبتمبر 2024).",
        metaEn: "Intensive hands-on microscopic temporal bone dissection course — Kingdom of Bahrain (05–06 September 2024)."
    },
    {
        src: "certificate/IMG_3384.jpg",
        cmeAr: "6 ساعات تعليم طبي مستمر (NHRA - 6 CME Hours)",
        cmeEn: "Accredited by NHRA for 6 CME Hours",
        titleAr: "مؤتمر البحرين الدولي للأنف والأذن والحنجرة (Bahrain ENT Congress)",
        titleEn: "Bahrain ENT Congress",
        issuerAr: "الهيئة الوطنية لتنظيم المهن والخدمات الصحية بمملكة البحرين (NHRA)",
        issuerEn: "National Health Regulatory Authority (NHRA) — Four Seasons Hotel, Bahrain",
        metaAr: "مؤتمر تخصصي في مستجدات أمراض وجراحات الأنف والأذن والحنجرة - المنامة، مملكة البحرين (4 سبتمبر 2024).",
        metaEn: "Specialized congress on contemporary Otorhinolaryngology & Head and Neck Surgery — Bahrain (4 September 2024)."
    },
    {
        src: "certificate/IMG_3385.jpg",
        cmeAr: "مؤتمر دولي معتمد (SCFHS Accredited)",
        cmeEn: "SCFHS Accredited International Conference",
        titleAr: "المؤتمر الدولي الأربعون للجمعية السعودية للأنف والأذن والحنجرة (40th SORL)",
        titleEn: "The 40th SORL International Conference Jeddah",
        issuerAr: "الجمعية السعودية للأنف والأذن والحنجرة وجراحة الرأس والعنق (SORL)",
        issuerEn: "Saudi Otorhinolaryngology Society (SORL) — Hilton Hotel, Jeddah",
        metaAr: "المؤتمر الدولي الأربعون للجمعية السعودية للأنف والأذن والحنجرة - فندق هيلتون جدة (8 - 10 يناير 2026).",
        metaEn: "The 40th International Conference of the Saudi Otorhinolaryngology Society — Hilton Hotel, Jeddah (8th – 10th January 2026)."
    },
    {
        src: "certificate/IMG_3386.jpg",
        cmeAr: "شهادة إتمام تخصصية في أمراض الدوار والاتزان",
        cmeEn: "Certificate of Completion — Vestibular Medicine",
        titleAr: "دورة HINTS+: التفريق السريري الدقيق بين الجلطات الدماغية واضطرابات الدهليز والأذن الداخلية",
        titleEn: "HINTS+: Differentiating Stroke from Peripheral Vestibular Disorders",
        issuerAr: "مركز نورث 49 للدوار والاتزان (North 49 Balance & Dizziness Centre)",
        issuerEn: "North 49 Balance & Dizziness Centre (Bradockawasan Educational Platform)",
        metaAr: "شهادة تخصصية متقدمة في الفحص العصبي الدهليزي لتشخيص حالات الدوار الحاد والاتزان (يوليو 2026).",
        metaEn: "Advanced clinical certification in oculomotor & vestibular examination for acute vertigo and balance disorders (July 2026)."
    }
];

let currentCertIndex = 0;

(function () {
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

    // Refresh certificate slider text if present on page
    if (document.getElementById('cert-main-img')) {
        renderCertificateSlide(currentCertIndex);
    }

    // Refresh cases toggle button label if expanded
    const toggleCasesBtn = document.getElementById('toggle-cases-btn');
    const toggleCasesLabel = document.getElementById('toggle-cases-label');
    const casesPanel = document.getElementById('cases-collapsible-panel');
    if (toggleCasesBtn && toggleCasesLabel && casesPanel) {
        const isOpen = casesPanel.classList.contains('open');
        if (isOpen) {
            toggleCasesLabel.textContent = lang === 'ar'
                ? 'إخفاء حالات وقصص النجاح'
                : 'Hide Success Stories & Cases';
        } else {
            toggleCasesLabel.textContent = lang === 'ar'
                ? 'اضغط هنا لعرض حالات وقصص النجاح'
                : 'Click to View Success Stories & Cases';
        }
    }
}

window.toggleSiteLanguage = function () {
    const current = document.documentElement.getAttribute('lang') || 'ar';
    const next = current === 'ar' ? 'en' : 'ar';
    applyLanguage(next);
};

function renderCertificateSlide(index) {
    const mainImg = document.getElementById('cert-main-img');
    if (!mainImg) return;

    currentCertIndex = (index + CERTIFICATES_DATA.length) % CERTIFICATES_DATA.length;
    const item = CERTIFICATES_DATA[currentCertIndex];
    const lang = document.documentElement.getAttribute('lang') || 'ar';

    mainImg.style.opacity = '0.35';
    setTimeout(() => {
        mainImg.src = item.src;
        mainImg.alt = lang === 'ar' ? item.titleAr : item.titleEn;
        mainImg.style.opacity = '1';
    }, 120);

    const counterPill = document.getElementById('cert-counter-pill');
    const cmeBadge = document.getElementById('cert-cme-badge');
    const titleEl = document.getElementById('cert-info-title');
    const issuerEl = document.getElementById('cert-info-issuer');
    const metaEl = document.getElementById('cert-info-meta');
    const lightboxImg = document.getElementById('cert-lightbox-img');

    if (counterPill) counterPill.textContent = `${currentCertIndex + 1} / ${CERTIFICATES_DATA.length}`;
    if (cmeBadge) cmeBadge.textContent = lang === 'ar' ? item.cmeAr : item.cmeEn;
    if (titleEl) titleEl.textContent = lang === 'ar' ? item.titleAr : item.titleEn;
    if (issuerEl) issuerEl.textContent = lang === 'ar' ? item.issuerAr : item.issuerEn;
    if (metaEl) metaEl.textContent = lang === 'ar' ? item.metaAr : item.metaEn;
    if (lightboxImg) lightboxImg.src = item.src;

    // Highlight active thumbnail
    document.querySelectorAll('.cert-thumb-item').forEach((thumb, idx) => {
        thumb.classList.toggle('active', idx === currentCertIndex);
    });
}

document.addEventListener('DOMContentLoaded', () => {
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

    // 3. Click-to-View Collapsible Success Cases on Services Page (practice.html)
    const toggleCasesBtn = document.getElementById('toggle-cases-btn');
    const toggleCasesLabel = document.getElementById('toggle-cases-label');
    const casesPanel = document.getElementById('cases-collapsible-panel');

    if (toggleCasesBtn && casesPanel) {
        toggleCasesBtn.addEventListener('click', () => {
            const isOpen = casesPanel.classList.toggle('open');
            toggleCasesBtn.classList.toggle('expanded', isOpen);
            toggleCasesBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');

            const lang = document.documentElement.getAttribute('lang') || 'ar';
            if (toggleCasesLabel) {
                toggleCasesLabel.textContent = isOpen
                    ? (lang === 'ar' ? 'إخفاء حالات وقصص النجاح' : 'Hide Success Stories & Cases')
                    : (lang === 'ar' ? 'اضغط هنا لعرض حالات وقصص النجاح' : 'Click to View Success Stories & Cases');
            }

            if (isOpen) {
                setTimeout(() => {
                    casesPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }, 100);
            }
        });
    }

    // 4. Success Cases Filter Tabs (inside practice.html)
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

    // 5. Modern Certificate Slider & Lightbox (on awards.html)
    const certMainImg = document.getElementById('cert-main-img');
    if (certMainImg) {
        renderCertificateSlide(0);

        const prevBtn = document.getElementById('cert-prev-btn');
        const nextBtn = document.getElementById('cert-next-btn');
        const thumbs = document.querySelectorAll('.cert-thumb-item');
        const stageFrame = document.getElementById('cert-stage-frame');
        const fullscreenBtn = document.getElementById('cert-fullscreen-btn');
        const lightbox = document.getElementById('cert-lightbox');
        const lightboxClose = document.getElementById('cert-lightbox-close');

        if (prevBtn) {
            prevBtn.addEventListener('click', () => renderCertificateSlide(currentCertIndex - 1));
        }
        if (nextBtn) {
            nextBtn.addEventListener('click', () => renderCertificateSlide(currentCertIndex + 1));
        }

        thumbs.forEach(thumb => {
            thumb.addEventListener('click', () => {
                const idx = parseInt(thumb.getAttribute('data-index'), 10);
                if (!isNaN(idx)) renderCertificateSlide(idx);
            });
        });

        const openLightbox = () => {
            if (!lightbox) return;
            lightbox.classList.add('open');
            lightbox.setAttribute('aria-hidden', 'false');
        };

        const closeLightbox = () => {
            if (!lightbox) return;
            lightbox.classList.remove('open');
            lightbox.setAttribute('aria-hidden', 'true');
        };

        if (stageFrame) stageFrame.addEventListener('click', openLightbox);
        if (fullscreenBtn) fullscreenBtn.addEventListener('click', openLightbox);
        if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
        if (lightbox) {
            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox) closeLightbox();
            });
        }

        document.addEventListener('keydown', (e) => {
            if (lightbox && lightbox.classList.contains('open') && e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'ArrowLeft') {
                renderCertificateSlide(currentCertIndex + 1);
            } else if (e.key === 'ArrowRight') {
                renderCertificateSlide(currentCertIndex - 1);
            }
        });
    }

    // 6. Dynamic News Loader (for news.html or #news-feed)
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
