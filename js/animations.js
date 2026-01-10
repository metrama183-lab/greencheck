/* ============================================
   GreenCheck - Premium Animations v2.0
   Professional Hackathon Edition
   ============================================ */

// Initialize particle background
function initParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;

    const particleCount = 40;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 15}s`;
        particle.style.animationDuration = `${10 + Math.random() * 10}s`;

        const size = 2 + Math.random() * 4;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        const hue = 140 + Math.random() * 60;
        particle.style.background = `hsl(${hue}, 100%, 60%)`;

        particlesContainer.appendChild(particle);
    }
}

// 🎯 PREMIUM: Animate score gauge with glow effect
function animateGauge(score) {
    const gaugeFill = document.querySelector('.gauge-fill');
    const scoreValue = document.querySelector('.score-value');
    const scoreGauge = document.querySelector('.score-gauge');

    if (!gaugeFill || !scoreValue) return;

    // Calculate circumference
    const radius = 85;
    const circumference = 2 * Math.PI * radius;

    // Set initial state
    gaugeFill.style.strokeDasharray = `0 ${circumference}`;

    // Animate fill with easing
    setTimeout(() => {
        const progress = (score / 100) * circumference;
        gaugeFill.style.strokeDasharray = `${progress} ${circumference}`;
        gaugeFill.style.transition = 'stroke-dasharray 2s cubic-bezier(0.4, 0, 0.2, 1)';
    }, 100);

    // Animate number with bounce effect
    animateNumber(scoreValue, 0, score, 2000);

    // Add pulse effect when complete
    setTimeout(() => {
        if (scoreGauge) {
            scoreGauge.classList.add('gauge-complete');
        }
    }, 2100);

    // Trigger confetti for excellent scores
    if (score >= 80) {
        setTimeout(() => triggerConfetti(), 1500);
    }
}

// 🎯 PREMIUM: Smooth number animation with easing
function animateNumber(element, start, end, duration) {
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Smooth ease-out cubic
        const easeOut = 1 - Math.pow(1 - progress, 3);

        const current = Math.round(start + (end - start) * easeOut);
        element.textContent = current;

        // Add scaling effect at milestones
        if (current % 10 === 0 && current !== 0) {
            element.style.transform = 'scale(1.1)';
            setTimeout(() => {
                element.style.transform = 'scale(1)';
            }, 100);
        }

        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            // Final pulse
            element.classList.add('score-complete');
        }
    }

    requestAnimationFrame(update);
}

// Loading text animation
const loadingTexts = [
    '🔍 Scanning corporate reports...',
    '📊 Analyzing carbon emissions...',
    '⚡ Checking energy sources...',
    '📋 Reviewing transparency data...',
    '👥 Evaluating labor practices...',
    '♻️ Assessing recycling programs...',
    '🌍 Compiling sustainability score...'
];

let loadingTextIndex = 0;
let loadingInterval = null;

function startLoadingAnimation() {
    const loadingSubtext = document.getElementById('loadingSubtext');
    if (!loadingSubtext) return;

    loadingTextIndex = 0;
    loadingSubtext.textContent = loadingTexts[0];

    loadingInterval = setInterval(() => {
        loadingTextIndex = (loadingTextIndex + 1) % loadingTexts.length;
        loadingSubtext.style.opacity = '0';
        loadingSubtext.style.transform = 'translateY(10px)';

        setTimeout(() => {
            loadingSubtext.textContent = loadingTexts[loadingTextIndex];
            loadingSubtext.style.opacity = '1';
            loadingSubtext.style.transform = 'translateY(0)';
        }, 200);
    }, 700);
}

function stopLoadingAnimation() {
    if (loadingInterval) {
        clearInterval(loadingInterval);
        loadingInterval = null;
    }
}

function showLoading() {
    const loading = document.getElementById('loading');
    if (loading) {
        loading.classList.remove('hidden');
        loading.style.animation = 'fadeIn 0.3s ease';
        startLoadingAnimation();
    }
}

function hideLoading() {
    const loading = document.getElementById('loading');
    if (loading) {
        loading.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            loading.classList.add('hidden');
        }, 300);
        stopLoadingAnimation();
    }
}

// 🎉 PREMIUM: Enhanced confetti animation
function triggerConfetti() {
    const colors = ['#00ff88', '#667eea', '#764ba2', '#ffa502', '#00d4ff', '#ff6b6b'];
    const confettiCount = 150;
    const shapes = ['circle', 'square', 'triangle'];

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        const size = 8 + Math.random() * 12;
        const color = colors[Math.floor(Math.random() * colors.length)];

        confetti.style.cssText = `
            position: fixed;
            width: ${size}px;
            height: ${size}px;
            background: ${color};
            left: ${50 + (Math.random() - 0.5) * 40}%;
            top: -20px;
            pointer-events: none;
            z-index: 9999;
            animation: confettiFall ${2.5 + Math.random() * 2}s linear forwards;
            animation-delay: ${Math.random() * 0.8}s;
            ${shape === 'circle' ? 'border-radius: 50%;' : ''}
            ${shape === 'triangle' ? 'clip-path: polygon(50% 0%, 0% 100%, 100% 100%);' : ''}
        `;

        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 5000);
    }
}

// 🎯 PREMIUM: Stagger animation with fade and slide
function staggerCategoryAnimation() {
    const cards = document.querySelectorAll('.category-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px) scale(0.95)';

        setTimeout(() => {
            card.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
        }, 200 + index * 120);
    });
}

// 🎯 PREMIUM: Typing effect for summaries
function typeWriter(element, text, speed = 20) {
    element.textContent = '';
    let i = 0;

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// 🎯 PREMIUM: Badge animation
function animateBadges() {
    const badges = document.querySelectorAll('.badge');
    badges.forEach((badge, index) => {
        badge.style.opacity = '0';
        badge.style.transform = 'scale(0)';

        setTimeout(() => {
            badge.style.transition = 'all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            badge.style.opacity = '1';
            badge.style.transform = 'scale(1)';
        }, 500 + index * 100);
    });
}

// Pulse animation for elements
function pulseElement(element) {
    element.style.animation = 'none';
    element.offsetHeight;
    element.style.animation = 'pulse 0.5s ease';
}

// 🎯 Add all premium keyframes
const premiumStyles = document.createElement('style');
premiumStyles.id = 'premium-animations';
premiumStyles.textContent = `
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
    
    @keyframes confettiFall {
        0% {
            transform: translateY(0) rotate(0deg) scale(1);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(720deg) scale(0.5);
            opacity: 0;
        }
    }
    
    @keyframes shimmer {
        0% { background-position: -200% 0; }
        100% { background-position: 200% 0; }
    }
    
    .gauge-complete {
        /* No glow effect */
    }
    
    .score-complete {
        animation: pulse 0.5s ease;
    }
    
    .score-value {
        transition: transform 0.1s ease;
    }
    
    /* Premium hover effects for cards */
    .category-card {
        position: relative;
        overflow: hidden;
    }
    
    .category-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.05),
            transparent
        );
        transition: left 0.5s ease;
    }
    
    .category-card:hover::before {
        left: 100%;
    }
    
    /* Badge shine effect */
    .badge {
        position: relative;
        overflow: hidden;
    }
    
    .badge::after {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: linear-gradient(
            45deg,
            transparent 30%,
            rgba(255, 255, 255, 0.2) 50%,
            transparent 70%
        );
        transform: rotate(45deg);
        animation: shimmer 3s infinite;
    }
    
    /* Search button glow */
    .search-btn {
        position: relative;
        overflow: hidden;
    }
    
    .search-btn::after {
        content: '';
        position: absolute;
        inset: -2px;
        background: linear-gradient(45deg, #667eea, #764ba2, #667eea);
        background-size: 200% 200%;
        border-radius: inherit;
        z-index: -1;
        animation: shimmer 3s ease infinite;
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    .search-btn:hover::after {
        opacity: 1;
    }
    
    /* Loading text animation */
    .loading-subtext {
        transition: opacity 0.2s ease, transform 0.2s ease;
    }
    
    /* Score title gradient animation */
    .score-title.excellent {
        background: linear-gradient(135deg, #00ff88, #00cc6a, #00ff88);
        background-size: 200% 200%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: shimmer 3s ease infinite;
    }
    
    /* Popular tag hover glow */
    .popular-tag:hover {
        box-shadow: 0 0 20px rgba(102, 126, 234, 0.4);
    }
    
    /* Result card entrance */
    .result-card {
        animation: resultSlide 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    @keyframes resultSlide {
        from { 
            opacity: 0; 
            transform: translateY(40px) scale(0.98);
        }
        to { 
            opacity: 1; 
            transform: translateY(0) scale(1);
        }
    }
`;
document.head.appendChild(premiumStyles);

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initParticles();

    // Add entrance animation to header
    const header = document.querySelector('.header');
    if (header) {
        header.style.opacity = '0';
        header.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            header.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            header.style.opacity = '1';
            header.style.transform = 'translateY(0)';
        }, 100);
    }

    // Add entrance animation to search
    const searchSection = document.querySelector('.search-section');
    if (searchSection) {
        searchSection.style.opacity = '0';
        searchSection.style.transform = 'translateY(20px)';
        setTimeout(() => {
            searchSection.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            searchSection.style.opacity = '1';
            searchSection.style.transform = 'translateY(0)';
        }, 300);
    }
});

// Export functions
window.GreenAnimations = {
    animateGauge,
    animateNumber,
    showLoading,
    hideLoading,
    triggerConfetti,
    staggerCategoryAnimation,
    animateBadges,
    typeWriter,
    pulseElement
};
