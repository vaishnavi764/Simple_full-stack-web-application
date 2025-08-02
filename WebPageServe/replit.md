# Flask Full-Stack Application

## Overview

This is a minimal Flask web application that serves as a foundation for full-stack development. The application provides a basic server setup with static file serving, error handling, and a responsive frontend interface using Bootstrap with a dark theme. It's designed as a starting point that can be extended with additional features like database integration, API endpoints, and user authentication.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Template Engine**: Jinja2 templating with HTML templates stored in the `templates/` directory
- **UI Framework**: Bootstrap 5 with Replit's dark theme for consistent styling
- **Icons**: Font Awesome for iconography
- **JavaScript**: Vanilla JavaScript with a class-based structure in `main.js` for client-side interactions
- **Responsive Design**: Mobile-first approach using Bootstrap's grid system

### Backend Architecture
- **Web Framework**: Flask (Python) serving as the main application server
- **Route Structure**: Simple route handlers for serving the main page and static files
- **Error Handling**: Custom error handlers for 404 and 500 HTTP status codes
- **Logging**: Built-in Python logging configured for debugging
- **Configuration**: Environment-based configuration for session secrets

### Application Structure
- **Entry Points**: Both `app.py` and `main.py` can serve as application entry points
- **Static Files**: Served through Flask's static file handling with custom route
- **Session Management**: Flask sessions configured with secret key from environment variables
- **Development Mode**: Debug mode enabled for development with hot reloading

### Design Patterns
- **Single Page Application**: All content served through the main index template
- **Component-Based JavaScript**: Object-oriented JavaScript structure for maintainable client-side code
- **Error-First Approach**: Comprehensive error handling for both client and server-side issues

## External Dependencies

### CDN Dependencies
- **Bootstrap CSS**: `https://cdn.replit.com/agent/bootstrap-agent-dark-theme.min.css` - UI framework with dark theme
- **Font Awesome**: `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css` - Icon library

### Python Dependencies
- **Flask**: Core web framework for handling HTTP requests and responses
- **Werkzeug**: WSGI utilities (included with Flask) for development server

### Environment Variables
- **SESSION_SECRET**: Used for Flask session management (falls back to development key)

### Development Infrastructure
- **Host Configuration**: Configured to run on `0.0.0.0:5000` for Replit compatibility
- **Debug Mode**: Enabled for development with automatic reloading