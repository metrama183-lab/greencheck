/* ============================================
   GreenCheck - Gemini AI Integration
   ============================================ */

const GEMINI_CONFIG = {
    apiKey: '',
    model: 'gemini-2.0-flash',
    baseUrl: 'https://generativelanguage.googleapis.com/v1beta/models'
};

function setApiKey(key) {
    GEMINI_CONFIG.apiKey = key;
    localStorage.setItem('greencheck_gemini_key', key);
}

function loadApiKey() {
    const savedKey = localStorage.getItem('greencheck_gemini_key');
    if (savedKey) GEMINI_CONFIG.apiKey = savedKey;
    return !!savedKey;
}

function hasApiKey() {
    return GEMINI_CONFIG.apiKey && GEMINI_CONFIG.apiKey.length > 0;
}

async function analyzeWithGemini(companyName) {
    if (!hasApiKey()) return generateFallbackData(companyName);

    const prompt = `Analyze "${companyName}" sustainability. Respond ONLY with JSON:
{"name":"${companyName}","greenScore":<0-100>,"summary":"<2 sentences>","categories":{"emissions":{"score":<1-5>,"good":["..."],"bad":["..."]},"energy":{"score":<1-5>,"good":["..."],"bad":["..."]},"transparency":{"score":<1-5>,"good":["..."],"bad":["..."]},"labor":{"score":<1-5>,"good":["..."],"bad":["..."]},"recycling":{"score":<1-5>,"good":["..."],"bad":["..."]}},"badges":[],"controversies":[]}`;

    try {
        const response = await fetch(
            `${GEMINI_CONFIG.baseUrl}/${GEMINI_CONFIG.model}:generateContent?key=${GEMINI_CONFIG.apiKey}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: prompt }] }],
                    generationConfig: { temperature: 0.3, maxOutputTokens: 1024 }
                })
            }
        );

        if (!response.ok) throw new Error('API failed');

        const data = await response.json();
        let text = data.candidates?.[0]?.content?.parts?.[0]?.text || '';

        // Clean JSON
        text = text.replace(/```json|```/g, '').trim();
        const analysis = JSON.parse(text);

        analysis.isAI = true;
        analysis.verified = false;
        analysis.sources = [{ name: 'AI Analysis', url: null }];
        analysis.lastUpdated = 'January 2026';

        return analysis;
    } catch (error) {
        console.error('Gemini error:', error);
        return generateFallbackData(companyName);
    }
}

function generateFallbackData(companyName) {
    return {
        name: companyName,
        greenScore: 50,
        summary: `No verified data for ${companyName}. Set Gemini API key for AI analysis.`,
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
