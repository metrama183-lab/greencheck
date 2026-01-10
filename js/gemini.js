/* ============================================
   GreenCheck - AI Integration (Groq)
   ============================================ */

const AI_CONFIG = {
    // Groq API - Free and fast
    // To use: Open browser console and run: GeminiAI.setApiKey('your-groq-api-key')
    apiKey: '',
    model: 'llama-3.3-70b-versatile',
    baseUrl: 'https://api.groq.com/openai/v1/chat/completions'
};

function setApiKey(key) {
    AI_CONFIG.apiKey = key;
    localStorage.setItem('greencheck_ai_key', key);
}

function loadApiKey() {
    const savedKey = localStorage.getItem('greencheck_ai_key');
    if (savedKey) AI_CONFIG.apiKey = savedKey;
    return !!savedKey;
}

function hasApiKey() {
    return AI_CONFIG.apiKey && AI_CONFIG.apiKey.length > 0;
}

async function analyzeWithGemini(companyName) {
    if (!hasApiKey()) return generateFallbackData(companyName);

    const prompt = `You are a sustainability analyst. Analyze "${companyName}" environmental and social sustainability based on publicly known information.

Respond ONLY with valid JSON in this exact format:
{
  "name": "${companyName}",
  "greenScore": <number 0-100>,
  "summary": "<2-3 sentence summary of their sustainability efforts>",
  "categories": {
    "emissions": {"score": <1-5>, "good": ["<positive point>"], "bad": ["<negative point>"]},
    "energy": {"score": <1-5>, "good": ["<positive point>"], "bad": ["<negative point>"]},
    "transparency": {"score": <1-5>, "good": ["<positive point>"], "bad": ["<negative point>"]},
    "labor": {"score": <1-5>, "good": ["<positive point>"], "bad": ["<negative point>"]},
    "recycling": {"score": <1-5>, "good": ["<positive point>"], "bad": ["<negative point>"]}
  },
  "badges": ["<relevant badges like B-Corp, Carbon Neutral, etc>"],
  "controversies": ["<any known controversies>"]
}

Be accurate and fair. Use real public information about the company.`;

    try {
        const response = await fetch(AI_CONFIG.baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${AI_CONFIG.apiKey}`
            },
            body: JSON.stringify({
                model: AI_CONFIG.model,
                messages: [{ role: 'user', content: prompt }],
                temperature: 0.3,
                max_tokens: 1024
            })
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            console.error('API Error:', response.status, errorData);
            throw new Error(`API failed: ${response.status}`);
        }

        const data = await response.json();
        let text = data.choices?.[0]?.message?.content || '';

        // Clean JSON
        text = text.replace(/```json|```/g, '').trim();
        const analysis = JSON.parse(text);

        analysis.isAI = true;
        analysis.verified = false;
        analysis.sources = [{ name: 'AI Analysis (Llama 3.1)', url: null }];
        analysis.lastUpdated = 'January 2026';

        return analysis;
    } catch (error) {
        console.error('AI error:', error);
        return generateFallbackData(companyName);
    }
}

function generateFallbackData(companyName) {
    return {
        name: companyName,
        greenScore: 50,
        summary: `No verified data for ${companyName}. Set AI API key for analysis.`,
        categories: {
            emissions: { score: 3, good: ['Data unavailable'], bad: ['No public data'] },
            energy: { score: 3, good: ['Data unavailable'], bad: ['No public data'] },
            transparency: { score: 2, good: ['Website exists'], bad: ['No ESG reports'] },
            labor: { score: 3, good: ['Data unavailable'], bad: ['No certifications'] },
            recycling: { score: 3, good: ['Data unavailable'], bad: ['No programs found'] }
        },
        badges: [],
        controversies: [],
        isAI: true,
        verified: false,
        isFallback: true,
        sources: [{ name: 'No data', url: null }],
        lastUpdated: 'January 2026'
    };
}

document.addEventListener('DOMContentLoaded', loadApiKey);

window.GeminiAI = { setApiKey, hasApiKey, analyzeWithGemini };
