import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // Log the error and errorInfo if needed.
        console.error("Error caught by ErrorBoundary:", error, errorInfo);
    }

    handleGoHome = () => {
        window.location.href = '/';
    };

    render() {
        if (this.state.hasError) {
            // Fallback UI when an error occurs
            return (
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh'
                }}>
                    <h1>Something went wrong.</h1>
                    <p>We're sorry, but an unexpected error occurred.</p>
                    <button
                        onClick={this.handleGoHome}
                        style={{
                            padding: '10px 20px',
                            backgroundColor: '#007bff',
                            color: 'white',
                            borderRadius: '5px',
                            border: 'none',
                            cursor: 'pointer',
                            marginTop: "20px",
                        }}>
                        Go back to homepage
                    </button>
                </div>
            );
        }

        // Render children if no error
        return this.props.children;
    }
}

export default ErrorBoundary;
