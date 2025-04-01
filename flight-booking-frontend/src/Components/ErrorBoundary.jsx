import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state to show fallback UI on error
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an external service here
    console.log('Error caught in error boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI when error occurs
      return <h2>Something went wrong in the SeatSelector component. Please try again later.</h2>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
