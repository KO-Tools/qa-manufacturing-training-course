// Quiz Data Structure
const quizData = {
    1: {
        title: "Course Overview and Objectives Quiz",
        questions: [
            {
                id: 1,
                question: "What is the primary goal of this Kind Oasis Manufacturing Quality Assurance Course?",
                options: [
                    "To increase production speed",
                    "To provide comprehensive training for cannabis manufacturing excellence and regulatory compliance",
                    "To reduce manufacturing costs",
                    "To improve marketing strategies"
                ],
                correct: 1,
                explanation: "The course is designed to provide comprehensive training covering all aspects of cannabis manufacturing quality assurance, regulatory compliance, and best practices."
            },
            {
                id: 2,
                question: "How many modules are included in this training course?",
                options: [
                    "12 modules",
                    "16 modules", 
                    "14 modules",
                    "10 modules"
                ],
                correct: 2,
                explanation: "The course contains 14 comprehensive modules covering everything from company introduction to continuous improvement systems."
            },
            {
                id: 3,
                question: "Quality assurance in cannabis manufacturing extends beyond testing and inspection to encompass:",
                options: [
                    "Only production activities",
                    "Every aspect of manufacturing operations, from raw material sourcing to customer delivery",
                    "Only packaging and labeling",
                    "Only regulatory compliance"
                ],
                correct: 1,
                explanation: "Quality assurance is a comprehensive culture that encompasses every aspect of manufacturing operations, not just testing and inspection."
            },
            {
                id: 4,
                question: "What interactive features will you encounter throughout this course?",
                options: [
                    "Only written assessments",
                    "Only videos and presentations",
                    "Scenario-based simulations, interactive calculators, virtual facility tours, case studies, and assessment quizzes",
                    "Only reading materials"
                ],
                correct: 2,
                explanation: "The course includes various interactive elements designed to enhance learning, including simulations, calculators, virtual tours, case studies, and quizzes."
            },
            {
                id: 5,
                question: "According to the course, what is quality culture at Kind Oasis?",
                options: [
                    "A separate department responsible for testing",
                    "The foundation of everything we do, ensuring every product meets the highest standards",
                    "An optional business practice",
                    "Only important during inspections"
                ],
                correct: 1,
                explanation: "At Kind Oasis, quality is not just a department but the foundation of everything the company does, ensuring products meet the highest standards of safety, potency, and consistency."
            },
            {
                id: 6,
                question: "What commitment is required for successful completion of this course?",
                options: [
                    "Complete all 14 modules and quizzes, engage with interactive elements, and apply concepts in daily work",
                    "Only pass the final exam",
                    "Only attend scheduled meetings",
                    "Only read the materials"
                ],
                correct: 0,
                explanation: "Success requires completing all modules and quizzes, actively engaging with interactive elements, and applying learned concepts in daily work activities."
            }
        ]
    },
    2: {
        title: "Kind Oasis Company Introduction Quiz",
        questions: [
            {
                id: 1,
                question: "Where is Kind Oasis manufacturing facility located?",
                options: [
                    "Chicago, Illinois",
                    "Milwaukee, Wisconsin",
                    "Minneapolis, Minnesota",
                    "Madison, Wisconsin"
                ],
                correct: 1,
                explanation: "Kind Oasis is a Milwaukee-based manufacturer and retailer of premium, lab-tested hemp-derived wellness products."
            },
            {
                id: 2,
                question: "What manufacturing philosophy does Kind Oasis follow?",
                options: [
                    "Large-scale mass production",
                    "Small-batch manufacturing that prioritizes quality over quantity",
                    "Automated production with minimal oversight",
                    "Outsourced manufacturing"
                ],
                correct: 1,
                explanation: "Kind Oasis operates on a small-batch manufacturing philosophy that enables greater quality control, faster problem identification, and more personalized attention to product details."
            },
            {
                id: 3,
                question: "Which of the following is NOT mentioned as one of Kind Oasis's quality values?",
                options: [
                    "All-Natural",
                    "Vegan",
                    "Lab Tested",
                    "Mass Produced"
                ],
                correct: 3,
                explanation: "Kind Oasis's quality values include All-Natural, Vegan, Lab Tested, and Locally Made. Mass production is contrary to their small-batch philosophy."
            },
            {
                id: 4,
                question: "What product categories does Kind Oasis manufacture?",
                options: [
                    "Only gummies and chocolates",
                    "Only tinctures and topicals",
                    "Gummies, chocolates, tinctures, topicals, seltzers, shooters, syrups, and functional mushrooms",
                    "Only CBD products"
                ],
                correct: 2,
                explanation: "Kind Oasis manufactures a diverse range including gummies, chocolates, tinctures, topicals, seltzers, shooters, syrups, and functional mushroom products."
            },
            {
                id: 5,
                question: "What is Kind Oasis's commitment regarding THC compliance?",
                options: [
                    "Products may contain any amount of THC",
                    "Strict adherence to the 2018 Farm Bill, ensuring all products contain ≤0.3% Delta-9 THC",
                    "Only CBD products are produced",
                    "THC content is not monitored"
                ],
                correct: 1,
                explanation: "Kind Oasis maintains strict adherence to the 2018 Farm Bill, ensuring all products contain ≤0.3% Delta-9 THC for federal compliance."
            },
            {
                id: 6,
                question: "How does Kind Oasis demonstrate transparency to customers?",
                options: [
                    "Only through marketing materials",
                    "Published lab results, QR codes linking to COAs, and open communication about processes",
                    "Only verbal communication",
                    "No transparency measures"
                ],
                correct: 1,
                explanation: "Kind Oasis demonstrates transparency through published lab results, QR codes providing instant access to testing data, manufacturing insights, and quality certifications."
            }
        ]
    },
    3: {
        title: "Regulatory Landscape Overview Quiz",
        questions: [
            {
                id: 1,
                question: "Which federal agency is primarily responsible for food facility registration requirements for cannabis products?",
                options: [
                    "DEA (Drug Enforcement Administration)",
                    "USDA (U.S. Department of Agriculture)",
                    "FDA (Food and Drug Administration)",
                    "ATF (Bureau of Alcohol, Tobacco, Firearms and Explosives)"
                ],
                correct: 2,
                explanation: "The FDA regulates cannabis and hemp-derived products under several frameworks, including food facility registration requirements for food products."
            },
            {
                id: 2,
                question: "Under the 2018 Farm Bill, hemp is defined as cannabis containing what maximum THC level?",
                options: [
                    "≤0.5% Delta-9 THC",
                    "≤0.3% Delta-9 THC",
                    "≤1.0% Delta-9 THC", 
                    "≤0.1% Delta-9 THC"
                ],
                correct: 1,
                explanation: "The 2018 Farm Bill defines hemp as cannabis containing ≤0.3% Delta-9 THC on a dry weight basis."
            },
            {
                id: 3,
                question: "Which agency enforces the Controlled Substances Act as it relates to cannabis classification?",
                options: [
                    "FDA",
                    "USDA",
                    "DEA",
                    "EPA"
                ],
                correct: 2,
                explanation: "The DEA enforces the Controlled Substances Act and maintains authority over marijuana and THC-containing products that exceed legal thresholds."
            },
            {
                id: 4,
                question: "What is the critical distinction between legal hemp and marijuana based on federal law?",
                options: [
                    "The plant species",
                    "The growing method",
                    "The THC content",
                    "The intended use"
                ],
                correct: 2,
                explanation: "The critical distinction between legal hemp and marijuana is THC content - hemp must contain ≤0.3% Delta-9 THC by dry weight."
            },
            {
                id: 5,
                question: "Which formula is used for calculating total THC content?",
                options: [
                    "THCA + Delta-9 THC",
                    "THCA × 0.877 + Delta-9 THC",
                    "THCA × 0.5 + Delta-9 THC",
                    "THCA ÷ 0.877 + Delta-9 THC"
                ],
                correct: 1,
                explanation: "Total THC = (THCA × 0.877) + Delta-9 THC. The 0.877 factor represents the molecular weight conversion of THCA to THC through decarboxylation."
            },
            {
                id: 6,
                question: "Why is testing margin of error important in THC compliance?",
                options: [
                    "It affects product pricing",
                    "It influences marketing strategies",
                    "It can affect compliance determinations when results are near the 0.3% threshold",
                    "It determines packaging requirements"
                ],
                correct: 2,
                explanation: "Testing margin of error is crucial because laboratories must account for measurement uncertainty when determining compliance, especially for results near the 0.3% THC threshold."
            }
        ]
    },
    4: {
        title: "cGMP Compliance Fundamentals Quiz",
        questions: [
            {
                id: 1,
                question: "What does 'cGMP' stand for?",
                options: [
                    "Certified Good Manufacturing Practices",
                    "Current Good Manufacturing Practices",
                    "Complete Good Manufacturing Practices",
                    "Controlled Good Manufacturing Practices"
                ],
                correct: 1,
                explanation: "cGMP stands for 'Current Good Manufacturing Practices' - the minimum quality requirements for manufacturing, processing, and packing of regulated products."
            },
            {
                id: 2,
                question: "Which CFR (Code of Federal Regulations) parts are mentioned as applicable to cannabis manufacturing?",
                options: [
                    "21 CFR Parts 210/211 and 21 CFR Part 117",
                    "21 CFR Parts 100/101 only",
                    "21 CFR Parts 500/501 only",
                    "21 CFR Parts 300/301 only"
                ],
                correct: 0,
                explanation: "Cannabis manufacturing should follow 21 CFR Parts 210/211 (pharmaceutical cGMPs) and/or 21 CFR Part 117 (food GMPs) depending on product classification."
            },
            {
                id: 3,
                question: "Which of the following is NOT one of the four core pillars of cGMP compliance?",
                options: [
                    "Facility requirements",
                    "Documentation systems",
                    "Marketing strategies",
                    "Personnel training"
                ],
                correct: 2,
                explanation: "The four pillars of cGMP are: facility requirements, documentation systems, personnel training, and equipment & maintenance. Marketing strategies are not part of cGMP."
            },
            {
                id: 4,
                question: "What does 'HACCP' stand for in the context of personnel training?",
                options: [
                    "Hazard Analysis and Critical Control Points",
                    "Health Assessment and Chemical Control Procedures",
                    "Hygiene Analysis and Contamination Control Practices",
                    "Hazardous Area and Chemical Control Protocols"
                ],
                correct: 0,
                explanation: "HACCP stands for Hazard Analysis and Critical Control Points, a systematic approach to food safety and risk management."
            },
            {
                id: 5,
                question: "Which equipment qualification protocols are mentioned?",
                options: [
                    "IQ/OQ/PQ",
                    "GMP/GDP/GLP",
                    "SOP/CAPA/QC",
                    "FDA/USDA/DEA"
                ],
                correct: 0,
                explanation: "Equipment qualification follows IQ (Installation Qualification), OQ (Operational Qualification), and PQ (Performance Qualification) protocols."
            },
            {
                id: 6,
                question: "What does 'CAPA' stand for in documentation systems?",
                options: [
                    "Corrective and Preventive Action",
                    "Chemical Analysis and Product Assessment",
                    "Compliance Audit and Performance Analysis",
                    "Critical Assessment and Process Approval"
                ],
                correct: 0,
                explanation: "CAPA stands for Corrective and Preventive Action - systematic approaches to addressing and preventing quality issues."
            }
        ]
    },
    5: {
        title: "Cannabis-Specific Regulations Quiz",
        questions: [
            {
                id: 1,
                question: "What formula is used for calculating total THC content?",
                options: [
                    "THCA + Delta-9 THC",
                    "THCA × 0.877 + Delta-9 THC",
                    "THCA × 0.5 + Delta-9 THC",
                    "THCA ÷ 0.877 + Delta-9 THC"
                ],
                correct: 1,
                explanation: "Total THC = (THCA × 0.877) + Delta-9 THC. The 0.877 factor represents the molecular weight conversion of THCA to THC through decarboxylation."
            },
            {
                id: 2,
                question: "What term is used to describe hemp that exceeds legal THC thresholds?",
                options: [
                    "Non-compliant hemp",
                    "Hot hemp",
                    "Failed hemp",
                    "Rejected hemp"
                ],
                correct: 1,
                explanation: "'Hot' hemp is the industry term for cannabis that exceeds the legal 0.3% Delta-9 THC threshold and must be disposed of according to regulatory requirements."
            },
            {
                id: 3,
                question: "Which of the following product forms may be prohibited in some jurisdictions?",
                options: [
                    "Gummies",
                    "Tinctures",
                    "Sprays and inhalers",
                    "Chocolates"
                ],
                correct: 2,
                explanation: "Sprays and inhalers are prohibited in some jurisdictions due to concerns about dosing control and inhalation risks."
            },
            {
                id: 4,
                question: "What must cannabis and hemp-derived product labels include?",
                options: [
                    "Cannabinoid content disclosures only",
                    "Required warnings only",
                    "QR codes linking to COAs only",
                    "All of the above: cannabinoid content, warnings, and QR codes to COAs"
                ],
                correct: 3,
                explanation: "Compliant labels must include cannabinoid content disclosures, required warnings and disclaimers, and many companies include QR codes linking to Certificates of Analysis."
            },
            {
                id: 5,
                question: "Which type of laboratory certification is required for cannabis testing?",
                options: [
                    "FDA-certified laboratories",
                    "ISO 17025-accredited laboratories",
                    "USDA-approved laboratories",
                    "DEA-registered laboratories"
                ],
                correct: 1,
                explanation: "Cannabis testing must be performed by ISO 17025-accredited laboratories, which is the international standard for testing and calibration laboratories."
            },
            {
                id: 6,
                question: "Why are testing margin of error considerations important?",
                options: [
                    "They affect product pricing",
                    "They influence marketing strategies",
                    "They can affect compliance determinations",
                    "They determine packaging requirements"
                ],
                correct: 2,
                explanation: "Testing margin of error is critical because it can affect compliance determinations, especially for results near the 0.3% THC threshold where measurement uncertainty could impact legal status."
            }
        ]
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = quizData;
}