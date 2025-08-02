// Main JavaScript file for the Flask application
class FlaskApp {
    constructor() {
        this.initializeApp();
        this.bindEvents();
        this.updateServerStatus();
    }

    initializeApp() {
        console.log('Flask Full-Stack Application initialized');
        this.showWelcomeMessage();
        this.updateLastCheck();
    }

    bindEvents() {
        // Demo button event
        const demoBtn = document.getElementById('demo-btn');
        if (demoBtn) {
            demoBtn.addEventListener('click', () => this.handleDemoClick());
        }

        // Info button event
        const infoBtn = document.getElementById('info-btn');
        if (infoBtn) {
            infoBtn.addEventListener('click', () => this.showInfo());
        }

        // Process button event
        const processBtn = document.getElementById('process-btn');
        if (processBtn) {
            processBtn.addEventListener('click', () => this.processUserInput());
        }

        // Clear button event
        const clearBtn = document.getElementById('clear-btn');
        if (clearBtn) {
            clearBtn.addEventListener('click', () => this.clearOutput());
        }

        // Enter key for input
        const userInput = document.getElementById('user-input');
        if (userInput) {
            userInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.processUserInput();
                }
            });
        }

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    showWelcomeMessage() {
        // Create a subtle notification
        const notification = this.createNotification(
            'Welcome! Flask backend is serving this page successfully.',
            'success'
        );
        this.showNotification(notification);
    }

    handleDemoClick() {
        const demoSection = document.querySelector('.card');
        if (demoSection) {
            demoSection.scrollIntoView({ behavior: 'smooth' });
            
            // Highlight the demo section briefly
            demoSection.style.transition = 'box-shadow 0.3s ease';
            demoSection.style.boxShadow = '0 0 20px rgba(13, 110, 253, 0.5)';
            
            setTimeout(() => {
                demoSection.style.boxShadow = '';
            }, 2000);
        }
    }

    showInfo() {
        const info = {
            backend: 'Flask (Python)',
            frontend: 'HTML5 + Bootstrap 5',
            javascript: 'Vanilla JavaScript (ES6+)',
            styling: 'Replit Dark Theme',
            icons: 'Font Awesome',
            responsive: 'Mobile-first design'
        };

        let infoText = 'Application Information:\n\n';
        for (const [key, value] of Object.entries(info)) {
            infoText += `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}\n`;
        }

        alert(infoText);
    }

    processUserInput() {
        const input = document.getElementById('user-input');
        const output = document.getElementById('demo-output');
        
        if (!input || !output) return;

        const userText = input.value.trim();
        
        if (!userText) {
            this.displayOutput('Please enter some text first!', 'warning');
            return;
        }

        // Simulate processing
        this.displayOutput('Processing...', 'info');
        
        setTimeout(() => {
            const processedData = this.processText(userText);
            this.displayOutput(processedData, 'success');
        }, 1000);
    }

    processText(text) {
        const analysis = {
            original: text,
            length: text.length,
            words: text.split(/\s+/).filter(word => word.length > 0).length,
            uppercase: text.toUpperCase(),
            reversed: text.split('').reverse().join(''),
            timestamp: new Date().toLocaleString()
        };

        return `
            <div class="processed-output">
                <h6 class="text-primary mb-3"><i class="fas fa-check-circle me-2"></i>Processing Complete</h6>
                <div class="mb-2"><strong>Original:</strong> "${analysis.original}"</div>
                <div class="mb-2"><strong>Length:</strong> ${analysis.length} characters</div>
                <div class="mb-2"><strong>Words:</strong> ${analysis.words}</div>
                <div class="mb-2"><strong>Uppercase:</strong> "${analysis.uppercase}"</div>
                <div class="mb-2"><strong>Reversed:</strong> "${analysis.reversed}"</div>
                <div class="text-muted"><small>Processed at: ${analysis.timestamp}</small></div>
            </div>
        `;
    }

    displayOutput(content, type = 'info') {
        const output = document.getElementById('demo-output');
        if (!output) return;

        const colorClass = {
            'success': 'text-success',
            'warning': 'text-warning',
            'info': 'text-info',
            'error': 'text-danger'
        }[type] || 'text-info';

        if (typeof content === 'string' && !content.includes('<div')) {
            output.innerHTML = `<div class="${colorClass}">${content}</div>`;
        } else {
            output.innerHTML = content;
        }
    }

    clearOutput() {
        const output = document.getElementById('demo-output');
        const input = document.getElementById('user-input');
        
        if (output) {
            output.innerHTML = '<small class="text-muted">Output cleared. Enter some text to try again.</small>';
        }
        
        if (input) {
            input.value = '';
            input.focus();
        }
    }

    updateServerStatus() {
        const statusElement = document.getElementById('server-status');
        if (statusElement) {
            // Since we're loaded, the server is obviously working
            statusElement.innerHTML = '<i class="fas fa-check-circle me-2"></i>Online and Ready';
            statusElement.className = 'text-success';
        }
    }

    updateLastCheck() {
        const lastCheckElement = document.getElementById('last-check');
        if (lastCheckElement) {
            const now = new Date();
            lastCheckElement.textContent = now.toLocaleTimeString();
            
            // Update every 30 seconds
            setInterval(() => {
                const current = new Date();
                lastCheckElement.textContent = current.toLocaleTimeString();
            }, 30000);
        }
    }

    createNotification(message, type) {
        return {
            message: message,
            type: type,
            timestamp: new Date()
        };
    }

    showNotification(notification) {
        // Simple console notification - could be enhanced with toast notifications
        console.log(`[${notification.type.toUpperCase()}] ${notification.message}`);
        
        // You could implement toast notifications here if needed
        // For now, we'll just use console logging to avoid cluttering the UI
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.flaskApp = new FlaskApp();
});

// Add some utility functions
window.addEventListener('load', () => {
    console.log('Flask Full-Stack Application fully loaded');
    
    // Add loading state management
    document.body.classList.add('loaded');
    
    // Simple performance logging
    if (window.performance && window.performance.timing) {
        const loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
        console.log(`Page loaded in ${loadTime}ms`);
    }
});

// Handle any JavaScript errors gracefully
window.addEventListener('error', (e) => {
    console.error('JavaScript error caught:', e.error);
    
    // Could implement error reporting here
    // For now, just ensure the app doesn't break completely
});
