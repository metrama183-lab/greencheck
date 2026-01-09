/* ============================================
   GreenCheck - Premium Animations
   ============================================ */

// Initialize particle background
function initParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random position and animation delay
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 15}s`;
        particle.style.animationDuration = `${10 + Math.random() * 10}s`;
        
        // Random size
        const size = 2 + Math.random() * 4;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random color (green to blue gradient)
        const hue = 140 + Math.random() * 60;
        particle.style.background = `hsl(${hue}, 100%, 60%)`;
        
        particlesContainer.appendChild(particle);
    }
}

// Animate score gauge
function animateGauge(score) {
    const gaugeFill = document.querySelector('.gauge-fill');
    const scoreValue = document.querySelector('.score-value');
    
    if (!gaugeFill || !scoreValue) return;
    
    // Calculate circumference
    const radius = 85;
    const circumference = 2 * Math.PI * radius;
    
    // Set initial state
    gaugeFill.style.strokeDasharray = `0 ${circumference}`;
    
    // Animate after a small delay
    setTimeout(() => {
        const progress = (score / 100) * circumference;
        gaugeFill.style.strokeDasharray = `${progress} ${circumference}`;
    }, 100);
    
    // Animate number
    animateNumber(scoreValue, 0, score, 1500);
}

// Animate number counting up
function animateNumber(element, start, end, duration) {
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function (ease-out)
        const easeOut = 1 - Math.pow(1 - progress, 3);
        
        const current = Math.round(start + (end - start) * easeOut);
        element.textContent = current;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    requestAnimationFrame(update);
}

// Loading text animation
const loadingTexts = [
    'Checking carbon emissions...',
    'Analyzing energy sources...',
    'Reviewing transparency reports...',
    'Checking labor practices...',
    'Evaluating recycling programs...',
    'Compiling sustainability data...'
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
        
        setTimeout(() => {
            loadingSubtext.textContent = loadingTexts[loadingTextIndex];
            loadingSubtext.style.opacity = '1';
        }, 200);
    }, 800);
}

function stopLoadingAnimation() {
    if (loadingInterval) {
        clearInterval(loadingInterval);
        loadingInterval = null;
    }
}

// Show loading overlay
function showLoading() {
    const loading = document.getElementById('loading');
    if (loading) {
        loading.classList.remove('hidden');
        startLoadingAnimation();
    }
}

// Hide loading overlay
function hideLoading() {
    const loading = document.getElementById('loading');
    if (loading) {
        loading.classList.add('hidden');
        stopLoadingAnimation();
    }
}

// Confetti animation for excellent scores
function triggerConfetti() {
    const colors = ['#00ff88', '#667eea', '#764ba2', '#ffa502'];
    const confettiCount = 100;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            left: ${50 + (Math.random() - 0.5) * 20}%;
            top: -10px;
            border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
            pointer-events: none;
            z-index: 9999;
            animation: confettiFall ${2 + Math.random() * 2}s linear forwards;
            animation-delay: ${Math.random() * 0.5}s;
        `;
        
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 4000);
    }
    
    // Add confetti keyframes if not already present
    if (!document.getElementById('confetti-styles')) {
        const style = document.createElement('style');
        style.id = 'confetti-styles';
        style.textContent = `
            @keyframes confettiFall {
                0% {
                    transform: translateY(0) rotate(0deg);
                    opacity: 1;
                }
                100% {
                    transform: translateY(100vh) rotate(720deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Stagger animation for category cards
function staggerCategoryAnimation() {
    const cards = document.querySelectorAll('.category-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.4s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 + index * 100);
    });
}

// Pulse animation for score changes
function pulseElement(element) {
    element.style.animation = 'none';
    element.offsetHeight; // Trigger reflow
    element.style.animation = 'pulse 0.5s ease';
}

// Add pulse keyframes
const pulseStyle = document.createElement('style');
pulseStyle.textContent = `
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
    }
`;
document.head.appendChild(pulseStyle);

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', () => {
    initParticles();
});

// Export functions for use in app.js
window.GreenAnimations = {
    animateGauge,
    animateNumber,
    showLoading,
    hideLoading,
    triggerConfetti,
    staggerCategoryAnimation,
    pulseElement
};
