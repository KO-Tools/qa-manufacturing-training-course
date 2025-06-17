// Kind Oasis Manufacturing QA Course Application
class CourseApp {
    constructor() {
        this.currentModule = 1;
        this.currentScreen = 'welcome';
        this.moduleProgress = {};
        this.quizResults = {};
        this.currentQuestion = 0;
        this.currentQuizAnswers = {};
        this.totalModules = 8;
        this.certificateGenerated = false;

        // Initialize progress tracking
        this.initializeProgress();
        
        // Bind event listeners
        this.bindEvents();
        
        // Initialize the application
        this.init();
    }

    init() {
        // Hide loading screen after a short delay
        setTimeout(() => {
            document.getElementById('loading-screen').classList.add('hidden');
        }, 2000);

        // Generate module navigation
        this.generateModuleNavigation();
        
        // Load saved progress
        this.loadProgress();
        
        // Update progress display
        this.updateProgressDisplay();
    }

    initializeProgress() {
        // Initialize module progress
        for (let i = 1; i <= this.totalModules; i++) {
            this.moduleProgress[i] = {
                completed: false,
                quizPassed: false,
                score: 0
            };
        }
    }

    bindEvents() {
        // Welcome screen events
        document.getElementById('commitment-check')?.addEventListener('change', (e) => {
            document.getElementById('start-course').disabled = !e.target.checked;
        });

        document.getElementById('start-course')?.addEventListener('click', () => {
            this.startCourse();
        });

        // Navigation events
        document.getElementById('prev-module')?.addEventListener('click', () => {
            this.previousModule();
        });

        document.getElementById('next-module')?.addEventListener('click', () => {
            this.nextModule();
        });

        // Quiz events
        document.getElementById('take-quiz')?.addEventListener('click', () => {
            this.startQuiz();
        });

        document.getElementById('quiz-prev')?.addEventListener('click', () => {
            this.previousQuestion();
        });

        document.getElementById('quiz-next')?.addEventListener('click', () => {
            this.nextQuestion();
        });

        document.getElementById('quiz-submit')?.addEventListener('click', () => {
            this.submitQuiz();
        });

        // Quiz results events
        document.getElementById('retake-quiz')?.addEventListener('click', () => {
            this.retakeQuiz();
        });

        document.getElementById('continue-course')?.addEventListener('click', () => {
            this.continueFromQuiz();
        });

        // Certificate events
        document.getElementById('download-certificate')?.addEventListener('click', () => {
            this.downloadCertificate();
        });

        document.getElementById('print-certificate')?.addEventListener('click', () => {
            this.printCertificate();
        });

        document.getElementById('restart-course')?.addEventListener('click', () => {
            this.restartCourse();
        });

        // Progress reset
        document.getElementById('reset-progress')?.addEventListener('click', () => {
            this.resetProgress();
        });

        // Mobile menu toggle
        document.getElementById('mobile-menu-toggle')?.addEventListener('click', () => {
            this.toggleMobileMenu();
        });

        // User name input for certificate
        document.getElementById('user-name')?.addEventListener('input', (e) => {
            this.saveUserName(e.target.value);
        });
    }

    generateModuleNavigation() {
        const moduleList = document.getElementById('module-list');
        if (!moduleList) return;

        moduleList.innerHTML = '';

        courseData.modules.forEach((module, index) => {
            const moduleItem = document.createElement('li');
            moduleItem.className = 'module-item';
            
            const moduleLink = document.createElement('a');
            moduleLink.href = '#';
            moduleLink.className = 'module-link';
            moduleLink.dataset.moduleId = module.id;
            
            // Add status classes
            if (this.moduleProgress[module.id]?.completed) {
                moduleLink.classList.add('completed');
            }
            if (this.currentModule === module.id) {
                moduleLink.classList.add('active');
            }

            moduleLink.innerHTML = `
                <div class="module-status">
                    ${this.moduleProgress[module.id]?.completed ? '✓' : module.id}
                </div>
                <div class="module-text">
                    <div class="module-number">Module ${module.id}</div>
                    <div class="module-title">${module.title}</div>
                </div>
            `;

            moduleLink.addEventListener('click', (e) => {
                e.preventDefault();
                this.goToModule(module.id);
            });

            moduleItem.appendChild(moduleLink);
            moduleList.appendChild(moduleItem);
        });
    }

    startCourse() {
        this.currentScreen = 'module';
        this.currentModule = 1;
        this.showScreen('module-screen');
        this.loadModule(1);
        this.updateProgressDisplay();
    }

    showScreen(screenId) {
        // Hide all screens
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });

        // Show target screen
        document.getElementById(screenId)?.classList.add('active');
        this.currentScreen = screenId.replace('-screen', '');
    }

    loadModule(moduleId) {
        const module = courseData.modules.find(m => m.id === moduleId);
        if (!module) return;

        this.currentModule = moduleId;

        // Update module header
        document.getElementById('current-module-number').textContent = `Module ${module.id}`;
        document.getElementById('current-module-title').textContent = module.title;

        // Update module content
        document.getElementById('module-content').innerHTML = module.content;

        // Update navigation buttons
        document.getElementById('prev-module').disabled = moduleId === 1;
        document.getElementById('next-module').disabled = moduleId === this.totalModules;

        // Update sidebar
        this.updateModuleNavigation();

        // Mark module as visited
        if (!this.moduleProgress[moduleId]) {
            this.moduleProgress[moduleId] = { completed: false, quizPassed: false, score: 0 };
        }

        this.saveProgress();
    }

    updateModuleNavigation() {
        document.querySelectorAll('.module-link').forEach(link => {
            link.classList.remove('active');
            const moduleId = parseInt(link.dataset.moduleId);
            if (moduleId === this.currentModule) {
                link.classList.add('active');
            }
        });
    }

    goToModule(moduleId) {
        if (moduleId < 1 || moduleId > this.totalModules) return;
        
        this.showScreen('module-screen');
        this.loadModule(moduleId);
    }

    previousModule() {
        if (this.currentModule > 1) {
            this.goToModule(this.currentModule - 1);
        }
    }

    nextModule() {
        if (this.currentModule < this.totalModules) {
            this.goToModule(this.currentModule + 1);
        } else if (this.currentModule === this.totalModules && this.allModulesCompleted()) {
            this.showCertificate();
        }
    }

    startQuiz() {
        const quiz = quizData[this.currentModule];
        if (!quiz) return;

        this.currentQuestion = 0;
        this.currentQuizAnswers = {};
        
        this.showScreen('quiz-screen');
        document.getElementById('quiz-title').textContent = quiz.title;
        
        this.loadQuestion();
        this.updateQuizProgress();
    }

    loadQuestion() {
        const quiz = quizData[this.currentModule];
        if (!quiz) return;

        const question = quiz.questions[this.currentQuestion];
        if (!question) return;

        const quizContent = document.getElementById('quiz-content');
        
        quizContent.innerHTML = `
            <div class="question active">
                <h3>${question.question}</h3>
                <ul class="answer-options">
                    ${question.options.map((option, index) => `
                        <li class="answer-option">
                            <label>
                                <input type="radio" name="answer" value="${index}" 
                                    ${this.currentQuizAnswers[this.currentQuestion] === index ? 'checked' : ''}>
                                <span>${option}</span>
                            </label>
                        </li>
                    `).join('')}
                </ul>
                <div class="answer-feedback" id="answer-feedback"></div>
            </div>
        `;

        // Add event listeners for answer selection
        quizContent.querySelectorAll('input[name="answer"]').forEach(input => {
            input.addEventListener('change', (e) => {
                this.currentQuizAnswers[this.currentQuestion] = parseInt(e.target.value);
            });
        });

        this.updateQuizNavigation();
    }

    updateQuizProgress() {
        const quiz = quizData[this.currentModule];
        if (!quiz) return;

        const progressText = `Question ${this.currentQuestion + 1} of ${quiz.questions.length}`;
        document.getElementById('quiz-progress-text').textContent = progressText;

        const progressPercent = ((this.currentQuestion + 1) / quiz.questions.length) * 100;
        document.getElementById('quiz-progress-fill').style.width = `${progressPercent}%`;
    }

    updateQuizNavigation() {
        const quiz = quizData[this.currentModule];
        if (!quiz) return;

        const prevBtn = document.getElementById('quiz-prev');
        const nextBtn = document.getElementById('quiz-next');
        const submitBtn = document.getElementById('quiz-submit');

        prevBtn.disabled = this.currentQuestion === 0;
        
        if (this.currentQuestion === quiz.questions.length - 1) {
            nextBtn.style.display = 'none';
            submitBtn.style.display = 'inline-flex';
        } else {
            nextBtn.style.display = 'inline-flex';
            submitBtn.style.display = 'none';
        }
    }

    previousQuestion() {
        if (this.currentQuestion > 0) {
            this.currentQuestion--;
            this.loadQuestion();
            this.updateQuizProgress();
        }
    }

    nextQuestion() {
        const quiz = quizData[this.currentModule];
        if (!quiz) return;

        if (this.currentQuestion < quiz.questions.length - 1) {
            this.currentQuestion++;
            this.loadQuestion();
            this.updateQuizProgress();
        }
    }

    submitQuiz() {
        const quiz = quizData[this.currentModule];
        if (!quiz) return;

        // Calculate score
        let correct = 0;
        let total = quiz.questions.length;

        quiz.questions.forEach((question, index) => {
            if (this.currentQuizAnswers[index] === question.correct) {
                correct++;
            }
        });

        const score = Math.round((correct / total) * 100);
        const passed = score >= 70; // 70% passing score

        // Store results
        this.quizResults[this.currentModule] = {
            score: score,
            correct: correct,
            total: total,
            passed: passed,
            answers: { ...this.currentQuizAnswers }
        };

        // Update module progress
        this.moduleProgress[this.currentModule].quizPassed = passed;
        this.moduleProgress[this.currentModule].score = score;
        if (passed) {
            this.moduleProgress[this.currentModule].completed = true;
        }

        this.showQuizResults();
        this.updateProgressDisplay();
        this.saveProgress();
    }

    showQuizResults() {
        const result = this.quizResults[this.currentModule];
        if (!result) return;

        this.showScreen('quiz-results-screen');

        // Update score display
        document.getElementById('score-percentage').textContent = `${result.score}%`;
        
        const scoreText = document.getElementById('score-text');
        if (result.passed) {
            scoreText.textContent = 'Congratulations! You passed the quiz.';
            scoreText.style.color = '#28a745';
        } else {
            scoreText.textContent = 'You need 70% to pass. Please review and try again.';
            scoreText.style.color = '#dc3545';
        }

        // Update results breakdown
        this.showResultsBreakdown();

        // Update action buttons
        document.getElementById('continue-course').style.display = result.passed ? 'inline-flex' : 'none';
    }

    showResultsBreakdown() {
        const quiz = quizData[this.currentModule];
        const result = this.quizResults[this.currentModule];
        if (!quiz || !result) return;

        const breakdown = document.getElementById('results-breakdown');
        
        let html = '<h3>Detailed Results</h3>';
        
        quiz.questions.forEach((question, index) => {
            const userAnswer = result.answers[index];
            const isCorrect = userAnswer === question.correct;
            
            html += `
                <div class="result-item" style="margin-bottom: 1rem; padding: 1rem; border-radius: 8px; 
                     background: ${isCorrect ? '#d4edda' : '#f8d7da'}; border: 1px solid ${isCorrect ? '#c3e6cb' : '#f5c6cb'};">
                    <h4 style="margin: 0 0 0.5rem; color: ${isCorrect ? '#155724' : '#721c24'};">
                        Question ${index + 1}: ${isCorrect ? '✓ Correct' : '✗ Incorrect'}
                    </h4>
                    <p style="margin: 0 0 0.5rem; font-weight: 500;">${question.question}</p>
                    <p style="margin: 0; font-size: 0.9rem;">
                        <strong>Your answer:</strong> ${question.options[userAnswer] || 'Not answered'}<br>
                        <strong>Correct answer:</strong> ${question.options[question.correct]}<br>
                        <strong>Explanation:</strong> ${question.explanation}
                    </p>
                </div>
            `;
        });

        breakdown.innerHTML = html;
    }

    retakeQuiz() {
        this.startQuiz();
    }

    continueFromQuiz() {
        this.showScreen('module-screen');
        this.updateModuleNavigation();
        
        // If this is the last module and all are completed, show certificate
        if (this.currentModule === this.totalModules && this.allModulesCompleted()) {
            setTimeout(() => this.showCertificate(), 500);
        }
    }

    allModulesCompleted() {
        for (let i = 1; i <= this.totalModules; i++) {
            if (!this.moduleProgress[i]?.completed) {
                return false;
            }
        }
        return true;
    }

    showCertificate() {
        this.showScreen('certificate-screen');
        
        // Set completion date
        const now = new Date();
        document.getElementById('completion-date').textContent = now.toLocaleDateString();
        
        // Calculate final score
        const totalScore = this.calculateFinalScore();
        document.getElementById('final-score').textContent = `${totalScore}%`;
        
        // Load saved name if available
        const savedName = localStorage.getItem('ko-course-user-name');
        if (savedName) {
            document.getElementById('user-name').value = savedName;
        }
        
        this.certificateGenerated = true;
    }

    calculateFinalScore() {
        let totalScore = 0;
        let moduleCount = 0;
        
        for (let i = 1; i <= this.totalModules; i++) {
            if (this.moduleProgress[i]?.score) {
                totalScore += this.moduleProgress[i].score;
                moduleCount++;
            }
        }
        
        return moduleCount > 0 ? Math.round(totalScore / moduleCount) : 0;
    }

    downloadCertificate() {
        // Simple implementation - in a real app, this would generate a PDF
        window.print();
    }

    printCertificate() {
        window.print();
    }

    saveUserName(name) {
        localStorage.setItem('ko-course-user-name', name);
    }

    restartCourse() {
        if (confirm('Are you sure you want to restart the entire course? This will reset all progress.')) {
            this.resetProgress();
            this.currentModule = 1;
            this.showScreen('welcome-screen');
        }
    }

    updateProgressDisplay() {
        // Calculate overall progress
        let completedModules = 0;
        for (let i = 1; i <= this.totalModules; i++) {
            if (this.moduleProgress[i]?.completed) {
                completedModules++;
            }
        }
        
        const progressPercent = (completedModules / this.totalModules) * 100;
        
        // Update progress bar
        document.getElementById('progress-fill').style.width = `${progressPercent}%`;
        document.getElementById('progress-text').textContent = `${Math.round(progressPercent)}% Complete`;
        
        // Update module navigation
        this.generateModuleNavigation();
    }

    saveProgress() {
        const progressData = {
            currentModule: this.currentModule,
            moduleProgress: this.moduleProgress,
            quizResults: this.quizResults,
            certificateGenerated: this.certificateGenerated
        };
        
        localStorage.setItem('ko-course-progress', JSON.stringify(progressData));
    }

    loadProgress() {
        const saved = localStorage.getItem('ko-course-progress');
        if (saved) {
            try {
                const progressData = JSON.parse(saved);
                this.currentModule = progressData.currentModule || 1;
                this.moduleProgress = progressData.moduleProgress || {};
                this.quizResults = progressData.quizResults || {};
                this.certificateGenerated = progressData.certificateGenerated || false;
                
                // Initialize any missing module progress
                for (let i = 1; i <= this.totalModules; i++) {
                    if (!this.moduleProgress[i]) {
                        this.moduleProgress[i] = { completed: false, quizPassed: false, score: 0 };
                    }
                }
            } catch (e) {
                console.error('Error loading progress:', e);
                this.initializeProgress();
            }
        }
    }

    resetProgress() {
        if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
            localStorage.removeItem('ko-course-progress');
            this.initializeProgress();
            this.currentModule = 1;
            this.quizResults = {};
            this.certificateGenerated = false;
            this.updateProgressDisplay();
            this.showScreen('welcome-screen');
        }
    }

    toggleMobileMenu() {
        const sidebar = document.getElementById('sidebar');
        sidebar.classList.toggle('open');
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.courseApp = new CourseApp();
});