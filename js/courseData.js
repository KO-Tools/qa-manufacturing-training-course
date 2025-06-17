// Course Data Structure
const courseData = {
    modules: [
        {
            id: 1,
            title: "Course Overview and Objectives",
            duration: "4 minutes",
            content: `
                <h1>Course Overview and Objectives</h1>
                
                <div class="interactive-element">
                    <h4>🎯 Learning Objectives</h4>
                    <p>Upon completion of this module, you will be able to:</p>
                    <ul>
                        <li><strong>Articulate the business case for quality assurance</strong> in cannabis manufacturing, including cost-benefit analysis and risk mitigation strategies</li>
                        <li><strong>Navigate the course platform effectively</strong>, utilizing all interactive features, progress tracking tools, and assessment capabilities</li>
                        <li><strong>Identify personal learning goals</strong> and align them with organizational quality objectives and regulatory requirements</li>
                        <li><strong>Demonstrate understanding of the course structure</strong> and how each module contributes to comprehensive quality assurance knowledge</li>
                        <li><strong>Commit to applying learned concepts</strong> in daily work activities and continuous improvement initiatives</li>
                    </ul>
                </div>

                <h2>Welcome to Kind Oasis Quality Assurance Training</h2>
                <p>This comprehensive training course is designed to provide you with the knowledge and skills necessary to maintain the highest standards of quality in cannabis manufacturing. Over the next hour, you'll explore 14 comprehensive modules covering every aspect of quality assurance in our industry.</p>

                <h3>Why Quality Assurance Matters</h3>
                <p>Quality assurance extends beyond testing and inspection to encompass every aspect of manufacturing operations, from raw material sourcing to customer delivery. In the cannabis industry, robust quality systems are essential for:</p>
                
                <ul>
                    <li><strong>Regulatory Compliance:</strong> Meeting complex federal, state, and local requirements</li>
                    <li><strong>Consumer Safety:</strong> Protecting customers from contaminated or mislabeled products</li>
                    <li><strong>Business Success:</strong> Preventing costly recalls, regulatory violations, and reputation damage</li>
                    <li><strong>Continuous Improvement:</strong> Driving ongoing enhancement of processes and products</li>
                </ul>

                <div class="interactive-element">
                    <h4>📊 Course Statistics</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin: 1rem 0;">
                        <div style="text-align: center; padding: 1rem; background: #f8f9fa; border-radius: 8px;">
                            <div style="font-size: 2rem; font-weight: bold; color: #2d5016;">14</div>
                            <div>Comprehensive Modules</div>
                        </div>
                        <div style="text-align: center; padding: 1rem; background: #f8f9fa; border-radius: 8px;">
                            <div style="font-size: 2rem; font-weight: bold; color: #2d5016;">25+</div>
                            <div>Interactive Elements</div>
                        </div>
                        <div style="text-align: center; padding: 1rem; background: #f8f9fa; border-radius: 8px;">
                            <div style="font-size: 2rem; font-weight: bold; color: #2d5016;">84+</div>
                            <div>Assessment Questions</div>
                        </div>
                        <div style="text-align: center; padding: 1rem; background: #f8f9fa; border-radius: 8px;">
                            <div style="font-size: 2rem; font-weight: bold; color: #2d5016;">100%</div>
                            <div>Compliance Focus</div>
                        </div>
                    </div>
                </div>

                <h3>Course Structure</h3>
                <p>This course is organized into 14 modules, each building upon previous knowledge while maintaining independence for targeted learning:</p>
                
                <ol>
                    <li><strong>Course Overview and Objectives</strong> - Foundation and commitment</li>
                    <li><strong>Kind Oasis Company Introduction</strong> - Our quality culture</li>
                    <li><strong>Regulatory Landscape Overview</strong> - Federal and state requirements</li>
                    <li><strong>cGMP Compliance Fundamentals</strong> - Core manufacturing practices</li>
                    <li><strong>Cannabis-Specific Regulations</strong> - THC limits and testing</li>
                    <li><strong>Quality Control Testing Protocols</strong> - Laboratory partnerships</li>
                    <li><strong>Contamination Prevention and Control</strong> - Facility and process design</li>
                    <li><strong>Documentation and Record Keeping</strong> - Traceability systems</li>
                    <li><strong>Personnel Training and Competency</strong> - Human factors in quality</li>
                    <li><strong>Equipment Qualification and Maintenance</strong> - Reliable operations</li>
                    <li><strong>Supply Chain and Vendor Management</strong> - Quality partnerships</li>
                    <li><strong>Batch Release and Product Disposition</strong> - Final quality gates</li>
                    <li><strong>Audit Preparation and Regulatory Inspections</strong> - Compliance readiness</li>
                    <li><strong>Continuous Improvement and Quality Management Systems</strong> - Systematic excellence</li>
                </ol>

                <div class="interactive-element">
                    <h4>🎮 Interactive Learning Features</h4>
                    <p>Throughout this course, you'll encounter various interactive elements designed to enhance your learning experience:</p>
                    <ul>
                        <li><strong>Scenario-Based Simulations:</strong> Practice real-world decision making</li>
                        <li><strong>Interactive Calculators:</strong> Hands-on experience with THC calculations</li>
                        <li><strong>Virtual Facility Tours:</strong> Explore compliant manufacturing layouts</li>
                        <li><strong>Case Study Analysis:</strong> Learn from industry examples</li>
                        <li><strong>Document Templates:</strong> Practice creating compliant documentation</li>
                        <li><strong>Assessment Quizzes:</strong> Test your knowledge and track progress</li>
                    </ul>
                </div>

                <h3>Your Learning Journey</h3>
                <p>As you progress through this course, remember that quality assurance is not just a set of procedures—it's a mindset and culture that drives excellence in everything we do. Each module will provide you with practical tools and knowledge that you can immediately apply in your daily work.</p>

                <div class="interactive-element">
                    <h4>📋 Course Navigation Tutorial</h4>
                    <p>Before we begin, let's familiarize you with the course platform:</p>
                    <ul>
                        <li><strong>Progress Tracking:</strong> Watch your progress bar in the header update as you complete modules</li>
                        <li><strong>Module Navigation:</strong> Use the sidebar to jump between modules or click Next/Previous buttons</li>
                        <li><strong>Bookmarking:</strong> Your progress is automatically saved - you can return anytime</li>
                        <li><strong>Mobile Friendly:</strong> Access the course on any device, anywhere</li>
                        <li><strong>Interactive Quizzes:</strong> Complete module quizzes to test your knowledge</li>
                        <li><strong>Certificate Generation:</strong> Earn your completion certificate after finishing all modules</li>
                    </ul>
                </div>

                <h3>Quality Culture at Kind Oasis</h3>
                <p>At Kind Oasis, quality is not just a department or a set of procedures—it's the foundation of everything we do. Our commitment to quality manufacturing ensures that every product meets the highest standards of safety, potency, and consistency.</p>

                <p>This training course will help you understand your role in maintaining our quality culture and provide you with the tools and knowledge necessary to contribute to our ongoing success.</p>

                <div class="interactive-element">
                    <h4>✅ Learning Commitment</h4>
                    <p>Success in this course requires active participation and commitment to applying what you learn. By proceeding with this training, you are committing to:</p>
                    <ul>
                        <li>Complete all 14 modules and associated quizzes</li>
                        <li>Actively engage with interactive elements and exercises</li>
                        <li>Apply learned concepts in your daily work activities</li>
                        <li>Contribute to Kind Oasis's culture of quality excellence</li>
                        <li>Participate in ongoing quality improvement initiatives</li>
                    </ul>
                </div>

                <p>Ready to begin your journey toward quality assurance excellence? Let's start with learning about Kind Oasis and our commitment to quality manufacturing.</p>
            `
        },
        {
            id: 2,
            title: "Kind Oasis Company Introduction",
            duration: "4 minutes",
            content: `
                <h1>Kind Oasis Company Introduction</h1>
                
                <div class="interactive-element">
                    <h4>🎯 Learning Objectives</h4>
                    <p>Upon completion of this module, you will be able to:</p>
                    <ul>
                        <li><strong>Describe Kind Oasis's mission, vision, and values</strong> and explain how they relate to quality manufacturing practices</li>
                        <li><strong>Identify the company's product portfolio</strong> and understand the specific quality requirements for each product category</li>
                        <li><strong>Explain the company's commitment to regulatory compliance</strong> and how it impacts daily operations and decision-making</li>
                        <li><strong>Articulate the importance of small-batch manufacturing</strong> in maintaining quality control and product consistency</li>
                        <li><strong>Connect personal values with organizational quality standards</strong> to enhance motivation and engagement</li>
                    </ul>
                </div>

                <h2>About Kind Oasis</h2>
                <p>Kind Oasis is a Milwaukee-based manufacturer and retailer of premium, lab-tested hemp-derived wellness products. Founded on the principles of quality, transparency, and customer satisfaction, we specialize in creating handcrafted products that meet the highest standards of excellence.</p>

                <h3>Our Mission</h3>
                <p>To provide premium, safe, and effective hemp-derived wellness products that enhance our customers' quality of life while maintaining strict adherence to regulatory requirements and industry best practices.</p>

                <h3>Our Vision</h3>
                <p>To be recognized as the leading manufacturer of premium hemp-derived wellness products in the Midwest, known for our unwavering commitment to quality, transparency, and customer satisfaction.</p>

                <div class="interactive-element">
                    <h4>🏭 Our Manufacturing Philosophy</h4>
                    <p>Kind Oasis operates on a small-batch manufacturing philosophy that prioritizes quality over quantity. This approach provides several key advantages:</p>
                    <ul>
                        <li><strong>Enhanced Quality Control:</strong> Smaller batches enable more thorough testing and inspection</li>
                        <li><strong>Faster Problem Resolution:</strong> Issues can be identified and corrected quickly</li>
                        <li><strong>Personalized Attention:</strong> Each batch receives individual care and attention</li>
                        <li><strong>Reduced Risk:</strong> Smaller batches limit exposure in case of quality issues</li>
                        <li><strong>Flexibility:</strong> Ability to adapt quickly to changing requirements</li>
                    </ul>
                </div>

                <h2>Our Product Portfolio</h2>
                <p>Kind Oasis manufactures a diverse range of hemp-derived wellness products, each requiring specific quality control measures and testing protocols:</p>

                <div class="interactive-element">
                    <h4>📦 Product Categories</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; margin: 1rem 0;">
                        <div style="padding: 1rem; border: 2px solid #d4af37; border-radius: 8px; background: #f9f9f9;">
                            <h5 style="color: #2d5016; margin-bottom: 0.5rem;">🍬 Gummies</h5>
                            <p style="font-size: 0.9rem; margin: 0;">Delta-8, Delta-9, and CBD gummies with precise dosing and consistent quality</p>
                        </div>
                        <div style="padding: 1rem; border: 2px solid #d4af37; border-radius: 8px; background: #f9f9f9;">
                            <h5 style="color: #2d5016; margin-bottom: 0.5rem;">🍫 Chocolates</h5>
                            <p style="font-size: 0.9rem; margin: 0;">Premium chocolate infusions with carefully controlled cannabinoid content</p>
                        </div>
                        <div style="padding: 1rem; border: 2px solid #d4af37; border-radius: 8px; background: #f9f9f9;">
                            <h5 style="color: #2d5016; margin-bottom: 0.5rem;">💧 Tinctures</h5>
                            <p style="font-size: 0.9rem; margin: 0;">High-precision liquid formulations for accurate dosing</p>
                        </div>
                        <div style="padding: 1rem; border: 2px solid #d4af37; border-radius: 8px; background: #f9f9f9;">
                            <h5 style="color: #2d5016; margin-bottom: 0.5rem;">🧴 Topicals</h5>
                            <p style="font-size: 0.9rem; margin: 0;">Creams, balms, and lotions for targeted relief</p>
                        </div>
                        <div style="padding: 1rem; border: 2px solid #d4af37; border-radius: 8px; background: #f9f9f9;">
                            <h5 style="color: #2d5016; margin-bottom: 0.5rem;">🥤 Seltzers</h5>
                            <p style="font-size: 0.9rem; margin: 0;">Refreshing beverages with controlled cannabinoid infusion</p>
                        </div>
                        <div style="padding: 1rem; border: 2px solid #d4af37; border-radius: 8px; background: #f9f9f9;">
                            <h5 style="color: #2d5016; margin-bottom: 0.5rem;">🥃 Shooters</h5>
                            <p style="font-size: 0.9rem; margin: 0;">Concentrated liquid formats for rapid onset</p>
                        </div>
                        <div style="padding: 1rem; border: 2px solid #d4af37; border-radius: 8px; background: #f9f9f9;">
                            <h5 style="color: #2d5016; margin-bottom: 0.5rem;">🍯 Syrups</h5>
                            <p style="font-size: 0.9rem; margin: 0;">Versatile liquid formulations for multiple use applications</p>
                        </div>
                        <div style="padding: 1rem; border: 2px solid #d4af37; border-radius: 8px; background: #f9f9f9;">
                            <h5 style="color: #2d5016; margin-bottom: 0.5rem;">🍄 Functional Mushrooms</h5>
                            <p style="font-size: 0.9rem; margin: 0;">Innovative mushroom-based wellness products</p>
                        </div>
                    </div>
                </div>

                <h3>Product Specializations</h3>
                <ul>
                    <li><strong>Delta-8 THC Products:</strong> Carefully formulated to provide mild psychoactive effects while maintaining legal compliance</li>
                    <li><strong>Delta-9 THC Products:</strong> Precisely dosed to remain ≤0.3% by dry weight, ensuring federal compliance</li>
                    <li><strong>CBD Products:</strong> Non-psychoactive formulations focused on wellness benefits</li>
                    <li><strong>Functional Mushroom Products:</strong> Innovative combinations of cannabinoids and beneficial mushroom compounds</li>
                </ul>

                <h2>Our Commitment to Quality</h2>
                <p>Quality is not just a department at Kind Oasis—it's a company-wide commitment that influences every decision we make. Our quality principles guide everything from raw material selection to final product distribution.</p>

                <div class="interactive-element">
                    <h4>🔍 Quality Values</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin: 1rem 0;">
                        <div style="text-align: center; padding: 1.5rem; background: #2d5016; color: white; border-radius: 8px;">
                            <div style="font-size: 2rem; margin-bottom: 0.5rem;">🌱</div>
                            <h5 style="margin: 0 0 0.5rem;">All-Natural</h5>
                            <p style="font-size: 0.9rem; margin: 0;">Using only natural ingredients and processes</p>
                        </div>
                        <div style="text-align: center; padding: 1.5rem; background: #4a7c59; color: white; border-radius: 8px;">
                            <div style="font-size: 2rem; margin-bottom: 0.5rem;">🥕</div>
                            <h5 style="margin: 0 0 0.5rem;">Vegan</h5>
                            <p style="font-size: 0.9rem; margin: 0;">Plant-based formulations for all dietary preferences</p>
                        </div>
                        <div style="text-align: center; padding: 1.5rem; background: #d4af37; color: #2d5016; border-radius: 8px;">
                            <div style="font-size: 2rem; margin-bottom: 0.5rem;">🧪</div>
                            <h5 style="margin: 0 0 0.5rem;">Lab Tested</h5>
                            <p style="font-size: 0.9rem; margin: 0;">Comprehensive testing for potency and contaminants</p>
                        </div>
                        <div style="text-align: center; padding: 1.5rem; background: #8fbc8f; color: #2d5016; border-radius: 8px;">
                            <div style="font-size: 2rem; margin-bottom: 0.5rem;">🏠</div>
                            <h5 style="margin: 0 0 0.5rem;">Locally Made</h5>
                            <p style="font-size: 0.9rem; margin: 0;">Manufactured in Milwaukee with local oversight</p>
                        </div>
                    </div>
                </div>

                <h3>Regulatory Compliance Commitment</h3>
                <p>Kind Oasis maintains strict adherence to the 2018 Farm Bill, ensuring all products contain ≤0.3% Delta-9 THC. Our compliance strategy includes:</p>

                <ul>
                    <li><strong>Rigorous Testing Protocols:</strong> Every batch tested by ISO-accredited laboratories</li>
                    <li><strong>Documentation Excellence:</strong> Comprehensive record-keeping for full traceability</li>
                    <li><strong>Regulatory Monitoring:</strong> Continuous tracking of evolving federal and state requirements</li>
                    <li><strong>Proactive Compliance:</strong> Exceeding minimum requirements to ensure safety margins</li>
                </ul>

                <h2>Small-Batch Manufacturing Advantage</h2>
                <p>Unlike large-scale manufacturers, Kind Oasis deliberately maintains small-batch production to ensure maximum quality control and attention to detail.</p>

                <div class="interactive-element">
                    <h4>⚖️ Small-Batch vs. Large-Scale Manufacturing</h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin: 1rem 0;">
                        <div>
                            <h5 style="color: #2d5016;">Small-Batch Advantages</h5>
                            <ul style="font-size: 0.9rem;">
                                <li>Enhanced quality control capabilities</li>
                                <li>Faster identification of issues</li>
                                <li>More thorough testing possible</li>
                                <li>Greater attention to detail</li>
                                <li>Reduced risk exposure</li>
                                <li>Flexibility for improvements</li>
                            </ul>
                        </div>
                        <div>
                            <h5 style="color: #6c757d;">Large-Scale Limitations</h5>
                            <ul style="font-size: 0.9rem;">
                                <li>Reduced individual batch oversight</li>
                                <li>Higher risk of widespread issues</li>
                                <li>Less flexibility for changes</li>
                                <li>Potential for quality variations</li>
                                <li>Longer problem resolution times</li>
                                <li>Increased compliance challenges</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <h3>Local Manufacturing Benefits</h3>
                <p>Our Milwaukee-based operations provide several quality advantages:</p>

                <ul>
                    <li><strong>Supply Chain Control:</strong> Direct oversight of raw material sourcing and handling</li>
                    <li><strong>Regulatory Oversight:</strong> Close relationship with local and state regulatory authorities</li>
                    <li><strong>Community Engagement:</strong> Strong ties to the local community and stakeholders</li>
                    <li><strong>Rapid Response:</strong> Ability to quickly address issues or implement improvements</li>
                </ul>

                <h2>Transparency and Trust</h2>
                <p>Kind Oasis builds customer trust through unprecedented transparency in our manufacturing and testing processes.</p>

                <div class="interactive-element">
                    <h4>📊 Transparency Initiatives</h4>
                    <ul>
                        <li><strong>Published Lab Results:</strong> Complete Certificates of Analysis available for every batch</li>
                        <li><strong>QR Code Access:</strong> Instant access to testing data via product QR codes</li>
                        <li><strong>Manufacturing Insights:</strong> Open communication about our processes and procedures</li>
                        <li><strong>Quality Certifications:</strong> Public display of our quality management certifications</li>
                        <li><strong>Customer Education:</strong> Ongoing education about our products and quality standards</li>
                    </ul>
                </div>

                <h3>Your Role in Quality Excellence</h3>
                <p>As a member of the Kind Oasis team, you play a crucial role in maintaining our reputation for quality excellence. Whether you work in production, quality control, packaging, or support functions, your commitment to quality directly impacts our success.</p>

                <p>This training course will provide you with the knowledge and tools necessary to contribute effectively to our quality culture and help maintain Kind Oasis's position as a leader in premium hemp-derived wellness products.</p>

                <div class="interactive-element">
                    <h4>💪 Personal Quality Commitment</h4>
                    <p>Consider how your personal values align with Kind Oasis's quality commitments:</p>
                    <ul>
                        <li>How does quality in your personal life translate to work excellence?</li>
                        <li>What motivates you to maintain high standards?</li>
                        <li>How can you contribute to continuous improvement?</li>
                        <li>What quality practices will you implement in your daily work?</li>
                    </ul>
                </div>

                <p>Now that you understand Kind Oasis's commitment to quality and your role in maintaining our standards, let's explore the complex regulatory landscape that governs our industry.</p>
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
        // Continue with modules 9-14 in subsequent updates...
    ]
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = courseData;
}