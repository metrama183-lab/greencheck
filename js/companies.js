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
    },

    // ==================== MORE TECH ====================
    ibm: {
        id: "ibm", name: "IBM", sector: "Tech", greenScore: 78,
        summary: "Net-zero by 2030. Surpassed 2025 emissions target early. 80% renewable electricity in 2024. 35 data centers at 100% renewable.",
        categories: {
            emissions: { score: 5, good: ["Net-zero by 2030", "265K mtCO2e in 2024 (below target)", "Surpassed 2025 target early"], bad: [] },
            energy: { score: 4, good: ["80% renewable electricity 2024", "35 data centers at 100% renewable", "355K MWh saved through efficiency"], bad: [] },
            transparency: { score: 5, good: ["Detailed CSR since 1990", "CDP A-list"], bad: [] },
            labor: { score: 4, good: ["Strong benefits", "Training programs"], bad: ["Some layoffs"] },
            recycling: { score: 4, good: ["Product recycling", "Circular initiatives"], bad: [] }
        },
        badges: ["CDP A-List", "2025 Target Surpassed"], sources: [{ name: "IBM 2024 Sustainability Report", url: "https://ibm.com/environment" }], lastUpdated: "January 2026"
    },
    oracle: {
        id: "oracle", name: "Oracle", sector: "Tech", greenScore: 72,
        summary: "100% renewable by 2025 goal. EU Cloud already 100% renewable. Carbon neutral Scope 1&2 by 2025. Net-zero by 2050. 99.6% hardware recycled.",
        categories: {
            emissions: { score: 4, good: ["Carbon neutral Scope 1&2 by 2025", "Net-zero by 2050", "50% emissions cut by 2030"], bad: [] },
            energy: { score: 4, good: ["100% renewable by 2025 goal", "EU Cloud 100% renewable", "Efficient data center cooling"], bad: [] },
            transparency: { score: 4, good: ["UN Race to Zero partner", "Fusion Cloud Sustainability tool"], bad: [] },
            labor: { score: 4, good: ["Employee benefits"], bad: [] },
            recycling: { score: 5, good: ["99.6% hardware reused/recycled", "E-waste programs", "33% water/waste reduction by 2025"], bad: [] }
        },
        badges: ["Race to Zero"], sources: [{ name: "Oracle 2024 Sustainability Report", url: "https://oracle.com/sustainability" }], lastUpdated: "January 2026"
    },
    salesforce: {
        id: "salesforce", name: "Salesforce", sector: "Tech", greenScore: 85,
        summary: "Net-zero across full value chain achieved FY24/25. 100% renewable since 2021. 50% emissions reduction by 2030, 90% by 2040 targets.",
        categories: {
            emissions: { score: 5, good: ["Net-zero residual emissions achieved", "50% reduction by 2030 target", "90% reduction by 2040 target"], bad: [] },
            energy: { score: 5, good: ["100% renewable since 2021", "27MW solar Italy VPPA (2025)", "21,500 tonnes CO2 saved annually"], bad: [] },
            transparency: { score: 5, good: ["Stakeholder Impact Report", "Net Zero Cloud product", "56M trees funded by FY25"], bad: [] },
            labor: { score: 5, good: ["Best places to work", "Equality focus"], bad: [] },
            recycling: { score: 4, good: ["Office programs"], bad: [] }
        },
        badges: ["Net-Zero Achieved", "100% Renewable"], sources: [{ name: "Salesforce FY25 Stakeholder Report", url: "https://salesforce.com/sustainability" }], lastUpdated: "January 2026"
    },
    adobe: {
        id: "adobe", name: "Adobe", sector: "Tech", greenScore: 78,
        summary: "100% renewable by end 2025. Met 2025 Scope 1/2/travel targets early. Net-zero by 2050. 70% renewable in 2024. CDP A-list, Supplier Award 2024.",
        categories: {
            emissions: { score: 4, good: ["42% Scope 1&2 reduction by 2030", "52% Scope 3 intensity by 2030", "Met 2025 targets early"], bad: [] },
            energy: { score: 5, good: ["100% renewable by end 2025", "70% renewable 2024", "Founders Tower 100% solar/wind"], bad: [] },
            transparency: { score: 5, good: ["CDP A-list", "CDP Supplier Award 2024", "CSR Report"], bad: [] },
            labor: { score: 5, good: ["Great workplace", "55% suppliers with SBTs by 2025"], bad: [] },
            recycling: { score: 4, good: ["90% waste diversion", "80% LEED buildings"], bad: [] }
        },
        badges: ["CDP A-List", "2025 Targets Met Early"], sources: [{ name: "Adobe 2024 CSR Report", url: "https://adobe.com/sustainability" }], lastUpdated: "January 2026"
    },
    x_twitter: {
        id: "x_twitter", name: "X (Twitter)", sector: "Tech", greenScore: 35,
        summary: "Limited sustainability disclosure post-acquisition. Previously had climate goals under Twitter.",
        categories: {
            emissions: { score: 2, good: ["Previous carbon neutral ops"], bad: ["No recent disclosure", "Goals unclear"] },
            energy: { score: 2, good: ["Some renewable use"], bad: ["Transparency lost"] },
            transparency: { score: 1, good: [], bad: ["No sustainability report", "No ESG disclosure"] },
            labor: { score: 1, good: [], bad: ["Mass layoffs", "Workplace concerns"] },
            recycling: { score: 2, good: ["Office programs"], bad: [] }
        },
        badges: [], controversies: ["Transparency loss", "Layoffs"], sources: [{ name: "X Corp", url: "https://x.com" }], lastUpdated: "January 2026"
    },
    paypal: {
        id: "paypal", name: "PayPal", sector: "Finance", greenScore: 65,
        summary: "Carbon neutral operations. Fintech sustainability initiatives. Financial inclusion focus.",
        categories: {
            emissions: { score: 4, good: ["Carbon neutral operations", "Net-zero by 2040"], bad: [] },
            energy: { score: 4, good: ["Renewable energy purchases"], bad: [] },
            transparency: { score: 4, good: ["Global Impact Report"], bad: [] },
            labor: { score: 4, good: ["Employee programs"], bad: ["Layoffs 2023"] },
            recycling: { score: 3, good: ["Office programs"], bad: [] }
        },
        badges: ["Carbon Neutral"], sources: [{ name: "PayPal ESG", url: "https://paypal.com/sustainability" }], lastUpdated: "January 2026"
    },
    visa: {
        id: "visa", name: "Visa", sector: "Finance", greenScore: 82,
        summary: "Carbon neutral since 2020. 100% renewable since 2020. Net-zero by 2040 (10 years ahead of Paris). 81% Scope 1&2 reduction by 2030.",
        categories: {
            emissions: { score: 5, good: ["Carbon neutral since 2020", "Net-zero by 2040", "81% Scope 1&2 reduction by FY2030", "46% Scope 3 reduction by FY2030"], bad: [] },
            energy: { score: 5, good: ["100% renewable since 2020"], bad: [] },
            transparency: { score: 5, good: ["SBTi 1.5°C approved", "GRI/SASB/TCFD aligned"], bad: [] },
            labor: { score: 4, good: ["Strong benefits"], bad: [] },
            recycling: { score: 3, good: ["Sustainable commerce initiatives"], bad: ["Plastic cards"] }
        },
        badges: ["Carbon Neutral", "100% Renewable"], sources: [{ name: "Visa 2024 ESG Report", url: "https://visa.com/esg" }], lastUpdated: "January 2026"
    },
    mastercard: {
        id: "mastercard", name: "Mastercard", sector: "Finance", greenScore: 85,
        summary: "46% emissions reduction by 2024. Carbon neutral since 2020. 100% renewable since 2019. Net-zero by 2040. 100M trees goal. PVC-free cards by 2028.",
        categories: {
            emissions: { score: 5, good: ["46% total emissions reduction (2024)", "Carbon neutral since 2020", "Net-zero by 2040", "48% Scope 1&2 cut"], bad: [] },
            energy: { score: 5, good: ["100% renewable since 2019", "Geothermal HQ investment", "Solar panels across offices"], bad: [] },
            transparency: { score: 5, good: ["2024 Impact Report", "71% suppliers with SBTs"], bad: [] },
            labor: { score: 4, good: ["Great workplace", "Inclusive growth"], bad: [] },
            recycling: { score: 5, good: ["100M trees by 2025 (Priceless Planet)", "PVC-free cards by 2028"], bad: [] }
        },
        badges: ["Carbon Neutral", "100% Renewable", "Priceless Planet"], sources: [{ name: "Mastercard 2024 Impact Report", url: "https://mastercard.com/sustainability" }], lastUpdated: "January 2026"
    },

    // ==================== MORE FASHION ====================
    uniqlo: {
        id: "uniqlo", name: "Uniqlo", sector: "Fashion", greenScore: 55,
        summary: "RE.UNIQLO recycling. LifeWear philosophy for durability. Working on supply chain sustainability.",
        categories: {
            emissions: { score: 3, good: ["Reduction targets set"], bad: ["Large production footprint"] },
            energy: { score: 3, good: ["Some renewable at HQ"], bad: ["Global supply chain"] },
            transparency: { score: 3, good: ["Sustainability reports"], bad: ["Supply chain opacity"] },
            labor: { score: 3, good: ["Supplier audits"], bad: ["Uyghur cotton concerns"] },
            recycling: { score: 4, good: ["RE.UNIQLO program", "Down recycling"], bad: [] }
        },
        badges: [], controversies: ["Supply chain concerns"], sources: [{ name: "Uniqlo Sustainability", url: "https://uniqlo.com/sustainability" }], lastUpdated: "January 2026"
    },
    levis: {
        id: "levis", name: "Levi's", sector: "Fashion", greenScore: 78,
        summary: "90% Scope 1&2 reduction by 2025. Net-zero by 2050 (SBTi May 2024). WaterLess 13B liters saved. Climate Transition Plan Oct 2024.",
        categories: {
            emissions: { score: 5, good: ["90% Scope 1&2 reduction by 2025", "Net-zero 2050 (SBTi approved)", "42% Scope 3 by 2030"], bad: [] },
            energy: { score: 5, good: ["100% renewable in owned facilities"], bad: [] },
            transparency: { score: 5, good: ["TCFD/CDP aligned", "Climate Transition Plan Oct 2024"], bad: [] },
            labor: { score: 4, good: ["Worker wellbeing programs"], bad: [] },
            recycling: { score: 4, good: ["WaterLess 13B liters saved", "SecondHand resale", "Tailor shops"], bad: ["Missed 50% water target (27%)"] }
        },
        badges: ["SBTi Net-Zero", "WaterLess Pioneer"], sources: [{ name: "Levi's 2024 Sustainability", url: "https://levistrauss.com/sustainability" }], lastUpdated: "January 2026"
    },
    puma: {
        id: "puma", name: "Puma", sector: "Fashion", greenScore: 80,
        summary: "86% ops emissions cut. 90% recycled/certified products (met 2025 early). RE:SUEDE compostable. 100% renewable offices/stores.",
        categories: {
            emissions: { score: 5, good: ["86% Scope 1&2 reduction (2024)", "17% Scope 3 cut", "90% by 2030 target"], bad: [] },
            energy: { score: 5, good: ["100% renewable offices/stores/warehouses", "25% supplier renewable by 2025"], bad: [] },
            transparency: { score: 4, good: ["SBTi 1.5C validated", "Vision 2030"], bad: [] },
            labor: { score: 3, good: ["Supplier audits"], bad: ["Supply chain challenges"] },
            recycling: { score: 5, good: ["90% products recycled/certified (2024)", "RE:SUEDE compostable", "75% recycled polyester"], bad: [] }
        },
        badges: ["Fashion Pact", "SBTi 1.5C"], sources: [{ name: "Puma 2024 Report", url: "https://puma.com/sustainability" }], lastUpdated: "January 2026"
    },
    gucci: {
        id: "gucci", name: "Gucci (Kering)", sector: "Fashion", greenScore: 66,
        summary: "Carbon neutral since 2019. EP&L pioneer. Sustainable luxury leader. Fur-free since 2017.",
        categories: {
            emissions: { score: 4, good: ["Carbon neutral since 2019", "Science-based targets"], bad: [] },
            energy: { score: 4, good: ["Renewable energy"], bad: [] },
            transparency: { score: 5, good: ["EP&L since 2015", "Detailed reports"], bad: [] },
            labor: { score: 4, good: ["Italian craftsmanship", "Fair wages"], bad: [] },
            recycling: { score: 4, good: ["Circular programs", "Fur-free"], bad: ["Luxury consumption model"] }
        },
        badges: ["Carbon Neutral", "Fur-Free"], sources: [{ name: "Gucci Equilibrium", url: "https://equilibrium.gucci.com" }], lastUpdated: "January 2026"
    },
    gap: {
        id: "gap", name: "Gap Inc.", sector: "Fashion", greenScore: 52,
        summary: "Water stewardship focus. Some sustainability progress but fast fashion model remains.",
        categories: {
            emissions: { score: 3, good: ["Reduction targets"], bad: ["Large scale production"] },
            energy: { score: 3, good: ["Renewable progress"], bad: ["Global supply chain"] },
            transparency: { score: 3, good: ["ESG reports"], bad: [] },
            labor: { score: 3, good: ["P.A.C.E. program"], bad: ["Supply chain issues"] },
            recycling: { score: 3, good: ["Some recycling"], bad: ["Fast fashion waste"] }
        },
        badges: [], sources: [{ name: "Gap ESG", url: "https://gapinc.com/sustainability" }], lastUpdated: "January 2026"
    },
    northface: {
        id: "northface", name: "The North Face", sector: "Fashion", greenScore: 78,
        summary: "80% recycled synthetics. 100% sustainable materials by 2025. Renewed resale. VF 64% recycled polyester (beat 2026 target).",
        categories: {
            emissions: { score: 4, good: ["VF net-zero by 2050", "Science-based targets"], bad: [] },
            energy: { score: 4, good: ["VF renewable investments"], bad: [] },
            transparency: { score: 4, good: ["VF FY25 ESR Report", "61% supply chain traced"], bad: [] },
            labor: { score: 4, good: ["VF supplier standards"], bad: [] },
            recycling: { score: 5, good: ["80% recycled synthetics", "Renewed resale", "Alpine Polartec 100% recycled", "No single-use plastic by 2025"], bad: [] }
        },
        badges: ["Renewed Program", "Circular Design"], sources: [{ name: "VF Corp FY25 Report", url: "https://thenorthface.com/sustainability" }], lastUpdated: "January 2026"
    },

    // ==================== MORE FOOD ====================
    pepsi: {
        id: "pepsi", name: "PepsiCo", sector: "Food & Beverage", greenScore: 52,
        summary: "pep+ strategy for sustainability. Water stewardship focus. Packaging challenges remain.",
        categories: {
            emissions: { score: 3, good: ["Net-zero by 2040", "pep+ strategy"], bad: ["Agricultural emissions"] },
            energy: { score: 3, good: ["Renewable progress"], bad: ["Global operations"] },
            transparency: { score: 4, good: ["Detailed ESG reports"], bad: [] },
            labor: { score: 3, good: ["Worker programs"], bad: ["Supply chain oversight"] },
            recycling: { score: 3, good: ["Packaging reduction"], bad: ["Single-use plastics", "Bottle collection gaps"] }
        },
        badges: [], sources: [{ name: "PepsiCo ESG", url: "https://pepsico.com/sustainability" }], lastUpdated: "January 2026"
    },
    unilever: {
        id: "unilever", name: "Unilever", sector: "Food & Beverage", greenScore: 75,
        summary: "72% Scope 1&2 reduction achieved (met 2025 target 2 years early). Net-zero by 2039. CDP A/A/A- ratings. 97% deforestation-free.",
        categories: {
            emissions: { score: 5, good: ["Net-zero by 2039", "72% Scope 1&2 reduction (beat 2025 target)", "42% Scope 3 reduction target by 2030"], bad: ["Scope 3 challenging"] },
            energy: { score: 5, good: ["100% renewable grid electricity achieved"], bad: [] },
            transparency: { score: 5, good: ["CDP A (Forest), A (Water), A- (Climate)", "300 suppliers in Climate Programme"], bad: [] },
            labor: { score: 4, good: ["Living wage commitment", "50% supplier Living Wage Promise by 2026"], bad: [] },
            recycling: { score: 4, good: ["23% virgin plastic reduction", "21% recycled plastic in packaging", "93% collection target met"], bad: ["Revised 2025 targets"] }
        },
        badges: ["CDP A-List"], sources: [{ name: "Unilever 2024 Sustainability Report", url: "https://unilever.com/sustainability" }], lastUpdated: "January 2026"
    },
    danone: {
        id: "danone", name: "Danone", sector: "Food & Beverage", greenScore: 82,
        summary: "Full global B Corp in 2025 (200+ entities). CDP Triple A rating. 25% methane reduction achieved. First to sign Global Methane Pledge.",
        categories: {
            emissions: { score: 4, good: ["Net-zero by 2050", "25.3% methane reduction from fresh milk (2024)", "First food company to sign Global Methane Pledge"], bad: [] },
            energy: { score: 4, good: ["Renewable progress", "30% regenerative agriculture by 2025"], bad: [] },
            transparency: { score: 5, good: ["Full global B Corp 2025 (95% coverage)", "CDP Triple A (climate/water/forest)"], bad: [] },
            labor: { score: 4, good: ["Living wage efforts", "Renew Danone strategy"], bad: [] },
            recycling: { score: 4, good: ["Circular packaging goal", "100% deforestation-free by 2025"], bad: ["Dairy emissions challenge"] }
        },
        badges: ["B-Corp", "CDP Triple A"], sources: [{ name: "Danone 2024 Impact Report", url: "https://danone.com/sustainability" }], lastUpdated: "January 2026"
    },
    kfc: {
        id: "kfc", name: "KFC (Yum!)", sector: "Food & Beverage", greenScore: 40,
        summary: "Yum! Brands subsidiary. Some sustainability efforts but meat-heavy model challenging.",
        categories: {
            emissions: { score: 2, good: ["Yum! science-based targets"], bad: ["Chicken supply chain", "Deforestation links"] },
            energy: { score: 3, good: ["Some renewable"], bad: ["Franchise model"] },
            transparency: { score: 3, good: ["Yum! ESG reports"], bad: [] },
            labor: { score: 2, good: ["Training programs"], bad: ["Fast food wages", "Franchise labor"] },
            recycling: { score: 2, good: ["Packaging reduction"], bad: ["Single-use dominant"] }
        },
        badges: [], controversies: ["Animal welfare"], sources: [{ name: "Yum! ESG", url: "https://yum.com/sustainability" }], lastUpdated: "January 2026"
    },
    burgerking: {
        id: "burgerking", name: "Burger King", sector: "Food & Beverage", greenScore: 38,
        summary: "RBI subsidiary. Methane reduction in beef piloted. But meat-centric model problematic.",
        categories: {
            emissions: { score: 2, good: ["Methane reduction pilots", "Net-zero goal"], bad: ["Beef is major source"] },
            energy: { score: 2, good: ["Some efficiency"], bad: ["Franchise model"] },
            transparency: { score: 3, good: ["RBI reports"], bad: [] },
            labor: { score: 2, good: ["Training"], bad: ["Fast food wages"] },
            recycling: { score: 2, good: ["Some packaging changes"], bad: ["Single-use waste"] }
        },
        badges: [], sources: [{ name: "RBI Sustainability", url: "https://rbi.com/sustainability" }], lastUpdated: "January 2026"
    },
    chipotle: {
        id: "chipotle", name: "Chipotle", sector: "Food & Beverage", greenScore: 58,
        summary: "Food with Integrity mission. Real food focus. Some sustainability leadership in fast-casual.",
        categories: {
            emissions: { score: 3, good: ["50% reduction goal by 2030"], bad: ["Meat supply chain"] },
            energy: { score: 3, good: ["Renewable progress"], bad: [] },
            transparency: { score: 4, good: ["Sustainability reports"], bad: [] },
            labor: { score: 3, good: ["Crew benefits"], bad: ["Some labor issues"] },
            recycling: { score: 3, good: ["Sustainable packaging"], bad: ["Still significant waste"] }
        },
        badges: ["Food With Integrity"], sources: [{ name: "Chipotle Sustainability", url: "https://chipotle.com/sustainability" }], lastUpdated: "January 2026"
    },
    oatly: {
        id: "oatly", name: "Oatly", sector: "Food & Beverage", greenScore: 82,
        summary: "Plant-based milk = 80% less emissions than dairy. Climate-focused mission. Transparent about impact.",
        categories: {
            emissions: { score: 5, good: ["80% less emissions than dairy", "Climate-first mission"], bad: [] },
            energy: { score: 4, good: ["Renewable in production"], bad: [] },
            transparency: { score: 5, good: ["Climate footprint on packaging", "Sustainability reports"], bad: [] },
            labor: { score: 4, good: ["Mission-driven culture"], bad: [] },
            recycling: { score: 4, good: ["Tetra Pak recyclable"], bad: ["Some packaging challenges"] }
        },
        badges: ["Climate-Positive Product"], sources: [{ name: "Oatly Sustainability", url: "https://oatly.com/sustainability" }], lastUpdated: "January 2026"
    },

    // ==================== MORE AUTOMOTIVE ====================
    bmw: {
        id: "bmw", name: "BMW", sector: "Automotive", greenScore: 70,
        summary: "Climate neutral by 2050. 100% renewable in plants since 2020. 17.4% EV sales in 2024. 60M tonnes CO2 reduction by 2035. i Vision Circular concept.",
        categories: {
            emissions: { score: 4, good: ["60M tonnes CO2e cut by 2035 commitment", "40% reduction per vehicle by 2030", "80% Scope 1&2 reduction target"], bad: ["ICE still majority"] },
            energy: { score: 5, good: ["100% renewable at plants since 2020", "First fossil-free factory (Debrecen)", "Green aluminum wheels from 2024"], bad: [] },
            transparency: { score: 4, good: ["SBTi approved targets", "Detailed integrated reports"], bad: [] },
            labor: { score: 4, good: ["German labor standards", "Just transition"], bad: [] },
            recycling: { score: 5, good: ["i Vision Circular (100% recyclable)", "Battery closed-loop since 2024", "Recycled/sustainable materials"], bad: [] }
        },
        badges: ["100% Renewable Plants"], sources: [{ name: "BMW Group 2024 Sustainability Report", url: "https://bmwgroup.com/sustainability" }], lastUpdated: "January 2026"
    },
    mercedes: {
        id: "mercedes", name: "Mercedes-Benz", sector: "Automotive", greenScore: 60,
        summary: "EQ electric line expanding. Net-zero by 2039. Premium sustainability push. Factory efficiency.",
        categories: {
            emissions: { score: 3, good: ["Net-zero by 2039", "EQ electric lineup"], bad: ["Luxury = higher footprint"] },
            energy: { score: 4, good: ["Carbon neutral manufacturing"], bad: [] },
            transparency: { score: 4, good: ["Sustainability reports"], bad: [] },
            labor: { score: 4, good: ["German standards", "Just transition"], bad: [] },
            recycling: { score: 4, good: ["Battery recycling", "Circular design"], bad: [] }
        },
        badges: [], sources: [{ name: "Mercedes Sustainability", url: "https://mercedes-benz.com/sustainability" }], lastUpdated: "January 2026"
    },
    ford: {
        id: "ford", name: "Ford", sector: "Automotive", greenScore: 55,
        summary: "F-150 Lightning success. $50B EV investment. But trucks/SUVs still core.",
        categories: {
            emissions: { score: 3, good: ["Carbon neutral by 2050", "EV investments"], bad: ["Truck-heavy portfolio"] },
            energy: { score: 3, good: ["Renewable at some plants"], bad: [] },
            transparency: { score: 4, good: ["Sustainability reports"], bad: [] },
            labor: { score: 3, good: ["UAW relations"], bad: ["EV transition challenges"] },
            recycling: { score: 3, good: ["Battery recycling"], bad: [] }
        },
        badges: [], sources: [{ name: "Ford Sustainability", url: "https://ford.com/sustainability" }], lastUpdated: "January 2026"
    },
    gm: {
        id: "gm", name: "General Motors", sector: "Automotive", greenScore: 54,
        summary: "All-electric by 2035 goal. Ultium platform. But transitioning from massive ICE legacy.",
        categories: {
            emissions: { score: 3, good: ["All-electric by 2035", "Net-zero by 2040"], bad: ["Current ICE dominance"] },
            energy: { score: 3, good: ["Renewable at facilities"], bad: [] },
            transparency: { score: 4, good: ["Sustainability reports"], bad: [] },
            labor: { score: 3, good: ["Union partnership"], bad: ["EV job transitions"] },
            recycling: { score: 3, good: ["Battery recycling"], bad: [] }
        },
        badges: [], sources: [{ name: "GM Sustainability", url: "https://gm.com/sustainability" }], lastUpdated: "January 2026"
    },
    hyundai: {
        id: "hyundai", name: "Hyundai", sector: "Automotive", greenScore: 58,
        summary: "IONIQ EV line growing. Hydrogen fuel cell leadership. Net-zero by 2045.",
        categories: {
            emissions: { score: 3, good: ["Net-zero by 2045", "IONIQ EVs"], bad: [] },
            energy: { score: 3, good: ["Renewable progress"], bad: [] },
            transparency: { score: 4, good: ["Sustainability reports"], bad: [] },
            labor: { score: 3, good: ["Korean standards"], bad: ["Supply chain oversight"] },
            recycling: { score: 4, good: ["Battery recycling", "Hydrogen focus"], bad: [] }
        },
        badges: ["Hydrogen Pioneer"], sources: [{ name: "Hyundai Sustainability", url: "https://hyundai.com/sustainability" }], lastUpdated: "January 2026"
    },
    byd: {
        id: "byd", name: "BYD", sector: "Automotive", greenScore: 75,
        summary: "World's largest EV maker. 80.3M tonnes pollutants reduced. Net-zero 2050 goal. 50% carbon footprint reduction by 2030. Blade Battery tech.",
        categories: {
            emissions: { score: 4, good: ["80.3M tonnes pollutants reduced (2025)", "Net-zero by 2050", "50% carbon reduction by 2030"], bad: ["China grid still coal-heavy"] },
            energy: { score: 4, good: ["100% renewable manufacturing by 2030 goal", "Solar investments"], bad: ["Grid limitations"] },
            transparency: { score: 3, good: ["Annual sustainability reports", "ESG disclosures"], bad: ["Supply chain transparency gaps"] },
            labor: { score: 3, good: ["Growing workforce", "Human rights policy published"], bad: ["Working conditions concerns"] },
            recycling: { score: 4, good: ["Battery recycling", "30% recycled materials by 2025 goal", "Second-life battery programs"], bad: [] }
        },
        badges: ["EV Leader", "Blade Battery"], sources: [{ name: "BYD 2024 Sustainability Report", url: "https://byd.com" }], lastUpdated: "January 2026"
    },

    // ==================== MORE RETAIL ====================
    target: {
        id: "target", name: "Target", sector: "Retail", greenScore: 58,
        summary: "Target Forward strategy. Renewable energy progress. Sustainable brands focus.",
        categories: {
            emissions: { score: 3, good: ["Net-zero by 2040", "Target Forward"], bad: ["Scope 3 challenging"] },
            energy: { score: 4, good: ["100% renewable by 2030", "Solar on stores"], bad: [] },
            transparency: { score: 4, good: ["ESG reports"], bad: [] },
            labor: { score: 3, good: ["Wage increases"], bad: ["Retail pressures"] },
            recycling: { score: 3, good: ["Packaging reduction", "Recycling programs"], bad: [] }
        },
        badges: [], sources: [{ name: "Target ESG", url: "https://target.com/sustainability" }], lastUpdated: "January 2026"
    },
    costco: {
        id: "costco", name: "Costco", sector: "Retail", greenScore: 50,
        summary: "Bulk reduces packaging per unit. Solar on warehouses. But bulk consumption model.",
        categories: {
            emissions: { score: 3, good: ["Reduction efforts"], bad: ["Large supply chain"] },
            energy: { score: 3, good: ["Solar installations"], bad: [] },
            transparency: { score: 3, good: ["Some ESG reporting"], bad: ["Less detailed"] },
            labor: { score: 4, good: ["Above-average wages", "Benefits"], bad: [] },
            recycling: { score: 3, good: ["Bulk = less packaging"], bad: ["Encourages consumption"] }
        },
        badges: [], sources: [{ name: "Costco Sustainability", url: "https://costco.com/sustainability" }], lastUpdated: "January 2026"
    },
    homedepot: {
        id: "homedepot", name: "Home Depot", sector: "Retail", greenScore: 55,
        summary: "Eco Actions program. Responsible wood sourcing. Energy efficiency products.",
        categories: {
            emissions: { score: 3, good: ["Science-based targets", "Emissions reduction"], bad: ["Large footprint"] },
            energy: { score: 4, good: ["Renewable progress", "LED conversion"], bad: [] },
            transparency: { score: 4, good: ["Responsibility reports"], bad: [] },
            labor: { score: 3, good: ["Associate programs"], bad: ["Retail challenges"] },
            recycling: { score: 4, good: ["CFL/battery recycling", "FSC wood"], bad: [] }
        },
        badges: [], sources: [{ name: "Home Depot Responsibility", url: "https://homedepot.com/sustainability" }], lastUpdated: "January 2026"
    },
    alibaba: {
        id: "alibaba", name: "Alibaba", sector: "Retail", greenScore: 48,
        summary: "Carbon neutral operations by 2030. Green logistics push. But enables massive consumption.",
        categories: {
            emissions: { score: 2, good: ["Carbon neutral ops by 2030"], bad: ["Enables massive commerce", "Logistics emissions"] },
            energy: { score: 3, good: ["Renewable at data centers"], bad: ["China grid"] },
            transparency: { score: 3, good: ["ESG reports"], bad: ["Less detailed"] },
            labor: { score: 2, good: ["Tech salaries"], bad: ["996 culture criticism"] },
            recycling: { score: 3, good: ["Green packaging initiative"], bad: ["E-commerce waste"] }
        },
        badges: [], controversies: ["Enables consumption"], sources: [{ name: "Alibaba ESG", url: "https://alibabagroup.com/esg" }], lastUpdated: "January 2026"
    },
    ebay: {
        id: "ebay", name: "eBay", sector: "Retail", greenScore: 68,
        summary: "Circular economy leader - resale extends product life. Carbon neutral operations.",
        categories: {
            emissions: { score: 4, good: ["Carbon neutral", "Resale = emissions avoided"], bad: [] },
            energy: { score: 4, good: ["100% renewable"], bad: [] },
            transparency: { score: 4, good: ["Impact reports"], bad: [] },
            labor: { score: 4, good: ["Good workplace"], bad: [] },
            recycling: { score: 5, good: ["Entire model is reuse", "Circular economy pioneer"], bad: [] }
        },
        badges: ["Circular Economy"], sources: [{ name: "eBay Impact", url: "https://ebayinc.com/impact" }], lastUpdated: "January 2026"
    },
    etsy: {
        id: "etsy", name: "Etsy", sector: "Retail", greenScore: 78,
        summary: "Carbon neutral shipping since 2019. B Corp pending. Handmade = lower impact. Small business support.",
        categories: {
            emissions: { score: 5, good: ["Carbon neutral shipping since 2019", "100% renewable"], bad: [] },
            energy: { score: 5, good: ["100% renewable electricity"], bad: [] },
            transparency: { score: 5, good: ["Integrated reports"], bad: [] },
            labor: { score: 5, good: ["Great workplace", "Seller support"], bad: [] },
            recycling: { score: 4, good: ["Handmade = more sustainable"], bad: ["Shipping materials"] }
        },
        badges: ["Carbon Neutral Shipping"], sources: [{ name: "Etsy Impact", url: "https://etsy.com/impact" }], lastUpdated: "January 2026"
    },

    // ==================== MORE ENERGY ====================
    exxon: {
        id: "exxon", name: "ExxonMobil", sector: "Energy", greenScore: 22,
        summary: "Major oil company. Limited transition efforts. CCS investments but core is fossil fuels.",
        categories: {
            emissions: { score: 1, good: ["Some CCS investments"], bad: ["Major oil producer", "Funded climate denial"] },
            energy: { score: 1, good: ["Some biofuels"], bad: ["Minimal renewables", "Oil expansion"] },
            transparency: { score: 2, good: ["Some reporting"], bad: ["Climate denial history"] },
            labor: { score: 3, good: ["Strong safety"], bad: [] },
            recycling: { score: 2, good: ["Plastics initiatives"], bad: ["Creates plastic feedstocks"] }
        },
        badges: [], controversies: ["Climate denial", "Oil expansion"], sources: [{ name: "ExxonMobil", url: "https://exxonmobil.com/sustainability" }], lastUpdated: "January 2026"
    },
    chevron: {
        id: "chevron", name: "Chevron", sector: "Energy", greenScore: 24,
        summary: "Major oil company with minimal transition. Some renewable investments but fossil core.",
        categories: {
            emissions: { score: 1, good: ["Net-zero aspiration"], bad: ["Major oil/gas producer", "Increasing production"] },
            energy: { score: 1, good: ["Some solar"], bad: ["Fossil dominates"] },
            transparency: { score: 2, good: ["Sustainability reports"], bad: ["Minimal action vs claims"] },
            labor: { score: 3, good: ["Safety focus"], bad: [] },
            recycling: { score: 2, good: ["Some circular efforts"], bad: [] }
        },
        badges: [], controversies: ["Climate litigation"], sources: [{ name: "Chevron", url: "https://chevron.com/sustainability" }], lastUpdated: "January 2026"
    },
    totalenergies: {
        id: "totalenergies", name: "TotalEnergies", sector: "Energy", greenScore: 35,
        summary: "Rebranded as 'energies' company. More renewables than peers but still majority fossil.",
        categories: {
            emissions: { score: 2, good: ["Net-zero by 2050", "More renewables than peers"], bad: ["Still 60%+ fossil fuels"] },
            energy: { score: 3, good: ["Growing renewables portfolio"], bad: ["Oil/gas expansion continues"] },
            transparency: { score: 3, good: ["Integrated reports"], bad: ["Accused of greenwashing"] },
            labor: { score: 3, good: ["Transition programs"], bad: [] },
            recycling: { score: 2, good: ["Lubricant recycling"], bad: [] }
        },
        badges: [], controversies: ["Uganda pipeline"], sources: [{ name: "TotalEnergies", url: "https://totalenergies.com/sustainability" }], lastUpdated: "January 2026"
    },
    nextera: {
        id: "nextera", name: "NextEra Energy", sector: "Energy", greenScore: 88,
        summary: "World's largest wind/solar generator (31GW+). Real Zero by 2045. 70% emissions reduction by 2025. 2.2GW solar added 2024.",
        categories: {
            emissions: { score: 5, good: ["Real Zero by 2045 (no offsets)", "70% reduction by 2025", "82% by 2030, 94% by 2040"], bad: ["Some natural gas"] },
            energy: { score: 5, good: ["31GW clean energy operating", "36-46GW new capacity 2024-2027", "FPL 2.2GW solar in 2024"], bad: [] },
            transparency: { score: 5, good: ["Third-party verified emissions", "Comprehensive sustainability reports"], bad: [] },
            labor: { score: 4, good: ["Clean energy jobs", "Offshore wind expansion"], bad: [] },
            recycling: { score: 4, good: ["Solar panel recycling", "28B gallons water saved 2024"], bad: ["Blade disposal"] }
        },
        badges: ["Clean Energy Leader", "Real Zero 2045"], sources: [{ name: "NextEra 2024 Sustainability Report", url: "https://nexteraenergy.com/sustainability" }], lastUpdated: "January 2026"
    },
    iberdrola: {
        id: "iberdrola", name: "Iberdrola", sector: "Energy", greenScore: 80,
        summary: "Spanish clean energy leader. Major offshore wind. Net-zero by 2040. Exiting coal.",
        categories: {
            emissions: { score: 4, good: ["Net-zero by 2040", "81% emission-free"], bad: [] },
            energy: { score: 5, good: ["40+ GW renewables", "Leader in offshore wind"], bad: [] },
            transparency: { score: 5, good: ["Integrated reports", "CDP A-list"], bad: [] },
            labor: { score: 4, good: ["Green jobs"], bad: [] },
            recycling: { score: 4, good: ["Circular strategies"], bad: [] }
        },
        badges: ["CDP A-List", "Clean Energy Leader"], sources: [{ name: "Iberdrola Sustainability", url: "https://iberdrola.com/sustainability" }], lastUpdated: "January 2026"
    },

    // ==================== MORE ENTERTAINMENT ====================
    sony: {
        id: "sony", name: "Sony", sector: "Entertainment", greenScore: 64,
        summary: "Road to Zero program. RE100 member. Gaming console efficiency improving.",
        categories: {
            emissions: { score: 3, good: ["Net-zero by 2040", "RE100 member"], bad: ["Electronics footprint"] },
            energy: { score: 4, good: ["100% renewable goal by 2030"], bad: [] },
            transparency: { score: 4, good: ["Sustainability reports"], bad: [] },
            labor: { score: 4, good: ["Japanese standards"], bad: [] },
            recycling: { score: 3, good: ["Electronics take-back", "SORPLAS recycled plastic"], bad: ["Gaming e-waste"] }
        },
        badges: ["RE100"], sources: [{ name: "Sony Sustainability", url: "https://sony.com/sustainability" }], lastUpdated: "January 2026"
    },
    warner: {
        id: "warner", name: "Warner Bros. Discovery", sector: "Entertainment", greenScore: 55,
        summary: "Production sustainability programs. Carbon neutral goal. Studio energy efficiency.",
        categories: {
            emissions: { score: 3, good: ["Carbon neutral goal", "Production protocols"], bad: ["Travel/logistics"] },
            energy: { score: 3, good: ["Studio solar"], bad: [] },
            transparency: { score: 3, good: ["Sustainability initiatives"], bad: ["Less detailed than peers"] },
            labor: { score: 3, good: ["Production crew programs"], bad: ["Industry pressures"] },
            recycling: { score: 3, good: ["Set recycling"], bad: ["Production waste"] }
        },
        badges: [], sources: [{ name: "Warner Bros.", url: "https://wbd.com/sustainability" }], lastUpdated: "January 2026"
    },

    // ==================== HEALTHCARE ====================
    jnj: {
        id: "jnj", name: "Johnson & Johnson", sector: "Healthcare", greenScore: 65,
        summary: "Health for Humanity goals. Carbon neutral by 2030. Water stewardship. Supply chain challenges.",
        categories: {
            emissions: { score: 4, good: ["Carbon neutral by 2030", "Science-based targets"], bad: [] },
            energy: { score: 4, good: ["100% renewable by 2025"], bad: [] },
            transparency: { score: 4, good: ["Health for Humanity reports"], bad: [] },
            labor: { score: 3, good: ["Healthcare access programs"], bad: ["Talc litigation"] },
            recycling: { score: 3, good: ["Packaging reduction"], bad: ["Medical waste challenges"] }
        },
        badges: [], controversies: ["Talc litigation"], sources: [{ name: "J&J ESG", url: "https://jnj.com/esg" }], lastUpdated: "January 2026"
    },
    pfizer: {
        id: "pfizer", name: "Pfizer", sector: "Healthcare", greenScore: 62,
        summary: "Net-zero by 2040. Vaccine access programs. Manufacturing sustainability improvements.",
        categories: {
            emissions: { score: 3, good: ["Net-zero by 2040", "Scope 1&2 reduction"], bad: ["Manufacturing footprint"] },
            energy: { score: 4, good: ["Renewable progress"], bad: [] },
            transparency: { score: 4, good: ["ESG reports"], bad: [] },
            labor: { score: 4, good: ["Good benefits"], bad: [] },
            recycling: { score: 3, good: ["Waste reduction"], bad: ["Pharmaceutical waste"] }
        },
        badges: [], sources: [{ name: "Pfizer ESG", url: "https://pfizer.com/esg" }], lastUpdated: "January 2026"
    },

    // ==================== TRAVEL ====================
    booking: {
        id: "booking", name: "Booking.com", sector: "Tech", greenScore: 52,
        summary: "Travel sustainability badges. Climate action program. But enables air travel emissions.",
        categories: {
            emissions: { score: 3, good: ["Climate action program", "Carbon offset"], bad: ["Enables travel emissions"] },
            energy: { score: 3, good: ["Office sustainability"], bad: [] },
            transparency: { score: 3, good: ["Sustainability reports"], bad: [] },
            labor: { score: 4, good: ["Tech benefits"], bad: [] },
            recycling: { score: 3, good: ["Office programs"], bad: [] }
        },
        badges: [], sources: [{ name: "Booking Holdings", url: "https://bookingholdings.com/sustainability" }], lastUpdated: "January 2026"
    },

    // ==================== SOCIAL MEDIA ====================
    tiktok: {
        id: "tiktok", name: "TikTok (ByteDance)", sector: "Tech", greenScore: 40,
        summary: "Limited sustainability disclosure. Data centers growing. Parent ByteDance has some initiatives.",
        categories: {
            emissions: { score: 2, good: ["ByteDance carbon commitments"], bad: ["Rapid growth", "Limited disclosure"] },
            energy: { score: 2, good: ["Some renewable data centers"], bad: ["China grid coal-heavy"] },
            transparency: { score: 2, good: ["Some reporting"], bad: ["Less transparent than Western tech"] },
            labor: { score: 3, good: ["Tech salaries"], bad: ["996 culture concerns"] },
            recycling: { score: 2, good: ["Office programs"], bad: [] }
        },
        badges: [], sources: [{ name: "ByteDance", url: "https://bytedance.com" }], lastUpdated: "January 2026"
    },
    snapchat: {
        id: "snapchat", name: "Snap Inc.", sector: "Tech", greenScore: 60,
        summary: "Net-zero by 2030. Smaller footprint than peers. Some sustainability initiatives.",
        categories: {
            emissions: { score: 3, good: ["Net-zero by 2030", "Carbon neutral operations"], bad: [] },
            energy: { score: 4, good: ["Renewable purchases"], bad: [] },
            transparency: { score: 3, good: ["Citizenship reports"], bad: [] },
            labor: { score: 4, good: ["Tech culture"], bad: ["Layoffs"] },
            recycling: { score: 3, good: ["Office programs"], bad: [] }
        },
        badges: [], sources: [{ name: "Snap Citizenship", url: "https://snap.com/citizenship" }], lastUpdated: "January 2026"
    },
    linkedin: {
        id: "linkedin", name: "LinkedIn", sector: "Tech", greenScore: 72,
        summary: "Microsoft subsidiary benefits from parent's sustainability. Carbon neutral. Professional platform for green jobs.",
        categories: {
            emissions: { score: 4, good: ["Microsoft carbon negative goal", "Carbon neutral"], bad: [] },
            energy: { score: 4, good: ["Microsoft renewable programs"], bad: [] },
            transparency: { score: 4, good: ["Microsoft sustainability reporting"], bad: [] },
            labor: { score: 4, good: ["Great workplace"], bad: ["Some layoffs"] },
            recycling: { score: 4, good: ["Office sustainability"], bad: [] }
        },
        badges: [], sources: [{ name: "LinkedIn (Microsoft)", url: "https://linkedin.com/sustainability" }], lastUpdated: "January 2026"
    },
    pinterest: {
        id: "pinterest", name: "Pinterest", sector: "Tech", greenScore: 62,
        summary: "Climate Pledge signatory. Smaller tech footprint. Sustainability content promotion.",
        categories: {
            emissions: { score: 3, good: ["Climate Pledge signatory", "Net-zero by 2030"], bad: [] },
            energy: { score: 4, good: ["Renewable energy"], bad: [] },
            transparency: { score: 3, good: ["Impact reports"], bad: [] },
            labor: { score: 4, good: ["Good culture"], bad: [] },
            recycling: { score: 3, good: ["Office programs"], bad: [] }
        },
        badges: ["Climate Pledge"], sources: [{ name: "Pinterest", url: "https://pinterest.com/about" }], lastUpdated: "January 2026"
    },

    // ==================== FINAL 14 TO REACH 100 ====================
    reddit: {
        id: "reddit", name: "Reddit", sector: "Tech", greenScore: 55,
        summary: "Limited sustainability disclosure. Carbon neutral goal. Office sustainability focus.",
        categories: {
            emissions: { score: 3, good: ["Carbon neutral goal"], bad: ["Limited disclosure"] },
            energy: { score: 3, good: ["Some renewable"], bad: [] },
            transparency: { score: 2, good: ["Some reporting"], bad: ["Less detailed"] },
            labor: { score: 4, good: ["Tech benefits"], bad: [] },
            recycling: { score: 3, good: ["Office programs"], bad: [] }
        },
        badges: [], sources: [{ name: "Reddit", url: "https://reddit.com" }], lastUpdated: "January 2026"
    },
    siemens: {
        id: "siemens", name: "Siemens", sector: "Tech", greenScore: 72,
        summary: "Carbon neutral operations since 2020. Strong on sustainable infrastructure tech. Science-based targets.",
        categories: {
            emissions: { score: 4, good: ["Carbon neutral since 2020", "Science-based targets"], bad: [] },
            energy: { score: 4, good: ["100% renewable electricity"], bad: [] },
            transparency: { score: 5, good: ["Detailed sustainability reports"], bad: [] },
            labor: { score: 4, good: ["German standards"], bad: [] },
            recycling: { score: 4, good: ["Industrial recycling", "Circular economy focus"], bad: [] }
        },
        badges: ["Carbon Neutral"], sources: [{ name: "Siemens Sustainability", url: "https://siemens.com/sustainability" }], lastUpdated: "January 2026"
    },
    ge: {
        id: "ge", name: "General Electric", sector: "Tech", greenScore: 55,
        summary: "Aviation division high emissions but renewables strong. Splitting company changes outlook.",
        categories: {
            emissions: { score: 3, good: ["Renewable energy division", "Efficiency improvements"], bad: ["Aviation/gas turbines"] },
            energy: { score: 3, good: ["Wind energy strong"], bad: ["Gas turbines"] },
            transparency: { score: 4, good: ["Sustainability reports"], bad: [] },
            labor: { score: 3, good: ["Legacy benefits"], bad: ["Layoffs"] },
            recycling: { score: 3, good: ["Industrial programs"], bad: [] }
        },
        badges: [], sources: [{ name: "GE Sustainability", url: "https://ge.com/sustainability" }], lastUpdated: "January 2026"
    },
    honda: {
        id: "honda", name: "Honda", sector: "Automotive", greenScore: 56,
        summary: "EV transition commitment. Net-zero by 2050. Motorcycles and lawn equipment add complexity.",
        categories: {
            emissions: { score: 3, good: ["Net-zero by 2050", "EV commitment"], bad: ["Slower EV transition"] },
            energy: { score: 3, good: ["Renewable at plants"], bad: [] },
            transparency: { score: 4, good: ["Sustainability reports"], bad: [] },
            labor: { score: 4, good: ["Japanese standards"], bad: [] },
            recycling: { score: 4, good: ["95% vehicle recyclability"], bad: [] }
        },
        badges: [], sources: [{ name: "Honda Sustainability", url: "https://honda.com/sustainability" }], lastUpdated: "January 2026"
    },
    nissan: {
        id: "nissan", name: "Nissan", sector: "Automotive", greenScore: 60,
        summary: "Early Leaf EV pioneer. Ariya expansion. Net-zero by 2050. Battery recycling strong.",
        categories: {
            emissions: { score: 3, good: ["Net-zero by 2050", "EV pioneer with Leaf"], bad: [] },
            energy: { score: 4, good: ["Renewable at plants"], bad: [] },
            transparency: { score: 4, good: ["Sustainability reports"], bad: [] },
            labor: { score: 3, good: ["Programs"], bad: ["Ghosn scandal legacy"] },
            recycling: { score: 4, good: ["4R Energy battery recycling"], bad: [] }
        },
        badges: ["EV Pioneer"], sources: [{ name: "Nissan Sustainability", url: "https://nissan.com/sustainability" }], lastUpdated: "January 2026"
    },
    dell: {
        id: "dell", name: "Dell", sector: "Tech", greenScore: 68,
        summary: "Strong on e-waste recycling. Ocean plastic in packaging. Science-based targets. Moonshot 2030.",
        categories: {
            emissions: { score: 4, good: ["Net-zero by 2050", "Moonshot 2030 goals"], bad: [] },
            energy: { score: 4, good: ["75% renewable"], bad: [] },
            transparency: { score: 4, good: ["ESG reports", "CDP reporting"], bad: [] },
            labor: { score: 4, good: ["Benefits"], bad: [] },
            recycling: { score: 5, good: ["Ocean plastic packaging", "Take-back programs", "2B lbs recycled"], bad: [] }
        },
        badges: ["Recycling Leader"], sources: [{ name: "Dell ESG", url: "https://dell.com/esg" }], lastUpdated: "January 2026"
    },
    hp: {
        id: "hp", name: "HP Inc.", sector: "Tech", greenScore: 70,
        summary: "Strong on sustainable printing. Ocean-bound plastics. Climate positive by 2040.",
        categories: {
            emissions: { score: 4, good: ["Climate positive by 2040", "Science-based targets"], bad: [] },
            energy: { score: 4, good: ["100% renewable in ops goal"], bad: [] },
            transparency: { score: 5, good: ["Living Progress Report", "CDP A-list"], bad: [] },
            labor: { score: 4, good: ["Good programs"], bad: [] },
            recycling: { score: 5, good: ["Ocean-bound plastics", "Cartridge recycling", "Product take-back"], bad: [] }
        },
        badges: ["CDP A-List"], sources: [{ name: "HP Sustainability", url: "https://hp.com/sustainability" }], lastUpdated: "January 2026"
    },
    cisco: {
        id: "cisco", name: "Cisco", sector: "Tech", greenScore: 72,
        summary: "Net-zero by 2040. Strong on circular economy. Product take-back leader. CDP A-list.",
        categories: {
            emissions: { score: 4, good: ["Net-zero by 2040", "Science-based targets"], bad: [] },
            energy: { score: 4, good: ["85% renewable"], bad: [] },
            transparency: { score: 5, good: ["Purpose Report", "CDP A-list"], bad: [] },
            labor: { score: 5, good: ["Best places to work"], bad: [] },
            recycling: { score: 5, good: ["Circular design", "Takeback program", "Recycled materials"], bad: [] }
        },
        badges: ["CDP A-List"], sources: [{ name: "Cisco CSR", url: "https://cisco.com/csr" }], lastUpdated: "January 2026"
    },
    sap: {
        id: "sap", name: "SAP", sector: "Tech", greenScore: 82,
        summary: "Carbon neutral since 2023 (2 years early). Net-zero by 2030 (20 years ahead). TIME #15 most sustainable company 2024. 21M trees by 2025.",
        categories: {
            emissions: { score: 5, good: ["Carbon neutral since 2023", "Net-zero 2030 (20 years early)", "Supplier GHG reporting mandate 2024"], bad: [] },
            energy: { score: 5, good: ["100% renewable electricity", "Data center efficiency", "Cloud carbon footprint tool"], bad: [] },
            transparency: { score: 5, good: ["CSRD compliant 2024", "CDP B score", "TIME Top 15 sustainable companies"], bad: [] },
            labor: { score: 5, good: ["Top employer globally"], bad: [] },
            recycling: { score: 4, good: ["Circular solutions", "25M trees by 2030 goal"], bad: [] }
        },
        badges: ["Carbon Neutral", "TIME Top 15"], sources: [{ name: "SAP Integrated Report 2024", url: "https://sap.com/sustainability" }], lastUpdated: "January 2026"
    },
    loreal: {
        id: "loreal", name: "L'Oréal", sector: "Fashion", greenScore: 88,
        summary: "CDP Triple A for 10 consecutive years (only company ever). 97% renewable sites. Carbon neutral factories. 100% renewable by end 2025.",
        categories: {
            emissions: { score: 5, good: ["Carbon neutral factories (US/EU/China/India)", "Science-based targets"], bad: [] },
            energy: { score: 5, good: ["97% renewable sites 2024", "100% renewable by end 2025", "100% renewable Europe achieved Dec 2024"], bad: [] },
            transparency: { score: 5, good: ["CDP Triple A 10 consecutive years (only company)", "L'Oréal for the Future program"], bad: [] },
            labor: { score: 4, good: ["Good workplace", "Supplier standards"], bad: [] },
            recycling: { score: 4, good: ["49% recyclable packaging", "37% recycled/biobased materials", "100% goal by 2030"], bad: ["Missed 2025 targets"] }
        },
        badges: ["CDP Triple A (10 years)"], sources: [{ name: "L'Oréal 2024 Sustainability Report", url: "https://loreal.com/sustainability" }], lastUpdated: "January 2026"
    },
    redbull: {
        id: "redbull", name: "Red Bull", sector: "Food & Beverage", greenScore: 50,
        summary: "Aluminum can recyclability. Some renewable energy. But caffeine-based energy drinks model.",
        categories: {
            emissions: { score: 3, good: ["Some reduction targets"], bad: ["Extensive logistics"] },
            energy: { score: 3, good: ["Some renewable"], bad: [] },
            transparency: { score: 2, good: ["Some reporting"], bad: ["Less detailed"] },
            labor: { score: 3, good: ["Sports culture"], bad: [] },
            recycling: { score: 4, good: ["Aluminum cans = recyclable", "Can collection campaigns"], bad: [] }
        },
        badges: [], sources: [{ name: "Red Bull", url: "https://redbull.com" }], lastUpdated: "January 2026"
    },
    mondelez: {
        id: "mondelez", name: "Mondelez", sector: "Food & Beverage", greenScore: 52,
        summary: "Cocoa Life program. Net-zero by 2050. Oreo maker working on sustainability.",
        categories: {
            emissions: { score: 3, good: ["Net-zero by 2050", "Science-based targets"], bad: ["Large footprint"] },
            energy: { score: 3, good: ["Renewable progress"], bad: [] },
            transparency: { score: 4, good: ["ESG reports"], bad: [] },
            labor: { score: 3, good: ["Cocoa Life farmer program"], bad: ["Supply chain challenges"] },
            recycling: { score: 3, good: ["Recyclable packaging goal"], bad: ["Plastic still prevalent"] }
        },
        badges: [], sources: [{ name: "Mondelez Sustainability", url: "https://mondelezinternational.com/sustainability" }], lastUpdated: "January 2026"
    },
    marriott: {
        id: "marriott", name: "Marriott", sector: "Travel", greenScore: 48,
        summary: "Serve 360 goals. Single-use plastic reduction. But hotels are energy intensive.",
        categories: {
            emissions: { score: 3, good: ["Net-zero by 2050", "Science-based targets"], bad: ["Energy intensive"] },
            energy: { score: 3, good: ["Renewable progress"], bad: ["Franchise variability"] },
            transparency: { score: 4, good: ["Serve 360 reports"], bad: [] },
            labor: { score: 3, good: ["Training programs"], bad: ["Hospitality challenges"] },
            recycling: { score: 3, good: ["Single-use plastic reduction"], bad: ["Hotel waste"] }
        },
        badges: [], sources: [{ name: "Marriott Serve 360", url: "https://marriott.com/serve360" }], lastUpdated: "January 2026"
    },
    hilton: {
        id: "hilton", name: "Hilton", sector: "Travel", greenScore: 52,
        summary: "Travel with Purpose. LightStay tracking. Net-zero by 2050. Leading hotel sustainability metrics.",
        categories: {
            emissions: { score: 3, good: ["Net-zero by 2050", "Science-based targets"], bad: ["Energy intensive"] },
            energy: { score: 4, good: ["Renewable progress", "LED conversion"], bad: [] },
            transparency: { score: 4, good: ["Travel with Purpose", "LightStay system"], bad: [] },
            labor: { score: 4, good: ["Best places to work"], bad: [] },
            recycling: { score: 3, good: ["Soap recycling", "Plastic reduction"], bad: ["Hotel waste challenges"] }
        },
        badges: [], sources: [{ name: "Hilton ESG", url: "https://hilton.com/travelwithpurpose" }], lastUpdated: "January 2026"
    }
};

