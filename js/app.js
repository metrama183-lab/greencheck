/* ============================================
   GreenCheck - Main Application Logic
   ============================================ */

// DOM Elements
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const autocomplete = document.getElementById('autocomplete');
const resultsSection = document.getElementById('results');
const compareBtn = document.getElementById('compareBtn');
const compareSection = document.getElementById('compareSection');
const closeCompare = document.getElementById('closeCompare');
const compare1 = document.getElementById('compare1');
const compare2 = document.getElementById('compare2');
const autocomplete1 = document.getElementById('autocomplete1');
const autocomplete2 = document.getElementById('autocomplete2');
const compareSubmit = document.getElementById('compareSubmit');
const compareResults = document.getElementById('compareResults');
const popularTags = document.querySelectorAll('.popular-tag');

// State
let selectedCompany1 = null;
let selectedCompany2 = null;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
    // Search
    searchInput.addEventListener('input', handleSearchInput);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') performSearch();
    });
    searchBtn.addEventListener('click', performSearch);

    // Popular tags
    popularTags.forEach(tag => {
        tag.addEventListener('click', () => {
            const company = tag.dataset.company;
            searchInput.value = company;
            performSearch();
        });
    });

    // Compare mode
    compareBtn.addEventListener('click', toggleCompareMode);
    closeCompare.addEventListener('click', toggleCompareMode);
    compare1.addEventListener('input', () => handleCompareInput(compare1, autocomplete1, 1));
    compare2.addEventListener('input', () => handleCompareInput(compare2, autocomplete2, 2));
    compareSubmit.addEventListener('click', performComparison);

    // Close autocomplete on click outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) {
            autocomplete.classList.remove('active');
        }
        if (!e.target.closest('.compare-input-group')) {
            autocomplete1.classList.remove('active');
            autocomplete2.classList.remove('active');
        }
    });
}

// Handle search input for autocomplete
function handleSearchInput() {
    const query = searchInput.value.toLowerCase().trim();

    if (query.length < 2) {
        autocomplete.classList.remove('active');
        return;
    }

    const matches = searchCompanies(query).slice(0, 6);

    if (matches.length === 0) {
        autocomplete.classList.remove('active');
        return;
    }

    renderAutocomplete(autocomplete, matches, (company) => {
        searchInput.value = company.name;
        autocomplete.classList.remove('active');
        performSearch();
    });
}

// Handle compare input
function handleCompareInput(input, autocompleteEl, which) {
    const query = input.value.toLowerCase().trim();

    if (query.length < 2) {
        autocompleteEl.classList.remove('active');
        return;
    }

    const matches = searchCompanies(query).slice(0, 5);

    if (matches.length === 0) {
        autocompleteEl.classList.remove('active');
        return;
    }

    renderAutocomplete(autocompleteEl, matches, (company) => {
        input.value = company.name;
        autocompleteEl.classList.remove('active');
        if (which === 1) selectedCompany1 = company;
        else selectedCompany2 = company;
    });
}

// Search companies in database
function searchCompanies(query) {
    return Object.values(window.COMPANIES_DB).filter(company =>
        company.name.toLowerCase().includes(query) ||
        company.sector?.toLowerCase().includes(query)
    );
}

// Render autocomplete dropdown
function renderAutocomplete(container, companies, onSelect) {
    container.innerHTML = companies.map(company => `
        <div class="autocomplete-item" data-id="${company.id}">
            <span class="company-name">${company.name}</span>
            <span class="company-sector">${company.sector || ''}</span>
        </div>
    `).join('');

    container.querySelectorAll('.autocomplete-item').forEach((item, index) => {
        item.addEventListener('click', () => onSelect(companies[index]));
    });

    container.classList.add('active');
}

// Perform search
async function performSearch() {
    const query = searchInput.value.trim().toLowerCase();

    if (!query) return;

    // Show loading
    window.GreenAnimations.showLoading();

    // Find in database or use AI
    let companyData = findCompanyByName(query);

    if (!companyData) {
        // Try AI analysis
        companyData = await window.GeminiAI.analyzeWithGemini(searchInput.value.trim());
    }

    // Hide loading
    window.GreenAnimations.hideLoading();

    // Render results
    renderResults(companyData);

    // Trigger confetti for excellent scores
    if (companyData.greenScore >= 80) {
        setTimeout(() => window.GreenAnimations.triggerConfetti(), 500);
    }
}

// Find company by name in database
function findCompanyByName(query) {
    const normalized = query.toLowerCase().trim();

    for (const [id, company] of Object.entries(window.COMPANIES_DB)) {
        if (company.name.toLowerCase() === normalized || id === normalized) {
            return { ...company, verified: true, isAI: false };
        }
    }

    return null;
}

// Render results
function renderResults(data) {
    const scoreClass = getScoreClass(data.greenScore);
    const scoreLabel = getScoreLabel(data.greenScore);

    resultsSection.innerHTML = `
        <div class="result-card">
            ${renderCompanyHeader(data)}
            ${renderScoreDisplay(data, scoreClass, scoreLabel)}
            ${renderCategories(data.categories)}
            ${renderSources(data)}
        </div>
    `;

    // Animate
    setTimeout(() => {
        window.GreenAnimations.animateGauge(data.greenScore);
        window.GreenAnimations.staggerCategoryAnimation();
    }, 100);

    // Scroll to results
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Render company header
function renderCompanyHeader(data) {
    const badges = [];

    if (data.verified) badges.push('<span class="badge verified">🏆 Verified</span>');
    if (data.isAI) badges.push('<span class="badge ai">🤖 AI Analysis</span>');
    if (data.badges?.includes('B-Corp')) badges.push('<span class="badge b-corp">B-Corp</span>');
    if (data.controversies?.length > 0) badges.push('<span class="badge warning">⚠️ Controversies</span>');

    return `
        <div class="company-header">
            <div class="company-logo">${getCompanyEmoji(data.sector)}</div>
            <div class="company-info">
                <h1 class="company-name-header">${data.name}</h1>
                <div class="company-badges">${badges.join('')}</div>
            </div>
        </div>
    `;
}

// Render score display with gauge
function renderScoreDisplay(data, scoreClass, scoreLabel) {
    return `
        <div class="score-display">
            <div class="score-gauge">
                <svg viewBox="0 0 200 200">
                    <circle class="gauge-bg" cx="100" cy="100" r="85"/>
                    <circle class="gauge-fill ${scoreClass}" cx="100" cy="100" r="85" 
                        stroke-dasharray="0 534" />
                </svg>
                <div class="score-number">
                    <span class="score-value ${scoreClass}">0</span>
                    <span class="score-max">/100</span>
                    <p class="score-label-text">Green Score</p>
                </div>
            </div>
            <div class="score-summary">
                <h2 class="score-title ${scoreClass}">${scoreLabel}</h2>
                <p class="score-description">${data.summary || generateSummary(data)}</p>
            </div>
        </div>
    `;
}

// Render categories grid
function renderCategories(categories) {
    const categoryConfig = {
        emissions: { icon: '🌡️', title: 'Carbon Emissions' },
        energy: { icon: '⚡', title: 'Renewable Energy' },
        transparency: { icon: '📋', title: 'Transparency' },
        labor: { icon: '👥', title: 'Labor & Ethics' },
        recycling: { icon: '♻️', title: 'Waste & Recycling' }
    };

    let html = '<div class="categories-grid">';

    for (const [key, cat] of Object.entries(categories)) {
        const config = categoryConfig[key] || { icon: '📊', title: key };
        const stars = renderStars(cat.score);

        html += `
            <div class="category-card">
                <div class="category-header">
                    <div class="category-title">
                        <span class="category-icon">${config.icon}</span>
                        <span>${config.title}</span>
                    </div>
                    <div class="category-stars">${stars}</div>
                </div>
                <p class="category-score">${cat.score}/5 rating</p>
                <div class="category-points">
                    ${cat.good?.map(p => `<div class="point good"><span class="point-icon">✓</span>${p}</div>`).join('') || ''}
                    ${cat.bad?.map(p => `<div class="point bad"><span class="point-icon">✗</span>${p}</div>`).join('') || ''}
                </div>
            </div>
        `;
    }

    html += '</div>';
    return html;
}

// Render star rating
function renderStars(score) {
    let html = '';
    for (let i = 1; i <= 5; i++) {
        html += `<span class="star ${i <= score ? 'filled' : ''}">★</span>`;
    }
    return html;
}

// Render sources section
function renderSources(data) {
    if (!data.sources?.length) return '';

    const links = data.sources.map(s =>
        s.url ? `<a href="${s.url}" target="_blank" class="source-link">🔗 ${s.name}</a>`
            : `<span class="source-link">📄 ${s.name}</span>`
    ).join('');

    return `
        <div class="sources-section">
            <h3 class="sources-title">Data Sources</h3>
            <div class="sources-list">${links}</div>
            <p style="color: var(--text-muted); font-size: 0.75rem; margin-top: 1rem;">
                Last updated: ${data.lastUpdated || 'January 2026'}
            </p>
        </div>
    `;
}

// Toggle compare mode
function toggleCompareMode() {
    compareSection.classList.toggle('hidden');
    if (!compareSection.classList.contains('hidden')) {
        compare1.focus();
    }
}

// Perform comparison
async function performComparison() {
    const name1 = compare1.value.trim();
    const name2 = compare2.value.trim();

    if (!name1 || !name2) {
        alert('Please enter both company names');
        return;
    }

    window.GreenAnimations.showLoading();

    // Get data for both companies
    let data1 = findCompanyByName(name1) || await window.GeminiAI.analyzeWithGemini(name1);
    let data2 = findCompanyByName(name2) || await window.GeminiAI.analyzeWithGemini(name2);

    window.GreenAnimations.hideLoading();

    renderComparison(data1, data2);
}

// Render comparison results
function renderComparison(data1, data2) {
    const winner = data1.greenScore > data2.greenScore ? 1 :
        data2.greenScore > data1.greenScore ? 2 : 0;

    compareResults.innerHTML = `
        <div class="compare-cards">
            <div class="compare-card ${winner === 1 ? 'winner' : ''}">
                <h3>${data1.name}</h3>
                <div class="score-value ${getScoreClass(data1.greenScore)}" style="font-size: 3rem;">
                    ${data1.greenScore}
                </div>
                <p style="color: var(--text-muted);">/100</p>
                ${winner === 1 ? '<span class="winner-badge">🏆 GREENER CHOICE</span>' : ''}
            </div>
            <div class="compare-vs">
                <span class="compare-vs-badge">VS</span>
            </div>
            <div class="compare-card ${winner === 2 ? 'winner' : ''}">
                <h3>${data2.name}</h3>
                <div class="score-value ${getScoreClass(data2.greenScore)}" style="font-size: 3rem;">
                    ${data2.greenScore}
                </div>
                <p style="color: var(--text-muted);">/100</p>
                ${winner === 2 ? '<span class="winner-badge">🏆 GREENER CHOICE</span>' : ''}
            </div>
        </div>
    `;

    if (winner === 1 || winner === 2) {
        setTimeout(() => window.GreenAnimations.triggerConfetti(), 300);
    }
}

// Helper functions
function getScoreClass(score) {
    if (score >= 80) return 'excellent';
    if (score >= 60) return 'good';
    if (score >= 40) return 'needs-work';
    return 'poor';
}

function getScoreLabel(score) {
    if (score >= 80) return 'Excellent Sustainability';
    if (score >= 60) return 'Good Progress';
    if (score >= 40) return 'Needs Improvement';
    return 'Poor Performance';
}

function getCompanyEmoji(sector) {
    const emojis = {
        'Tech': '💻', 'Fashion': '👕', 'Food & Beverage': '🍔',
        'Automotive': '🚗', 'Retail': '🛒', 'Energy': '⚡',
        'Finance': '💰', 'Healthcare': '💊', 'Entertainment': '🎬'
    };
    return emojis[sector] || '🏢';
}

function generateSummary(data) {
    const score = data.greenScore;
    if (score >= 80) return `${data.name} demonstrates strong commitment to sustainability across all key metrics.`;
    if (score >= 60) return `${data.name} shows good progress on sustainability but has room for improvement.`;
    if (score >= 40) return `${data.name} needs to improve its environmental practices significantly.`;
    return `${data.name} has concerning sustainability practices that require immediate attention.`;
}
