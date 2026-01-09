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
    },

    // ==================== FASHION SECTOR ====================
    nike: {
        id: "nike", name: "Nike", sector: "Fashion", greenScore: 78,
        summary: "Nike achieved 69% reduction in Scope 1&2 emissions (FY20 baseline), 96% renewable electricity in global operations. Surpassed 2030 targets early.",
        categories: {
            emissions: { score: 4, good: ["69% reduction Scope 1&2 vs FY20", "Surpassed 2030 target (73% reduction)", "Net-zero by 2050 commitment"], bad: ["Scope 3 still challenging"] },
            energy: { score: 5, good: ["96% renewable electricity FY24", "100% renewable target by 2025", "29% supplier renewable energy"], bad: [] },
            transparency: { score: 4, good: ["Detailed Impact Reports", "Science-based targets"], bad: ["Supply chain complexity"] },
            labor: { score: 3, good: ["Supplier audits", "Worker programs"], bad: ["Historical factory issues", "Overseas labor concerns"] },
            recycling: { score: 4, good: ["Nike Refurbished program", "Recycled materials in products", "Move to Zero initiative"], bad: ["Fast fashion cycles"] }
        },
        badges: ["Move to Zero"], sources: [{ name: "Nike FY24 Impact Report", url: "https://nike.com/sustainability" }], lastUpdated: "January 2026"
    },
    patagonia: {
        id: "patagonia", name: "Patagonia", sector: "Fashion", greenScore: 92,
        summary: "B Corp score 166. Owned by trust/nonprofit since 2022. Net-zero by 2040 target. 84% preferred materials. 1% for the Planet member.",
        categories: {
            emissions: { score: 4, good: ["Net-zero by 2040 goal", "96% Scope 2 reduction since FY17", "Zero-emission shipping commitment"], bad: ["1% emission increase FY25 noted"] },
            energy: { score: 5, good: ["100% renewable goal for operations", "Supplier renewable program"], bad: [] },
            transparency: { score: 5, good: ["Work in Progress reports", "B Corp certified (166 score)", "Honest about missing targets"], bad: [] },
            labor: { score: 5, good: ["Fair Trade certified", "Living wage programs", "Worker wellbeing focus"], bad: [] },
            recycling: { score: 5, good: ["Worn Wear program", "84% preferred materials", "PFAS-free since Spring 2025", "Pack4Good initiative"], bad: [] }
        },
        badges: ["B-Corp", "1% for Planet"], sources: [{ name: "Patagonia", url: "https://patagonia.com/our-footprint" }], lastUpdated: "January 2026"
    },
    shein: {
        id: "shein", name: "Shein", sector: "Fashion", greenScore: 18,
        summary: "Emissions up 23% in 2024 to 26.2M tonnes. Fined €1M in Italy for greenwashing. 81.5% polyester. Fast fashion model fundamentally unsustainable.",
        categories: {
            emissions: { score: 1, good: ["SBTi targets set"], bad: ["Emissions up 23% in 2024", "26.2M tonnes CO2e", "Scope 1 up 94%"] },
            energy: { score: 2, good: ["76% renewable in own operations"], bad: ["Supply chain fossil-heavy", "Transportation emissions up 13.7%"] },
            transparency: { score: 2, good: ["Published sustainability report"], bad: ["€1M greenwashing fine Italy 2025", "Misleading green claims"] },
            labor: { score: 1, good: ["Some audits"], bad: ["Sweatshop allegations", "Worker exploitation reports", "Opaque supply chain"] },
            recycling: { score: 1, good: ["SHEIN Exchange resale"], bad: ["81.5% polyester", "Disposable fashion model", "Massive textile waste"] }
        },
        badges: [], controversies: ["Greenwashing fine", "Labor exploitation", "Environmental harm"], sources: [{ name: "Shein 2024 Report", url: "https://sheingroup.com" }], lastUpdated: "January 2026"
    },
    hm: {
        id: "hm", name: "H&M", sector: "Fashion", greenScore: 52,
        summary: "Garment collecting program but still fast fashion. 85% recycled/sustainable materials goal. Faced greenwashing accusations.",
        categories: {
            emissions: { score: 3, good: ["Climate positive by 2040 goal", "Reducing absolute emissions"], bad: ["Fast fashion model", "High production volumes"] },
            energy: { score: 4, good: ["100% renewable in own operations", "Supplier engagement"], bad: ["Manufacturing in coal-heavy regions"] },
            transparency: { score: 3, good: ["Annual sustainability reports"], bad: ["Greenwashing accusations", "Conscious collection criticized"] },
            labor: { score: 3, good: ["Fair Living Wage strategy", "Supplier audits"], bad: ["Complex supply chain", "Living wage gaps"] },
            recycling: { score: 4, good: ["Garment collecting since 2013", "Looop recycling machine", "Rental/resale pilots"], bad: ["Low actual recycling rate"] }
        },
        badges: [], controversies: ["Greenwashing"], sources: [{ name: "H&M Sustainability", url: "https://hmgroup.com/sustainability" }], lastUpdated: "January 2026"
    },
    adidas: {
        id: "adidas", name: "Adidas", sector: "Fashion", greenScore: 65,
        summary: "Strong on recycled materials (Parley ocean plastic). Climate neutral own operations. Working on full value chain decarbonization.",
        categories: {
            emissions: { score: 3, good: ["Climate neutral own operations", "30% reduction target by 2030"], bad: ["Supply chain emissions challenging"] },
            energy: { score: 4, good: ["100% renewable own operations", "Supplier renewable program"], bad: ["Asia manufacturing footprint"] },
            transparency: { score: 4, good: ["Detailed annual reports", "Science-based targets"], bad: [] },
            labor: { score: 3, good: ["Supplier compliance program", "Worker hotlines"], bad: ["Supply chain complexity"] },
            recycling: { score: 4, good: ["Parley ocean plastic products", "Futurecraft.Loop concept", "Made to be Remade line"], bad: ["Scale limitations"] }
        },
        badges: ["Parley Partner"], sources: [{ name: "Adidas Sustainability", url: "https://adidas-group.com/sustainability" }], lastUpdated: "January 2026"
    },

    // ==================== FOOD & BEVERAGE SECTOR ====================
    cocacola: {
        id: "cocacola", name: "Coca-Cola", sector: "Food & Beverage", greenScore: 45,
        summary: "8% emissions reduction in 2023. Weakened 2030 targets in 2024 (now 2035). 27% recycled packaging. Water positive since 2015.",
        categories: {
            emissions: { score: 3, good: ["8% emissions reduction 2023", "Net-zero HBC by 2040"], bad: ["Pushed targets to 2035", "Weakened recycled content goals"] },
            energy: { score: 3, good: ["50% renewable target HBC", "Efficiency improvements"], bad: ["Global bottling network variability"] },
            transparency: { score: 3, good: ["Annual sustainability reports", "Water replenishment data"], bad: ["Weakened targets signal concerns"] },
            labor: { score: 3, good: ["Human rights policy", "Supplier guidelines"], bad: ["Global supply chain oversight"] },
            recycling: { score: 3, good: ["62% collection rate", "27% recycled materials", "Water positive since 2015"], bad: ["Dropped reusable packaging goals", "35-40% recycled target (was 50%)"] }
        },
        badges: [], controversies: ["Plastic pollution", "Weakened targets"], sources: [{ name: "Coca-Cola Sustainability", url: "https://coca-colacompany.com/sustainability" }], lastUpdated: "January 2026"
    },
    starbucks: {
        id: "starbucks", name: "Starbucks", sector: "Food & Beverage", greenScore: 55,
        summary: "Greener Stores commitment. Working on reusable cups. Ethically sourced coffee. Dairy alternatives reducing footprint.",
        categories: {
            emissions: { score: 3, good: ["50% reduction target by 2030", "Greener Stores program"], bad: ["Dairy is major emission source", "Global supply chain"] },
            energy: { score: 4, good: ["LEED certified stores", "Renewable energy investments"], bad: ["Franchise variability"] },
            transparency: { score: 4, good: ["Annual Global Impact Report", "Ethically sourced coffee"], bad: [] },
            labor: { score: 3, good: ["Partner benefits", "College tuition program"], bad: ["Union conflicts", "Scheduling issues"] },
            recycling: { score: 3, good: ["Reusable cup initiatives", "Straw reduction"], bad: ["Single-use cups still dominant", "Recycling infrastructure gaps"] }
        },
        badges: ["Ethical Sourcing"], sources: [{ name: "Starbucks Global Impact", url: "https://starbucks.com/responsibility" }], lastUpdated: "January 2026"
    },
    mcdonalds: {
        id: "mcdonalds", name: "McDonald's", sector: "Food & Beverage", greenScore: 42,
        summary: "Net-zero by 2050 goal. Beef supply chain is major challenge. Some packaging improvements but scale creates massive footprint.",
        categories: {
            emissions: { score: 2, good: ["Net-zero by 2050 commitment", "36% reduction target by 2030"], bad: ["Beef is 30%+ of footprint", "Global scale challenge"] },
            energy: { score: 3, good: ["LED lighting rollout", "Some renewable energy"], bad: ["Franchise model limits control"] },
            transparency: { score: 3, good: ["Annual Purpose & Impact report"], bad: ["Limited supply chain visibility"] },
            labor: { score: 2, good: ["Training programs", "Archways to Opportunity"], bad: ["Franchise labor issues", "Wage controversies"] },
            recycling: { score: 3, good: ["Packaging reduction goals", "Some recycling programs"], bad: ["Single-use packaging dominant", "Happy Meal toy waste"] }
        },
        badges: [], controversies: ["Beef emissions", "Labor practices"], sources: [{ name: "McDonald's Sustainability", url: "https://corporate.mcdonalds.com/sustainability" }], lastUpdated: "January 2026"
    },
    nestle: {
        id: "nestle", name: "Nestlé", sector: "Food & Beverage", greenScore: 48,
        summary: "Net-zero by 2050 target. Major water stewardship concerns. Deforestation-free supply chain goal. Packaging improvements ongoing.",
        categories: {
            emissions: { score: 3, good: ["Net-zero by 2050", "20% reduction by 2025 target"], bad: ["Scope 3 from agriculture massive"] },
            energy: { score: 3, good: ["Renewable energy progress", "Factory efficiency"], bad: ["Global manufacturing scale"] },
            transparency: { score: 3, good: ["Annual sustainability reports", "CDP disclosure"], bad: ["Historical trust issues"] },
            labor: { score: 3, good: ["Living wage roadmap", "Human rights due diligence"], bad: ["Child labor allegations in cocoa"] },
            recycling: { score: 3, good: ["100% recyclable packaging goal", "Plastic reduction efforts"], bad: ["Single-use plastic still huge", "Water bottling criticism"] }
        },
        badges: [], controversies: ["Water extraction", "Plastic pollution"], sources: [{ name: "Nestlé Sustainability", url: "https://nestle.com/sustainability" }], lastUpdated: "January 2026"
    },

    // ==================== RETAIL SECTOR ====================
    ikea: {
        id: "ikea", name: "IKEA", sector: "Retail", greenScore: 75,
        summary: "28% emissions reduction from FY16. 81% renewable electricity. Circular by 2030 goal. Buy-back program expanding. Net-zero by 2050.",
        categories: {
            emissions: { score: 4, good: ["28% reduction from FY16", "5% reduction FY24", "Net-zero by 2050"], bad: ["Scale creates large absolute footprint"] },
            energy: { score: 5, good: ["81% renewable electricity FY24", "100% renewable by 2025 goal", "491 supplier factories at 100%"], bad: [] },
            transparency: { score: 5, good: ["Detailed sustainability reports", "Clear targets and progress"], bad: [] },
            labor: { score: 4, good: ["IWAY supplier code", "Worker wellbeing programs"], bad: ["Supply chain complexity"] },
            recycling: { score: 4, good: ["Circular by 2030 goal", "Buy-back & resell program", "90% circular product target"], bad: ["Flat-pack waste", "Assembly difficulties"] }
        },
        badges: ["Circular Economy Leader"], sources: [{ name: "IKEA Sustainability", url: "https://ikea.com/sustainability" }], lastUpdated: "January 2026"
    },
    walmart: {
        id: "walmart", name: "Walmart", sector: "Retail", greenScore: 52,
        summary: "Zero emissions by 2040 goal. Major renewable energy buyer. Project Gigaton for supplier emissions. Scale creates enormous footprint.",
        categories: {
            emissions: { score: 3, good: ["Zero emissions by 2040", "Project Gigaton (1 GT avoided)"], bad: ["Scale creates massive footprint", "Scope 3 challenging"] },
            energy: { score: 4, good: ["50% renewable by 2025", "Major solar/wind investments"], bad: ["Some facilities still fossil"] },
            transparency: { score: 3, good: ["ESG reports published", "CDP disclosure"], bad: ["Supply chain transparency limited"] },
            labor: { score: 2, good: ["Wage increases", "Training programs"], bad: ["Wage criticism", "Worker treatment concerns"] },
            recycling: { score: 3, good: ["Plastic packaging reduction", "Food waste programs"], bad: ["Product waste from returns"] }
        },
        badges: ["Project Gigaton"], sources: [{ name: "Walmart ESG", url: "https://corporate.walmart.com/esg" }], lastUpdated: "January 2026"
    },

    // ==================== ENERGY SECTOR ====================
    shell: {
        id: "shell", name: "Shell", sector: "Energy", greenScore: 28,
        summary: "Net-zero 2050 goal but 91% investments still fossil fuels. 31% operational emission reduction. Weakened 2030 targets. Greenwashing accusations.",
        categories: {
            emissions: { score: 2, good: ["31% operational reduction since 2016", "6.3% carbon intensity reduction"], bad: ["91% investments in fossil fuels", "Weakened 2030 targets"] },
            energy: { score: 2, good: ["$5.6B low-carbon investment 2023", "EV charging expansion"], bad: ["Halted offshore wind", "Cut low-carbon spending 8%"] },
            transparency: { score: 3, good: ["Energy Transition Strategy published", "CDP reporting"], bad: ["Greenwashing accusations", "Misleading advertising claims"] },
            labor: { score: 3, good: ["Safety programs", "Transition support"], bad: ["Layoffs in green divisions"] },
            recycling: { score: 2, good: ["Some circular initiatives"], bad: ["Oil industry waste", "Legacy pollution"] }
        },
        badges: [], controversies: ["Greenwashing", "Climate litigation", "Fossil fuel expansion"], sources: [{ name: "Shell Energy Transition", url: "https://shell.com/sustainability" }], lastUpdated: "January 2026"
    },
    bp: {
        id: "bp", name: "BP", sector: "Energy", greenScore: 25,
        summary: "Abandoned 2030 production cuts. 38% Scope 1&2 reduction but absolute emissions rose in 2024. 97% investments fossil fuels per Greenpeace.",
        categories: {
            emissions: { score: 2, good: ["38% operational reduction vs 2019", "Net-zero 2050 goal"], bad: ["Abandoned 2030 production target", "Scope 1 rose to 32.8 MtCO2e"] },
            energy: { score: 2, good: ["Lightsource bp: 4.4 TWh renewables", "3 GW assets developed"], bad: ["97% fossil fuel investment", "Reversed climate commitments"] },
            transparency: { score: 3, good: ["Annual Sustainability Report"], bad: ["Shifting goalposts", "Disputed environmental claims"] },
            labor: { score: 3, good: ["Safety culture", "Just transition programs"], bad: ["Workforce reductions"] },
            recycling: { score: 2, good: ["Some circular projects"], bad: ["Oil industry legacy"] }
        },
        badges: [], controversies: ["Abandoned climate targets", "Deepwater Horizon legacy"], sources: [{ name: "BP Sustainability", url: "https://bp.com/sustainability" }], lastUpdated: "January 2026"
    },

    // ==================== AUTOMOTIVE SECTOR ====================
    toyota: {
        id: "toyota", name: "Toyota", sector: "Automotive", greenScore: 58,
        summary: "World's largest automaker by volume. Hybrid pioneer but slow on full EVs. Net-zero by 2050. Hydrogen investments.",
        categories: {
            emissions: { score: 3, good: ["Net-zero by 2050", "Hybrid technology leader"], bad: ["Slow EV transition", "Lobbying against EV mandates"] },
            energy: { score: 3, good: ["Factory efficiency", "Some renewables"], bad: ["Japan grid coal-heavy"] },
            transparency: { score: 4, good: ["Environmental reports", "CDP disclosure"], bad: ["EV strategy unclear"] },
            labor: { score: 4, good: ["Strong worker loyalty", "Training programs"], bad: [] },
            recycling: { score: 4, good: ["Battery recycling", "End-of-life vehicle programs"], bad: ["Scale challenges"] }
        },
        badges: ["Hybrid Pioneer"], sources: [{ name: "Toyota Sustainability", url: "https://toyota.com/sustainability" }], lastUpdated: "January 2026"
    },
    volkswagen: {
        id: "volkswagen", name: "Volkswagen", sector: "Automotive", greenScore: 55,
        summary: "Major EV investment post-Dieselgate. Net-zero by 2050. 70B+ euros in e-mobility. Still legacy emissions heavy.",
        categories: {
            emissions: { score: 3, good: ["Net-zero by 2050", "€70B+ EV investment"], bad: ["Dieselgate legacy", "ICE fleet still large"] },
            energy: { score: 3, good: ["Factory renewable programs"], bad: ["German grid still mixed"] },
            transparency: { score: 3, good: ["Post-Dieselgate improvements"], bad: ["Historical trust issues"] },
            labor: { score: 4, good: ["Strong worker councils", "German labor standards"], bad: ["EV transition job concerns"] },
            recycling: { score: 3, good: ["Battery recycling facilities"], bad: ["Scale of transition waste"] }
        },
        badges: [], controversies: ["Dieselgate"], sources: [{ name: "VW Sustainability", url: "https://volkswagen-group.com/sustainability" }], lastUpdated: "January 2026"
    },

    // ==================== FINANCE SECTOR ====================
    blackrock: {
        id: "blackrock", name: "BlackRock", sector: "Finance", greenScore: 40,
        summary: "World's largest asset manager. ESG funds but criticized for still funding fossil fuels. Net-zero commitment questioned.",
        categories: {
            emissions: { score: 2, good: ["Net-zero asset managers initiative"], bad: ["Still massive fossil fuel holdings", "Voting against climate resolutions"] },
            energy: { score: 3, good: ["Office sustainability"], bad: ["Portfolio company emissions"] },
            transparency: { score: 3, good: ["TCFD reporting", "ESG disclosures"], bad: ["Greenwashing accusations"] },
            labor: { score: 4, good: ["Strong employee benefits"], bad: [] },
            recycling: { score: 3, good: ["Office programs"], bad: [] }
        },
        badges: [], controversies: ["Fossil fuel financing", "Greenwashing"], sources: [{ name: "BlackRock Sustainability", url: "https://blackrock.com/sustainability" }], lastUpdated: "January 2026"
    },
    jpmorgan: {
        id: "jpmorgan", name: "JPMorgan Chase", sector: "Finance", greenScore: 32,
        summary: "World's largest fossil fuel financier ($434B since Paris). Net-zero 2050 commitment but continued fossil lending.",
        categories: {
            emissions: { score: 1, good: ["Net-zero 2050 commitment", "Sustainable finance targets"], bad: ["$434B fossil fuel financing since Paris", "Top bank for oil & gas"] },
            energy: { score: 3, good: ["100% renewable operations"], bad: ["Financing fossil expansion"] },
            transparency: { score: 3, good: ["Climate reports published"], bad: ["Underreporting financed emissions"] },
            labor: { score: 4, good: ["Employee benefits", "DEI programs"], bad: [] },
            recycling: { score: 3, good: ["Office programs"], bad: [] }
        },
        badges: [], controversies: ["Fossil fuel financing"], sources: [{ name: "JPMorgan Sustainability", url: "https://jpmorganchase.com/sustainability" }], lastUpdated: "January 2026"
    },

    // ==================== OTHER SECTORS ====================
    disney: {
        id: "disney", name: "Disney", sector: "Entertainment", greenScore: 62,
        summary: "Net-zero by 2030 for direct emissions. Theme parks solar investments. Content promoting environmental awareness.",
        categories: {
            emissions: { score: 3, good: ["Net-zero Scope 1&2 by 2030", "46% reduction from 2019"], bad: ["Parks energy intensive", "Cruise ships"] },
            energy: { score: 4, good: ["Solar farms at parks", "Renewable energy purchases"], bad: ["Cruise ship fuel"] },
            transparency: { score: 4, good: ["Annual CSR reports", "Clear targets"], bad: [] },
            labor: { score: 3, good: ["Cast member programs"], bad: ["Theme park wages", "Union disputes"] },
            recycling: { score: 3, good: ["Single-use plastic reduction", "Park recycling"], bad: ["Merchandise waste"] }
        },
        badges: [], sources: [{ name: "Disney CSR", url: "https://disney.com/impact" }], lastUpdated: "January 2026"
    },
    samsung: {
        id: "samsung", name: "Samsung", sector: "Tech", greenScore: 58,
        summary: "Net-zero by 2050. Major renewable energy expansion in Korea. E-waste challenges from massive device volumes.",
        categories: {
            emissions: { score: 3, good: ["Net-zero by 2050", "Factory efficiency programs"], bad: ["Massive manufacturing footprint"] },
            energy: { score: 3, good: ["100% renewable at key sites", "RE100 member"], bad: ["Korea grid still coal-heavy"] },
            transparency: { score: 4, good: ["Sustainability reports", "CDP A-list"], bad: [] },
            labor: { score: 3, good: ["Safety improvements"], bad: ["Historical labor issues"] },
            recycling: { score: 3, good: ["Galaxy Upcycling", "Take-back programs"], bad: ["Massive device volumes = e-waste"] }
        },
        badges: ["RE100"], sources: [{ name: "Samsung Sustainability", url: "https://samsung.com/sustainability" }], lastUpdated: "January 2026"
    },
    intel: {
        id: "intel", name: "Intel", sector: "Tech", greenScore: 68,
        summary: "Net-zero by 2040. Industry-leading water recycling. 100% renewable in US/EU. Strong transparency.",
        categories: {
            emissions: { score: 3, good: ["Net-zero by 2040", "10% reduction 2019-2023"], bad: ["Manufacturing energy intensive"] },
            energy: { score: 4, good: ["100% renewable US/EU/Israel", "Green bond financing"], bad: ["Some Asia facilities lagging"] },
            transparency: { score: 5, good: ["Detailed CSR reports", "Third-party verification"], bad: [] },
            labor: { score: 4, good: ["Employee benefits", "Diversity programs"], bad: ["Recent layoffs"] },
            recycling: { score: 4, good: ["95% waste diverted", "Water recycling leader"], bad: [] }
        },
        badges: [], sources: [{ name: "Intel Sustainability", url: "https://intel.com/sustainability" }], lastUpdated: "January 2026"
    },
    uber: {
        id: "uber", name: "Uber", sector: "Tech", greenScore: 48,
        summary: "Zero emissions by 2040. Uber Green option. But gig economy model and driver vehicle emissions major challenge.",
        categories: {
            emissions: { score: 2, good: ["Zero emissions by 2040", "Uber Green rides"], bad: ["Driver vehicles mostly ICE", "Increased car usage vs transit"] },
            energy: { score: 3, good: ["Office sustainability"], bad: ["No control over driver vehicles"] },
            transparency: { score: 3, good: ["ESG reports"], bad: ["Emissions calculation complex"] },
            labor: { score: 2, good: ["Driver earnings info"], bad: ["Gig worker classification", "Benefits gaps"] },
            recycling: { score: 3, good: ["Office programs"], bad: [] }
        },
        badges: [], controversies: ["Gig economy model"], sources: [{ name: "Uber ESG", url: "https://uber.com/sustainability" }], lastUpdated: "January 2026"
    },
    netflix: {
        id: "netflix", name: "Netflix", sector: "Entertainment", greenScore: 65,
        summary: "Net-zero by 2022 achieved. Strong on production sustainability. Streaming infrastructure efficiency improving.",
        categories: {
            emissions: { score: 4, good: ["Net-zero achieved 2022", "Production sustainability program"], bad: ["Streaming infrastructure growing"] },
            energy: { score: 4, good: ["Renewable energy for offices", "Efficient encoding"], bad: ["Data center energy use"] },
            transparency: { score: 4, good: ["Environmental reports", "Clear methodology"], bad: [] },
            labor: { score: 4, good: ["Strong culture", "Production crew support"], bad: ["Content industry pressures"] },
            recycling: { score: 3, good: ["Production waste programs"], bad: ["Set construction waste"] }
        },
        badges: ["Net-Zero Achieved"], sources: [{ name: "Netflix Sustainability", url: "https://about.netflix.com/sustainability" }], lastUpdated: "January 2026"
    },
    zara: {
        id: "zara", name: "Zara (Inditex)", sector: "Fashion", greenScore: 50,
        summary: "Net-zero by 2040. 100% renewable in own operations. Join Life sustainable line. But fast fashion model remains.",
        categories: {
            emissions: { score: 3, good: ["Net-zero by 2040", "Scope 1&2 reduction progress"], bad: ["Fast fashion production model"] },
            energy: { score: 4, good: ["100% renewable own operations", "Green stores"], bad: ["Supplier energy sources"] },
            transparency: { score: 4, good: ["Annual sustainability report"], bad: [] },
            labor: { score: 3, good: ["Supplier audits"], bad: ["Supply chain complexity"] },
            recycling: { score: 3, good: ["Clothing collection program", "Join Life line"], bad: ["Fast fashion = disposal"] }
        },
        badges: [], sources: [{ name: "Inditex Sustainability", url: "https://inditex.com/sustainability" }], lastUpdated: "January 2026"
    },
    beyond_meat: {
        id: "beyond_meat", name: "Beyond Meat", sector: "Food & Beverage", greenScore: 80,
        summary: "Plant-based = 90% less emissions than beef. Mission-driven company. Water and land use dramatically lower.",
        categories: {
            emissions: { score: 5, good: ["90% fewer emissions than beef", "Mission: reduce environmental impact"], bad: [] },
            energy: { score: 4, good: ["Factory efficiency", "Renewable energy use"], bad: ["Processing still energy-intensive"] },
            transparency: { score: 4, good: ["Environmental impact studies", "LCA published"], bad: [] },
            labor: { score: 4, good: ["Mission-driven culture"], bad: ["Growth pressures"] },
            recycling: { score: 3, good: ["Packaging improvements"], bad: ["Still plastic packaging"] }
        },
        badges: ["Climate-Positive Product"], sources: [{ name: "Beyond Meat", url: "https://beyondmeat.com/environment" }], lastUpdated: "January 2026"
    },
    rivian: {
        id: "rivian", name: "Rivian", sector: "Automotive", greenScore: 76,
        summary: "EV-only manufacturer. Amazon delivery vans. Carbon neutral factory goal. Forever warranty reducing waste.",
        categories: {
            emissions: { score: 4, good: ["EV-only = zero direct emissions", "Manufacturing carbon neutral goal"], bad: ["Battery production footprint"] },
            energy: { score: 5, good: ["Solar-powered factory plans", "100% renewable goal"], bad: ["Still ramping up"] },
            transparency: { score: 4, good: ["Impact reports"], bad: ["Newer company = less track record"] },
            labor: { score: 4, good: ["Strong culture", "Benefits"], bad: ["Startup pressures"] },
            recycling: { score: 4, good: ["Forever warranty", "Battery recycling plans"], bad: [] }
        },
        badges: ["EV-Only"], sources: [{ name: "Rivian", url: "https://rivian.com/sustainability" }], lastUpdated: "January 2026"
    },
    spotify: {
        id: "spotify", name: "Spotify", sector: "Tech", greenScore: 64,
        summary: "100% renewable energy for offices. Carbon neutral operations. Streaming more efficient than physical media.",
        categories: {
            emissions: { score: 4, good: ["Carbon neutral operations", "Streaming replaces physical"], bad: ["Data center energy use growing"] },
            energy: { score: 4, good: ["100% renewable offices", "Cloud efficiency"], bad: [] },
            transparency: { score: 4, good: ["Equity & Impact reports"], bad: [] },
            labor: { score: 4, good: ["Strong benefits", "Remote work"], bad: ["Podcast industry pressures"] },
            recycling: { score: 3, good: ["Office programs"], bad: [] }
        },
        badges: [], sources: [{ name: "Spotify", url: "https://investors.spotify.com/esg" }], lastUpdated: "January 2026"
    },
    airbnb: {
        id: "airbnb", name: "Airbnb", sector: "Tech", greenScore: 58,
        summary: "Home sharing more efficient than new hotels. But growth enables more travel/emissions. Carbon offset programs.",
        categories: {
            emissions: { score: 3, good: ["Home sharing efficiency", "Carbon offset programs"], bad: ["Enables increased travel", "No direct host control"] },
            energy: { score: 3, good: ["Office sustainability"], bad: ["No control over listings"] },
            transparency: { score: 3, good: ["Stakeholder reports"], bad: ["Host sustainability untracked"] },
            labor: { score: 3, good: ["Employee benefits"], bad: ["Gig economy elements"] },
            recycling: { score: 3, good: ["Office programs"], bad: [] }
        },
        badges: [], sources: [{ name: "Airbnb", url: "https://airbnb.com/sustainability" }], lastUpdated: "January 2026"
    },
    orsted: {
        id: "orsted", name: "Ørsted", sector: "Energy", greenScore: 90,
        summary: "Former oil company now world's largest offshore wind developer. 99% reduction in emissions since 2006. Green transformation leader.",
        categories: {
            emissions: { score: 5, good: ["99% reduction since 2006", "Carbon neutral by 2025", "Net-zero by 2040"], bad: [] },
            energy: { score: 5, good: ["World's largest offshore wind developer", "Phased out coal completely"], bad: [] },
            transparency: { score: 5, good: ["Detailed sustainability reports", "CDP A-list"], bad: [] },
            labor: { score: 4, good: ["Green jobs creation"], bad: [] },
            recycling: { score: 4, good: ["Turbine recycling initiatives"], bad: ["Blade recycling challenges"] }
        },
        badges: ["Green Transformation", "CDP A-List"], sources: [{ name: "Ørsted Sustainability", url: "https://orsted.com/sustainability" }], lastUpdated: "January 2026"
    },
    lego: {
        id: "lego", name: "LEGO", sector: "Retail", greenScore: 72,
        summary: "100% renewable energy. Working on sustainable materials (plant-based bricks). Strong on durability and second-hand market.",
        categories: {
            emissions: { score: 4, good: ["Net-zero by 2050", "Strong reduction progress"], bad: ["Plastic product core challenge"] },
            energy: { score: 5, good: ["100% renewable energy", "Wind farm investments"], bad: [] },
            transparency: { score: 5, good: ["Detailed sustainability reports", "Clear targets"], bad: [] },
            labor: { score: 5, good: ["Great workplace culture", "Family-owned values"], bad: [] },
            recycling: { score: 4, good: ["Bricks last generations", "Replay program", "Sustainable materials R&D"], bad: ["Plastic product inherently"] }
        },
        badges: ["100% Renewable"], sources: [{ name: "LEGO Sustainability", url: "https://lego.com/sustainability" }], lastUpdated: "January 2026"
    }
};
