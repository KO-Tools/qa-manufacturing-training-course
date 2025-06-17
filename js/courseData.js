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
        }
        // Continue with remaining modules...
    ]
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = courseData;
}