import os
import logging
from flask import Flask, render_template, send_from_directory

# Configure logging for debugging
logging.basicConfig(level=logging.DEBUG)

# Create the Flask app
app = Flask(__name__)
app.secret_key = os.environ.get("SESSION_SECRET", "dev-secret-key")

@app.route('/')
def index():
    """Serve the main index page"""
    app.logger.info("Serving index page")
    return render_template('index.html')

@app.route('/static/<path:filename>')
def serve_static(filename):
    """Serve static files"""
    app.logger.info(f"Serving static file: {filename}")
    return send_from_directory('static', filename)


@app.errorhandler(404)
def not_found(error):
    """Handle 404 errors"""
    app.logger.warning(f"404 error: {error}")
    return render_template('index.html'), 404

@app.errorhandler(500)
def internal_error(error):
    """Handle 500 errors"""
    app.logger.error(f"500 error: {error}")
    return "Internal Server Error", 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
