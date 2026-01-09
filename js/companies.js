/* GreenCheck - Companies Database - VERIFIED DATA from 2024-2025 Reports */

window.COMPANIES_DB = {
    // ==================== TECH SECTOR ====================
    google: {
        id: "google", name: "Google", sector: "Tech", greenScore: 72,
        summary: "Google matched 100% electricity with renewables since 2017, but 2024 emissions rose 11% due to AI growth. Targeting 24/7 carbon-free energy by 2030 (66% achieved).",
        categories: {
            emissions: { score: 3, good: ["Net-zero goal by 2030", "Data center emissions down 12% in 2024"], bad: ["Total emissions up 11% (11.5M tonnes)", "AI infrastructure driving growth"] },
            energy: { score: 5, good: ["100% renewable matched since 2017", "8 GW new clean energy in 2024", "170+ renewable agreements"], bad: [] },
            transparency: { score: 4, good: ["Annual Environmental Reports", "CDP reporting since 2009"], bad: ["AI energy use disclosure limited"] },
            labor: { score: 3, good: ["Strong benefits", "Diversity programs"], bad: ["2024 layoffs", "Contractor issues"] },
            recycling: { score: 4, good: ["90% waste diverted from landfill", "Circular hardware program"], bad: ["E-waste from devices"] }
        },
        badges: ["100% Renewable Matched"], sources: [{ name: "Google 2025 Environmental Report", url: "https://sustainability.google" }], lastUpdated: "January 2026"
    },
    meta: {
        id: "meta", name: "Meta", sector: "Tech", greenScore: 62,
        summary: "Meta has matched 100% renewable energy since 2020 but is off-track for 2031 emission targets. 99% of 8.2M tonnes emissions are Scope 3.",
        categories: {
            emissions: { score: 3, good: ["Net-zero operations since 2020", "Scope 1 emissions reduced"], bad: ["Off-track for 2031 targets", "99% emissions from Scope 3"] },
            energy: { score: 5, good: ["100% renewable matched", "11,700 MW contracted globally", "29 GW contributed to grids"], bad: [] },
            transparency: { score: 3, good: ["Annual Sustainability Report"], bad: ["AI energy impact unclear", "Off-track acknowledgment delayed"] },
            labor: { score: 3, good: ["Remote work culture"], bad: ["Mass layoffs 2023-2024", "Content moderator stress"] },
            recycling: { score: 3, good: ["Hardware recycling"], bad: ["VR headset e-waste growing"] }
        },
        badges: ["Net-Zero Operations"], sources: [{ name: "Meta 2024 Sustainability Report", url: "https://sustainability.fb.com" }], lastUpdated: "January 2026"
    },
    amazon: {
        id: "amazon", name: "Amazon", sector: "Tech", greenScore: 48,
        summary: "Amazon's 2024 emissions rose 6% to 68.25M tonnes despite 100% renewable matching. Carbon intensity improved 4% but absolute emissions growing.",
        categories: {
            emissions: { score: 2, good: ["Climate Pledge co-founder (net-zero by 2040)", "Carbon intensity down 4%"], bad: ["Absolute emissions up 6% (68.25M tonnes)", "Scope 1 up 162% since 2019"] },
            energy: { score: 5, good: ["100% renewable matched (2nd year)", "World's largest corporate renewable buyer", "621 projects globally (34 GW)"], bad: [] },
            transparency: { score: 3, good: ["Annual Sustainability Report", "124 new renewable projects announced"], bad: ["Supply chain opacity", "Scope 3 disclosure limited"] },
            labor: { score: 2, good: ["$15/hr minimum wage US", "31,000 electric delivery vans"], bad: ["Warehouse conditions criticized", "Anti-union stance", "High turnover"] },
            recycling: { score: 4, good: ["Eliminated plastic air pillows globally", "83% waste diversion rate", "Plastics reduced 16.4%"], bad: ["Return waste issues"] }
        },
        badges: ["Climate Pledge"], controversies: ["Labor conditions", "Emission growth"], sources: [{ name: "Amazon 2024 Sustainability Report", url: "https://sustainability.aboutamazon.com" }], lastUpdated: "January 2026"
    },
    apple: {
        id: "apple", name: "Apple", sector: "Tech", greenScore: 85,
        summary: "Apple leads with 60%+ emissions reduction from 2015 baseline. 95% of suppliers committed to 100% renewable. Carbon neutral goal by 2030.",
        categories: {
            emissions: { score: 5, good: ["60%+ reduction from 2015 baseline", "Carbon neutral by 2030 goal", "Suppliers avoided 21.8M tonnes in 2024"], bad: [] },
            energy: { score: 5, good: ["100% renewable operations", "320+ suppliers committed to 100% renewable", "95% of direct manufacturing spend covered"], bad: [] },
            transparency: { score: 5, good: ["Detailed Environmental Progress Reports", "Product lifecycle data public", "Third-party verified"], bad: [] },
            labor: { score: 3, good: ["Supplier audits program", "Worker education initiatives"], bad: ["China supply chain complexity", "Historical Foxconn issues"] },
            recycling: { score: 5, good: ["Daisy robot recycling", "24% recycled/renewable materials in products", "100% recycled cobalt goal by 2025"], bad: [] }
        },
        badges: ["Carbon Neutral 2030"], sources: [{ name: "Apple 2025 Environmental Progress Report", url: "https://apple.com/environment" }], lastUpdated: "January 2026"
    },
    microsoft: {
        id: "microsoft", name: "Microsoft", sector: "Tech", greenScore: 70,
        summary: "Microsoft targets carbon negative by 2030 but emissions up 29% from 2020. 80% renewable as of 2024. Procured 5M tonnes carbon removal.",
        categories: {
            emissions: { score: 3, good: ["Carbon negative by 2030 goal", "5M tonnes carbon removal procured", "Scope 1&2 down 6%"], bad: ["Total emissions up 29% from 2020", "Datacenter growth driving Scope 3"] },
            energy: { score: 4, good: ["19.8 GW renewable contracted", "80% renewable as of 2024", "100% renewable target by 2025"], bad: ["Datacenter expansion challenges"] },
            transparency: { score: 5, good: ["Comprehensive sustainability reports", "Third-party verified data", "Internal carbon fee"], bad: [] },
            labor: { score: 4, good: ["Strong benefits", "Hybrid work policy"], bad: ["Gaming division layoffs 2024"] },
            recycling: { score: 4, good: ["Surface recycling program", "Ocean plastic products"], bad: ["Xbox console e-waste"] }
        },
        badges: ["Carbon Negative Goal"], sources: [{ name: "Microsoft 2024 Sustainability Report", url: "https://microsoft.com/sustainability" }], lastUpdated: "January 2026"
    },
    aws: {
        id: "aws", name: "Amazon Web Services", sector: "Tech", greenScore: 58,
        summary: "AWS benefits from Amazon's renewable matching but AI boom increasing energy demand significantly. Customer carbon footprint tool available.",
        categories: {
            emissions: { score: 3, good: ["Carbon-neutral cloud regions available", "Efficiency improvements"], bad: ["AI driving massive growth", "Part of Amazon's rising emissions"] },
            energy: { score: 5, good: ["100% renewable from Amazon portfolio", "Major renewable investments"], bad: [] },
            transparency: { score: 4, good: ["Customer Carbon Footprint Tool", "Sustainability Pillar guidance"], bad: ["Specific AWS emissions not separated"] },
            labor: { score: 3, good: ["Tech worker benefits"], bad: ["RTO mandates", "On-call stress"] },
            recycling: { score: 4, good: ["Server recycling", "Circular datacenter design"], bad: ["Rapid hardware refresh cycles"] }
        },
        badges: [], sources: [{ name: "AWS Sustainability", url: "https://aws.amazon.com/sustainability" }], lastUpdated: "January 2026"
    },
    anthropic: {
        id: "anthropic", name: "Anthropic", sector: "Tech", greenScore: 55,
        summary: "AI safety leader but large model training has significant energy footprint. Uses cloud providers' renewable infrastructure.",
        categories: {
            emissions: { score: 2, good: ["Smaller scale than OpenAI/Google"], bad: ["Claude training energy intensive", "Scaling plans increase footprint"] },
            energy: { score: 3, good: ["Uses AWS/Google cloud renewables indirectly"], bad: ["No direct renewable commitments", "Growing compute needs"] },
            transparency: { score: 4, good: ["AI safety research published", "Responsible Scaling Policy"], bad: ["No environmental sustainability report"] },
            labor: { score: 4, good: ["Strong ethics culture", "Competitive benefits"], bad: ["Startup intensity"] },
            recycling: { score: 3, good: ["Standard office practices"], bad: ["Relies on cloud provider infrastructure"] }
        },
        badges: ["AI Safety Leader"], sources: [{ name: "Anthropic", url: "https://anthropic.com" }], lastUpdated: "January 2026"
    },
    openai: {
        id: "openai", name: "OpenAI", sector: "Tech", greenScore: 45,
        summary: "Massive compute footprint from GPT models with limited environmental transparency. Benefits from Microsoft's renewable investments.",
        categories: {
            emissions: { score: 2, good: ["Efficiency research ongoing"], bad: ["GPT-4/5 training massive emissions", "Rapid scaling increases footprint"] },
            energy: { score: 3, good: ["Microsoft Azure renewables (indirect)"], bad: ["Enormous energy consumption", "No direct renewable strategy"] },
            transparency: { score: 1, good: ["Some research papers"], bad: ["No sustainability report", "Compute usage secretive", "Environmental impact undisclosed"] },
            labor: { score: 3, good: ["Top AI talent attraction"], bad: ["Board instability 2023", "High pressure culture"] },
            recycling: { score: 3, good: ["Standard practices"], bad: ["Relies on Microsoft infrastructure"] }
        },
        badges: [], controversies: ["Energy consumption", "Lack of transparency"], sources: [{ name: "OpenAI", url: "https://openai.com" }], lastUpdated: "January 2026"
    },
    nvidia: {
        id: "nvidia", name: "NVIDIA", sector: "Tech", greenScore: 60,
        summary: "GPU efficiency improvements but enabling massive AI compute expansion globally. Office operations carbon neutral.",
        categories: {
            emissions: { score: 3, good: ["Office operations carbon neutral", "More efficient chip designs"], bad: ["Products enable massive global compute", "Scope 3 emissions enormous"] },
            energy: { score: 3, good: ["HQ renewable powered"], bad: ["GPUs consume enormous power", "Enabling datacenter growth"] },
            transparency: { score: 4, good: ["CSR reports published", "ESG disclosures"], bad: ["Product-use emissions not fully quantified"] },
            labor: { score: 4, good: ["Top employer rankings", "Strong culture"], bad: ["Intense work environment"] },
            recycling: { score: 3, good: ["E-waste programs"], bad: ["Rapid GPU upgrade cycles encourage waste"] }
        },
        badges: [], sources: [{ name: "NVIDIA CSR", url: "https://nvidia.com/csr" }], lastUpdated: "January 2026"
    },
    tesla: {
        id: "tesla", name: "Tesla", sector: "Automotive", greenScore: 74,
        summary: "EV pioneer accelerating clean transport globally. Solar and battery products expand clean energy access. Manufacturing footprint a concern.",
        categories: {
            emissions: { score: 4, good: ["EVs avoiding millions of tonnes CO2", "Solar/Powerwall deployment"], bad: ["Manufacturing carbon footprint", "Gigafactory emissions"] },
            energy: { score: 5, good: ["Solar Roof and Powerwall products", "Renewable-powered Gigafactories"], bad: [] },
            transparency: { score: 2, good: ["Impact Report published"], bad: ["No traditional sustainability report", "Limited third-party verification"] },
            labor: { score: 2, good: ["Stock compensation"], bad: ["Factory safety concerns", "Anti-union stance", "High turnover"] },
            recycling: { score: 4, good: ["Battery recycling program", "Closed-loop battery materials"], bad: ["Early models harder to recycle"] }
        },
        badges: ["EV Pioneer"], controversies: ["Labor practices"], sources: [{ name: "Tesla Impact Report", url: "https://tesla.com/impact" }], lastUpdated: "January 2026"
    }
};
