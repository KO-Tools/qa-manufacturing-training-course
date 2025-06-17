// Course Data Structure
const courseData = {
    modules: [
        {
            id: 1,
            title: "Course Overview and Objectives",
            duration: "2 minutes",
            content: `
                <h1>Course Overview and Objectives</h1>
                
                <h2>Welcome to Kind Oasis Quality Assurance Training</h2>
                <p>This training provides essential knowledge for maintaining the highest standards of quality in cannabis manufacturing. You'll complete 14 modules covering every aspect of quality assurance in our industry.</p>

                <h3>Why Quality Assurance Matters</h3>
                <p>Quality assurance extends beyond testing to encompass every aspect of manufacturing operations. In cannabis manufacturing, robust quality systems are essential for:</p>
                
                <ul>
                    <li><strong>Regulatory Compliance:</strong> Meeting federal, state, and local requirements</li>
                    <li><strong>Consumer Safety:</strong> Protecting customers from contaminated products</li>
                    <li><strong>Business Success:</strong> Preventing recalls and reputation damage</li>
                </ul>

                <div class="interactive-element">
                    <h4>📊 Course Overview</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin: 1rem 0;">
                        <div style="text-align: center; padding: 1rem; background: #f8f9fa; border-radius: 8px;">
                            <div style="font-size: 2rem; font-weight: bold; color: #2d5016;">14</div>
                            <div>Modules</div>
                        </div>
                        <div style="text-align: center; padding: 1rem; background: #f8f9fa; border-radius: 8px;">
                            <div style="font-size: 2rem; font-weight: bold; color: #2d5016;">~1</div>
                            <div>Hour</div>
                        </div>
                        <div style="text-align: center; padding: 1rem; background: #f8f9fa; border-radius: 8px;">
                            <div style="font-size: 2rem; font-weight: bold; color: #2d5016;">100%</div>
                            <div>Compliance Focus</div>
                        </div>
                    </div>
                </div>

                <h3>Quality Culture at Kind Oasis</h3>
                <p>At Kind Oasis, quality is the foundation of everything we do. This training will help you understand your role in maintaining our quality culture and provide you with the tools necessary to contribute to our ongoing success.</p>

                <p>Ready to begin your journey toward quality assurance excellence? Let's start with learning about Kind Oasis.</p>
            `
        },
        {
            id: 2,
            title: "Kind Oasis Company Introduction",
            duration: "2 minutes",
            content: `
                <h1>Kind Oasis Company Introduction</h1>
                
                <h2>About Kind Oasis</h2>
                <p>Kind Oasis is a Milwaukee-based manufacturer of premium, lab-tested hemp-derived wellness products. We specialize in creating handcrafted products that meet the highest standards of excellence through small-batch manufacturing.</p>

                <h3>Our Products</h3>
                <p>We manufacture a diverse range of hemp-derived wellness products:</p>

                <div class="interactive-element">
                    <h4>📦 Product Portfolio</h4>
                    <ul style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.5rem; list-style: none; padding: 0;">
                        <li>🍬 Gummies (Delta-8, Delta-9, CBD)</li>
                        <li>🍫 Chocolates</li>
                        <li>💧 Tinctures</li>
                        <li>🧴 Topicals</li>
                        <li>🥤 Seltzers</li>
                        <li>🥃 Shooters</li>
                        <li>🍯 Syrups</li>
                        <li>🍄 Functional Mushrooms</li>
                    </ul>
                </div>

                <h3>Our Quality Values</h3>
                <div class="interactive-element">
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1rem; margin: 1rem 0;">
                        <div style="text-align: center; padding: 1rem; background: #2d5016; color: white; border-radius: 8px;">
                            <div style="font-size: 1.5rem; margin-bottom: 0.5rem;">🌱</div>
                            <strong>All-Natural</strong>
                        </div>
                        <div style="text-align: center; padding: 1rem; background: #4a7c59; color: white; border-radius: 8px;">
                            <div style="font-size: 1.5rem; margin-bottom: 0.5rem;">🥕</div>
                            <strong>Vegan</strong>
                        </div>
                        <div style="text-align: center; padding: 1rem; background: #d4af37; color: #2d5016; border-radius: 8px;">
                            <div style="font-size: 1.5rem; margin-bottom: 0.5rem;">🧪</div>
                            <strong>Lab Tested</strong>
                        </div>
                        <div style="text-align: center; padding: 1rem; background: #8fbc8f; color: #2d5016; border-radius: 8px;">
                            <div style="font-size: 1.5rem; margin-bottom: 0.5rem;">🏠</div>
                            <strong>Locally Made</strong>
                        </div>
                    </div>
                </div>

                <h3>Small-Batch Manufacturing</h3>
                <p>We prioritize quality over quantity through small-batch production, which enables enhanced quality control, faster problem identification, and greater attention to detail.</p>

                <h3>Regulatory Compliance</h3>
                <p>Kind Oasis maintains strict adherence to the 2018 Farm Bill, ensuring all products contain ≤0.3% Delta-9 THC. Every batch is tested by ISO-accredited laboratories with comprehensive documentation for full traceability.</p>

                <p>Now let's explore the complex regulatory landscape that governs our industry.</p>
            `
        },
        {
            id: 3,
            title: "Regulatory Landscape Overview",
            duration: "4 minutes",
            content: `
                <h1>Regulatory Landscape Overview</h1>
                
                <div class="interactive-element">
                    <h4>🎯 Learning Objectives</h4>
                    <p>Upon completion of this module, you will be able to:</p>
                    <ul>
                        <li><strong>Navigate the complex federal regulatory framework</strong> governing cannabis and hemp-derived products, including FDA, USDA, and DEA requirements</li>
                        <li><strong>Distinguish between hemp and marijuana</strong> based on legal definitions and testing requirements</li>
                        <li><strong>Identify state-specific regulations</strong> that impact manufacturing operations and product distribution</li>
                        <li><strong>Apply regulatory decision-making frameworks</strong> to determine compliance requirements for specific products and situations</li>
                        <li><strong>Develop strategies for staying current</strong> with evolving regulations and industry standards</li>
                    </ul>
                </div>

                <h2>The Complex Regulatory Environment</h2>
                <p>The cannabis and hemp industry operates within one of the most complex regulatory frameworks in modern manufacturing. Unlike established industries with decades of regulatory precedent, cannabis manufacturing navigates a rapidly evolving landscape with significant variations between federal, state, and local jurisdictions.</p>

                <div class="interactive-element">
                    <h4>⚖️ Regulatory Complexity Factors</h4>
                    <ul>
                        <li><strong>Federal vs. State Authority:</strong> Conflicting jurisdictions and requirements</li>
                        <li><strong>Evolving Regulations:</strong> Frequent changes and updates to existing rules</li>
                        <li><strong>Multiple Agencies:</strong> FDA, USDA, DEA, and state agencies with different priorities</li>
                        <li><strong>Product-Specific Rules:</strong> Different requirements for different product types</li>
                        <li><strong>Interstate Commerce:</strong> Varying rules for multi-state operations</li>
                    </ul>
                </div>

                <h2>Federal Regulatory Bodies</h2>
                <p>Three primary federal agencies govern different aspects of cannabis and hemp-derived product manufacturing, each with distinct roles and requirements.</p>

                <h3>Food and Drug Administration (FDA)</h3>
                <p>The FDA regulates cannabis and hemp-derived products under several frameworks, depending on the product type and intended use.</p>

                <div class="interactive-element">
                    <h4>🏛️ FDA Regulatory Areas</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; margin: 1rem 0;">
                        <div style="padding: 1rem; border: 2px solid #17a2b8; border-radius: 8px; background: #f0f9ff;">
                            <h5 style="color: #17a2b8; margin-bottom: 0.5rem;">Food Products</h5>
                            <p style="font-size: 0.9rem; margin: 0;">Facility registration, food safety regulations, labeling requirements</p>
                        </div>
                        <div style="padding: 1rem; border: 2px solid #17a2b8; border-radius: 8px; background: #f0f9ff;">
                            <h5 style="color: #17a2b8; margin-bottom: 0.5rem;">Dietary Supplements</h5>
                            <p style="font-size: 0.9rem; margin: 0;">cGMP requirements, structure/function claims, adverse event reporting</p>
                        </div>
                        <div style="padding: 1rem; border: 2px solid #17a2b8; border-radius: 8px; background: #f0f9ff;">
                            <h5 style="color: #17a2b8; margin-bottom: 0.5rem;">Cosmetics</h5>
                            <p style="font-size: 0.9rem; margin: 0;">Safety requirements, labeling standards, ingredient restrictions</p>
                        </div>
                        <div style="padding: 1rem; border: 2px solid #17a2b8; border-radius: 8px; background: #f0f9ff;">
                            <h5 style="color: #17a2b8; margin-bottom: 0.5rem;">Drug Products</h5>
                            <p style="font-size: 0.9rem; margin: 0;">Clinical trials, drug approval pathways, therapeutic claims</p>
                        </div>
                    </div>
                </div>

                <p><strong>Key FDA Requirements:</strong></p>
                <ul>
                    <li>Food facility registration for food products</li>
                    <li>Prohibition on therapeutic claims without drug approval</li>
                    <li>cGMP compliance for dietary supplements</li>
                    <li>Proper labeling and ingredient disclosure</li>
                    <li>Adverse event reporting requirements</li>
                </ul>

                <h3>U.S. Department of Agriculture (USDA)</h3>
                <p>The USDA oversees hemp production under the 2018 Farm Bill, establishing the regulatory framework that distinguishes legal hemp from marijuana.</p>

                <div class="interactive-element">
                    <h4>🌾 2018 Farm Bill Key Provisions</h4>
                    <ul>
                        <li><strong>Hemp Definition:</strong> Cannabis containing ≤0.3% Delta-9 THC on a dry weight basis</li>
                        <li><strong>Legal Status:</strong> Removed hemp from the Controlled Substances Act</li>
                        <li><strong>Interstate Commerce:</strong> Authorized legal transport of hemp across state lines</li>
                        <li><strong>Testing Requirements:</strong> Mandatory testing to confirm THC levels</li>
                        <li><strong>State Plans:</strong> Required state regulatory plans for hemp cultivation</li>
                    </ul>
                </div>

                <p><strong>USDA Hemp Regulations Include:</strong></p>
                <ul>
                    <li>Testing protocols for THC content verification</li>
                    <li>Sampling procedures and laboratory requirements</li>
                    <li>Disposal procedures for non-compliant plants</li>
                    <li>Licensing and registration requirements</li>
                    <li>Record-keeping and reporting obligations</li>
                </ul>

                <h3>Drug Enforcement Administration (DEA)</h3>
                <p>The DEA enforces the Controlled Substances Act and maintains authority over marijuana and THC-containing products that exceed legal thresholds.</p>

                <p><strong>DEA Jurisdiction:</strong></p>
                <ul>
                    <li>Enforcement of marijuana prohibition (>0.3% Delta-9 THC)</li>
                    <li>Classification of controlled substances</li>
                    <li>Investigation of illegal cannabis operations</li>
                    <li>Coordination with state and local enforcement</li>
                </ul>

                <h2>THC Calculation and Compliance</h2>
                <p>Understanding THC calculation is critical for determining product legal status and compliance requirements.</p>

                <div class="interactive-element">
                    <h4>🧮 Total THC Calculation Formula</h4>
                    <div style="background: #2d5016; color: white; padding: 1.5rem; border-radius: 8px; text-align: center; margin: 1rem 0;">
                        <div style="font-size: 1.5rem; font-weight: bold; margin-bottom: 0.5rem;">
                            Total THC = (THCA × 0.877) + Delta-9 THC
                        </div>
                        <p style="margin: 0; font-size: 0.9rem;">THCA converts to THC through decarboxylation</p>
                    </div>
                    
                    <h5>Example Calculation:</h5>
                    <div style="background: #f8f9fa; padding: 1rem; border-radius: 8px; font-family: monospace;">
                        <p><strong>Sample Results:</strong></p>
                        <p>THCA: 0.25%</p>
                        <p>Delta-9 THC: 0.15%</p>
                        <p><strong>Calculation:</strong></p>
                        <p>Total THC = (0.25 × 0.877) + 0.15</p>
                        <p>Total THC = 0.219 + 0.15 = 0.369%</p>
                        <p style="color: #dc3545; font-weight: bold;">Result: EXCEEDS 0.3% limit - "Hot" hemp</p>
                    </div>
                </div>

                <h3>Testing Margin of Error</h3>
                <p>Testing laboratories must account for measurement uncertainty when determining compliance. A result of 0.35% ± 0.06% could still be compliant if the lower confidence interval is ≤0.3%.</p>

                <h2>State and Industry Frameworks</h2>
                <p>While federal regulations provide the foundation, state regulations often impose additional requirements that vary significantly across jurisdictions.</p>

                <div class="interactive-element">
                    <h4>🗺️ State Regulatory Variations</h4>
                    <ul>
                        <li><strong>THC Limits:</strong> Some states impose stricter limits than federal requirements</li>
                        <li><strong>Testing Requirements:</strong> Additional contaminant testing or different methodologies</li>
                        <li><strong>Licensing Procedures:</strong> State-specific licensing and registration processes</li>
                        <li><strong>Product Restrictions:</strong> Limitations on product types, packaging, or marketing</li>
                        <li><strong>Age Restrictions:</strong> Varying minimum age requirements for purchase</li>
                        <li><strong>Taxation:</strong> State-specific tax structures and reporting requirements</li>
                    </ul>
                </div>

                <h3>Industry Standards and Guidance</h3>
                <p>Several organizations provide industry standards and best practice guidance to supplement regulatory requirements:</p>

                <ul>
                    <li><strong>FOCUS (Cannabis Manufacturing Standard):</strong> Comprehensive manufacturing guidelines</li>
                    <li><strong>AFDO (Model Code for Consumable Hemp Products):</strong> Food safety framework for hemp products</li>
                    <li><strong>NEHA (Food Safety Guidance for Cannabis-Infused Products):</strong> Environmental health guidance</li>
                    <li><strong>ASTM International:</strong> Standard test methods for cannabis and hemp</li>
                    <li><strong>ISO Standards:</strong> Quality management and testing laboratory requirements</li>
                </ul>

                <h2>Compliance Strategy Framework</h2>
                <p>Developing an effective compliance strategy requires a systematic approach to regulatory management.</p>

                <div class="interactive-element">
                    <h4>📋 Regulatory Decision Tree</h4>
                    <div style="background: #f8f9fa; padding: 1.5rem; border-radius: 8px; margin: 1rem 0;">
                        <h5>Step 1: Product Classification</h5>
                        <ul style="font-size: 0.9rem;">
                            <li>What is the intended use? (Food, dietary supplement, cosmetic, etc.)</li>
                            <li>What is the THC content? (≤0.3% or >0.3%)</li>
                            <li>What claims will be made? (Structure/function, therapeutic, etc.)</li>
                        </ul>
                        
                        <h5>Step 2: Jurisdiction Determination</h5>
                        <ul style="font-size: 0.9rem;">
                            <li>Which states will the product be sold in?</li>
                            <li>Are there interstate commerce considerations?</li>
                            <li>What local regulations apply?</li>
                        </ul>
                        
                        <h5>Step 3: Requirement Assessment</h5>
                        <ul style="font-size: 0.9rem;">
                            <li>Which federal agencies have jurisdiction?</li>
                            <li>What testing is required?</li>
                            <li>What documentation must be maintained?</li>
                        </ul>
                        
                        <h5>Step 4: Compliance Implementation</h5>
                        <ul style="font-size: 0.9rem;">
                            <li>Develop SOPs for compliance activities</li>
                            <li>Establish testing and documentation protocols</li>
                            <li>Train personnel on requirements</li>
                            <li>Monitor for regulatory changes</li>
                        </ul>
                    </div>
                </div>

                <h2>Staying Current with Regulatory Changes</h2>
                <p>The regulatory landscape continues to evolve rapidly, requiring proactive monitoring and adaptation strategies.</p>

                <div class="interactive-element">
                    <h4>📰 Regulatory Monitoring Strategy</h4>
                    <ul>
                        <li><strong>Federal Register Monitoring:</strong> Track proposed and final federal regulations</li>
                        <li><strong>Agency Newsletters:</strong> Subscribe to FDA, USDA, and DEA updates</li>
                        <li><strong>Industry Associations:</strong> Participate in trade organizations and working groups</li>
                        <li><strong>Legal Counsel:</strong> Maintain relationships with cannabis law specialists</li>
                        <li><strong>Regulatory Consultants:</strong> Engage experts for complex compliance issues</li>
                        <li><strong>Peer Networks:</strong> Share information with other manufacturers</li>
                        <li><strong>State Notifications:</strong> Monitor state agency communications and updates</li>
                    </ul>
                </div>

                <h3>Enforcement Trends and Implications</h3>
                <p>Understanding regulatory enforcement patterns helps prioritize compliance efforts and risk management:</p>

                <ul>
                    <li><strong>Common Violations:</strong> Therapeutic claims, labeling errors, facility registration</li>
                    <li><strong>Enforcement Actions:</strong> Warning letters, product seizures, facility inspections</li>
                    <li><strong>Penalty Trends:</strong> Increasing fines and stricter enforcement</li>
                    <li><strong>Industry Impact:</strong> Recalls, business closures, reputation damage</li>
                </ul>

                <div class="interactive-element">
                    <h4>⚠️ Real-World Regulatory Challenges</h4>
                    <p><strong>Case Study: Interstate Commerce</strong></p>
                    <p>A manufacturer produces compliant hemp gummies in State A (0.3% Delta-9 THC limit) but wants to sell in State B (0.1% Delta-9 THC limit). The same product is legal in State A but illegal in State B, requiring reformulation or restricted distribution.</p>
                    
                    <p><strong>Key Lessons:</strong></p>
                    <ul style="font-size: 0.9rem;">
                        <li>Always research destination state requirements</li>
                        <li>Consider the most restrictive requirements for multi-state products</li>
                        <li>Maintain flexibility in formulations and labeling</li>
                        <li>Document compliance decisions and rationale</li>
                    </ul>
                </div>

                <h2>Risk Management Approach</h2>
                <p>Effective regulatory compliance requires a risk-based approach that prioritizes resources based on potential impact and likelihood of issues.</p>

                <p><strong>High-Risk Areas:</strong></p>
                <ul>
                    <li>THC content exceeding legal limits</li>
                    <li>Therapeutic or medical claims</li>
                    <li>Contaminated products</li>
                    <li>Mislabeled or unregistered products</li>
                    <li>Interstate commerce violations</li>
                </ul>

                <p><strong>Mitigation Strategies:</strong></p>
                <ul>
                    <li>Conservative formulation approaches</li>
                    <li>Comprehensive testing programs</li>
                    <li>Robust documentation systems</li>
                    <li>Regular compliance audits</li>
                    <li>Employee training programs</li>
                </ul>

                <p>Understanding the regulatory landscape is essential for maintaining compliance and avoiding costly violations. In the next module, we'll explore how current Good Manufacturing Practices (cGMP) provide the foundation for regulatory compliance and quality assurance.</p>
            `
        },
        {
            id: 4,
            title: "cGMP Compliance Fundamentals",
            duration: "4 minutes",
            content: `
                <h1>cGMP Compliance Fundamentals</h1>
                
                <div class="interactive-element">
                    <h4>🎯 Learning Objectives</h4>
                    <p>Upon completion of this module, you will be able to:</p>
                    <ul>
                        <li><strong>Apply cGMP principles</strong> to cannabis manufacturing operations, adapting pharmaceutical and food industry standards to cannabis-specific requirements</li>
                        <li><strong>Design compliant facility layouts</strong> that minimize contamination risks and support efficient operations</li>
                        <li><strong>Develop comprehensive documentation systems</strong> that meet regulatory requirements and support operational excellence</li>
                        <li><strong>Implement effective personnel training programs</strong> that ensure competency and compliance</li>
                        <li><strong>Establish equipment qualification and maintenance protocols</strong> that ensure consistent performance and product quality</li>
                    </ul>
                </div>

                <h2>Introduction to cGMP</h2>
                <p>Current Good Manufacturing Practices (cGMP) represent the foundation of quality manufacturing in regulated industries. Originally developed for pharmaceutical manufacturing, cGMP principles have been adapted for food, dietary supplements, and now cannabis products.</p>

                <div class="interactive-element">
                    <h4>📚 cGMP Definition and Scope</h4>
                    <p><strong>cGMP stands for "Current Good Manufacturing Practices"</strong> - the minimum quality requirements for the methods, facilities, and controls used in manufacturing, processing, and packing of regulated products.</p>
                    
                    <p><strong>Key Characteristics:</strong></p>
                    <ul>
                        <li><strong>"Current":</strong> Practices must evolve with technology and scientific knowledge</li>
                        <li><strong>"Good":</strong> Represent established best practices, not just minimum requirements</li>
                        <li><strong>"Manufacturing":</strong> Cover all aspects from raw materials to finished products</li>
                        <li><strong>"Practices":</strong> Comprehensive systems, not just procedures</li>
                    </ul>
                </div>

                <h3>cGMP Regulatory Framework</h3>
                <p>Cannabis manufacturing should follow applicable cGMP regulations based on product classification:</p>

                <ul>
                    <li><strong>21 CFR Parts 210/211:</strong> Pharmaceutical cGMPs for drug products</li>
                    <li><strong>21 CFR Part 117:</strong> Food Safety Modernization Act (FSMA) for food products</li>
                    <li><strong>21 CFR Part 111:</strong> Dietary supplement cGMPs</li>
                    <li><strong>State Cannabis Regulations:</strong> Additional state-specific requirements</li>
                    <li><strong>Industry Standards:</strong> FOCUS, GACP, and other guidance documents</li>
                </ul>

                <h2>Core cGMP Principles</h2>
                <p>cGMP is built on four fundamental pillars that work together to ensure consistent product quality and safety.</p>

                <div class="interactive-element">
                    <h4>🏛️ Four Pillars of cGMP</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; margin: 1rem 0;">
                        <div style="padding: 1.5rem; border: 3px solid #2d5016; border-radius: 12px; background: #f9f9f9; text-align: center;">
                            <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🏭</div>
                            <h5 style="color: #2d5016; margin-bottom: 1rem;">Facility Requirements</h5>
                            <p style="font-size: 0.9rem; margin: 0;">Proper design, construction, and maintenance of manufacturing facilities</p>
                        </div>
                        <div style="padding: 1.5rem; border: 3px solid #4a7c59; border-radius: 12px; background: #f9f9f9; text-align: center;">
                            <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">📋</div>
                            <h5 style="color: #4a7c59; margin-bottom: 1rem;">Documentation Systems</h5>
                            <p style="font-size: 0.9rem; margin: 0;">Comprehensive record-keeping and traceability systems</p>
                        </div>
                        <div style="padding: 1.5rem; border: 3px solid #d4af37; border-radius: 12px; background: #f9f9f9; text-align: center;">
                            <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">👥</div>
                            <h5 style="color: #d4af37; margin-bottom: 1rem;">Personnel Training</h5>
                            <p style="font-size: 0.9rem; margin: 0;">Qualified, trained personnel with demonstrated competency</p>
                        </div>
                        <div style="padding: 1.5rem; border: 3px solid #8fbc8f; border-radius: 12px; background: #f9f9f9; text-align: center;">
                            <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">⚙️</div>
                            <h5 style="color: #8fbc8f; margin-bottom: 1rem;">Equipment & Maintenance</h5>
                            <p style="font-size: 0.9rem; margin: 0;">Proper equipment design, qualification, and maintenance</p>
                        </div>
                    </div>
                </div>

                <h2>Facility Requirements</h2>
                <p>cGMP facility requirements ensure that the physical manufacturing environment supports quality production and prevents contamination.</p>

                <h3>Facility Design Principles</h3>
                <div class="interactive-element">
                    <h4>🏗️ Key Facility Design Elements</h4>
                    <ul>
                        <li><strong>Controlled Access:</strong> Restricted entry to manufacturing areas</li>
                        <li><strong>Segregated Production Areas:</strong> Separation of different products and processes</li>
                        <li><strong>Proper Air Handling:</strong> HVAC systems with appropriate filtration</li>
                        <li><strong>Environmental Controls:</strong> Temperature, humidity, and pressure monitoring</li>
                        <li><strong>Cleanable Surfaces:</strong> Materials that can be effectively sanitized</li>
                        <li><strong>Adequate Lighting:</strong> Sufficient illumination for all operations</li>
                        <li><strong>Pest Control:</strong> Design features that prevent pest entry</li>
                        <li><strong>Waste Management:</strong> Proper disposal and containment systems</li>
                    </ul>
                </div>

                <h3>Material Flow and Contamination Prevention</h3>
                <p>Effective facility layout prevents cross-contamination through careful design of material and personnel flow patterns.</p>

                <div class="interactive-element">
                    <h4>🔄 Facility Flow Design</h4>
                    <div style="background: #f8f9fa; padding: 1.5rem; border-radius: 8px; margin: 1rem 0;">
                        <h5>Ideal Flow Pattern:</h5>
                        <div style="font-family: monospace; background: white; padding: 1rem; border-radius: 4px; border: 1px solid #dee2e6;">
                            Raw Materials → Staging → Production → Packaging → Finished Goods → Shipping
                            <br>
                            ↓ (Quarantine) ↓ (Testing) ↓ (QC Release) ↓ (Final Approval) ↓
                        </div>
                        
                        <h5>Critical Design Features:</h5>
                        <ul style="font-size: 0.9rem; margin-top: 1rem;">
                            <li>Unidirectional flow (no backtracking)</li>
                            <li>Separate receiving and shipping areas</li>
                            <li>Quarantine areas for incoming and finished materials</li>
                            <li>Segregated areas for different product types</li>
                            <li>Proper airlocks and pressure differentials</li>
                        </ul>
                    </div>
                </div>

                <h2>Documentation Systems</h2>
                <p>Documentation is the backbone of cGMP compliance, providing evidence of compliance and enabling effective problem investigation and resolution.</p>

                <h3>Documentation Hierarchy</h3>
                <div class="interactive-element">
                    <h4>📄 cGMP Document Types</h4>
                    <div style="display: grid; grid-template-columns: 1fr; gap: 1rem; margin: 1rem 0;">
                        <div style="padding: 1rem; border-left: 4px solid #2d5016; background: #f9f9f9;">
                            <h5 style="color: #2d5016; margin: 0 0 0.5rem;">Level 1: Quality Manual</h5>
                            <p style="font-size: 0.9rem; margin: 0;">High-level quality policy and system overview</p>
                        </div>
                        <div style="padding: 1rem; border-left: 4px solid #4a7c59; background: #f9f9f9;">
                            <h5 style="color: #4a7c59; margin: 0 0 0.5rem;">Level 2: Standard Operating Procedures (SOPs)</h5>
                            <p style="font-size: 0.9rem; margin: 0;">Detailed procedures for specific activities and processes</p>
                        </div>
                        <div style="padding: 1rem; border-left: 4px solid #d4af37; background: #f9f9f9;">
                            <h5 style="color: #d4af37; margin: 0 0 0.5rem;">Level 3: Work Instructions</h5>
                            <p style="font-size: 0.9rem; margin: 0;">Step-by-step instructions for specific tasks</p>
                        </div>
                        <div style="padding: 1rem; border-left: 4px solid #8fbc8f; background: #f9f9f9;">
                            <h5 style="color: #8fbc8f; margin: 0 0 0.5rem;">Level 4: Records and Forms</h5>
                            <p style="font-size: 0.9rem; margin: 0;">Evidence of activities performed and results achieved</p>
                        </div>
                    </div>
                </div>

                <h3>Essential cGMP Documentation</h3>
                <ul>
                    <li><strong>Master Batch Records:</strong> Recipe and production instructions for each product</li>
                    <li><strong>Batch Production Records:</strong> Documentation of actual production activities</li>
                    <li><strong>Quality Control Records:</strong> Testing data and certificates of analysis</li>
                    <li><strong>Equipment Logs:</strong> Maintenance, calibration, and cleaning records</li>
                    <li><strong>Training Records:</strong> Personnel qualification and competency documentation</li>
                    <li><strong>Deviation Reports:</strong> Investigation of departures from established procedures</li>
                    <li><strong>Change Control Records:</strong> Documentation of process or system changes</li>
                </ul>

                <div class="interactive-element">
                    <h4>✍️ Documentation Best Practices</h4>
                    <ul>
                        <li><strong>Contemporaneous:</strong> Records made at the time activities are performed</li>
                        <li><strong>Accurate:</strong> Complete and truthful documentation of activities</li>
                        <li><strong>Legible:</strong> Clear, readable records that can be understood by others</li>
                        <li><strong>Indelible:</strong> Permanent records that cannot be easily altered</li>
                        <li><strong>Traceable:</strong> Clear identification of who, what, when, where, and why</li>
                        <li><strong>Retained:</strong> Proper storage and retention for required periods</li>
                    </ul>
                </div>

                <h2>Personnel Training and Competency</h2>
                <p>People are the most critical component of any quality system. Effective cGMP implementation requires properly trained and qualified personnel.</p>

                <h3>Training Program Elements</h3>
                <div class="interactive-element">
                    <h4>🎓 Comprehensive Training Program</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin: 1rem 0;">
                        <div style="padding: 1rem; background: #2d5016; color: white; border-radius: 8px; text-align: center;">
                            <h6 style="margin: 0 0 0.5rem;">cGMP Fundamentals</h6>
                            <p style="font-size: 0.8rem; margin: 0;">Basic principles and requirements</p>
                        </div>
                        <div style="padding: 1rem; background: #4a7c59; color: white; border-radius: 8px; text-align: center;">
                            <h6 style="margin: 0 0 0.5rem;">Job-Specific Skills</h6>
                            <p style="font-size: 0.8rem; margin: 0;">Role-specific procedures and requirements</p>
                        </div>
                        <div style="padding: 1rem; background: #d4af37; color: #2d5016; border-radius: 8px; text-align: center;">
                            <h6 style="margin: 0 0 0.5rem;">Personal Hygiene</h6>
                            <p style="font-size: 0.8rem; margin: 0;">Contamination prevention practices</p>
                        </div>
                        <div style="padding: 1rem; background: #8fbc8f; color: #2d5016; border-radius: 8px; text-align: center;">
                            <h6 style="margin: 0 0 0.5rem;">Documentation</h6>
                            <p style="font-size: 0.8rem; margin: 0;">Proper record-keeping practices</p>
                        </div>
                        <div style="padding: 1rem; background: #6c757d; color: white; border-radius: 8px; text-align: center;">
                            <h6 style="margin: 0 0 0.5rem;">HACCP Principles</h6>
                            <p style="font-size: 0.8rem; margin: 0;">Hazard analysis and critical control points</p>
                        </div>
                        <div style="padding: 1rem; background: #28a745; color: white; border-radius: 8px; text-align: center;">
                            <h6 style="margin: 0 0 0.5rem;">Regulatory Updates</h6>
                            <p style="font-size: 0.8rem; margin: 0;">Ongoing education on changes</p>
                        </div>
                    </div>
                </div>

                <h3>Competency Assessment</h3>
                <p>Training must be followed by competency assessment to ensure personnel can perform their jobs effectively.</p>

                <ul>
                    <li><strong>Knowledge Testing:</strong> Written assessments of understanding</li>
                    <li><strong>Practical Demonstration:</strong> Hands-on performance evaluation</li>
                    <li><strong>Observation:</strong> Ongoing monitoring of work performance</li>
                    <li><strong>Refresher Training:</strong> Periodic updates and reinforcement</li>
                </ul>

                <h2>Equipment and Maintenance</h2>
                <p>Proper equipment design, qualification, and maintenance are essential for consistent product quality and cGMP compliance.</p>

                <h3>Equipment Qualification</h3>
                <div class="interactive-element">
                    <h4>🔧 Equipment Qualification Protocols</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin: 1rem 0;">
                        <div style="padding: 1rem; border: 2px solid #2d5016; border-radius: 8px; background: #f9f9f9;">
                            <h6 style="color: #2d5016; margin: 0 0 0.5rem;">IQ - Installation Qualification</h6>
                            <p style="font-size: 0.8rem; margin: 0;">Verify correct installation per specifications</p>
                        </div>
                        <div style="padding: 1rem; border: 2px solid #4a7c59; border-radius: 8px; background: #f9f9f9;">
                            <h6 style="color: #4a7c59; margin: 0 0 0.5rem;">OQ - Operational Qualification</h6>
                            <p style="font-size: 0.8rem; margin: 0;">Demonstrate operation within specified parameters</p>
                        </div>
                        <div style="padding: 1rem; border: 2px solid #d4af37; border-radius: 8px; background: #f9f9f9;">
                            <h6 style="color: #d4af37; margin: 0 0 0.5rem;">PQ - Performance Qualification</h6>
                            <p style="font-size: 0.8rem; margin: 0;">Confirm consistent performance during actual use</p>
                        </div>
                    </div>
                </div>

                <h3>Preventive Maintenance Program</h3>
                <p>A comprehensive preventive maintenance program ensures equipment reliability and prevents quality issues.</p>

                <div class="interactive-element">
                    <h4>🛠️ Maintenance Program Components</h4>
                    <ul>
                        <li><strong>Equipment Inventory:</strong> Complete listing of all manufacturing equipment</li>
                        <li><strong>Maintenance Schedules:</strong> Frequency-based maintenance activities</li>
                        <li><strong>Calibration Programs:</strong> Regular verification of measurement accuracy</li>
                        <li><strong>Spare Parts Management:</strong> Critical spare parts inventory and sourcing</li>
                        <li><strong>Maintenance Records:</strong> Documentation of all maintenance activities</li>
                        <li><strong>Performance Monitoring:</strong> Tracking of equipment performance trends</li>
                    </ul>
                </div>

                <h2>Risk-Based Approach to cGMP</h2>
                <p>Modern cGMP implementation uses risk assessment to prioritize resources and focus on the most critical aspects of quality assurance.</p>

                <div class="interactive-element">
                    <h4>⚖️ Risk Assessment Framework</h4>
                    <div style="background: #f8f9fa; padding: 1.5rem; border-radius: 8px; margin: 1rem 0;">
                        <h5>Risk Evaluation Criteria:</h5>
                        <ul style="font-size: 0.9rem;">
                            <li><strong>Severity:</strong> Potential impact on product quality or patient safety</li>
                            <li><strong>Probability:</strong> Likelihood of the risk occurring</li>
                            <li><strong>Detectability:</strong> Ability to detect the issue before it impacts products</li>
                        </ul>
                        
                        <h5>Risk Prioritization:</h5>
                        <div style="font-family: monospace; background: white; padding: 1rem; border-radius: 4px; border: 1px solid #dee2e6; margin-top: 1rem;">
                            High Risk = High Severity × High Probability × Low Detectability
                            <br>
                            Medium Risk = Moderate combinations of factors
                            <br>
                            Low Risk = Low Severity × Low Probability × High Detectability
                        </div>
                    </div>
                </div>

                <h3>Common cGMP Risk Areas</h3>
                <ul>
                    <li><strong>Cross-contamination:</strong> Between different products or batches</li>
                    <li><strong>Equipment failure:</strong> Breakdown during critical production steps</li>
                    <li><strong>Human error:</strong> Mistakes in procedures or documentation</li>
                    <li><strong>Raw material variability:</strong> Inconsistent incoming materials</li>
                    <li><strong>Environmental conditions:</strong> Temperature, humidity, or contamination issues</li>
                </ul>

                <h2>cGMP Implementation Strategy</h2>
                <p>Successful cGMP implementation requires a systematic approach with management commitment and employee engagement.</p>

                <div class="interactive-element">
                    <h4>🚀 Implementation Roadmap</h4>
                    <ol>
                        <li><strong>Gap Analysis:</strong> Assess current state vs. cGMP requirements</li>
                        <li><strong>System Design:</strong> Develop comprehensive quality management system</li>
                        <li><strong>Documentation Development:</strong> Create required SOPs and forms</li>
                        <li><strong>Training Implementation:</strong> Train all personnel on new procedures</li>
                        <li><strong>System Testing:</strong> Validate that systems work as intended</li>
                        <li><strong>Full Implementation:</strong> Go-live with all cGMP requirements</li>
                        <li><strong>Continuous Improvement:</strong> Monitor and improve system performance</li>
                    </ol>
                </div>

                <h3>Success Factors</h3>
                <ul>
                    <li><strong>Management Commitment:</strong> Visible leadership support and resource allocation</li>
                    <li><strong>Employee Engagement:</strong> Active participation in system development and implementation</li>
                    <li><strong>Phased Approach:</strong> Gradual implementation to manage complexity</li>
                    <li><strong>External Support:</strong> Consulting and training from cGMP experts</li>
                    <li><strong>Continuous Monitoring:</strong> Regular assessment and improvement of systems</li>
                </ul>

                <p>cGMP compliance provides the foundation for all quality assurance activities in cannabis manufacturing. In the next module, we'll explore the specific regulatory requirements that apply uniquely to cannabis and hemp-derived products.</p>
            `
        },
        {
            id: 5,
            title: "Cannabis-Specific Regulations",
            duration: "4 minutes",
            content: `
                <h1>Cannabis-Specific Regulations</h1>
                
                <div class="interactive-element">
                    <h4>🎯 Learning Objectives</h4>
                    <p>Upon completion of this module, you will be able to:</p>
                    <ul>
                        <li><strong>Calculate total THC content</strong> using appropriate formulas and understand margin of error implications for compliance</li>
                        <li><strong>Identify product restrictions</strong> that apply to different cannabis and hemp-derived products in various jurisdictions</li>
                        <li><strong>Design compliant product labels</strong> that meet all regulatory requirements while supporting marketing objectives</li>
                        <li><strong>Implement comprehensive testing protocols</strong> that ensure product safety and regulatory compliance</li>
                        <li><strong>Develop procedures for handling non-compliant materials</strong> and products that exceed legal thresholds</li>
                    </ul>
                </div>

                <h2>THC Threshold Compliance</h2>
                <p>The distinction between legal hemp and illegal marijuana hinges entirely on THC content. Understanding THC calculation, testing, and compliance is fundamental to legal cannabis manufacturing.</p>

                <h3>Legal THC Limits</h3>
                <div class="interactive-element">
                    <h4>📊 THC Compliance Framework</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; margin: 1rem 0;">
                        <div style="padding: 1.5rem; border: 3px solid #28a745; border-radius: 12px; background: #d4edda; text-align: center;">
                            <div style="font-size: 2rem; font-weight: bold; color: #28a745; margin-bottom: 0.5rem;">≤0.3%</div>
                            <h5 style="color: #155724; margin-bottom: 0.5rem;">Legal Hemp</h5>
                            <p style="font-size: 0.9rem; margin: 0; color: #155724;">Federal compliance, interstate commerce allowed</p>
                        </div>
                        <div style="padding: 1.5rem; border: 3px solid #dc3545; border-radius: 12px; background: #f8d7da; text-align: center;">
                            <div style="font-size: 2rem; font-weight: bold; color: #dc3545; margin-bottom: 0.5rem;">>0.3%</div>
                            <h5 style="color: #721c24; margin-bottom: 0.5rem;">Illegal Marijuana</h5>
                            <p style="font-size: 0.9rem; margin: 0; color: #721c24;">Federal violation, requires disposal</p>
                        </div>
                    </div>
                </div>

                <h3>Total THC Calculation</h3>
                <p>The legal definition of hemp requires calculating "total THC" which includes both active THC and THCA (THC acid) that converts to THC through decarboxylation.</p>

                <div class="interactive-element">
                    <h4>🧮 THC Calculation Formula</h4>
                    <div style="background: linear-gradient(135deg, #2d5016, #4a7c59); color: white; padding: 2rem; border-radius: 12px; text-align: center; margin: 1.5rem 0;">
                        <div style="font-size: 2rem; font-weight: bold; margin-bottom: 1rem;">
                            Total THC = (THCA × 0.877) + Delta-9 THC
                        </div>
                        <p style="margin: 0; font-size: 1.1rem; opacity: 0.9;">
                            The 0.877 factor represents the molecular weight conversion of THCA to THC
                        </p>
                    </div>
                    
                    <h5>Step-by-Step Calculation Example:</h5>
                    <div style="background: #f8f9fa; padding: 1.5rem; border-radius: 8px; font-family: 'Courier New', monospace;">
                        <p><strong>Laboratory Results:</strong></p>
                        <p>• THCA: 0.25% (by dry weight)</p>
                        <p>• Delta-9 THC: 0.15% (by dry weight)</p>
                        <br>
                        <p><strong>Calculation:</strong></p>
                        <p>• THCA contribution: 0.25% × 0.877 = 0.219%</p>
                        <p>• Total THC: 0.219% + 0.15% = 0.369%</p>
                        <br>
                        <p style="color: #dc3545; font-weight: bold; font-size: 1.1rem;">
                            ⚠️ RESULT: 0.369% > 0.3% = NON-COMPLIANT "HOT" HEMP
                        </p>
                    </div>
                    
                    <h5>Compliant Example:</h5>
                    <div style="background: #d4edda; padding: 1.5rem; border-radius: 8px; font-family: 'Courier New', monospace;">
                        <p><strong>Laboratory Results:</strong></p>
                        <p>• THCA: 0.20% (by dry weight)</p>
                        <p>• Delta-9 THC: 0.12% (by dry weight)</p>
                        <br>
                        <p><strong>Calculation:</strong></p>
                        <p>• THCA contribution: 0.20% × 0.877 = 0.175%</p>
                        <p>• Total THC: 0.175% + 0.12% = 0.295%</p>
                        <br>
                        <p style="color: #155724; font-weight: bold; font-size: 1.1rem;">
                            ✅ RESULT: 0.295% ≤ 0.3% = COMPLIANT HEMP
                        </p>
                    </div>
                </div>

                <h3>Testing Margin of Error</h3>
                <p>Laboratory testing involves measurement uncertainty that must be considered when determining compliance.</p>

                <div class="interactive-element">
                    <h4>📏 Measurement Uncertainty Example</h4>
                    <div style="background: #fff3cd; padding: 1.5rem; border: 2px solid #ffc107; border-radius: 8px; margin: 1rem 0;">
                        <h5 style="color: #856404;">Scenario: Borderline Result</h5>
                        <p style="margin-bottom: 1rem;">Laboratory reports: Total THC = 0.32% ± 0.04%</p>
                        
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                            <div>
                                <h6 style="color: #856404;">Lower Confidence Interval:</h6>
                                <p style="font-family: monospace;">0.32% - 0.04% = 0.28%</p>
                                <p style="color: #28a745; font-weight: bold;">✅ 0.28% ≤ 0.3% = Potentially Compliant</p>
                            </div>
                            <div>
                                <h6 style="color: #856404;">Upper Confidence Interval:</h6>
                                <p style="font-family: monospace;">0.32% + 0.04% = 0.36%</p>
                                <p style="color: #dc3545; font-weight: bold;">❌ 0.36% > 0.3% = Risk of Non-Compliance</p>
                            </div>
                        </div>
                        
                        <p style="margin-top: 1rem; font-weight: bold; color: #856404;">
                            Decision: May require additional testing or conservative disposition
                        </p>
                    </div>
                </div>

                <h2>Product Restrictions and Limitations</h2>
                <p>Cannabis and hemp-derived products face numerous restrictions that vary by jurisdiction and product type.</p>

                <h3>Federal Product Restrictions</h3>
                <div class="interactive-element">
                    <h4>🚫 Common Product Restrictions</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin: 1rem 0;">
                        <div style="padding: 1rem; border: 2px solid #dc3545; border-radius: 8px; background: #f8d7da;">
                            <h6 style="color: #721c24; margin-bottom: 0.5rem;">Prohibited Forms</h6>
                            <ul style="font-size: 0.9rem; color: #721c24; margin: 0;">
                                <li>Inhalable products (some states)</li>
                                <li>Sprays and aerosols</li>
                                <li>Certain concentrates</li>
                            </ul>
                        </div>
                        <div style="padding: 1rem; border: 2px solid #dc3545; border-radius: 8px; background: #f8d7da;">
                            <h6 style="color: #721c24; margin-bottom: 0.5rem;">Serving Size Limits</h6>
                            <ul style="font-size: 0.9rem; color: #721c24; margin: 0;">
                                <li>Maximum mg per serving</li>
                                <li>Package serving limits</li>
                                <li>Daily dose restrictions</li>
                            </ul>
                        </div>
                        <div style="padding: 1rem; border: 2px solid #dc3545; border-radius: 8px; background: #f8d7da;">
                            <h6 style="color: #721c24; margin-bottom: 0.5rem;">Additive Restrictions</h6>
                            <ul style="font-size: 0.9rem; color: #721c24; margin: 0;">
                                <li>Prohibited ingredients</li>
                                <li>Artificial colors/flavors</li>
                                <li>Alcohol content limits</li>
                            </ul>
                        </div>
                        <div style="padding: 1rem; border: 2px solid #dc3545; border-radius: 8px; background: #f8d7da;">
                            <h6 style="color: #721c24; margin-bottom: 0.5rem;">Marketing Claims</h6>
                            <ul style="font-size: 0.9rem; color: #721c24; margin: 0;">
                                <li>No therapeutic claims</li>
                                <li>Limited health claims</li>
                                <li>Age-related restrictions</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <h3>State-Specific Variations</h3>
                <p>States may impose additional restrictions beyond federal requirements:</p>

                <ul>
                    <li><strong>Stricter THC Limits:</strong> Some states require <0.3% Delta-9 THC</li>
                    <li><strong>Product Form Restrictions:</strong> Prohibitions on specific product types</li>
                    <li><strong>Packaging Requirements:</strong> Child-resistant, opaque, or specific materials</li>
                    <li><strong>Distribution Limitations:</strong> Licensed retailer requirements</li>
                    <li><strong>Testing Mandates:</strong> Additional or more frequent testing</li>
                </ul>

                <h2>Labeling Requirements</h2>
                <p>Proper labeling is critical for regulatory compliance and consumer protection.</p>

                <div class="interactive-element">
                    <h4>🏷️ Required Label Elements</h4>
                    <div style="background: #f8f9fa; padding: 1.5rem; border-radius: 8px; margin: 1rem 0;">
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
                            <div>
                                <h5 style="color: #2d5016;">Mandatory Information</h5>
                                <ul style="font-size: 0.9rem; margin: 0;">
                                    <li>Product name and description</li>
                                    <li>Net weight/volume</li>
                                    <li>Cannabinoid content per serving</li>
                                    <li>Total cannabinoids per package</li>
                                    <li>Ingredient list</li>
                                    <li>Manufacturer information</li>
                                    <li>Lot/batch number</li>
                                    <li>Expiration date</li>
                                </ul>
                            </div>
                            <div>
                                <h5 style="color: #d4af37;">Required Warnings</h5>
                                <ul style="font-size: 0.9rem; margin: 0;">
                                    <li>"Keep out of reach of children"</li>
                                    <li>Pregnancy/nursing warnings</li>
                                    <li>Impairment warnings</li>
                                    <li>Age restrictions</li>
                                    <li>FDA disclaimer statements</li>
                                    <li>Storage instructions</li>
                                    <li>Dosage guidance</li>
                                </ul>
                            </div>
                        </div>
                        
                        <h5 style="color: #4a7c59; margin-top: 1rem;">QR Code/COA Access</h5>
                        <p style="font-size: 0.9rem; margin: 0;">
                            Many companies include QR codes linking to Certificate of Analysis (COA) for transparency and compliance verification.
                        </p>
                    </div>
                </div>

                <h3>FDA Disclaimer Requirements</h3>
                <p>Products marketed as dietary supplements must include specific FDA disclaimer language:</p>

                <div class="interactive-element">
                    <h4>📢 Required FDA Disclaimer</h4>
                    <div style="background: #2d5016; color: white; padding: 1.5rem; border-radius: 8px; margin: 1rem 0; font-style: italic;">
                        "This statement has not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease."
                    </div>
                </div>

                <h2>Testing Mandates</h2>
                <p>Comprehensive testing is required to ensure product safety and regulatory compliance.</p>

                <h3>Required Testing Categories</h3>
                <div class="interactive-element">
                    <h4>🧪 Comprehensive Testing Protocol</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin: 1rem 0;">
                        <div style="padding: 1rem; background: #2d5016; color: white; border-radius: 8px; text-align: center;">
                            <div style="font-size: 1.5rem; margin-bottom: 0.5rem;">💊</div>
                            <h6 style="margin: 0 0 0.5rem;">Potency Testing</h6>
                            <p style="font-size: 0.8rem; margin: 0;">THC, CBD, CBG, other cannabinoids</p>
                        </div>
                        <div style="padding: 1rem; background: #4a7c59; color: white; border-radius: 8px; text-align: center;">
                            <div style="font-size: 1.5rem; margin-bottom: 0.5rem;">🦠</div>
                            <h6 style="margin: 0 0 0.5rem;">Microbiology</h6>
                            <p style="font-size: 0.8rem; margin: 0;">E. coli, Salmonella, yeast, mold</p>
                        </div>
                        <div style="padding: 1rem; background: #d4af37; color: #2d5016; border-radius: 8px; text-align: center;">
                            <div style="font-size: 1.5rem; margin-bottom: 0.5rem;">⚗️</div>
                            <h6 style="margin: 0 0 0.5rem;">Heavy Metals</h6>
                            <p style="font-size: 0.8rem; margin: 0;">Lead, mercury, arsenic, cadmium</p>
                        </div>
                        <div style="padding: 1rem; background: #8fbc8f; color: #2d5016; border-radius: 8px; text-align: center;">
                            <div style="font-size: 1.5rem; margin-bottom: 0.5rem;">🌿</div>
                            <h6 style="margin: 0 0 0.5rem;">Pesticides</h6>
                            <p style="font-size: 0.8rem; margin: 0;">Residual pesticides, herbicides</p>
                        </div>
                        <div style="padding: 1rem; background: #6c757d; color: white; border-radius: 8px; text-align: center;">
                            <div style="font-size: 1.5rem; margin-bottom: 0.5rem;">💧</div>
                            <h6 style="margin: 0 0 0.5rem;">Residual Solvents</h6>
                            <p style="font-size: 0.8rem; margin: 0;">Extraction solvents, alcohols</p>
                        </div>
                        <div style="padding: 1rem; background: #17a2b8; color: white; border-radius: 8px; text-align: center;">
                            <div style="font-size: 1.5rem; margin-bottom: 0.5rem;">🍄</div>
                            <h6 style="margin: 0 0 0.5rem;">Mycotoxins</h6>
                            <p style="font-size: 0.8rem; margin: 0;">Aflatoxins, ochratoxin A</p>
                        </div>
                    </div>
                </div>

                <h3>Laboratory Requirements</h3>
                <p>Testing must be performed by qualified laboratories meeting specific criteria:</p>

                <ul>
                    <li><strong>ISO 17025 Accreditation:</strong> International standard for testing laboratories</li>
                    <li><strong>Cannabis-Specific Scope:</strong> Accreditation specifically for cannabis testing</li>
                    <li><strong>State Approval:</strong> Licensed by appropriate state agencies</li>
                    <li><strong>Method Validation:</strong> Validated analytical methods for all tests</li>
                    <li><strong>Proficiency Testing:</strong> Participation in inter-laboratory comparisons</li>
                </ul>

                <h2>Handling Non-Compliant Materials</h2>
                <p>Procedures must be established for handling materials that exceed legal THC thresholds.</p>

                <div class="interactive-element">
                    <h4>🔄 "Hot" Hemp Management Process</h4>
                    <div style="background: #fff3cd; padding: 1.5rem; border: 2px solid #ffc107; border-radius: 8px; margin: 1rem 0;">
                        <h5 style="color: #856404;">Step 1: Identification</h5>
                        <ul style="font-size: 0.9rem; color: #856404;">
                            <li>Laboratory testing confirms >0.3% total THC</li>
                            <li>Immediate quarantine of affected materials</li>
                            <li>Investigation to determine root cause</li>
                        </ul>
                        
                        <h5 style="color: #856404;">Step 2: Documentation</h5>
                        <ul style="font-size: 0.9rem; color: #856404;">
                            <li>Complete documentation of test results</li>
                            <li>Deviation report and investigation</li>
                            <li>Notification of regulatory authorities (if required)</li>
                        </ul>
                        
                        <h5 style="color: #856404;">Step 3: Disposition</h5>
                        <ul style="font-size: 0.9rem; color: #856404;">
                            <li>Disposal according to regulatory requirements</li>
                            <li>Documentation of disposal methods</li>
                            <li>Prevention strategies to avoid recurrence</li>
                        </ul>
                    </div>
                </div>

                <h3>Disposal Requirements</h3>
                <p>Non-compliant materials must be disposed of according to specific procedures:</p>

                <ul>
                    <li><strong>DEA Registration:</strong> May require DEA registration for disposal</li>
                    <li><strong>Approved Methods:</strong> Incineration, composting, or other approved methods</li>
                    <li><strong>Witness Requirements:</strong> Law enforcement or regulatory witness may be required</li>
                    <li><strong>Documentation:</strong> Complete records of disposal activities</li>
                    <li><strong>Environmental Compliance:</strong> Follow environmental regulations for disposal</li>
                </ul>

                <h2>Compliance Strategy Development</h2>
                <p>Effective compliance requires proactive planning and systematic implementation.</p>

                <div class="interactive-element">
                    <h4>📋 Compliance Checklist</h4>
                    <div style="background: #f8f9fa; padding: 1.5rem; border-radius: 8px; margin: 1rem 0;">
                        <h5>Pre-Production Planning</h5>
                        <ul style="font-size: 0.9rem;">
                            <li>☐ Formulation review for THC compliance</li>
                            <li>☐ Supplier qualification and testing</li>
                            <li>☐ Batch size and testing frequency planning</li>
                            <li>☐ Label design and regulatory review</li>
                        </ul>
                        
                        <h5>Production Controls</h5>
                        <ul style="font-size: 0.9rem;">
                            <li>☐ In-process monitoring and testing</li>
                            <li>☐ Batch documentation and traceability</li>
                            <li>☐ Environmental monitoring</li>
                            <li>☐ Personnel training verification</li>
                        </ul>
                        
                        <h5>Post-Production Verification</h5>
                        <ul style="font-size: 0.9rem;">
                            <li>☐ Comprehensive testing completion</li>
                            <li>☐ COA review and approval</li>
                            <li>☐ Label accuracy verification</li>
                            <li>☐ Batch release documentation</li>
                        </ul>
                    </div>
                </div>

                <h3>Continuous Compliance Monitoring</h3>
                <p>Maintaining compliance requires ongoing monitoring and improvement:</p>

                <ul>
                    <li><strong>Trend Analysis:</strong> Monitor THC levels over time</li>
                    <li><strong>Supplier Performance:</strong> Track raw material consistency</li>
                    <li><strong>Process Control:</strong> Statistical process control implementation</li>
                    <li><strong>Regulatory Updates:</strong> Monitor for changes in requirements</li>
                    <li><strong>Internal Audits:</strong> Regular compliance assessments</li>
                </ul>

                <p>Cannabis-specific regulations create unique challenges that require specialized knowledge and careful attention to detail. In the next module, we'll explore the comprehensive testing protocols necessary to ensure product safety and regulatory compliance.</p>
            `
        },
        {
            id: 6,
            title: "Quality Control Testing Protocols",
            duration: "4 minutes",
            content: `
                <h1>Quality Control Testing Protocols</h1>
                
                <div class="interactive-element">
                    <h4>🎯 Learning Objectives</h4>
                    <p>Upon completion of this module, you will be able to:</p>
                    <ul>
                        <li><strong>Design comprehensive testing programs</strong> that address all required analytes while optimizing cost and efficiency</li>
                        <li><strong>Evaluate testing laboratory capabilities</strong> and establish effective partnerships that support quality objectives</li>
                        <li><strong>Interpret test results</strong> and make informed decisions about product disposition and process improvements</li>
                        <li><strong>Implement sampling protocols</strong> that ensure representative testing and accurate results</li>
                        <li><strong>Establish batch release criteria</strong> that balance quality requirements with operational efficiency</li>
                    </ul>
                </div>

                <h2>Testing as Risk Management</h2>
                <p>Comprehensive testing serves as a critical risk management tool, addressing specific threats to consumer safety and product quality while enabling risk-based testing strategies that optimize resources.</p>

                <div class="interactive-element">
                    <h4>🧪 Required Testing Categories</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin: 1rem 0;">
                        <div style="padding: 1rem; background: #2d5016; color: white; border-radius: 8px; text-align: center;">
                            <div style="font-size: 1.5rem; margin-bottom: 0.5rem;">💊</div>
                            <h6 style="margin: 0 0 0.5rem;">Cannabinoid Potency</h6>
                            <p style="font-size: 0.8rem; margin: 0;">THC, CBD, CBG, terpenes, ≤0.3% Delta-9 verification</p>
                        </div>
                        <div style="padding: 1rem; background: #4a7c59; color: white; border-radius: 8px; text-align: center;">
                            <div style="font-size: 1.5rem; margin-bottom: 0.5rem;">⚗️</div>
                            <h6 style="margin: 0 0 0.5rem;">Heavy Metals</h6>
                            <p style="font-size: 0.8rem; margin: 0;">Lead, mercury, arsenic, cadmium analysis using validated methods</p>
                        </div>
                        <div style="padding: 1rem; background: #d4af37; color: #2d5016; border-radius: 8px; text-align: center;">
                            <div style="font-size: 1.5rem; margin-bottom: 0.5rem;">🌿</div>
                            <h6 style="margin: 0 0 0.5rem;">Pesticides</h6>
                            <p style="font-size: 0.8rem; margin: 0;">Residual pesticides and growth regulators screening</p>
                        </div>
                        <div style="padding: 1rem; background: #8fbc8f; color: #2d5016; border-radius: 8px; text-align: center;">
                            <div style="font-size: 1.5rem; margin-bottom: 0.5rem;">🦠</div>
                            <h6 style="margin: 0 0 0.5rem;">Microbiology</h6>
                            <p style="font-size: 0.8rem; margin: 0;">E. coli, Salmonella, total yeast and mold counts</p>
                        </div>
                        <div style="padding: 1rem; background: #6c757d; color: white; border-radius: 8px; text-align: center;">
                            <div style="font-size: 1.5rem; margin-bottom: 0.5rem;">🍄</div>
                            <h6 style="margin: 0 0 0.5rem;">Mycotoxins</h6>
                            <p style="font-size: 0.8rem; margin: 0;">Aflatoxins and ochratoxin A analysis</p>
                        </div>
                        <div style="padding: 1rem; background: #17a2b8; color: white; border-radius: 8px; text-align: center;">
                            <div style="font-size: 1.5rem; margin-bottom: 0.5rem;">💧</div>
                            <h6 style="margin: 0 0 0.5rem;">Residual Solvents</h6>
                            <p style="font-size: 0.8rem; margin: 0;">Extraction solvents: ethanol, butane, other chemicals</p>
                        </div>
                    </div>
                </div>

                <h2>Laboratory Partnership Strategy</h2>
                <p>Testing laboratories are critical partners in quality assurance. Selecting and maintaining effective laboratory relationships requires systematic evaluation and ongoing performance monitoring.</p>

                <div class="interactive-element">
                    <h4>🏆 Laboratory Selection Criteria</h4>
                    <ul>
                        <li><strong>ISO 17025 Certification:</strong> International standard for testing laboratories specifically for cannabis testing</li>
                        <li><strong>Modern Analytical Instruments:</strong> HPLC, GC-MS, ICP-MS for accurate and reliable results</li>
                        <li><strong>Detailed COA Reporting:</strong> Comprehensive Certificates of Analysis with method references</li>
                        <li><strong>Timely Turnaround:</strong> Results delivery that fits production schedules</li>
                        <li><strong>Method Validation:</strong> Proven accuracy and reproducibility through validated testing methods</li>
                        <li><strong>Technical Consultation:</strong> Expert guidance for complex testing scenarios and result interpretation</li>
                    </ul>
                </div>

                <h3>Testing Program Design</h3>
                <p>Effective testing programs balance comprehensive analysis with operational efficiency, using risk-based approaches to prioritize testing activities.</p>

                <div class="interactive-element">
                    <h4>📋 Testing Program Framework</h4>
                    <div style="background: #f8f9fa; padding: 1.5rem; border-radius: 8px; margin: 1rem 0;">
                        <h5>Risk-Based Testing Strategy:</h5>
                        <ul style="font-size: 0.9rem;">
                            <li><strong>High-Risk Products:</strong> Full panel testing for all categories</li>
                            <li><strong>Medium-Risk Products:</strong> Targeted testing based on historical data</li>
                            <li><strong>Low-Risk Products:</strong> Reduced testing frequency with periodic verification</li>
                        </ul>
                        
                        <h5>Sampling Protocols:</h5>
                        <ul style="font-size: 0.9rem;">
                            <li>Representative sampling procedures for different product types</li>
                            <li>Statistical sampling plans for large batches</li>
                            <li>Chain of custody documentation</li>
                            <li>Sample storage and stability requirements</li>
                        </ul>
                    </div>
                </div>

                <h2>Result Interpretation and Decision Making</h2>
                <p>Test results must be interpreted in context, considering analytical limitations, regulatory requirements, and business implications.</p>

                <h3>Understanding Analytical Uncertainty</h3>
                <ul>
                    <li><strong>Measurement Uncertainty:</strong> All analytical results have inherent variability</li>
                    <li><strong>Detection Limits:</strong> Minimum levels that can be reliably detected</li>
                    <li><strong>Quantification Limits:</strong> Minimum levels that can be accurately measured</li>
                    <li><strong>Method Precision:</strong> Reproducibility of results under consistent conditions</li>
                </ul>

                <div class="interactive-element">
                    <h4>🔍 Result Interpretation Guidelines</h4>
                    <div style="background: #fff3cd; padding: 1.5rem; border: 2px solid #ffc107; border-radius: 8px; margin: 1rem 0;">
                        <h5 style="color: #856404;">Decision Framework:</h5>
                        <ol style="font-size: 0.9rem; color: #856404;">
                            <li><strong>Verify Result Validity:</strong> Check for any analytical anomalies or out-of-specification conditions</li>
                            <li><strong>Consider Uncertainty:</strong> Evaluate results within the context of analytical uncertainty</li>
                            <li><strong>Apply Specifications:</strong> Compare against established acceptance criteria</li>
                            <li><strong>Assess Risk:</strong> Consider potential impact on consumer safety and regulatory compliance</li>
                            <li><strong>Make Disposition:</strong> Release, reject, or investigate further based on comprehensive evaluation</li>
                        </ol>
                    </div>
                </div>

                <h2>Batch Release Criteria</h2>
                <p>Clear batch release criteria ensure that only compliant products reach consumers while supporting efficient operations.</p>

                <h3>Comprehensive Release Requirements</h3>
                <ul>
                    <li><strong>All Testing Complete:</strong> No pending results for required tests</li>
                    <li><strong>Specification Compliance:</strong> All results within established acceptance criteria</li>
                    <li><strong>Documentation Review:</strong> Complete batch records and manufacturing documentation</li>
                    <li><strong>Label Verification:</strong> Accurate labeling reflecting actual test results</li>
                    <li><strong>Quality Approval:</strong> Final sign-off by qualified quality assurance personnel</li>
                </ul>

                <div class="interactive-element">
                    <h4>📊 Cost-Benefit Analysis</h4>
                    <p>Effective testing programs balance comprehensive analysis with cost considerations:</p>
                    <ul>
                        <li><strong>Testing Frequency:</strong> Optimize based on product risk and historical performance</li>
                        <li><strong>Laboratory Selection:</strong> Balance cost, quality, and turnaround time</li>
                        <li><strong>Test Panel Design:</strong> Include only necessary tests while maintaining safety</li>
                        <li><strong>Batch Size Optimization:</strong> Larger batches reduce per-unit testing costs</li>
                        <li><strong>Supplier Qualification:</strong> Better suppliers reduce incoming material testing needs</li>
                    </ul>
                </div>

                <h3>Trend Analysis and Improvement</h3>
                <p>Testing data provides valuable insights for process improvement and quality enhancement when properly analyzed and interpreted.</p>

                <ul>
                    <li><strong>Statistical Process Control:</strong> Monitor trends and identify process variations</li>
                    <li><strong>Supplier Performance:</strong> Track raw material quality over time</li>
                    <li><strong>Method Performance:</strong> Evaluate laboratory performance and method reliability</li>
                    <li><strong>Compliance Trends:</strong> Monitor regulatory compliance performance</li>
                </ul>

                <p>Quality control testing serves as the foundation for product safety and regulatory compliance. In the next module, we'll explore how to prevent contamination through proper facility design and control systems.</p>
            `
        },
        {
            id: 7,
            title: "Contamination Prevention and Control",
            duration: "4 minutes",
            content: `
                <h1>Contamination Prevention and Control</h1>
                
                <div class="interactive-element">
                    <h4>🎯 Learning Objectives</h4>
                    <p>Upon completion of this module, you will be able to:</p>
                    <ul>
                        <li><strong>Identify contamination sources</strong> and pathways in cannabis manufacturing environments</li>
                        <li><strong>Design effective contamination control systems</strong> including facility layout, airflow management, and personnel procedures</li>
                        <li><strong>Implement comprehensive cleaning and sanitization protocols</strong> that prevent cross-contamination between products and batches</li>
                        <li><strong>Establish environmental monitoring programs</strong> that detect potential contamination issues before they impact products</li>
                        <li><strong>Develop pest control strategies</strong> that protect products while complying with cannabis-specific restrictions</li>
                    </ul>
                </div>

                <h2>Understanding Contamination Risks</h2>
                <p>Contamination in cannabis manufacturing can occur through multiple pathways and take various forms, each requiring specific prevention and control strategies.</p>

                <div class="interactive-element">
                    <h4>🦠 Types of Contamination</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; margin: 1rem 0;">
                        <div style="padding: 1.5rem; border: 3px solid #dc3545; border-radius: 12px; background: #f8d7da;">
                            <h5 style="color: #721c24; margin-bottom: 1rem;">🦠 Microbiological</h5>
                            <ul style="color: #721c24; font-size: 0.9rem; margin: 0;">
                                <li>Bacteria (E. coli, Salmonella)</li>
                                <li>Yeast and mold growth</li>
                                <li>Pathogenic organisms</li>
                                <li>Spoilage microorganisms</li>
                            </ul>
                        </div>
                        <div style="padding: 1.5rem; border: 3px solid #fd7e14; border-radius: 12px; background: #fff3cd;">
                            <h5 style="color: #856404; margin-bottom: 1rem;">⚗️ Chemical</h5>
                            <ul style="color: #856404; font-size: 0.9rem; margin: 0;">
                                <li>Cleaning chemical residues</li>
                                <li>Pesticide contamination</li>
                                <li>Heavy metal contamination</li>
                                <li>Cross-contamination between products</li>
                            </ul>
                        </div>
                        <div style="padding: 1.5rem; border: 3px solid #6c757d; border-radius: 12px; background: #f8f9fa;">
                            <h5 style="color: #495057; margin-bottom: 1rem;">🔩 Physical</h5>
                            <ul style="color: #495057; font-size: 0.9rem; margin: 0;">
                                <li>Foreign objects</li>
                                <li>Metal fragments</li>
                                <li>Packaging materials</li>
                                <li>Personal items</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <h2>Facility Design for Contamination Control</h2>
                <p>Proper facility design is the first line of defense against contamination, creating physical barriers and controlled environments that minimize risks.</p>

                <div class="interactive-element">
                    <h4>🏗️ Design Principles</h4>
                    <div style="background: #f8f9fa; padding: 1.5rem; border-radius: 8px; margin: 1rem 0;">
                        <h5>Material Flow Design:</h5>
                        <div style="font-family: monospace; background: white; padding: 1rem; border-radius: 4px; border: 1px solid #dee2e6; margin: 1rem 0;">
                            Raw Materials → Quarantine → Production → Packaging → Finished Goods
                            <br>↓ (Inspection) ↓ (Processing) ↓ (QC Testing) ↓ (Release)
                        </div>
                        
                        <h5>Critical Design Features:</h5>
                        <ul style="font-size: 0.9rem;">
                            <li><strong>Unidirectional Flow:</strong> Prevent backtracking and cross-contamination</li>
                            <li><strong>Segregated Areas:</strong> Separate raw materials, processing, and finished goods</li>
                            <li><strong>Controlled Access:</strong> Restricted entry to manufacturing areas</li>
                            <li><strong>Proper Drainage:</strong> Prevent standing water and microbial growth</li>
                            <li><strong>Smooth Surfaces:</strong> Easily cleanable walls, floors, and equipment</li>
                        </ul>
                    </div>
                </div>

                <h3>Environmental Controls</h3>
                <p>HVAC systems and environmental monitoring create controlled conditions that prevent contamination and support product quality.</p>

                <ul>
                    <li><strong>Air Filtration:</strong> HEPA filtration to remove particulates and microorganisms</li>
                    <li><strong>Pressure Differentials:</strong> Positive pressure in clean areas to prevent contaminated air entry</li>
                    <li><strong>Temperature Control:</strong> Optimal conditions for processing while preventing microbial growth</li>
                    <li><strong>Humidity Management:</strong> Control moisture to prevent mold and yeast growth</li>
                    <li><strong>Air Changes:</strong> Adequate air turnover to remove contaminants</li>
                </ul>

                <h2>Personnel Procedures and Training</h2>
                <p>Human activities are often the greatest source of contamination. Comprehensive personnel procedures and training are essential for contamination control.</p>

                <div class="interactive-element">
                    <h4>👥 Personnel Contamination Control</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin: 1rem 0;">
                        <div style="padding: 1rem; background: #2d5016; color: white; border-radius: 8px; text-align: center;">
                            <h6 style="margin: 0 0 0.5rem;">🧼 Personal Hygiene</h6>
                            <p style="font-size: 0.8rem; margin: 0;">Hand washing, sanitization, personal cleanliness</p>
                        </div>
                        <div style="padding: 1rem; background: #4a7c59; color: white; border-radius: 8px; text-align: center;">
                            <h6 style="margin: 0 0 0.5rem;">👔 Protective Clothing</h6>
                            <p style="font-size: 0.8rem; margin: 0;">Hair nets, gloves, aprons, dedicated footwear</p>
                        </div>
                        <div style="padding: 1rem; background: #d4af37; color: #2d5016; border-radius: 8px; text-align: center;">
                            <h6 style="margin: 0 0 0.5rem;">🚷 Access Control</h6>
                            <p style="font-size: 0.8rem; margin: 0;">Restricted areas, visitor procedures, ID requirements</p>
                        </div>
                        <div style="padding: 1rem; background: #8fbc8f; color: #2d5016; border-radius: 8px; text-align: center;">
                            <h6 style="margin: 0 0 0.5rem;">📚 Training</h6>
                            <p style="font-size: 0.8rem; margin: 0;">Contamination awareness, procedure compliance</p>
                        </div>
                    </div>
                </div>

                <h3>Cleaning and Sanitization</h3>
                <p>Systematic cleaning and sanitization procedures remove contaminants and prevent their accumulation.</p>

                <div class="interactive-element">
                    <h4>🧽 Cleaning Protocol Framework</h4>
                    <div style="background: #d4edda; padding: 1.5rem; border-radius: 8px; margin: 1rem 0; border: 2px solid #28a745;">
                        <h5 style="color: #155724;">Standard Cleaning Procedure:</h5>
                        <ol style="color: #155724; font-size: 0.9rem;">
                            <li><strong>Remove Debris:</strong> Physical removal of visible contamination</li>
                            <li><strong>Rinse:</strong> Remove loose particles and prepare surfaces</li>
                            <li><strong>Clean:</strong> Apply appropriate cleaning agents to remove soils</li>
                            <li><strong>Rinse:</strong> Remove cleaning agent residues</li>
                            <li><strong>Sanitize:</strong> Apply sanitizing agents to reduce microbial load</li>
                            <li><strong>Final Rinse:</strong> Remove sanitizer residues if required</li>
                            <li><strong>Inspect:</strong> Verify cleaning effectiveness</li>
                            <li><strong>Document:</strong> Record cleaning activities and results</li>
                        </ol>
                    </div>
                </div>

                <h2>Environmental Monitoring</h2>
                <p>Proactive environmental monitoring detects potential contamination issues before they impact products, enabling corrective action before problems occur.</p>

                <h3>Monitoring Program Elements</h3>
                <ul>
                    <li><strong>Air Quality:</strong> Microbial and particulate monitoring in production areas</li>
                    <li><strong>Surface Monitoring:</strong> Regular testing of equipment and facility surfaces</li>
                    <li><strong>Water Quality:</strong> Testing of process water and cleaning water</li>
                    <li><strong>Personnel Monitoring:</strong> Hand washing effectiveness and hygiene compliance</li>
                </ul>

                <div class="interactive-element">
                    <h4>📊 Environmental Monitoring Strategy</h4>
                    <div style="background: #f0f9ff; padding: 1.5rem; border-radius: 8px; border: 2px solid #17a2b8; margin: 1rem 0;">
                        <h5 style="color: #17a2b8;">Sampling Locations:</h5>
                        <ul style="color: #17a2b8; font-size: 0.9rem;">
                            <li><strong>Zone 1:</strong> Direct product contact surfaces</li>
                            <li><strong>Zone 2:</strong> Adjacent areas that could impact Zone 1</li>
                            <li><strong>Zone 3:</strong> Processing environment (floors, walls, drains)</li>
                            <li><strong>Zone 4:</strong> Areas outside processing but within facility</li>
                        </ul>
                        
                        <h5 style="color: #17a2b8;">Action Levels:</h5>
                        <ul style="color: #17a2b8; font-size: 0.9rem;">
                            <li><strong>Alert Level:</strong> Triggers increased monitoring and investigation</li>
                            <li><strong>Action Level:</strong> Requires immediate corrective action</li>
                            <li><strong>Specifications:</strong> Maximum acceptable levels for different zones</li>
                        </ul>
                    </div>
                </div>

                <h2>Pest Control</h2>
                <p>Integrated pest management prevents contamination while complying with cannabis-specific restrictions on pesticide use.</p>

                <h3>Pest Prevention Strategies</h3>
                <ul>
                    <li><strong>Physical Exclusion:</strong> Sealed building envelope, proper door seals, window screens</li>
                    <li><strong>Sanitation:</strong> Eliminate food sources and breeding sites</li>
                    <li><strong>Monitoring:</strong> Regular inspection and pest monitoring devices</li>
                    <li><strong>Professional Service:</strong> Licensed pest control operators familiar with cannabis regulations</li>
                </ul>

                <div class="interactive-element">
                    <h4>🐛 Cannabis-Specific Pest Control Considerations</h4>
                    <ul>
                        <li><strong>Restricted Pesticides:</strong> Many conventional pesticides prohibited for cannabis use</li>
                        <li><strong>Organic Methods:</strong> Emphasis on non-chemical control methods</li>
                        <li><strong>Documentation:</strong> Detailed records of all pest control activities</li>
                        <li><strong>Product Safety:</strong> Ensure pest control methods don't contaminate products</li>
                        <li><strong>Regular Monitoring:</strong> Frequent inspection to detect issues early</li>
                    </ul>
                </div>

                <h3>Investigation and Corrective Action</h3>
                <p>When contamination is detected, systematic investigation and corrective action prevent recurrence and protect product quality.</p>

                <ul>
                    <li><strong>Root Cause Analysis:</strong> Identify the source and cause of contamination</li>
                    <li><strong>Impact Assessment:</strong> Determine extent of contamination and affected products</li>
                    <li><strong>Immediate Actions:</strong> Isolate affected areas and products</li>
                    <li><strong>Corrective Measures:</strong> Address root causes and prevent recurrence</li>
                    <li><strong>Verification:</strong> Confirm effectiveness of corrective actions</li>
                </ul>

                <p>Contamination prevention requires a comprehensive, systematic approach that addresses all potential sources and pathways. In the next module, we'll explore how proper documentation and record keeping support contamination control and overall quality assurance.</p>
            `
        },
        {
            id: 8,
            title: "Documentation and Record Keeping",
            duration: "4 minutes",
            content: `
                <h1>Documentation and Record Keeping</h1>
                
                <div class="interactive-element">
                    <h4>🎯 Learning Objectives</h4>
                    <p>Upon completion of this module, you will be able to:</p>
                    <ul>
                        <li><strong>Design comprehensive documentation systems</strong> that support both regulatory compliance and operational efficiency</li>
                        <li><strong>Implement effective document control procedures</strong> ensuring that current, accurate information is available when needed</li>
                        <li><strong>Establish traceability systems</strong> that enable rapid identification and resolution of quality issues</li>
                        <li><strong>Develop electronic documentation strategies</strong> that improve efficiency while maintaining compliance</li>
                        <li><strong>Create audit-ready documentation</strong> that demonstrates compliance and supports regulatory inspections</li>
                    </ul>
                </div>

                <h2>Documentation as Quality Infrastructure</h2>
                <p>Effective documentation systems serve as the foundation of quality assurance, enabling consistency, traceability, and continuous improvement throughout cannabis manufacturing operations.</p>

                <div class="interactive-element">
                    <h4>📚 Documentation Hierarchy</h4>
                    <div style="display: grid; grid-template-columns: 1fr; gap: 1rem; margin: 1rem 0;">
                        <div style="padding: 1.5rem; border-left: 6px solid #2d5016; background: #f9f9f9;">
                            <h5 style="color: #2d5016; margin: 0 0 0.5rem;">Level 1: Quality Policy & Manual</h5>
                            <p style="font-size: 0.9rem; margin: 0;">High-level quality policy, organizational structure, and system overview defining the company's commitment to quality</p>
                        </div>
                        <div style="padding: 1.5rem; border-left: 6px solid #4a7c59; background: #f9f9f9;">
                            <h5 style="color: #4a7c59; margin: 0 0 0.5rem;">Level 2: Standard Operating Procedures (SOPs)</h5>
                            <p style="font-size: 0.9rem; margin: 0;">Detailed procedures for specific activities, processes, and operations that ensure consistent execution</p>
                        </div>
                        <div style="padding: 1.5rem; border-left: 6px solid #d4af37; background: #f9f9f9;">
                            <h5 style="color: #d4af37; margin: 0 0 0.5rem;">Level 3: Work Instructions & Forms</h5>
                            <p style="font-size: 0.9rem; margin: 0;">Step-by-step instructions for specific tasks and standardized forms for data collection</p>
                        </div>
                        <div style="padding: 1.5rem; border-left: 6px solid #8fbc8f; background: #f9f9f9;">
                            <h5 style="color: #8fbc8f; margin: 0 0 0.5rem;">Level 4: Records & Data</h5>
                            <p style="font-size: 0.9rem; margin: 0;">Evidence of activities performed, results achieved, and compliance demonstrated</p>
                        </div>
                    </div>
                </div>

                <h2>Essential Documentation Categories</h2>
                <p>Cannabis manufacturing requires comprehensive documentation across all operational areas to ensure regulatory compliance and quality assurance.</p>

                <h3>Production Documentation</h3>
                <div class="interactive-element">
                    <h4>🏭 Manufacturing Records</h4>
                    <ul>
                        <li><strong>Master Batch Records (MBRs):</strong> Master recipes and production instructions for each product</li>
                        <li><strong>Batch Production Records (BPRs):</strong> Documentation of actual production activities and results</li>
                        <li><strong>Equipment Logs:</strong> Maintenance, calibration, cleaning, and use records</li>
                        <li><strong>Environmental Records:</strong> Temperature, humidity, and monitoring data</li>
                        <li><strong>Material Transfer Records:</strong> Movement of raw materials and finished products</li>
                    </ul>
                </div>

                <h3>Quality Control Documentation</h3>
                <ul>
                    <li><strong>Testing Protocols:</strong> Detailed procedures for all analytical testing</li>
                    <li><strong>Certificates of Analysis (COAs):</strong> Complete test results for all batches</li>
                    <li><strong>Sampling Records:</strong> Documentation of sampling procedures and chain of custody</li>
                    <li><strong>Method Validation:</strong> Validation of analytical test methods</li>
                    <li><strong>Laboratory Qualifications:</strong> Evidence of laboratory competency and accreditation</li>
                </ul>

                <div class="interactive-element">
                    <h4>📋 Document Control Best Practices</h4>
                    <div style="background: #f8f9fa; padding: 1.5rem; border-radius: 8px; margin: 1rem 0;">
                        <h5>ALCOA-C Principles:</h5>
                        <ul style="font-size: 0.9rem;">
                            <li><strong>Attributable:</strong> Clear identification of who performed each activity</li>
                            <li><strong>Legible:</strong> Records that can be read and understood</li>
                            <li><strong>Contemporaneous:</strong> Records made at the time activities are performed</li>
                            <li><strong>Original:</strong> First recording of data or certified true copies</li>
                            <li><strong>Accurate:</strong> Complete and truthful documentation</li>
                            <li><strong>Complete:</strong> All required information included</li>
                        </ul>
                    </div>
                </div>

                <h2>Traceability Systems</h2>
                <p>Comprehensive traceability enables rapid identification of products and materials throughout the supply chain, supporting both quality improvement and regulatory compliance.</p>

                <h3>Traceability Requirements</h3>
                <div class="interactive-element">
                    <h4>🔗 Complete Chain of Custody</h4>
                    <div style="background: #e7f3ff; padding: 1.5rem; border-radius: 8px; border: 2px solid #17a2b8; margin: 1rem 0;">
                        <h5 style="color: #17a2b8;">Forward Traceability:</h5>
                        <p style="color: #17a2b8; font-size: 0.9rem;">Track products from raw materials through processing to final distribution - "Where did it go?"</p>
                        
                        <h5 style="color: #17a2b8;">Backward Traceability:</h5>
                        <p style="color: #17a2b8; font-size: 0.9rem;">Trace finished products back to their component materials and suppliers - "Where did it come from?"</p>
                        
                        <h5 style="color: #17a2b8;">Internal Traceability:</h5>
                        <p style="color: #17a2b8; font-size: 0.9rem;">Track materials and products through all internal processing steps - "What happened to it here?"</p>
                    </div>
                </div>

                <h3>State Traceability Integration</h3>
                <p>Many states require cannabis manufacturers to integrate with state-mandated traceability systems that track products from cultivation to sale.</p>

                <ul>
                    <li><strong>Seed-to-Sale Tracking:</strong> Complete product journey documentation</li>
                    <li><strong>RFID/Barcode Systems:</strong> Electronic tracking and identification</li>
                    <li><strong>Real-Time Reporting:</strong> Immediate updates to state systems</li>
                    <li><strong>Inventory Management:</strong> Accurate tracking of all materials and products</li>
                    <li><strong>Transfer Documentation:</strong> Detailed records of all product movements</li>
                </ul>

                <h2>Electronic Documentation Systems</h2>
                <p>Electronic systems can improve efficiency and accuracy while maintaining compliance, but require careful implementation and validation.</p>

                <div class="interactive-element">
                    <h4>💻 Electronic vs. Paper Systems</h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin: 1rem 0;">
                        <div>
                            <h5 style="color: #28a745;">Electronic System Advantages:</h5>
                            <ul style="font-size: 0.9rem;">
                                <li>Improved data integrity and security</li>
                                <li>Real-time access to information</li>
                                <li>Automated calculations and validations</li>
                                <li>Electronic signatures and audit trails</li>
                                <li>Easy backup and disaster recovery</li>
                                <li>Integration with other systems</li>
                            </ul>
                        </div>
                        <div>
                            <h5 style="color: #6c757d;">Implementation Considerations:</h5>
                            <ul style="font-size: 0.9rem;">
                                <li>21 CFR Part 11 compliance requirements</li>
                                <li>System validation and verification</li>
                                <li>User access controls and permissions</li>
                                <li>Data backup and retention procedures</li>
                                <li>Change control and version management</li>
                                <li>Training and competency requirements</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <h3>Hybrid Documentation Approaches</h3>
                <p>Many organizations successfully implement hybrid systems that combine electronic and paper documentation based on specific needs and capabilities.</p>

                <ul>
                    <li><strong>Critical Records Electronic:</strong> Key production and quality records in validated electronic systems</li>
                    <li><strong>Routine Activities Paper:</strong> Standard checklists and routine monitoring on paper</li>
                    <li><strong>Gradual Migration:</strong> Phased transition from paper to electronic systems</li>
                    <li><strong>Backup Systems:</strong> Paper backup procedures for electronic system failures</li>
                </ul>

                <h2>Record Retention and Storage</h2>
                <p>Proper record retention ensures that documentation is available when needed for audits, investigations, and regulatory inspections.</p>

                <div class="interactive-element">
                    <h4>📅 Retention Requirements</h4>
                    <div style="background: #fff3cd; padding: 1.5rem; border-radius: 8px; border: 2px solid #ffc107; margin: 1rem 0;">
                        <h5 style="color: #856404;">Typical Retention Periods:</h5>
                        <ul style="color: #856404; font-size: 0.9rem;">
                            <li><strong>Batch Records:</strong> 3 years minimum (longer if required by state)</li>
                            <li><strong>Testing Data:</strong> 3 years or product shelf life + 1 year</li>
                            <li><strong>Training Records:</strong> Duration of employment + 3 years</li>
                            <li><strong>Equipment Records:</strong> Life of equipment + 3 years</li>
                            <li><strong>Validation Data:</strong> Life of system/process + 3 years</li>
                            <li><strong>Complaint Records:</strong> 5 years minimum</li>
                        </ul>
                        
                        <p style="color: #856404; font-size: 0.9rem; margin-top: 1rem;"><strong>Note:</strong> Always check specific state and local requirements, which may be longer than federal minimums.</p>
                    </div>
                </div>

                <h3>Document Security and Access Control</h3>
                <p>Protecting documentation integrity while ensuring appropriate access requires systematic security measures.</p>

                <ul>
                    <li><strong>Physical Security:</strong> Locked storage for paper records</li>
                    <li><strong>Electronic Security:</strong> Password protection, encryption, and access controls</li>
                    <li><strong>Backup Procedures:</strong> Regular backups with off-site storage</li>
                    <li><strong>Access Authorization:</strong> Role-based access to sensitive information</li>
                    <li><strong>Audit Trails:</strong> Complete records of who accessed what information when</li>
                </ul>

                <h2>Audit Preparation</h2>
                <p>Well-organized documentation systems make regulatory inspections more efficient and demonstrate commitment to compliance.</p>

                <div class="interactive-element">
                    <h4>🔍 Inspection Readiness</h4>
                    <div style="background: #d4edda; padding: 1.5rem; border-radius: 8px; border: 2px solid #28a745; margin: 1rem 0;">
                        <h5 style="color: #155724;">Documentation Organization Strategy:</h5>
                        <ol style="color: #155724; font-size: 0.9rem;">
                            <li><strong>Master Index:</strong> Complete listing of all documentation with locations</li>
                            <li><strong>Current Versions:</strong> Ensure only current, approved documents are available</li>
                            <li><strong>Quick Access:</strong> Organize for rapid retrieval during inspections</li>
                            <li><strong>Electronic Backups:</strong> Have electronic copies readily available</li>
                            <li><strong>Responsible Personnel:</strong> Designate document custodians for each area</li>
                            <li><strong>Practice Retrievals:</strong> Regular drills to test document access procedures</li>
                        </ol>
                    </div>
                </div>

                <h3>Common Documentation Deficiencies</h3>
                <p>Understanding common documentation problems helps prevent compliance issues and regulatory citations.</p>

                <ul>
                    <li><strong>Incomplete Records:</strong> Missing signatures, dates, or required information</li>
                    <li><strong>Illegible Entries:</strong> Handwriting that cannot be read or understood</li>
                    <li><strong>Altered Records:</strong> Changes made without proper authorization or documentation</li>
                    <li><strong>Missing Documents:</strong> Required records that cannot be located</li>
                    <li><strong>Outdated Procedures:</strong> Using superseded or obsolete procedures</li>
                    <li><strong>Inadequate Training:</strong> Personnel not trained on documentation requirements</li>
                </ul>

                <h2>Continuous Improvement</h2>
                <p>Documentation systems should evolve to support changing business needs while maintaining compliance and improving efficiency.</p>

                <div class="interactive-element">
                    <h4>📈 System Enhancement Opportunities</h4>
                    <ul>
                        <li><strong>User Feedback:</strong> Regular input from personnel who use the documentation daily</li>
                        <li><strong>Process Simplification:</strong> Eliminate redundant or unnecessary documentation</li>
                        <li><strong>Technology Upgrades:</strong> Implement new technologies that improve efficiency</li>
                        <li><strong>Integration Opportunities:</strong> Connect documentation with other business systems</li>
                        <li><strong>Performance Metrics:</strong> Track documentation effectiveness and efficiency</li>
                        <li><strong>Benchmark Comparisons:</strong> Learn from other organizations' best practices</li>
                    </ul>
                </div>

                <p>Effective documentation and record keeping systems provide the foundation for all quality assurance activities, enabling traceability, supporting compliance, and facilitating continuous improvement. In the next module, we'll explore how personnel training and competency development ensure that all team members can execute these documented procedures effectively.</p>
            `
        },
        {
            id: 9,
            title: "Personnel Training and Competency",
            duration: "4 minutes",
            content: `
                <h1>Personnel Training and Competency</h1>
                
                <div class="interactive-element">
                    <h4>🎯 Learning Objectives</h4>
                    <p>Upon completion of this module, you will be able to:</p>
                    <ul>
                        <li><strong>Develop comprehensive training programs</strong> that address both regulatory requirements and operational needs</li>
                        <li><strong>Design competency assessment systems</strong> that verify personnel can perform their roles safely and effectively</li>
                        <li><strong>Implement ongoing education requirements</strong> to maintain current knowledge and skills</li>
                        <li><strong>Create training documentation</strong> that demonstrates compliance and supports regulatory inspections</li>
                        <li><strong>Establish performance monitoring systems</strong> that identify training needs and effectiveness</li>
                    </ul>
                </div>

                <h2>The Foundation of Quality: Trained Personnel</h2>
                <p>Personnel competency is the cornerstone of effective quality assurance. Even the best procedures and equipment cannot ensure quality without properly trained and competent personnel executing them correctly.</p>

                <div class="interactive-element">
                    <h4>🏗️ Training Program Components</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; margin: 1rem 0;">
                        <div style="padding: 1.5rem; border: 2px solid #2d5016; border-radius: 8px; background: #f8f9fa;">
                            <h5 style="color: #2d5016; margin: 0 0 1rem;">Initial Training</h5>
                            <ul style="font-size: 0.9rem; margin: 0; padding-left: 1rem;">
                                <li>Company orientation</li>
                                <li>cGMP principles</li>
                                <li>Personal hygiene</li>
                                <li>Contamination prevention</li>
                                <li>Role-specific procedures</li>
                            </ul>
                        </div>
                        <div style="padding: 1.5rem; border: 2px solid #4a7c59; border-radius: 8px; background: #f8f9fa;">
                            <h5 style="color: #4a7c59; margin: 0 0 1rem;">Ongoing Training</h5>
                            <ul style="font-size: 0.9rem; margin: 0; padding-left: 1rem;">
                                <li>Annual refresher training</li>
                                <li>Regulatory updates</li>
                                <li>New procedure training</li>
                                <li>Incident-based training</li>
                                <li>Skills enhancement</li>
                            </ul>
                        </div>
                        <div style="padding: 1.5rem; border: 2px solid #d4af37; border-radius: 8px; background: #f8f9fa;">
                            <h5 style="color: #d4af37; margin: 0 0 1rem;">Specialized Training</h5>
                            <ul style="font-size: 0.9rem; margin: 0; padding-left: 1rem;">
                                <li>Equipment operation</li>
                                <li>Quality control testing</li>
                                <li>Cleaning validation</li>
                                <li>Deviation investigation</li>
                                <li>Audit preparation</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <h2>Regulatory Training Requirements</h2>
                <p>Cannabis manufacturing personnel must receive training that meets both cGMP requirements and cannabis-specific regulations. Training frequency and content are often specified by regulatory authorities.</p>

                <div class="interactive-element">
                    <h4>📋 Training Frequency Guidelines</h4>
                    <div style="background: #e8f5e8; border-left: 6px solid #2d5016; padding: 1.5rem; margin: 1rem 0;">
                        <h5 style="color: #2d5016; margin: 0 0 1rem;">Minimum Training Frequencies</h5>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
                            <div>
                                <strong style="color: #2d5016;">cGMP Principles:</strong><br>
                                <span style="font-size: 0.9rem;">Annually minimum</span>
                            </div>
                            <div>
                                <strong style="color: #2d5016;">Personal Hygiene:</strong><br>
                                <span style="font-size: 0.9rem;">Annually minimum</span>
                            </div>
                            <div>
                                <strong style="color: #2d5016;">Equipment Operation:</strong><br>
                                <span style="font-size: 0.9rem;">Before first use, then annually</span>
                            </div>
                            <div>
                                <strong style="color: #2d5016;">Safety Procedures:</strong><br>
                                <span style="font-size: 0.9rem;">Quarterly recommended</span>
                            </div>
                        </div>
                    </div>
                </div>

                <h2>Competency Assessment</h2>
                <p>Training effectiveness must be verified through competency assessments that demonstrate personnel can perform their assigned tasks correctly and safely.</p>

                <h3>Assessment Methods</h3>
                <ul>
                    <li><strong>Written Examinations:</strong> Test knowledge of procedures, regulations, and safety requirements</li>
                    <li><strong>Practical Demonstrations:</strong> Observe personnel performing actual job tasks</li>
                    <li><strong>Simulation Exercises:</strong> Evaluate response to hypothetical scenarios</li>
                    <li><strong>Peer Reviews:</strong> Experienced personnel evaluate newer team members</li>
                    <li><strong>Self-Assessments:</strong> Allow personnel to identify their own knowledge gaps</li>
                </ul>

                <div class="interactive-element">
                    <h4>✅ Competency Assessment Checklist</h4>
                    <div style="background: #fff3cd; border-left: 6px solid #d4af37; padding: 1.5rem; margin: 1rem 0;">
                        <h5 style="color: #856404; margin: 0 0 1rem;">Essential Elements of Effective Assessment</h5>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                            <div>
                                <h6 style="color: #856404; margin: 0 0 0.5rem;">Assessment Design</h6>
                                <ul style="font-size: 0.9rem; margin: 0; padding-left: 1rem;">
                                    <li>Job-relevant content</li>
                                    <li>Clear pass/fail criteria</li>
                                    <li>Standardized evaluation</li>
                                    <li>Multiple assessment methods</li>
                                </ul>
                            </div>
                            <div>
                                <h6 style="color: #856404; margin: 0 0 0.5rem;">Documentation Requirements</h6>
                                <ul style="font-size: 0.9rem; margin: 0; padding-left: 1rem;">
                                    <li>Assessment results</li>
                                    <li>Evaluator qualifications</li>
                                    <li>Remedial actions taken</li>
                                    <li>Re-assessment records</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <h2>Training Documentation</h2>
                <p>Comprehensive training records are essential for regulatory compliance and demonstrate the organization's commitment to personnel competency.</p>

                <h3>Required Training Records</h3>
                <ul>
                    <li><strong>Training Plans:</strong> Detailed curriculum for each position</li>
                    <li><strong>Attendance Records:</strong> Who attended what training and when</li>
                    <li><strong>Training Materials:</strong> Content delivered to personnel</li>
                    <li><strong>Assessment Results:</strong> Competency evaluation outcomes</li>
                    <li><strong>Trainer Qualifications:</strong> Credentials of training delivery personnel</li>
                    <li><strong>Training Effectiveness:</strong> Evaluation of training program success</li>
                </ul>

                <div class="interactive-element">
                    <h4>📁 Training Record Organization</h4>
                    <div style="background: #d1ecf1; border-left: 6px solid #17a2b8; padding: 1.5rem; margin: 1rem 0;">
                        <h5 style="color: #0c5460; margin: 0 0 1rem;">Best Practices for Training Documentation</h5>
                        <ol style="color: #0c5460; font-size: 0.9rem; margin: 0;">
                            <li><strong>Individual Training Files:</strong> Maintain complete records for each employee</li>
                            <li><strong>Training Matrices:</strong> Visual overview of who needs what training</li>
                            <li><strong>Curriculum Documentation:</strong> Detailed training program descriptions</li>
                            <li><strong>Digital Backup Systems:</strong> Electronic copies of all training records</li>
                            <li><strong>Regular Reviews:</strong> Periodic evaluation of training effectiveness</li>
                            <li><strong>Update Procedures:</strong> Process for maintaining current training materials</li>
                        </ol>
                    </div>
                </div>

                <h2>Creating a Learning Culture</h2>
                <p>Effective training programs go beyond compliance to create a culture of continuous learning and improvement.</p>

                <h3>Elements of a Strong Learning Culture</h3>
                <ul>
                    <li><strong>Leadership Commitment:</strong> Management actively supports and participates in training</li>
                    <li><strong>Employee Engagement:</strong> Personnel are encouraged to identify training needs</li>
                    <li><strong>Knowledge Sharing:</strong> Experienced employees mentor newer team members</li>
                    <li><strong>Continuous Improvement:</strong> Training programs evolve based on feedback and results</li>
                    <li><strong>Recognition Programs:</strong> Training achievements are acknowledged and rewarded</li>
                </ul>

                <h2>Common Training Challenges</h2>
                <p>Understanding typical training obstacles helps organizations develop more effective programs.</p>

                <div class="interactive-element">
                    <h4>⚠️ Training Challenge Solutions</h4>
                    <div style="display: grid; grid-template-columns: 1fr; gap: 1rem; margin: 1rem 0;">
                        <div style="padding: 1rem; border-left: 4px solid #dc3545; background: #f8d7da;">
                            <h6 style="color: #721c24; margin: 0 0 0.5rem;">Challenge: Limited Time for Training</h6>
                            <p style="font-size: 0.9rem; color: #721c24; margin: 0;"><strong>Solution:</strong> Integrate training into daily operations, use microlearning approaches, and provide flexible scheduling options.</p>
                        </div>
                        <div style="padding: 1rem; border-left: 4px solid #fd7e14; background: #ffeaa7;">
                            <h6 style="color: #6c4a0b; margin: 0 0 0.5rem;">Challenge: Varying Educational Backgrounds</h6>
                            <p style="font-size: 0.9rem; color: #6c4a0b; margin: 0;"><strong>Solution:</strong> Use multiple learning modalities, provide basic skills training, and offer individualized support.</p>
                        </div>
                        <div style="padding: 1rem; border-left: 4px solid #28a745; background: #d4edda;">
                            <h6 style="color: #155724; margin: 0 0 0.5rem;">Challenge: Keeping Content Current</h6>
                            <p style="font-size: 0.9rem; color: #155724; margin: 0;"><strong>Solution:</strong> Establish regular review cycles, subscribe to regulatory updates, and designate training content owners.</p>
                        </div>
                    </div>
                </div>

                <p>Personnel training and competency development are ongoing processes that require consistent attention and resources. Well-trained personnel are the foundation of effective quality assurance and regulatory compliance. In the next module, we'll explore how proper equipment qualification and maintenance support personnel in executing their trained procedures effectively.</p>
            `
        },
        {
            id: 10,
            title: "Equipment Qualification and Maintenance",
            duration: "4 minutes",
            content: `
                <h1>Equipment Qualification and Maintenance</h1>
                
                <div class="interactive-element">
                    <h4>🎯 Learning Objectives</h4>
                    <p>Upon completion of this module, you will be able to:</p>
                    <ul>
                        <li><strong>Implement equipment qualification protocols</strong> including IQ, OQ, and PQ procedures</li>
                        <li><strong>Develop preventive maintenance programs</strong> that ensure consistent equipment performance</li>
                        <li><strong>Establish calibration procedures</strong> for critical measuring instruments</li>
                        <li><strong>Create maintenance documentation systems</strong> that support regulatory compliance</li>
                        <li><strong>Design performance monitoring systems</strong> that identify equipment issues before they affect product quality</li>
                    </ul>
                </div>

                <h2>Equipment as a Quality Critical System</h2>
                <p>Equipment reliability directly impacts product quality, regulatory compliance, and operational efficiency. Proper qualification and maintenance ensure that equipment performs consistently and meets its intended purpose.</p>

                <div class="interactive-element">
                    <h4>🔧 Equipment Qualification Phases</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; margin: 1rem 0;">
                        <div style="padding: 1.5rem; border: 3px solid #2d5016; border-radius: 8px; background: #f8f9fa;">
                            <h5 style="color: #2d5016; margin: 0 0 1rem;">IQ - Installation Qualification</h5>
                            <p style="font-size: 0.9rem; margin: 0 0 0.5rem;"><strong>Purpose:</strong> Verify proper installation</p>
                            <ul style="font-size: 0.9rem; margin: 0; padding-left: 1rem;">
                                <li>Physical installation verification</li>
                                <li>Utility connections</li>
                                <li>Safety system checks</li>
                                <li>Documentation review</li>
                            </ul>
                        </div>
                        <div style="padding: 1.5rem; border: 3px solid #4a7c59; border-radius: 8px; background: #f8f9fa;">
                            <h5 style="color: #4a7c59; margin: 0 0 1rem;">OQ - Operational Qualification</h5>
                            <p style="font-size: 0.9rem; margin: 0 0 0.5rem;"><strong>Purpose:</strong> Verify operational performance</p>
                            <ul style="font-size: 0.9rem; margin: 0; padding-left: 1rem;">
                                <li>Operating range testing</li>
                                <li>Alarm and safety testing</li>
                                <li>Control system verification</li>
                                <li>Calibration confirmation</li>
                            </ul>
                        </div>
                        <div style="padding: 1.5rem; border: 3px solid #d4af37; border-radius: 8px; background: #f8f9fa;">
                            <h5 style="color: #d4af37; margin: 0 0 1rem;">PQ - Performance Qualification</h5>
                            <p style="font-size: 0.9rem; margin: 0 0 0.5rem;"><strong>Purpose:</strong> Verify production capability</p>
                            <ul style="font-size: 0.9rem; margin: 0; padding-left: 1rem;">
                                <li>Process simulation</li>
                                <li>Product quality verification</li>
                                <li>Reproducibility testing</li>
                                <li>Final approval documentation</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <h2>Critical Equipment Categories</h2>
                <p>Different types of equipment require different levels of qualification and maintenance based on their impact on product quality and safety.</p>

                <h3>Cannabis Manufacturing Equipment Classification</h3>
                <ul>
                    <li><strong>Production Equipment:</strong> Mixers, extractors, filling machines, packaging equipment</li>
                    <li><strong>Testing Equipment:</strong> HPLC systems, balances, pH meters, moisture analyzers</li>
                    <li><strong>Environmental Systems:</strong> HVAC, air filtration, monitoring systems</li>
                    <li><strong>Safety Equipment:</strong> Fire suppression, emergency shutdown systems, personal protective equipment</li>
                    <li><strong>Support Equipment:</strong> Cleaning systems, waste management, utilities</li>
                </ul>

                <div class="interactive-element">
                    <h4>⚖️ Calibration Requirements</h4>
                    <div style="background: #e8f5e8; border-left: 6px solid #2d5016; padding: 1.5rem; margin: 1rem 0;">
                        <h5 style="color: #2d5016; margin: 0 0 1rem;">Critical Calibration Parameters</h5>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
                            <div>
                                <h6 style="color: #2d5016; margin: 0 0 0.5rem;">Analytical Balances</h6>
                                <ul style="font-size: 0.9rem; margin: 0; padding-left: 1rem;">
                                    <li>Daily calibration checks</li>
                                    <li>Quarterly full calibration</li>
                                    <li>Traceable weights</li>
                                    <li>Environmental monitoring</li>
                                </ul>
                            </div>
                            <div>
                                <h6 style="color: #2d5016; margin: 0 0 0.5rem;">Temperature Systems</h6>
                                <ul style="font-size: 0.9rem; margin: 0; padding-left: 1rem;">
                                    <li>Calibrated thermometers</li>
                                    <li>Annual calibration</li>
                                    <li>Multiple point verification</li>
                                    <li>Alarm point testing</li>
                                </ul>
                            </div>
                            <div>
                                <h6 style="color: #2d5016; margin: 0 0 0.5rem;">Pressure Systems</h6>
                                <ul style="font-size: 0.9rem; margin: 0; padding-left: 1rem;">
                                    <li>Pressure gauge calibration</li>
                                    <li>Safety relief testing</li>
                                    <li>Leak testing</li>
                                    <li>Operating range verification</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <h2>Preventive Maintenance Programs</h2>
                <p>Proactive maintenance prevents equipment failures, reduces downtime, and ensures consistent product quality.</p>

                <h3>Maintenance Program Components</h3>
                <ul>
                    <li><strong>Maintenance Schedules:</strong> Regular intervals based on manufacturer recommendations and usage patterns</li>
                    <li><strong>Preventive Tasks:</strong> Lubrication, filter changes, belt replacements, cleaning procedures</li>
                    <li><strong>Predictive Monitoring:</strong> Vibration analysis, thermal imaging, oil analysis</li>
                    <li><strong>Spare Parts Management:</strong> Critical parts inventory and supplier relationships</li>
                    <li><strong>Maintenance Personnel:</strong> Qualified technicians with appropriate training</li>
                </ul>

                <div class="interactive-element">
                    <h4>📅 Maintenance Scheduling Matrix</h4>
                    <div style="background: #fff3cd; border-left: 6px solid #d4af37; padding: 1.5rem; margin: 1rem 0;">
                        <h5 style="color: #856404; margin: 0 0 1rem;">Typical Maintenance Frequencies</h5>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
                            <div>
                                <h6 style="color: #856404; margin: 0 0 0.5rem;">Daily Maintenance</h6>
                                <ul style="font-size: 0.9rem; margin: 0; padding-left: 1rem;">
                                    <li>Visual inspections</li>
                                    <li>Cleaning procedures</li>
                                    <li>Lubrication points</li>
                                    <li>Safety checks</li>
                                </ul>
                            </div>
                            <div>
                                <h6 style="color: #856404; margin: 0 0 0.5rem;">Weekly Maintenance</h6>
                                <ul style="font-size: 0.9rem; margin: 0; padding-left: 1rem;">
                                    <li>Filter changes</li>
                                    <li>Calibration checks</li>
                                    <li>Performance testing</li>
                                    <li>Wear point inspection</li>
                                </ul>
                            </div>
                            <div>
                                <h6 style="color: #856404; margin: 0 0 0.5rem;">Monthly/Quarterly</h6>
                                <ul style="font-size: 0.9rem; margin: 0; padding-left: 1rem;">
                                    <li>Major component inspection</li>
                                    <li>Electrical system testing</li>
                                    <li>Precision adjustments</li>
                                    <li>Software updates</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <h2>Maintenance Documentation</h2>
                <p>Comprehensive maintenance records demonstrate compliance and provide valuable data for equipment management decisions.</p>

                <h3>Required Maintenance Records</h3>
                <ul>
                    <li><strong>Maintenance Logs:</strong> Record of all maintenance activities performed</li>
                    <li><strong>Calibration Certificates:</strong> Documentation of calibration activities and results</li>
                    <li><strong>Parts Replacement Records:</strong> History of component changes and specifications</li>
                    <li><strong>Performance Trending:</strong> Data showing equipment performance over time</li>
                    <li><strong>Failure Analysis:</strong> Investigation of equipment failures and corrective actions</li>
                </ul>

                <div class="interactive-element">
                    <h4>📊 Equipment Performance Monitoring</h4>
                    <div style="background: #d1ecf1; border-left: 6px solid #17a2b8; padding: 1.5rem; margin: 1rem 0;">
                        <h5 style="color: #0c5460; margin: 0 0 1rem;">Key Performance Indicators</h5>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                            <div>
                                <h6 style="color: #0c5460; margin: 0 0 0.5rem;">Reliability Metrics</h6>
                                <ul style="font-size: 0.9rem; margin: 0; padding-left: 1rem;">
                                    <li>Mean Time Between Failures (MTBF)</li>
                                    <li>Mean Time To Repair (MTTR)</li>
                                    <li>Overall Equipment Effectiveness (OEE)</li>
                                    <li>Unplanned downtime percentage</li>
                                </ul>
                            </div>
                            <div>
                                <h6 style="color: #0c5460; margin: 0 0 0.5rem;">Quality Metrics</h6>
                                <ul style="font-size: 0.9rem; margin: 0; padding-left: 1rem;">
                                    <li>Product quality consistency</li>
                                    <li>Calibration drift trends</li>
                                    <li>Process capability indices</li>
                                    <li>Deviation frequency</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <h2>Equipment Change Control</h2>
                <p>Any changes to qualified equipment must be evaluated and controlled to ensure continued compliance and performance.</p>

                <h3>Change Control Process</h3>
                <ul>
                    <li><strong>Change Request:</strong> Formal documentation of proposed changes</li>
                    <li><strong>Impact Assessment:</strong> Evaluation of potential effects on product quality</li>
                    <li><strong>Approval Process:</strong> Review and approval by qualified personnel</li>
                    <li><strong>Implementation:</strong> Controlled execution of approved changes</li>
                    <li><strong>Verification:</strong> Confirmation that changes achieve intended results</li>
                    <li><strong>Documentation Update:</strong> Revision of relevant procedures and records</li>
                </ul>

                <h2>Common Equipment Issues</h2>
                <p>Understanding typical equipment problems helps develop preventive strategies and rapid response procedures.</p>

                <div class="interactive-element">
                    <h4>⚠️ Equipment Issue Prevention</h4>
                    <div style="display: grid; grid-template-columns: 1fr; gap: 1rem; margin: 1rem 0;">
                        <div style="padding: 1rem; border-left: 4px solid #dc3545; background: #f8d7da;">
                            <h6 style="color: #721c24; margin: 0 0 0.5rem;">Issue: Calibration Drift</h6>
                            <p style="font-size: 0.9rem; color: #721c24; margin: 0;"><strong>Prevention:</strong> Regular calibration checks, environmental control, proper handling procedures, and calibration trending analysis.</p>
                        </div>
                        <div style="padding: 1rem; border-left: 4px solid #fd7e14; background: #ffeaa7;">
                            <h6 style="color: #6c4a0b; margin: 0 0 0.5rem;">Issue: Unexpected Failures</h6>
                            <p style="font-size: 0.9rem; color: #6c4a0b; margin: 0;"><strong>Prevention:</strong> Preventive maintenance, condition monitoring, spare parts inventory, and operator training on early warning signs.</p>
                        </div>
                        <div style="padding: 1rem; border-left: 4px solid #28a745; background: #d4edda;">
                            <h6 style="color: #155724; margin: 0 0 0.5rem;">Issue: Performance Degradation</h6>
                            <p style="font-size: 0.9rem; color: #155724; margin: 0;"><strong>Prevention:</strong> Performance trending, regular cleaning, proper operating procedures, and timely component replacement.</p>
                        </div>
                    </div>
                </div>

                <p>Equipment qualification and maintenance are critical components of a comprehensive quality system. Properly qualified and maintained equipment provides the foundation for consistent product quality and regulatory compliance. In the next module, we'll explore how effective supply chain and vendor management ensure that incoming materials and services meet quality requirements.</p>
            `
        },
        {
            id: 11,
            title: "Supply Chain and Vendor Management",
            duration: "4 minutes",
            content: `
                <h1>Supply Chain and Vendor Management</h1>
                
                <div class="interactive-element">
                    <h4>🎯 Learning Objectives</h4>
                    <p>Upon completion of this module, you will be able to:</p>
                    <ul>
                        <li><strong>Develop vendor qualification programs</strong> that ensure suppliers meet quality and regulatory standards</li>
                        <li><strong>Implement incoming material inspection procedures</strong> that verify quality before use in production</li>
                        <li><strong>Design supplier audit programs</strong> that assess and monitor vendor performance</li>
                        <li><strong>Create supply chain risk management systems</strong> that identify and mitigate potential disruptions</li>
                        <li><strong>Establish vendor performance monitoring</strong> that drives continuous improvement</li>
                    </ul>
                </div>

                <h2>Supply Chain as Quality Extension</h2>
                <p>The quality of finished products depends heavily on the quality of incoming materials and services. Effective vendor management extends quality systems beyond facility walls to encompass the entire supply chain.</p>

                <div class="interactive-element">
                    <h4>🏗️ Vendor Management Framework</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; margin: 1rem 0;">
                        <div style="padding: 1.5rem; border: 2px solid #2d5016; border-radius: 8px; background: #f8f9fa;">
                            <h5 style="color: #2d5016; margin: 0 0 1rem;">Vendor Selection</h5>
                            <ul style="font-size: 0.9rem; margin: 0; padding-left: 1rem;">
                                <li>Quality system assessment</li>
                                <li>Regulatory compliance review</li>
                                <li>Technical capability evaluation</li>
                                <li>Financial stability analysis</li>
                                <li>References and reputation</li>
                            </ul>
                        </div>
                        <div style="padding: 1.5rem; border: 2px solid #4a7c59; border-radius: 8px; background: #f8f9fa;">
                            <h5 style="color: #4a7c59; margin: 0 0 1rem;">Vendor Qualification</h5>
                            <ul style="font-size: 0.9rem; margin: 0; padding-left: 1rem;">
                                <li>Quality agreements</li>
                                <li>Specification verification</li>
                                <li>Sample testing</li>
                                <li>Audit completion</li>
                                <li>Approval documentation</li>
                            </ul>
                        </div>
                        <div style="padding: 1.5rem; border: 2px solid #d4af37; border-radius: 8px; background: #f8f9fa;">
                            <h5 style="color: #d4af37; margin: 0 0 1rem;">Ongoing Monitoring</h5>
                            <ul style="font-size: 0.9rem; margin: 0; padding-left: 1rem;">
                                <li>Performance metrics tracking</li>
                                <li>Regular audits</li>
                                <li>Complaint management</li>
                                <li>Continuous improvement</li>
                                <li>Relationship management</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <h2>Critical Vendor Categories</h2>
                <p>Different types of vendors require different levels of qualification and oversight based on their impact on product quality and regulatory compliance.</p>

                <h3>Cannabis Supply Chain Vendors</h3>
                <ul>
                    <li><strong>Raw Material Suppliers:</strong> Hemp biomass, carrier oils, flavorings, packaging materials</li>
                    <li><strong>Contract Manufacturers:</strong> Extraction services, formulation, packaging</li>
                    <li><strong>Testing Laboratories:</strong> Potency, contaminant, and stability testing</li>
                    <li><strong>Equipment Suppliers:</strong> Manufacturing equipment, instruments, maintenance services</li>
                    <li><strong>Service Providers:</strong> Calibration, cleaning, waste disposal, consulting</li>
                </ul>

                <div class="interactive-element">
                    <h4>📋 Vendor Qualification Criteria</h4>
                    <div style="background: #e8f5e8; border-left: 6px solid #2d5016; padding: 1.5rem; margin: 1rem 0;">
                        <h5 style="color: #2d5016; margin: 0 0 1rem;">Essential Qualification Elements</h5>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
                            <div>
                                <h6 style="color: #2d5016; margin: 0 0 0.5rem;">Quality Systems</h6>
                                <ul style="font-size: 0.9rem; margin: 0; padding-left: 1rem;">
                                    <li>ISO certification (where applicable)</li>
                                    <li>cGMP compliance</li>
                                    <li>Quality manual review</li>
                                    <li>Documented procedures</li>
                                </ul>
                            </div>
                            <div>
                                <h6 style="color: #2d5016; margin: 0 0 0.5rem;">Regulatory Compliance</h6>
                                <ul style="font-size: 0.9rem; margin: 0; padding-left: 1rem;">
                                    <li>License verification</li>
                                    <li>Inspection history</li>
                                    <li>Compliance record</li>
                                    <li>Regulatory monitoring</li>
                                </ul>
                            </div>
                            <div>
                                <h6 style="color: #2d5016; margin: 0 0 0.5rem;">Technical Capability</h6>
                                <ul style="font-size: 0.9rem; margin: 0; padding-left: 1rem;">
                                    <li>Equipment adequacy</li>
                                    <li>Personnel competency</li>
                                    <li>Process validation</li>
                                    <li>Capacity assessment</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <h2>Incoming Material Controls</h2>
                <p>All incoming materials must be properly received, inspected, and approved before use in production to prevent quality issues and contamination.</p>

                <h3>Receiving and Inspection Procedures</h3>
                <ul>
                    <li><strong>Receipt Verification:</strong> Confirm correct materials, quantities, and shipping conditions</li>
                    <li><strong>Visual Inspection:</strong> Check for damage, contamination, or other obvious defects</li>
                    <li><strong>Identity Testing:</strong> Verify that materials match specifications and certificates</li>
                    <li><strong>Sampling Procedures:</strong> Collect representative samples for quality testing</li>
                    <li><strong>Quarantine Systems:</strong> Segregate materials until quality approval is obtained</li>
                </ul>

                <div class="interactive-element">
                    <h4>🔍 Certificate of Analysis (COA) Review</h4>
                    <div style="background: #fff3cd; border-left: 6px solid #d4af37; padding: 1.5rem; margin: 1rem 0;">
                        <h5 style="color: #856404; margin: 0 0 1rem;">Critical COA Elements to Verify</h5>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                            <div>
                                <h6 style="color: #856404; margin: 0 0 0.5rem;">Document Authenticity</h6>
                                <ul style="font-size: 0.9rem; margin: 0; padding-left: 1rem;">
                                    <li>Laboratory accreditation</li>
                                    <li>Authorized signatures</li>
                                    <li>Test dates and validity</li>
                                    <li>Batch/lot correlation</li>
                                </ul>
                            </div>
                            <div>
                                <h6 style="color: #856404; margin: 0 0 0.5rem;">Test Results</h6>
                                <ul style="font-size: 0.9rem; margin: 0; padding-left: 1rem;">
                                    <li>Specification compliance</li>
                                    <li>Method validation</li>
                                    <li>Detection limits</li>
                                    <li>Uncertainty calculations</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <h2>Supplier Audits</h2>
                <p>Regular supplier audits verify that vendors maintain the quality systems and capabilities required for continued qualification.</p>

                <h3>Audit Program Components</h3>
                <ul>
                    <li><strong>Audit Planning:</strong> Risk-based scheduling, scope definition, auditor assignment</li>
                    <li><strong>Audit Execution:</strong> Systematic evaluation of quality systems and processes</li>
                    <li><strong>Findings Management:</strong> Documentation of observations and required corrective actions</li>
                    <li><strong>Follow-up Activities:</strong> Verification of corrective action implementation</li>
                    <li><strong>Audit Records:</strong> Comprehensive documentation of audit activities and results</li>
                </ul>

                <div class="interactive-element">
                    <h4>📊 Audit Frequency Matrix</h4>
                    <div style="background: #d1ecf1; border-left: 6px solid #17a2b8; padding: 1.5rem; margin: 1rem 0;">
                        <h5 style="color: #0c5460; margin: 0 0 1rem;">Risk-Based Audit Scheduling</h5>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
                            <div>
                                <h6 style="color: #0c5460; margin: 0 0 0.5rem;">High Risk Vendors</h6>
                                <p style="font-size: 0.9rem; margin: 0 0 0.5rem;">Critical materials, new suppliers</p>
                                <strong style="color: #0c5460;">Audit Frequency: Every 6-12 months</strong>
                            </div>
                            <div>
                                <h6 style="color: #0c5460; margin: 0 0 0.5rem;">Medium Risk Vendors</h6>
                                <p style="font-size: 0.9rem; margin: 0 0 0.5rem;">Important materials, established suppliers</p>
                                <strong style="color: #0c5460;">Audit Frequency: Every 1-2 years</strong>
                            </div>
                            <div>
                                <h6 style="color: #0c5460; margin: 0 0 0.5rem;">Low Risk Vendors</h6>
                                <p style="font-size: 0.9rem; margin: 0 0 0.5rem;">Non-critical materials, proven suppliers</p>
                                <strong style="color: #0c5460;">Audit Frequency: Every 2-3 years</strong>
                            </div>
                        </div>
                    </div>
                </div>

                <h2>Vendor Performance Management</h2>
                <p>Systematic tracking of vendor performance enables data-driven decisions about supplier relationships and identifies opportunities for improvement.</p>

                <h3>Key Performance Indicators</h3>
                <ul>
                    <li><strong>Quality Metrics:</strong> Defect rates, specification compliance, COA accuracy</li>
                    <li><strong>Delivery Performance:</strong> On-time delivery, order accuracy, lead time reliability</li>
                    <li><strong>Service Metrics:</strong> Response time, technical support, communication effectiveness</li>
                    <li><strong>Compliance Metrics:</strong> Regulatory compliance, audit findings, corrective action timeliness</li>
                    <li><strong>Cost Metrics:</strong> Price stability, total cost of ownership, value delivery</li>
                </ul>

                <div class="interactive-element">
                    <h4>⚠️ Vendor Performance Issues</h4>
                    <div style="display: grid; grid-template-columns: 1fr; gap: 1rem; margin: 1rem 0;">
                        <div style="padding: 1rem; border-left: 4px solid #dc3545; background: #f8d7da;">
                            <h6 style="color: #721c24; margin: 0 0 0.5rem;">Issue: Quality Problems</h6>
                            <p style="font-size: 0.9rem; color: #721c24; margin: 0;"><strong>Response:</strong> Immediate investigation, corrective action requirements, increased monitoring, and potential supplier change.</p>
                        </div>
                        <div style="padding: 1rem; border-left: 4px solid #fd7e14; background: #ffeaa7;">
                            <h6 style="color: #6c4a0b; margin: 0 0 0.5rem;">Issue: Delivery Problems</h6>
                            <p style="font-size: 0.9rem; color: #6c4a0b; margin: 0;"><strong>Response:</strong> Communication improvement, backup supplier identification, inventory buffer adjustment, and performance improvement plans.</p>
                        </div>
                        <div style="padding: 1rem; border-left: 4px solid #6610f2; background: #e7d6ff;">
                            <h6 style="color: #4a0e66; margin: 0 0 0.5rem;">Issue: Compliance Deficiencies</h6>
                            <p style="font-size: 0.9rem; color: #4a0e66; margin: 0;"><strong>Response:</strong> Immediate compliance assessment, mandatory corrective actions, increased audit frequency, and qualification review.</p>
                        </div>
                    </div>
                </div>

                <h2>Supply Chain Risk Management</h2>
                <p>Identifying and mitigating supply chain risks ensures business continuity and protects product quality even when disruptions occur.</p>

                <h3>Common Supply Chain Risks</h3>
                <ul>
                    <li><strong>Single Source Dependencies:</strong> Reliance on one supplier for critical materials</li>
                    <li><strong>Regulatory Changes:</strong> New requirements affecting supplier qualifications</li>
                    <li><strong>Quality Failures:</strong> Supplier quality system breakdowns</li>
                    <li><strong>Capacity Constraints:</strong> Supplier inability to meet demand</li>
                    <li><strong>Geographic Risks:</strong> Natural disasters, transportation disruptions</li>
                </ul>

                <h3>Risk Mitigation Strategies</h3>
                <ul>
                    <li><strong>Supplier Diversification:</strong> Multiple approved suppliers for critical materials</li>
                    <li><strong>Strategic Inventory:</strong> Safety stock for high-risk materials</li>
                    <li><strong>Supplier Development:</strong> Programs to improve supplier capabilities</li>
                    <li><strong>Contract Terms:</strong> Service level agreements and performance guarantees</li>
                    <li><strong>Contingency Planning:</strong> Procedures for supply chain disruptions</li>
                </ul>

                <p>Effective supply chain and vendor management ensure that the quality of incoming materials and services supports overall product quality and regulatory compliance. Well-managed supplier relationships provide a foundation for consistent manufacturing operations. In the next module, we'll explore how batch release and product disposition decisions ensure that only compliant products reach consumers.</p>
            `
        },
        {
            id: 12,
            title: "Batch Release and Product Disposition",
            duration: "4 minutes",
            content: `
                <h1>Batch Release and Product Disposition</h1>
                
                <div class="interactive-element">
                    <h4>🎯 Learning Objectives</h4>
                    <p>Upon completion of this module, you will be able to:</p>
                    <ul>
                        <li><strong>Implement comprehensive batch review procedures</strong> that ensure all quality requirements are met before release</li>
                        <li><strong>Establish clear release criteria</strong> based on specifications, testing, and documentation requirements</li>
                        <li><strong>Design product disposition systems</strong> that properly handle both conforming and non-conforming materials</li>
                        <li><strong>Develop recall procedures</strong> that enable rapid response to quality issues</li>
                        <li><strong>Create batch release documentation</strong> that demonstrates compliance and supports traceability</li>
                    </ul>
                </div>

                <h2>Batch Release as Quality Gatekeeper</h2>
                <p>Batch release is the final quality control checkpoint before products reach consumers. This critical process ensures that only products meeting all quality, safety, and regulatory requirements are distributed.</p>

                <div class="interactive-element">
                    <h4>🔒 Batch Release Process Flow</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; margin: 1rem 0;">
                        <div style="padding: 1.5rem; border: 2px solid #2d5016; border-radius: 8px; background: #f8f9fa; position: relative;">
                            <div style="position: absolute; top: -10px; left: 10px; background: #2d5016; color: white; padding: 5px 10px; border-radius: 20px; font-size: 0.8rem;">Step 1</div>
                            <h5 style="color: #2d5016; margin: 1rem 0 1rem;">Batch Completion</h5>
                            <ul style="font-size: 0.9rem; margin: 0; padding-left: 1rem;">
                                <li>Production records complete</li>
                                <li>All testing completed</li>
                                <li>Documentation compiled</li>
                                <li>Quality review initiated</li>
                            </ul>
                        </div>
                        <div style="padding: 1.5rem; border: 2px solid #4a7c59; border-radius: 8px; background: #f8f9fa; position: relative;">
                            <div style="position: absolute; top: -10px; left: 10px; background: #4a7c59; color: white; padding: 5px 10px; border-radius: 20px; font-size: 0.8rem;">Step 2</div>
                            <h5 style="color: #4a7c59; margin: 1rem 0 1rem;">Quality Review</h5>
                            <ul style="font-size: 0.9rem; margin: 0; padding-left: 1rem;">
                                <li>Specification compliance</li>
                                <li>Test result evaluation</li>
                                <li>Deviation assessment</li>
                                <li>Documentation review</li>
                            </ul>
                        </div>
                        <div style="padding: 1.5rem; border: 2px solid #d4af37; border-radius: 8px; background: #f8f9fa; position: relative;">
                            <div style="position: absolute; top: -10px; left: 10px; background: #d4af37; color: #2d5016; padding: 5px 10px; border-radius: 20px; font-size: 0.8rem;">Step 3</div>
                            <h5 style="color: #d4af37; margin: 1rem 0 1rem;">Release Decision</h5>
                            <ul style="font-size: 0.9rem; margin: 0; padding-left: 1rem;">
                                <li>Approve for release</li>
                                <li>Reject batch</li>
                                <li>Rework authorization</li>
                                <li>Investigation required</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <h2>Batch Review Requirements</h2>
                <p>Comprehensive batch review examines all aspects of production, testing, and documentation to ensure complete compliance with established requirements.</p>

                <h3>Essential Review Elements</h3>
                <ul>
                    <li><strong>Raw Material Verification:</strong> Approved suppliers, correct materials, in-date usage</li>
                    <li><strong>Production Record Review:</strong> Complete documentation, authorized signatures, deviation handling</li>
                    <li><strong>In-Process Testing:</strong> All required tests performed, results within specifications</li>
                    <li><strong>Finished Product Testing:</strong> Complete testing panel, specification compliance</li>
                    <li><strong>Packaging and Labeling:</strong> Correct materials, accurate information, regulatory compliance</li>
                    <li><strong>Environmental Monitoring:</strong> Facility conditions during production</li>
                </ul>

                <div class="interactive-element">
                    <h4>📋 Batch Review Checklist</h4>
                    <div style="background: #e8f5e8; border-left: 6px solid #2d5016; padding: 1.5rem; margin: 1rem 0;">
                        <h5 style="color: #2d5016; margin: 0 0 1rem;">Critical Review Points</h5>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                            <div>
                                <h6 style="color: #2d5016; margin: 0 0 0.5rem;">Production Compliance</h6>
                                <ul style="font-size: 0.9rem; margin: 0; padding-left: 1rem;">
                                    <li>☐ Master batch record followed</li>
                                    <li>☐ All deviations documented</li>
                                    <li>☐ Process parameters met</li>
                                    <li>☐ Equipment qualified</li>
                                    <li>☐ Personnel trained</li>
                                </ul>
                            </div>
                            <div>
                                <h6 style="color: #2d5016; margin: 0 0 0.5rem;">Quality Compliance</h6>
                                <ul style="font-size: 0.9rem; margin: 0; padding-left: 1rem;">
                                    <li>☐ All tests completed</li>
                                    <li>☐ Results within specs</li>
                                    <li>☐ COAs accurate</li>
                                    <li>☐ Stability data current</li>
                                    <li>☐ Regulatory requirements met</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <h2>Release Criteria and Specifications</h2>
                <p>Clear, measurable release criteria provide objective standards for batch approval decisions and ensure consistent quality standards.</p>

                <h3>Cannabis Product Release Criteria</h3>
                <ul>
                    <li><strong>Cannabinoid Potency:</strong> THC ≤0.3% for hemp products, labeled potency ±10%</li>
                    <li><strong>Contaminant Limits:</strong> Heavy metals, pesticides, microbials within acceptable limits</li>
                    <li><strong>Physical Attributes:</strong> Appearance, texture, weight, dimensions</li>
                    <li><strong>Stability Requirements:</strong> Shelf life supported by stability data</li>
                    <li><strong>Packaging Integrity:</strong> Seal quality, label accuracy, child-resistant compliance</li>
                </ul>

                <div class="interactive-element">
                    <h4>⚖️ Specification Compliance Evaluation</h4>
                    <div style="background: #fff3cd; border-left: 6px solid #d4af37; padding: 1.5rem; margin: 1rem 0;">
                        <h5 style="color: #856404; margin: 0 0 1rem;">Specification Categories</h5>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
                            <div>
                                <h6 style="color: #856404; margin: 0 0 0.5rem;">Critical Specifications</h6>
                                <p style="font-size: 0.9rem; margin: 0 0 0.5rem;">Must meet to ensure safety</p>
                                <ul style="font-size: 0.9rem; margin: 0; padding-left: 1rem;">
                                    <li>THC limits</li>
                                    <li>Contaminant levels</li>
                                    <li>Microbiological safety</li>
                                </ul>
                            </div>
                            <div>
                                <h6 style="color: #856404; margin: 0 0 0.5rem;">Major Specifications</h6>
                                <p style="font-size: 0.9rem; margin: 0 0 0.5rem;">Must meet for functionality</p>
                                <ul style="font-size: 0.9rem; margin: 0; padding-left: 1rem;">
                                    <li>Active ingredient potency</li>
                                    <li>Physical attributes</li>
                                    <li>Stability requirements</li>
                                </ul>
                            </div>
                            <div>
                                <h6 style="color: #856404; margin: 0 0 0.5rem;">Minor Specifications</h6>
                                <p style="font-size: 0.9rem; margin: 0 0 0.5rem;">Affect quality but not safety</p>
                                <ul style="font-size: 0.9rem; margin: 0; padding-left: 1rem;">
                                    <li>Color variations</li>
                                    <li>Flavor intensity</li>
                                    <li>Packaging aesthetics</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <h2>Product Disposition Decisions</h2>
                <p>When products do not meet all release criteria, systematic disposition procedures ensure appropriate handling while maintaining product safety and regulatory compliance.</p>

                <h3>Disposition Options</h3>
                <ul>
                    <li><strong>Release:</strong> Product meets all specifications and requirements</li>
                    <li><strong>Rework:</strong> Product can be reprocessed to meet specifications</li>
                    <li><strong>Reject:</strong> Product cannot be brought into compliance</li>
                    <li><strong>Quarantine:</strong> Product requires further investigation</li>
                    <li><strong>Destruction:</strong> Product must be destroyed for safety or compliance reasons</li>
                </ul>

                <div class="interactive-element">
                    <h4>🔄 Rework and Reprocessing</h4>
                    <div style="background: #d1ecf1; border-left: 6px solid #17a2b8; padding: 1.5rem; margin: 1rem 0;">
                        <h5 style="color: #0c5460; margin: 0 0 1rem;">Rework Authorization Process</h5>
                        <ol style="color: #0c5460; font-size: 0.9rem; margin: 0;">
                            <li><strong>Root Cause Investigation:</strong> Determine why specifications were not met</li>
                            <li><strong>Rework Plan Development:</strong> Define specific procedures to bring product into compliance</li>
                            <li><strong>Risk Assessment:</strong> Evaluate potential impacts on product quality and safety</li>
                            <li><strong>Approval Process:</strong> Obtain authorization from qualified personnel</li>
                            <li><strong>Rework Execution:</strong> Implement approved procedures with full documentation</li>
                            <li><strong>Re-testing:</strong> Complete testing to verify specification compliance</li>
                            <li><strong>Final Review:</strong> Comprehensive evaluation of reworked batch</li>
                        </ol>
                    </div>
                </div>

                <h2>Quarantine and Inventory Control</h2>
                <p>Effective quarantine systems prevent the inadvertent release of non-conforming products while maintaining clear inventory segregation.</p>

                <h3>Quarantine System Requirements</h3>
                <ul>
                    <li><strong>Physical Segregation:</strong> Separate storage areas for quarantined products</li>
                    <li><strong>Clear Identification:</strong> Labels and documentation indicating quarantine status</li>
                    <li><strong>Access Control:</strong> Restricted access to prevent unauthorized use</li>
                    <li><strong>Inventory Tracking:</strong> Systems to monitor quarantined product status</li>
                    <li><strong>Disposition Timeline:</strong> Time limits for quarantine resolution</li>
                </ul>

                <div class="interactive-element">
                    <h4>⚠️ Non-Conforming Product Management</h4>
                    <div style="display: grid; grid-template-columns: 1fr; gap: 1rem; margin: 1rem 0;">
                        <div style="padding: 1rem; border-left: 4px solid #dc3545; background: #f8d7da;">
                            <h6 style="color: #721c24; margin: 0 0 0.5rem;">Critical Non-Conformance</h6>
                            <p style="font-size: 0.9rem; color: #721c24; margin: 0;"><strong>Action:</strong> Immediate quarantine, investigation, and likely destruction. No release until fully resolved.</p>
                        </div>
                        <div style="padding: 1rem; border-left: 4px solid #fd7e14; background: #ffeaa7;">
                            <h6 style="color: #6c4a0b; margin: 0 0 0.5rem;">Major Non-Conformance</h6>
                            <p style="font-size: 0.9rem; color: #6c4a0b; margin: 0;"><strong>Action:</strong> Quarantine, investigation, and evaluation for rework potential. Senior management involvement required.</p>
                        </div>
                        <div style="padding: 1rem; border-left: 4px solid #28a745; background: #d4edda;">
                            <h6 style="color: #155724; margin: 0 0 0.5rem;">Minor Non-Conformance</h6>
                            <p style="font-size: 0.9rem; color: #155724; margin: 0;"><strong>Action:</strong> Evaluation for impact on safety and functionality. May be acceptable with appropriate justification.</p>
                        </div>
                    </div>
                </div>

                <h2>Recall Procedures</h2>
                <p>Despite best efforts, situations may arise requiring product recall. Effective recall procedures enable rapid response to protect consumer safety and regulatory compliance.</p>

                <h3>Recall System Components</h3>
                <ul>
                    <li><strong>Recall Team:</strong> Designated personnel with defined roles and responsibilities</li>
                    <li><strong>Communication Plan:</strong> Procedures for notifying customers, regulators, and media</li>
                    <li><strong>Traceability Systems:</strong> Ability to identify affected products and distribution channels</li>
                    <li><strong>Retrieval Procedures:</strong> Methods for collecting recalled products</li>
                    <li><strong>Disposition Plans:</strong> Procedures for handling recalled products</li>
                </ul>

                <div class="interactive-element">
                    <h4>🚨 Recall Classification System</h4>
                    <div style="background: #f8d7da; border-left: 6px solid #dc3545; padding: 1.5rem; margin: 1rem 0;">
                        <h5 style="color: #721c24; margin: 0 0 1rem;">FDA Recall Classifications</h5>
                        <div style="display: grid; grid-template-columns: 1fr; gap: 0.5rem;">
                            <div style="padding: 0.5rem; background: white; border-radius: 4px;">
                                <strong style="color: #dc3545;">Class I:</strong> <span style="color: #721c24;">Dangerous or defective products that could cause serious health problems or death</span>
                            </div>
                            <div style="padding: 0.5rem; background: white; border-radius: 4px;">
                                <strong style="color: #fd7e14;">Class II:</strong> <span style="color: #721c24;">Products that might cause temporary health problems or pose slight threat of serious nature</span>
                            </div>
                            <div style="padding: 0.5rem; background: white; border-radius: 4px;">
                                <strong style="color: #28a745;">Class III:</strong> <span style="color: #721c24;">Products unlikely to cause adverse health reactions but violate FDA regulations</span>
                            </div>
                        </div>
                    </div>
                </div>

                <h2>Release Documentation</h2>
                <p>Comprehensive documentation of batch release decisions provides evidence of compliance and supports regulatory inspections and investigations.</p>

                <h3>Required Release Documentation</h3>
                <ul>
                    <li><strong>Batch Release Certificate:</strong> Formal approval document signed by qualified person</li>
                    <li><strong>Review Summary:</strong> Compilation of all review activities and findings</li>
                    <li><strong>Test Result Summary:</strong> Complete testing data with specification comparison</li>
                    <li><strong>Deviation Summary:</strong> All deviations and their resolution</li>
                    <li><strong>Distribution Records:</strong> Where and to whom products were shipped</li>
                </ul>

                <p>Batch release and product disposition represent the final quality control checkpoint in cannabis manufacturing. These processes ensure that only products meeting all safety, quality, and regulatory requirements reach consumers while providing mechanisms for handling non-conforming materials appropriately. In the next module, we'll explore how to prepare for regulatory inspections and audits that verify the effectiveness of these quality systems.</p>
            `
        },
        {
            id: 13,
            title: "Audit Preparation and Regulatory Inspections",
            duration: "4 minutes",
            content: `
                <h1>Audit Preparation and Regulatory Inspections</h1>
                
                <div class="interactive-element">
                    <h4>🎯 Learning Objectives</h4>
                    <p>Upon completion of this module, you will be able to:</p>
                    <ul>
                        <li><strong>Develop comprehensive audit preparation strategies</strong> that ensure readiness for regulatory inspections</li>
                        <li><strong>Implement internal audit programs</strong> that identify and correct deficiencies before external inspections</li>
                        <li><strong>Master inspector interaction techniques</strong> that facilitate professional and productive inspections</li>
                        <li><strong>Create corrective action plans</strong> that address audit findings effectively</li>
                        <li><strong>Establish audit documentation systems</strong> that demonstrate compliance and continuous improvement</li>
                    </ul>
                </div>

                <h2>Audits as Quality System Verification</h2>
                <p>Audits and regulatory inspections provide independent verification that quality systems are functioning as intended and meeting regulatory requirements. Proper preparation ensures successful outcomes and demonstrates organizational commitment to compliance.</p>

                <div class="interactive-element">
                    <h4>🔍 Types of Audits and Inspections</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; margin: 1rem 0;">
                        <div style="padding: 1.5rem; border: 2px solid #2d5016; border-radius: 8px; background: #f8f9fa;">
                            <h5 style="color: #2d5016; margin: 0 0 1rem;">Internal Audits</h5>
                            <ul style="font-size: 0.9rem; margin: 0; padding-left: 1rem;">
                                <li>Self-assessment programs</li>
                                <li>Compliance verification</li>
                                <li>Continuous improvement</li>
                                <li>Training opportunities</li>
                                <li>Proactive issue identification</li>
                            </ul>
                        </div>
                        <div style="padding: 1.5rem; border: 2px solid #4a7c59; border-radius: 8px; background: #f8f9fa;">
                            <h5 style="color: #4a7c59; margin: 0 0 1rem;">Regulatory Inspections</h5>
                            <ul style="font-size: 0.9rem; margin: 0; padding-left: 1rem;">
                                <li>FDA inspections</li>
                                <li>State regulatory visits</li>
                                <li>License renewal reviews</li>
                                <li>Complaint investigations</li>
                                <li>Routine compliance checks</li>
                            </ul>
                        </div>
                        <div style="padding: 1.5rem; border: 2px solid #d4af37; border-radius: 8px; background: #f8f9fa;">
                            <h5 style="color: #d4af37; margin: 0 0 1rem;">Third-Party Audits</h5>
                            <ul style="font-size: 0.9rem; margin: 0; padding-left: 1rem;">
                                <li>Customer audits</li>
                                <li>Certification assessments</li>
                                <li>Insurance inspections</li>
                                <li>Consultant reviews</li>
                                <li>Due diligence audits</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <h2>Internal Audit Programs</h2>
                <p>Effective internal audit programs identify and address compliance gaps before they become regulatory issues, demonstrating proactive quality management.</p>

                <h3>Internal Audit Program Components</h3>
                <ul>
                    <li><strong>Audit Schedule:</strong> Risk-based planning covering all quality system elements</li>
                    <li><strong>Auditor Training:</strong> Qualified personnel with appropriate knowledge and skills</li>
                    <li><strong>Audit Procedures:</strong> Standardized approaches ensuring consistent evaluations</li>
                    <li><strong>Finding Management:</strong> Systems for tracking and resolving identified issues</li>
                    <li><strong>Continuous Improvement:</strong> Using audit results to enhance quality systems</li>
                </ul>

                <div class="interactive-element">
                    <h4>📅 Internal Audit Scheduling</h4>
                    <div style="background: #e8f5e8; border-left: 6px solid #2d5016; padding: 1.5rem; margin: 1rem 0;">
                        <h5 style="color: #2d5016; margin: 0 0 1rem;">Risk-Based Audit Frequency</h5>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
                            <div>
                                <h6 style="color: #2d5016; margin: 0 0 0.5rem;">High-Risk Areas</h6>
                                <p style="font-size: 0.9rem; margin: 0 0 0.5rem;">Production, testing, batch release</p>
                                <ul style="font-size: 0.9rem; margin: 0; padding-left: 1rem;">
                                    <li>Quarterly audits</li>
                                    <li>Post-incident reviews</li>
                                    <li>New process validation</li>
                                </ul>
                            </div>
                            <div>
                                <h6 style="color: #2d5016; margin: 0 0 0.5rem;">Medium-Risk Areas</h6>
                                <p style="font-size: 0.9rem; margin: 0 0 0.5rem;">Training, documentation, facilities</p>
                                <ul style="font-size: 0.9rem; margin: 0; padding-left: 1rem;">
                                    <li>Semi-annual audits</li>
                                    <li>Change control reviews</li>
                                    <li>System updates</li>
                                </ul>
                            </div>
                            <div>
                                <h6 style="color: #2d5016; margin: 0 0 0.5rem;">Lower-Risk Areas</h6>
                                <p style="font-size: 0.9rem; margin: 0 0 0.5rem;">Administration, maintenance, support</p>
                                <ul style="font-size: 0.9rem; margin: 0; padding-left: 1rem;">
                                    <li>Annual audits</li>
                                    <li>Focused assessments</li>
                                    <li>Efficiency reviews</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <h2>Regulatory Inspection Preparation</h2>
                <p>Thorough preparation for regulatory inspections reduces stress, demonstrates professionalism, and increases the likelihood of successful outcomes.</p>

                <h3>Pre-Inspection Preparation</h3>
                <ul>
                    <li><strong>Documentation Review:</strong> Ensure all required records are complete and accessible</li>
                    <li><strong>Facility Preparation:</strong> Clean, organized, and compliant physical environment</li>
                    <li><strong>Personnel Briefing:</strong> Staff training on inspection procedures and appropriate responses</li>
                    <li><strong>Mock Inspections:</strong> Practice sessions to identify potential issues</li>
                    <li><strong>Response Team:</strong> Designated personnel with specific roles during inspections</li>
                </ul>

                <div class="interactive-element">
                    <h4>📋 Inspection Readiness Checklist</h4>
                    <div style="background: #fff3cd; border-left: 6px solid #d4af37; padding: 1.5rem; margin: 1rem 0;">
                        <h5 style="color: #856404; margin: 0 0 1rem;">Essential Preparation Items</h5>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                            <div>
                                <h6 style="color: #856404; margin: 0 0 0.5rem;">Documentation</h6>
                                <ul style="font-size: 0.9rem; margin: 0; padding-left: 1rem;">
                                    <li>☐ Current SOPs available</li>
                                    <li>☐ Batch records complete</li>
                                    <li>☐ Training records updated</li>
                                    <li>☐ Calibration certificates current</li>
                                    <li>☐ Deviation records complete</li>
                                    <li>☐ CAPA system current</li>
                                </ul>
                            </div>
                            <div>
                                <h6 style="color: #856404; margin: 0 0 0.5rem;">Facility & Personnel</h6>
                                <ul style="font-size: 0.9rem; margin: 0; padding-left: 1rem;">
                                    <li>☐ Facility clean and organized</li>
                                    <li>☐ Equipment properly maintained</li>
                                    <li>☐ Safety systems functional</li>
                                    <li>☐ Staff briefed on procedures</li>
                                    <li>☐ Response team identified</li>
                                    <li>☐ Conference room prepared</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <h2>Inspector Interaction Best Practices</h2>
                <p>Professional, cooperative interaction with inspectors facilitates efficient inspections and demonstrates commitment to compliance.</p>

                <h3>Effective Inspector Interaction</h3>
                <ul>
                    <li><strong>Professional Courtesy:</strong> Respectful, helpful, and accommodating attitude</li>
                    <li><strong>Honest Communication:</strong> Direct, truthful responses to questions</li>
                    <li><strong>Organized Information:</strong> Provide requested documents promptly and completely</li>
                    <li><strong>Appropriate Scope:</strong> Answer questions within the scope of expertise</li>
                    <li><strong>Documentation:</strong> Record interactions and requests appropriately</li>
                </ul>

                <div class="interactive-element">
                    <h4>💬 Inspector Communication Guidelines</h4>
                    <div style="background: #d1ecf1; border-left: 6px solid #17a2b8; padding: 1.5rem; margin: 1rem 0;">
                        <h5 style="color: #0c5460; margin: 0 0 1rem;">Do's and Don'ts</h5>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                            <div>
                                <h6 style="color: #0c5460; margin: 0 0 0.5rem;">✅ Best Practices</h6>
                                <ul style="font-size: 0.9rem; margin: 0; padding-left: 1rem;">
                                    <li>Be honest and direct</li>
                                    <li>Provide complete information</li>
                                    <li>Ask for clarification if needed</li>
                                    <li>Document all interactions</li>
                                    <li>Cooperate fully</li>
                                    <li>Stay within your expertise</li>
                                </ul>
                            </div>
                            <div>
                                <h6 style="color: #0c5460; margin: 0 0 0.5rem;">❌ Things to Avoid</h6>
                                <ul style="font-size: 0.9rem; margin: 0; padding-left: 1rem;">
                                    <li>Volunteer unnecessary information</li>
                                    <li>Speculate or guess</li>
                                    <li>Become defensive</li>
                                    <li>Make excuses</li>
                                    <li>Promise what you can't deliver</li>
                                    <li>Discuss confidential matters</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <h2>Managing Audit Findings</h2>
                <p>How organizations respond to audit findings demonstrates their commitment to quality and compliance. Effective response processes turn findings into improvement opportunities.</p>

                <h3>Finding Response Process</h3>
                <ul>
                    <li><strong>Immediate Assessment:</strong> Understand the finding and its implications</li>
                    <li><strong>Root Cause Analysis:</strong> Identify underlying causes, not just symptoms</li>
                    <li><strong>Corrective Action Planning:</strong> Develop comprehensive response plans</li>
                    <li><strong>Implementation:</strong> Execute corrective actions with appropriate oversight</li>
                    <li><strong>Verification:</strong> Confirm that actions effectively address the finding</li>
                    <li><strong>Prevention:</strong> Implement preventive measures to avoid recurrence</li>
                </ul>

                <div class="interactive-element">
                    <h4>🔧 CAPA System for Audit Findings</h4>
                    <div style="background: #f8d7da; border-left: 6px solid #dc3545; padding: 1.5rem; margin: 1rem 0;">
                        <h5 style="color: #721c24; margin: 0 0 1rem;">Corrective and Preventive Action Elements</h5>
                        <div style="display: grid; grid-template-columns: 1fr; gap: 1rem;">
                            <div style="padding: 1rem; background: white; border-radius: 4px;">
                                <h6 style="color: #721c24; margin: 0 0 0.5rem;">Corrective Action (Addressing Current Issue)</h6>
                                <ul style="font-size: 0.9rem; margin: 0; padding-left: 1rem;">
                                    <li>Immediate containment of the problem</li>
                                    <li>Root cause investigation</li>
                                    <li>Elimination of the root cause</li>
                                    <li>Verification of effectiveness</li>
                                </ul>
                            </div>
                            <div style="padding: 1rem; background: white; border-radius: 4px;">
                                <h6 style="color: #721c24; margin: 0 0 0.5rem;">Preventive Action (Preventing Future Issues)</h6>
                                <ul style="font-size: 0.9rem; margin: 0; padding-left: 1rem;">
                                    <li>Identification of potential problems</li>
                                    <li>Analysis of possible causes</li>
                                    <li>Implementation of preventive measures</li>
                                    <li>Monitoring for effectiveness</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <h2>Post-Inspection Activities</h2>
                <p>The period following an inspection is critical for maintaining regulatory relationships and demonstrating ongoing commitment to compliance.</p>

                <h3>Post-Inspection Tasks</h3>
                <ul>
                    <li><strong>Inspection Debrief:</strong> Review inspection activities and outcomes with team</li>
                    <li><strong>Finding Analysis:</strong> Thorough review of all observations and citations</li>
                    <li><strong>Response Planning:</strong> Development of comprehensive response strategies</li>
                    <li><strong>Communication:</strong> Appropriate follow-up with inspectors and regulators</li>
                    <li><strong>System Improvements:</strong> Integration of lessons learned into quality systems</li>
                </ul>

                <div class="interactive-element">
                    <h4>📊 Inspection Outcome Management</h4>
                    <div style="display: grid; grid-template-columns: 1fr; gap: 1rem; margin: 1rem 0;">
                        <div style="padding: 1rem; border-left: 4px solid #28a745; background: #d4edda;">
                            <h6 style="color: #155724; margin: 0 0 0.5rem;">No Action Indicated (NAI)</h6>
                            <p style="font-size: 0.9rem; color: #155724; margin: 0;"><strong>Response:</strong> Continue current practices, document successful inspection, and use as baseline for continuous improvement.</p>
                        </div>
                        <div style="padding: 1rem; border-left: 4px solid #fd7e14; background: #ffeaa7;">
                            <h6 style="color: #6c4a0b; margin: 0 0 0.5rem;">Voluntary Action Indicated (VAI)</h6>
                            <p style="font-size: 0.9rem; color: #6c4a0b; margin: 0;"><strong>Response:</strong> Address observations voluntarily, implement corrective actions, and document improvements for future inspections.</p>
                        </div>
                        <div style="padding: 1rem; border-left: 4px solid #dc3545; background: #f8d7da;">
                            <h6 style="color: #721c24; margin: 0 0 0.5rem;">Official Action Indicated (OAI)</h6>
                            <p style="font-size: 0.9rem; color: #721c24; margin: 0;"><strong>Response:</strong> Immediate comprehensive response required, including detailed corrective action plans and timeline commitments.</p>
                        </div>
                    </div>
                </div>

                <h2>Building Audit Readiness Culture</h2>
                <p>Organizations with strong audit readiness cultures maintain inspection readiness as a daily practice rather than a periodic effort.</p>

                <h3>Culture Development Strategies</h3>
                <ul>
                    <li><strong>Management Leadership:</strong> Visible commitment to compliance and quality</li>
                    <li><strong>Employee Engagement:</strong> All personnel understand their role in compliance</li>
                    <li><strong>Continuous Monitoring:</strong> Regular self-assessment and improvement</li>
                    <li><strong>Training Programs:</strong> Ongoing education on regulatory requirements</li>
                    <li><strong>Recognition Systems:</strong> Acknowledgment of compliance achievements</li>
                </ul>

                <div class="interactive-element">
                    <h4>🎯 Audit Readiness Indicators</h4>
                    <div style="background: #e8f5e8; border-left: 6px solid #2d5016; padding: 1.5rem; margin: 1rem 0;">
                        <h5 style="color: #2d5016; margin: 0 0 1rem;">Signs of Strong Audit Readiness</h5>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                            <div>
                                <h6 style="color: #2d5016; margin: 0 0 0.5rem;">Operational Indicators</h6>
                                <ul style="font-size: 0.9rem; margin: 0; padding-left: 1rem;">
                                    <li>Complete, current documentation</li>
                                    <li>Proactive issue identification</li>
                                    <li>Effective CAPA systems</li>
                                    <li>Regular internal audits</li>
                                </ul>
                            </div>
                            <div>
                                <h6 style="color: #2d5016; margin: 0 0 0.5rem;">Cultural Indicators</h6>
                                <ul style="font-size: 0.9rem; margin: 0; padding-left: 1rem;">
                                    <li>Employee compliance awareness</li>
                                    <li>Open communication culture</li>
                                    <li>Continuous improvement mindset</li>
                                    <li>Quality-first decision making</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <p>Audit preparation and regulatory inspection readiness are essential components of effective quality management systems. Organizations that maintain continuous audit readiness demonstrate their commitment to quality and compliance while reducing the stress and risks associated with regulatory inspections. In the final module, we'll explore how continuous improvement and quality management systems create sustainable quality cultures that drive ongoing enhancement of all operations.</p>
            `
        },
        {
            id: 14,
            title: "Continuous Improvement and Quality Management Systems",
            duration: "4 minutes",
            content: `
                <h1>Continuous Improvement and Quality Management Systems</h1>
                
                <div class="interactive-element">
                    <h4>🎯 Learning Objectives</h4>
                    <p>Upon completion of this module, you will be able to:</p>
                    <ul>
                        <li><strong>Implement sustainable continuous improvement processes</strong> that systematically enhance quality and efficiency</li>
                        <li><strong>Design comprehensive quality management systems</strong> that integrate all aspects of operations</li>
                        <li><strong>Establish performance monitoring systems</strong> that identify opportunities for improvement</li>
                        <li><strong>Create quality cultures</strong> that engage all personnel in improvement activities</li>
                        <li><strong>Develop management review processes</strong> that ensure ongoing system effectiveness</li>
                    </ul>
                </div>

                <h2>Quality Management as Business Strategy</h2>
                <p>Quality management systems provide the framework for consistent operations, regulatory compliance, and continuous improvement. They transform quality from a department function to an organizational philosophy.</p>

                <div class="interactive-element">
                    <h4>🏗️ Quality Management System Framework</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; margin: 1rem 0;">
                        <div style="padding: 1.5rem; border: 3px solid #2d5016; border-radius: 8px; background: #f8f9fa;">
                            <h5 style="color: #2d5016; margin: 0 0 1rem;">Quality Policy</h5>
                            <ul style="font-size: 0.9rem; margin: 0; padding-left: 1rem;">
                                <li>Leadership commitment</li>
                                <li>Quality objectives</li>
                                <li>Customer focus</li>
                                <li>Regulatory compliance</li>
                                <li>Continuous improvement</li>
                            </ul>
                        </div>
                        <div style="padding: 1.5rem; border: 3px solid #4a7c59; border-radius: 8px; background: #f8f9fa;">
                            <h5 style="color: #4a7c59; margin: 0 0 1rem;">Process Management</h5>
                            <ul style="font-size: 0.9rem; margin: 0; padding-left: 1rem;">
                                <li>Process mapping</li>
                                <li>Process controls</li>
                                <li>Performance metrics</li>
                                <li>Process improvement</li>
                                <li>Risk management</li>
                            </ul>
                        </div>
                        <div style="padding: 1.5rem; border: 3px solid #d4af37; border-radius: 8px; background: #f8f9fa;">
                            <h5 style="color: #d4af37; margin: 0 0 1rem;">Performance Monitoring</h5>
                            <ul style="font-size: 0.9rem; margin: 0; padding-left: 1rem;">
                                <li>Key performance indicators</li>
                                <li>Quality metrics</li>
                                <li>Trend analysis</li>
                                <li>Benchmarking</li>
                                <li>Management review</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <h2>Continuous Improvement Philosophy</h2>
                <p>Continuous improvement is the systematic approach to enhancing processes, products, and systems through ongoing evaluation and refinement.</p>

                <h3>Core Improvement Principles</h3>
                <ul>
                    <li><strong>Customer Focus:</strong> All improvements should enhance customer value and satisfaction</li>
                    <li><strong>Data-Driven Decisions:</strong> Use factual information to guide improvement activities</li>
                    <li><strong>Process Approach:</strong> Focus on improving processes rather than individual activities</li>
                    <li><strong>Employee Engagement:</strong> Involve all personnel in identifying and implementing improvements</li>
                    <li><strong>Systematic Methodology:</strong> Use structured approaches like PDCA, Six Sigma, or Lean</li>
                </ul>

                <div class="interactive-element">
                    <h4>🔄 PDCA Cycle Implementation</h4>
                    <div style="background: #e8f5e8; border-left: 6px solid #2d5016; padding: 1.5rem; margin: 1rem 0;">
                        <h5 style="color: #2d5016; margin: 0 0 1rem;">Plan-Do-Check-Act Methodology</h5>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
                            <div style="text-align: center; padding: 1rem; background: white; border-radius: 8px; border: 2px solid #2d5016;">
                                <h6 style="color: #2d5016; margin: 0 0 0.5rem;">📋 PLAN</h6>
                                <ul style="font-size: 0.9rem; margin: 0; padding-left: 1rem; text-align: left;">
                                    <li>Identify opportunity</li>
                                    <li>Analyze root causes</li>
                                    <li>Develop solutions</li>
                                    <li>Set objectives</li>
                                </ul>
                            </div>
                            <div style="text-align: center; padding: 1rem; background: white; border-radius: 8px; border: 2px solid #4a7c59;">
                                <h6 style="color: #4a7c59; margin: 0 0 0.5rem;">⚡ DO</h6>
                                <ul style="font-size: 0.9rem; margin: 0; padding-left: 1rem; text-align: left;">
                                    <li>Implement solutions</li>
                                    <li>Collect data</li>
                                    <li>Document activities</li>
                                    <li>Monitor progress</li>
                                </ul>
                            </div>
                            <div style="text-align: center; padding: 1rem; background: white; border-radius: 8px; border: 2px solid #d4af37;">
                                <h6 style="color: #d4af37; margin: 0 0 0.5rem;">🔍 CHECK</h6>
                                <ul style="font-size: 0.9rem; margin: 0; padding-left: 1rem; text-align: left;">
                                    <li>Analyze results</li>
                                    <li>Compare to objectives</li>
                                    <li>Identify gaps</li>
                                    <li>Evaluate effectiveness</li>
                                </ul>
                            </div>
                            <div style="text-align: center; padding: 1rem; background: white; border-radius: 8px; border: 2px solid #17a2b8;">
                                <h6 style="color: #17a2b8; margin: 0 0 0.5rem;">✅ ACT</h6>
                                <ul style="font-size: 0.9rem; margin: 0; padding-left: 1rem; text-align: left;">
                                    <li>Standardize improvements</li>
                                    <li>Update procedures</li>
                                    <li>Train personnel</li>
                                    <li>Plan next cycle</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <h2>Performance Measurement and Monitoring</h2>
                <p>Effective quality management requires comprehensive measurement systems that provide insight into process performance and improvement opportunities.</p>

                <h3>Cannabis Manufacturing Quality Metrics</h3>
                <ul>
                    <li><strong>Product Quality:</strong> Defect rates, specification compliance, customer complaints</li>
                    <li><strong>Process Performance:</strong> Yield rates, cycle times, process capability indices</li>
                    <li><strong>Compliance Metrics:</strong> Audit findings, regulatory citations, training completion</li>
                    <li><strong>Efficiency Measures:</strong> Resource utilization, waste reduction, cost per unit</li>
                    <li><strong>Safety Indicators:</strong> Incident rates, near misses, safety training completion</li>
                </ul>

                <div class="interactive-element">
                    <h4>📊 Quality Dashboard Design</h4>
                    <div style="background: #d1ecf1; border-left: 6px solid #17a2b8; padding: 1.5rem; margin: 1rem 0;">
                        <h5 style="color: #0c5460; margin: 0 0 1rem;">Essential Dashboard Elements</h5>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                            <div>
                                <h6 style="color: #0c5460; margin: 0 0 0.5rem;">Leading Indicators</h6>
                                <ul style="font-size: 0.9rem; margin: 0; padding-left: 1rem;">
                                    <li>Training completion rates</li>
                                    <li>Preventive maintenance compliance</li>
                                    <li>Supplier performance scores</li>
                                    <li>Internal audit findings</li>
                                </ul>
                            </div>
                            <div>
                                <h6 style="color: #0c5460; margin: 0 0 0.5rem;">Lagging Indicators</h6>
                                <ul style="font-size: 0.9rem; margin: 0; padding-left: 1rem;">
                                    <li>Customer complaints</li>
                                    <li>Regulatory findings</li>
                                    <li>Product recalls</li>
                                    <li>Cost of quality</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <h2>Root Cause Analysis and Problem Solving</h2>
                <p>Effective problem solving requires systematic approaches that identify and address root causes rather than just symptoms.</p>

                <h3>Problem Solving Tools</h3>
                <ul>
                    <li><strong>5 Why Analysis:</strong> Iterative questioning to identify underlying causes</li>
                    <li><strong>Fishbone Diagram:</strong> Visual tool for categorizing potential causes</li>
                    <li><strong>Pareto Analysis:</strong> Prioritizing problems based on frequency or impact</li>
                    <li><strong>Failure Mode Analysis:</strong> Systematic evaluation of potential failure points</li>
                    <li><strong>Statistical Analysis:</strong> Data-driven investigation of process variations</li>
                </ul>

                <div class="interactive-element">
                    <h4>🐟 Fishbone Diagram Categories</h4>
                    <div style="background: #fff3cd; border-left: 6px solid #d4af37; padding: 1.5rem; margin: 1rem 0;">
                        <h5 style="color: #856404; margin: 0 0 1rem;">Common Cause Categories for Cannabis Manufacturing</h5>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
                            <div>
                                <h6 style="color: #856404; margin: 0 0 0.5rem;">People</h6>
                                <ul style="font-size: 0.9rem; margin: 0; padding-left: 1rem;">
                                    <li>Training adequacy</li>
                                    <li>Competency levels</li>
                                    <li>Communication issues</li>
                                    <li>Motivation factors</li>
                                </ul>
                            </div>
                            <div>
                                <h6 style="color: #856404; margin: 0 0 0.5rem;">Process</h6>
                                <ul style="font-size: 0.9rem; margin: 0; padding-left: 1rem;">
                                    <li>Procedure adequacy</li>
                                    <li>Process controls</li>
                                    <li>Workflow design</li>
                                    <li>Process validation</li>
                                </ul>
                            </div>
                            <div>
                                <h6 style="color: #856404; margin: 0 0 0.5rem;">Equipment</h6>
                                <ul style="font-size: 0.9rem; margin: 0; padding-left: 1rem;">
                                    <li>Calibration status</li>
                                    <li>Maintenance history</li>
                                    <li>Equipment capability</li>
                                    <li>Operating conditions</li>
                                </ul>
                            </div>
                            <div>
                                <h6 style="color: #856404; margin: 0 0 0.5rem;">Materials</h6>
                                <ul style="font-size: 0.9rem; margin: 0; padding-left: 1rem;">
                                    <li>Supplier quality</li>
                                    <li>Material specifications</li>
                                    <li>Storage conditions</li>
                                    <li>Handling procedures</li>
                                </ul>
                            </div>
                            <div>
                                <h6 style="color: #856404; margin: 0 0 0.5rem;">Environment</h6>
                                <ul style="font-size: 0.9rem; margin: 0; padding-left: 1rem;">
                                    <li>Temperature control</li>
                                    <li>Humidity levels</li>
                                    <li>Cleanliness standards</li>
                                    <li>Air quality</li>
                                </ul>
                            </div>
                            <div>
                                <h6 style="color: #856404; margin: 0 0 0.5rem;">Measurement</h6>
                                <ul style="font-size: 0.9rem; margin: 0; padding-left: 1rem;">
                                    <li>Test method validity</li>
                                    <li>Instrument accuracy</li>
                                    <li>Sampling procedures</li>
                                    <li>Data interpretation</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <h2>Management Review and Leadership</h2>
                <p>Management review processes ensure that quality management systems remain effective, relevant, and aligned with business objectives.</p>

                <h3>Management Review Components</h3>
                <ul>
                    <li><strong>System Performance:</strong> Review of quality metrics and trends</li>
                    <li><strong>Compliance Status:</strong> Assessment of regulatory compliance and audit results</li>
                    <li><strong>Improvement Opportunities:</strong> Identification of areas for enhancement</li>
                    <li><strong>Resource Allocation:</strong> Evaluation of resource needs and priorities</li>
                    <li><strong>Strategic Alignment:</strong> Ensuring quality objectives support business goals</li>
                </ul>

                <div class="interactive-element">
                    <h4>👥 Management Review Process</h4>
                    <div style="background: #f8d7da; border-left: 6px solid #dc3545; padding: 1.5rem; margin: 1rem 0;">
                        <h5 style="color: #721c24; margin: 0 0 1rem;">Review Meeting Structure</h5>
                        <div style="display: grid; grid-template-columns: 1fr; gap: 1rem;">
                            <div style="padding: 1rem; background: white; border-radius: 4px;">
                                <h6 style="color: #721c24; margin: 0 0 0.5rem;">Pre-Meeting Preparation</h6>
                                <p style="font-size: 0.9rem; margin: 0;">Quality metrics compilation, trend analysis, issue summary, improvement project status, and resource requirement assessment.</p>
                            </div>
                            <div style="padding: 1rem; background: white; border-radius: 4px;">
                                <h6 style="color: #721c24; margin: 0 0 0.5rem;">Meeting Agenda</h6>
                                <p style="font-size: 0.9rem; margin: 0;">Performance review, compliance status, customer feedback, improvement opportunities, resource needs, and strategic alignment discussion.</p>
                            </div>
                            <div style="padding: 1rem; background: white; border-radius: 4px;">
                                <h6 style="color: #721c24; margin: 0 0 0.5rem;">Post-Meeting Actions</h6>
                                <p style="font-size: 0.9rem; margin: 0;">Action item assignment, resource allocation decisions, policy updates, procedure revisions, and communication to organization.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <h2>Building a Quality Culture</h2>
                <p>Sustainable quality management requires a culture where all employees are engaged in quality improvement and understand their role in achieving organizational objectives.</p>

                <h3>Culture Development Strategies</h3>
                <ul>
                    <li><strong>Leadership Modeling:</strong> Management demonstrates commitment through actions</li>
                    <li><strong>Employee Empowerment:</strong> Personnel are encouraged to identify and solve problems</li>
                    <li><strong>Recognition Programs:</strong> Quality achievements are acknowledged and rewarded</li>
                    <li><strong>Communication Systems:</strong> Open channels for quality-related discussions</li>
                    <li><strong>Training and Development:</strong> Ongoing skill building and knowledge enhancement</li>
                </ul>

                <div class="interactive-element">
                    <h4>🌟 Quality Culture Indicators</h4>
                    <div style="display: grid; grid-template-columns: 1fr; gap: 1rem; margin: 1rem 0;">
                        <div style="padding: 1rem; border-left: 4px solid #28a745; background: #d4edda;">
                            <h6 style="color: #155724; margin: 0 0 0.5rem;">Strong Quality Culture Signs</h6>
                            <p style="font-size: 0.9rem; color: #155724; margin: 0;">Proactive problem identification, employee-driven improvements, quality-first decision making, and pride in workmanship.</p>
                        </div>
                        <div style="padding: 1rem; border-left: 4px solid #dc3545; background: #f8d7da;">
                            <h6 style="color: #721c24; margin: 0 0 0.5rem;">Weak Quality Culture Signs</h6>
                            <p style="font-size: 0.9rem; color: #721c24; margin: 0;">Reactive problem solving, quality seen as QA responsibility only, shortcuts taken under pressure, and blame-focused problem discussions.</p>
                        </div>
                    </div>
                </div>

                <h2>Technology and Quality Systems</h2>
                <p>Modern quality management systems leverage technology to improve efficiency, accuracy, and accessibility of quality information.</p>

                <h3>Quality Technology Applications</h3>
                <ul>
                    <li><strong>Electronic Documentation:</strong> Digital SOPs, batch records, and quality manuals</li>
                    <li><strong>Quality Management Software:</strong> Integrated systems for CAPA, change control, and training</li>
                    <li><strong>Data Analytics:</strong> Statistical analysis and trend identification tools</li>
                    <li><strong>Mobile Applications:</strong> Real-time data collection and reporting capabilities</li>
                    <li><strong>Laboratory Information Systems:</strong> Integration of testing data with quality systems</li>
                </ul>

                <h2>Sustainable Improvement</h2>
                <p>The ultimate goal of quality management systems is to create sustainable improvement processes that continue to enhance operations over time.</p>

                <div class="interactive-element">
                    <h4>🎯 Continuous Improvement Success Factors</h4>
                    <div style="background: #e8f5e8; border-left: 6px solid #2d5016; padding: 1.5rem; margin: 1rem 0;">
                        <h5 style="color: #2d5016; margin: 0 0 1rem;">Key Elements for Sustained Success</h5>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                            <div>
                                <h6 style="color: #2d5016; margin: 0 0 0.5rem;">Organizational Factors</h6>
                                <ul style="font-size: 0.9rem; margin: 0; padding-left: 1rem;">
                                    <li>Clear vision and strategy</li>
                                    <li>Adequate resource allocation</li>
                                    <li>Strong leadership support</li>
                                    <li>Effective communication</li>
                                </ul>
                            </div>
                            <div>
                                <h6 style="color: #2d5016; margin: 0 0 0.5rem;">Process Factors</h6>
                                <ul style="font-size: 0.9rem; margin: 0; padding-left: 1rem;">
                                    <li>Systematic methodology</li>
                                    <li>Data-driven decisions</li>
                                    <li>Regular review cycles</li>
                                    <li>Standardization practices</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <h2>Course Conclusion</h2>
                <p>Congratulations on completing the Kind Oasis Manufacturing Quality Assurance training course! You have gained comprehensive knowledge of quality systems, regulatory compliance, and continuous improvement practices essential for cannabis manufacturing excellence.</p>

                <div class="interactive-element">
                    <h4>🎓 Your Quality Journey</h4>
                    <div style="background: #d4af37; color: #2d5016; padding: 2rem; border-radius: 8px; text-align: center; margin: 1rem 0;">
                        <h5 style="margin: 0 0 1rem;">Key Takeaways</h5>
                        <ul style="list-style: none; padding: 0; margin: 0;">
                            <li style="margin: 0.5rem 0;">✓ Quality is everyone's responsibility</li>
                            <li style="margin: 0.5rem 0;">✓ Compliance requires systematic approaches</li>
                            <li style="margin: 0.5rem 0;">✓ Continuous improvement drives excellence</li>
                            <li style="margin: 0.5rem 0;">✓ Documentation supports all quality activities</li>
                            <li style="margin: 0.5rem 0;">✓ Culture determines long-term success</li>
                        </ul>
                    </div>
                </div>

                <p>Apply these principles in your daily work to contribute to Kind Oasis's mission of producing premium, compliant cannabis products. Remember that quality assurance is not just about meeting standards—it's about exceeding them to deliver exceptional products that customers trust and regulators approve.</p>

                <p>Thank you for your commitment to quality excellence. Your dedication to these principles helps ensure that Kind Oasis remains a leader in cannabis manufacturing quality and compliance.</p>
            `
        }
    ]
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = courseData;
}