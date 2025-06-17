// Quiz Data Structure
const quizData = {
    // Modules 1 and 2 have no quizzes per user request
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
    },
    6: {
        title: "Quality Control Testing Protocols Quiz",
        questions: [
            {
                id: 1,
                question: "Which analytical instruments are mentioned as important for laboratory selection?",
                options: [
                    "HPLC, GC-MS, and ICP-MS",
                    "UV-Vis and IR only",
                    "Mass spectrometry only",
                    "Chromatography only"
                ],
                correct: 0,
                explanation: "Modern analytical instruments including HPLC, GC-MS, and ICP-MS are essential for accurate and reliable cannabis testing results."
            },
            {
                id: 2,
                question: "What does 'COA' stand for in the context of laboratory reporting?",
                options: [
                    "Certificate of Approval",
                    "Certificate of Analysis",
                    "Compliance and Oversight Assessment",
                    "Chemical and Organic Analysis"
                ],
                correct: 1,
                explanation: "COA stands for Certificate of Analysis, which provides comprehensive test results and documentation for each batch tested."
            },
            {
                id: 3,
                question: "Which heavy metals are specifically mentioned in the testing requirements?",
                options: [
                    "Lead and mercury only",
                    "Lead, mercury, arsenic, and cadmium",
                    "Iron and copper",
                    "Aluminum and zinc"
                ],
                correct: 1,
                explanation: "The four heavy metals typically tested in cannabis products are lead, mercury, arsenic, and cadmium due to their potential health risks."
            },
            {
                id: 4,
                question: "Mycotoxins testing focuses on which specific compounds?",
                options: [
                    "Pesticides and herbicides",
                    "Aflatoxins and ochratoxin A",
                    "Heavy metals",
                    "Residual solvents"
                ],
                correct: 1,
                explanation: "Mycotoxins testing specifically targets aflatoxins and ochratoxin A, which are toxic compounds produced by molds that can contaminate cannabis products."
            },
            {
                id: 5,
                question: "Which certification is specifically mentioned for cannabis testing laboratories?",
                options: [
                    "ISO 9001",
                    "ISO 14001", 
                    "ISO 17025",
                    "ISO 45001"
                ],
                correct: 2,
                explanation: "ISO 17025 is the international standard for testing and calibration laboratories, specifically mentioned as required for cannabis testing laboratories."
            },
            {
                id: 6,
                question: "What is the primary purpose of risk-based testing strategies?",
                options: [
                    "To reduce all testing costs",
                    "To optimize resources while maintaining safety by focusing on high-risk areas",
                    "To eliminate testing requirements",
                    "To speed up production processes"
                ],
                correct: 1,
                explanation: "Risk-based testing strategies optimize resources by focusing comprehensive testing on high-risk products while maintaining appropriate safety levels for all products."
            }
        ]
    },
    7: {
        title: "Contamination Prevention and Control Quiz",
        questions: [
            {
                id: 1,
                question: "Which of the following is the most critical factor in preventing cross-contamination in cannabis manufacturing?",
                options: [
                    "Product labeling",
                    "Facility design and workflow",
                    "Marketing strategies",
                    "Pricing policies"
                ],
                correct: 1,
                explanation: "Proper facility design and workflow are fundamental to preventing cross-contamination by creating physical barriers and controlled material flow patterns."
            },
            {
                id: 2,
                question: "What is the primary purpose of establishing controlled access areas in a cannabis manufacturing facility?",
                options: [
                    "To reduce labor costs",
                    "To prevent unauthorized access and contamination",
                    "To improve product marketing",
                    "To increase production speed"
                ],
                correct: 1,
                explanation: "Controlled access areas prevent unauthorized personnel from entering manufacturing areas and introducing potential contamination sources."
            },
            {
                id: 3,
                question: "Which type of contamination poses the greatest health risk in cannabis products?",
                options: [
                    "Physical contamination",
                    "Chemical contamination",
                    "Microbiological contamination",
                    "Visual contamination"
                ],
                correct: 2,
                explanation: "Microbiological contamination, including bacteria like E. coli and Salmonella, poses the greatest immediate health risk to consumers."
            },
            {
                id: 4,
                question: "What is the recommended approach for cleaning and sanitizing equipment between different product batches?",
                options: [
                    "Visual inspection only",
                    "Validated cleaning procedures with verification",
                    "Simple water rinse",
                    "Air drying only"
                ],
                correct: 1,
                explanation: "Validated cleaning procedures with verification ensure effective removal of contaminants and prevent cross-contamination between batches."
            },
            {
                id: 5,
                question: "Which environmental monitoring parameter is most critical for preventing mold growth?",
                options: [
                    "Temperature only",
                    "Humidity only", 
                    "Both temperature and humidity",
                    "Lighting conditions"
                ],
                correct: 2,
                explanation: "Both temperature and humidity must be controlled together to prevent mold growth, as molds require specific temperature and moisture conditions to thrive."
            },
            {
                id: 6,
                question: "What is the primary purpose of implementing a pest control program in cannabis manufacturing?",
                options: [
                    "To reduce insurance costs",
                    "To prevent contamination and maintain product quality",
                    "To comply with building codes",
                    "To improve employee morale"
                ],
                correct: 1,
                explanation: "Pest control programs prevent contamination from pests and the diseases they may carry, protecting product quality and consumer safety."
            }
        ]
    },
    8: {
        title: "Documentation and Record Keeping Quiz",
        questions: [
            {
                id: 1,
                question: "What is the primary purpose of maintaining detailed batch records in cannabis manufacturing?",
                options: [
                    "Marketing purposes",
                    "Traceability and quality assurance",
                    "Employee scheduling",
                    "Financial reporting"
                ],
                correct: 1,
                explanation: "Detailed batch records provide complete traceability and support quality assurance by documenting all activities and results for each production batch."
            },
            {
                id: 2,
                question: "How long should quality control testing records typically be retained?",
                options: [
                    "6 months",
                    "1 year",
                    "3 years or longer as required by regulations",
                    "30 days"
                ],
                correct: 2,
                explanation: "Quality control testing records should typically be retained for 3 years minimum, or longer if required by specific state or local regulations."
            },
            {
                id: 3,
                question: "What information must be included in a Standard Operating Procedure (SOP)?",
                options: [
                    "Purpose, scope, and step-by-step procedures",
                    "Employee personal information",
                    "Marketing strategies",
                    "Financial data"
                ],
                correct: 0,
                explanation: "SOPs must include the purpose, scope, and detailed step-by-step procedures to ensure consistent execution of activities."
            },
            {
                id: 4,
                question: "Which of the following is NOT typically required in a Certificate of Analysis (COA)?",
                options: [
                    "Test results for potency",
                    "Contaminant analysis results",
                    "Laboratory accreditation information",
                    "Manufacturing cost breakdown"
                ],
                correct: 3,
                explanation: "Manufacturing cost breakdown is not required in a COA. COAs should include test results, laboratory information, and analytical methods, but not production costs."
            },
            {
                id: 5,
                question: "What does the 'A' in ALCOA-C principles stand for?",
                options: [
                    "Accurate and Attributable",
                    "Approved and Authorized",
                    "Automated and Accessible",
                    "Audited and Authenticated"
                ],
                correct: 0,
                explanation: "In ALCOA-C principles, the 'A' stands for both Attributable (clear identification of who performed activities) and Accurate (complete and truthful documentation)."
            },
            {
                id: 6,
                question: "What is the purpose of forward traceability in cannabis manufacturing?",
                options: [
                    "To track employee performance",
                    "To track products from raw materials through processing to final distribution",
                    "To monitor equipment maintenance schedules",
                    "To manage inventory costs"
                ],
                correct: 1,
                explanation: "Forward traceability tracks products from raw materials through all processing steps to final distribution, answering 'Where did it go?' for rapid identification and recall capability."
            }
        ]
    },
    9: {
        title: "Personnel Training and Competency Quiz",
        questions: [
            {
                id: 1,
                question: "What is the minimum frequency for refresher training on cGMP principles?",
                options: [
                    "Monthly",
                    "Quarterly",
                    "Annually",
                    "Every 5 years"
                ],
                correct: 2,
                explanation: "cGMP principles training should be refreshed annually at minimum to ensure personnel maintain current knowledge of fundamental quality requirements."
            },
            {
                id: 2,
                question: "Which topic should be included in initial training for all cannabis manufacturing personnel?",
                options: [
                    "Advanced chemistry",
                    "Personal hygiene and contamination prevention",
                    "Marketing strategies",
                    "Financial planning"
                ],
                correct: 1,
                explanation: "Personal hygiene and contamination prevention training is essential for all personnel as contamination risks affect product safety and quality regardless of specific job responsibilities."
            },
            {
                id: 3,
                question: "What is the purpose of competency assessments in cannabis manufacturing?",
                options: [
                    "To determine salary levels",
                    "To verify that employees can perform their jobs safely and effectively",
                    "To plan vacation schedules",
                    "To assign parking spaces"
                ],
                correct: 1,
                explanation: "Competency assessments verify that personnel have the knowledge and skills necessary to perform their assigned tasks safely and effectively, ensuring quality and compliance."
            },
            {
                id: 4,
                question: "Which of the following is a key component of effective training documentation?",
                options: [
                    "Employee personal preferences",
                    "Training content, date, duration, and attendee signatures",
                    "Salary information",
                    "Personal contact information"
                ],
                correct: 1,
                explanation: "Effective training documentation must include training content delivered, date and duration of training, and attendee signatures to demonstrate compliance and track training completion."
            },
            {
                id: 5,
                question: "What should happen when an employee fails a competency assessment?",
                options: [
                    "Immediate termination",
                    "Additional training and re-assessment",
                    "Salary reduction",
                    "Transfer to a different department"
                ],
                correct: 1,
                explanation: "When an employee fails a competency assessment, they should receive additional training to address knowledge gaps followed by re-assessment to verify improved competency."
            },
            {
                id: 6,
                question: "Who is typically responsible for ensuring that training programs meet regulatory requirements?",
                options: [
                    "Individual employees",
                    "Quality assurance personnel",
                    "Marketing department",
                    "Accounting department"
                ],
                correct: 1,
                explanation: "Quality assurance personnel are typically responsible for ensuring that training programs meet regulatory requirements and maintain compliance with industry standards."
            }
        ]
    },
    10: {
        title: "Equipment Qualification and Maintenance Quiz",
        questions: [
            {
                id: 1,
                question: "What does 'IQ' stand for in equipment qualification?",
                options: [
                    "Intelligence Quotient",
                    "Installation Qualification",
                    "Internal Quality",
                    "Inspection Questionnaire"
                ],
                correct: 1,
                explanation: "IQ stands for Installation Qualification, which verifies that equipment is properly installed according to specifications and manufacturer requirements."
            },
            {
                id: 2,
                question: "Which qualification phase verifies that equipment operates according to specifications?",
                options: [
                    "Installation Qualification (IQ)",
                    "Operational Qualification (OQ)",
                    "Performance Qualification (PQ)",
                    "Design Qualification (DQ)"
                ],
                correct: 1,
                explanation: "Operational Qualification (OQ) verifies that equipment operates according to specifications under normal operating conditions and within specified parameters."
            },
            {
                id: 3,
                question: "What is the primary purpose of preventive maintenance in cannabis manufacturing?",
                options: [
                    "To reduce equipment costs",
                    "To ensure consistent equipment performance and prevent failures",
                    "To improve employee satisfaction",
                    "To meet insurance requirements"
                ],
                correct: 1,
                explanation: "Preventive maintenance ensures consistent equipment performance and prevents unexpected failures that could impact product quality, safety, and production continuity."
            },
            {
                id: 4,
                question: "How often should critical manufacturing equipment be calibrated?",
                options: [
                    "Only when it breaks",
                    "According to a predetermined schedule based on risk and usage",
                    "Once per year regardless of usage",
                    "Only during inspections"
                ],
                correct: 1,
                explanation: "Critical manufacturing equipment should be calibrated according to a predetermined schedule that considers risk level, usage patterns, and manufacturer recommendations to ensure accuracy."
            },
            {
                id: 5,
                question: "What should be documented when performing equipment maintenance?",
                options: [
                    "Only the date of maintenance",
                    "Date, procedures performed, parts replaced, and technician signature",
                    "Only the cost of maintenance",
                    "Only the equipment serial number"
                ],
                correct: 1,
                explanation: "Complete maintenance documentation should include the date, procedures performed, parts replaced, and technician signature to provide full traceability and compliance evidence."
            },
            {
                id: 6,
                question: "Which type of equipment typically requires the most frequent calibration in cannabis testing?",
                options: [
                    "Packaging equipment",
                    "Analytical instruments (scales, HPLC, etc.)",
                    "Lighting systems",
                    "Office computers"
                ],
                correct: 1,
                explanation: "Analytical instruments like scales and HPLC systems require the most frequent calibration because they directly impact the accuracy of quality testing and compliance measurements."
            }
        ]
    },
    11: {
        title: "Supply Chain and Vendor Management Quiz",
        questions: [
            {
                id: 1,
                question: "What is the most important factor when selecting suppliers for cannabis manufacturing?",
                options: [
                    "Lowest price",
                    "Quality, reliability, and regulatory compliance",
                    "Geographic location",
                    "Company size"
                ],
                correct: 1,
                explanation: "Quality, reliability, and regulatory compliance are the most important factors in supplier selection as they directly impact product safety, quality, and legal compliance."
            },
            {
                id: 2,
                question: "Which document should be obtained from suppliers to verify the quality of incoming materials?",
                options: [
                    "Invoice only",
                    "Certificate of Analysis (COA)",
                    "Marketing brochure",
                    "Company newsletter"
                ],
                correct: 1,
                explanation: "A Certificate of Analysis (COA) provides essential information about material quality, testing results, and compliance with specifications, making it crucial for quality verification."
            },
            {
                id: 3,
                question: "What is the purpose of conducting supplier audits?",
                options: [
                    "To negotiate better prices",
                    "To verify that suppliers meet quality and regulatory standards",
                    "To plan social events",
                    "To compare marketing strategies"
                ],
                correct: 1,
                explanation: "Supplier audits verify that vendors maintain the quality systems and regulatory compliance necessary to consistently provide materials that meet requirements."
            },
            {
                id: 4,
                question: "How should incoming raw materials be handled upon receipt?",
                options: [
                    "Immediately used in production",
                    "Quarantined until quality testing is complete",
                    "Stored in any available space",
                    "Returned to supplier"
                ],
                correct: 1,
                explanation: "Incoming raw materials should be quarantined until quality testing and approval are complete to prevent the use of non-conforming materials in production."
            },
            {
                id: 5,
                question: "What information should be included in a supplier qualification program?",
                options: [
                    "Supplier's financial statements only",
                    "Quality systems, certifications, and compliance history",
                    "Employee personal information",
                    "Marketing strategies"
                ],
                correct: 1,
                explanation: "A supplier qualification program should evaluate quality systems, certifications, and compliance history to ensure suppliers can consistently meet quality and regulatory requirements."
            },
            {
                id: 6,
                question: "Which of the following is a key component of effective vendor management?",
                options: [
                    "Regular communication and performance monitoring",
                    "Avoiding all contact with vendors",
                    "Focusing only on price negotiations",
                    "Changing vendors frequently"
                ],
                correct: 0,
                explanation: "Regular communication and performance monitoring are essential for maintaining strong supplier relationships and ensuring continued compliance with quality requirements."
            }
        ]
    },
    12: {
        title: "Batch Release and Product Disposition Quiz",
        questions: [
            {
                id: 1,
                question: "What must be completed before a cannabis product batch can be released for distribution?",
                options: [
                    "Marketing approval only",
                    "All quality control testing and documentation review",
                    "Financial approval only",
                    "Packaging design approval"
                ],
                correct: 1,
                explanation: "All quality control testing must be completed and all documentation must be reviewed and approved before a batch can be released to ensure compliance and safety."
            },
            {
                id: 2,
                question: "Who typically has the authority to approve or reject product batches?",
                options: [
                    "Production supervisor",
                    "Qualified person or quality assurance manager",
                    "Marketing manager",
                    "Accounting department"
                ],
                correct: 1,
                explanation: "A qualified person or quality assurance manager with appropriate training and authority is responsible for making batch release decisions based on quality and compliance criteria."
            },
            {
                id: 3,
                question: "What should happen to a product batch that fails quality control testing?",
                options: [
                    "Release it anyway",
                    "Investigate, determine root cause, and disposition appropriately",
                    "Ignore the results",
                    "Blend it with passing batches"
                ],
                correct: 1,
                explanation: "Failed batches require investigation to determine root cause, followed by appropriate disposition such as rework, rejection, or destruction based on the nature of the failure."
            },
            {
                id: 4,
                question: "Which document provides the final approval for batch release?",
                options: [
                    "Production record",
                    "Batch release certificate or disposition record",
                    "Invoice",
                    "Marketing plan"
                ],
                correct: 1,
                explanation: "A batch release certificate or disposition record documents the final approval decision and provides evidence that all requirements have been met before release."
            },
            {
                id: 5,
                question: "What is the purpose of quarantine procedures in cannabis manufacturing?",
                options: [
                    "To reduce storage costs",
                    "To prevent release of products before quality approval",
                    "To improve production speed",
                    "To reduce labor requirements"
                ],
                correct: 1,
                explanation: "Quarantine procedures prevent the inadvertent release or use of products before they have been properly tested, reviewed, and approved for release."
            },
            {
                id: 6,
                question: "How should non-conforming products be handled?",
                options: [
                    "Released immediately",
                    "Clearly identified, segregated, and investigated",
                    "Mixed with conforming products",
                    "Ignored"
                ],
                correct: 1,
                explanation: "Non-conforming products must be clearly identified, segregated from conforming products, and investigated to determine appropriate disposition and prevent quality issues."
            }
        ]
    },
    13: {
        title: "Audit Preparation and Regulatory Inspections Quiz",
        questions: [
            {
                id: 1,
                question: "What is the primary purpose of conducting internal audits?",
                options: [
                    "To find fault with employees",
                    "To identify and correct deficiencies before regulatory inspections",
                    "To reduce operational costs",
                    "To plan marketing strategies"
                ],
                correct: 1,
                explanation: "Internal audits proactively identify and correct deficiencies before external regulatory inspections, demonstrating commitment to continuous improvement and compliance."
            },
            {
                id: 2,
                question: "Which documents should be readily available during a regulatory inspection?",
                options: [
                    "Employee personal files only",
                    "SOPs, batch records, testing data, and training records",
                    "Marketing materials only",
                    "Financial statements only"
                ],
                correct: 1,
                explanation: "Essential quality and compliance documents including SOPs, batch records, testing data, and training records should be readily accessible during regulatory inspections."
            },
            {
                id: 3,
                question: "What is the recommended approach when responding to inspector questions?",
                options: [
                    "Provide vague, general answers",
                    "Be honest, direct, and provide requested documentation",
                    "Refuse to answer questions",
                    "Provide only verbal responses"
                ],
                correct: 1,
                explanation: "Honest, direct responses with appropriate documentation demonstrate transparency and professionalism while facilitating efficient inspections."
            },
            {
                id: 4,
                question: "How often should internal audits be conducted?",
                options: [
                    "Only when problems occur",
                    "On a regular, predetermined schedule",
                    "Only before regulatory inspections",
                    "Never"
                ],
                correct: 1,
                explanation: "Internal audits should be conducted on a regular, predetermined schedule to ensure consistent monitoring of quality systems and proactive identification of issues."
            },
            {
                id: 5,
                question: "What should be done if an inspector identifies a deficiency?",
                options: [
                    "Deny the deficiency exists",
                    "Acknowledge it and provide a corrective action plan",
                    "Blame other employees",
                    "Ignore the inspector's findings"
                ],
                correct: 1,
                explanation: "Acknowledging deficiencies and providing comprehensive corrective action plans demonstrates professionalism and commitment to addressing issues."
            },
            {
                id: 6,
                question: "Which of the following is most important for successful audit preparation?",
                options: [
                    "Hiding problematic documents",
                    "Maintaining complete, accurate, and current documentation",
                    "Training employees to avoid inspectors",
                    "Focusing only on production areas"
                ],
                correct: 1,
                explanation: "Complete, accurate, and current documentation is the foundation of successful audit preparation and demonstrates ongoing compliance with quality requirements."
            }
        ]
    },
    14: {
        title: "Continuous Improvement and Quality Management Systems Quiz",
        questions: [
            {
                id: 1,
                question: "What is the primary goal of a continuous improvement program?",
                options: [
                    "To reduce employee satisfaction",
                    "To systematically enhance processes, products, and systems",
                    "To increase production costs",
                    "To complicate procedures"
                ],
                correct: 1,
                explanation: "Continuous improvement programs systematically enhance processes, products, and systems to achieve better quality, efficiency, and customer satisfaction over time."
            },
            {
                id: 2,
                question: "Which tool is commonly used to identify the root cause of quality problems?",
                options: [
                    "Marketing surveys",
                    "Fishbone diagram or 5 Why analysis",
                    "Financial reports",
                    "Employee schedules"
                ],
                correct: 1,
                explanation: "Fishbone diagrams and 5 Why analysis are systematic problem-solving tools that help identify root causes rather than just symptoms of quality problems."
            },
            {
                id: 3,
                question: "What does 'CAPA' stand for in quality management?",
                options: [
                    "Customer and Product Analysis",
                    "Corrective and Preventive Action",
                    "Cost and Performance Assessment",
                    "Compliance and Procedure Audit"
                ],
                correct: 1,
                explanation: "CAPA stands for Corrective and Preventive Action, which addresses current problems and prevents their recurrence through systematic investigation and improvement."
            },
            {
                id: 4,
                question: "Which metric is most useful for measuring the effectiveness of a quality management system?",
                options: [
                    "Production volume only",
                    "Trend analysis of quality indicators and customer complaints",
                    "Employee attendance",
                    "Marketing expenses"
                ],
                correct: 1,
                explanation: "Trend analysis of quality indicators and customer complaints provides insight into system effectiveness and improvement opportunities over time."
            },
            {
                id: 5,
                question: "What is the purpose of management review in a quality management system?",
                options: [
                    "To criticize employees",
                    "To evaluate system effectiveness and identify improvement opportunities",
                    "To plan social events",
                    "To reduce operational costs"
                ],
                correct: 1,
                explanation: "Management review evaluates the effectiveness of quality management systems and identifies opportunities for improvement and resource allocation."
            },
            {
                id: 6,
                question: "Which of the following best describes a culture of continuous improvement?",
                options: [
                    "Resistance to change",
                    "Proactive identification and resolution of issues by all employees",
                    "Blame-focused problem solving",
                    "Reactive responses to problems only"
                ],
                correct: 1,
                explanation: "A culture of continuous improvement involves all employees proactively identifying and resolving issues, fostering innovation and ongoing enhancement of operations."
            }
        ]
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = quizData;
}