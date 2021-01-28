import React from 'react';
import * as Sentry from '@sentry/browser';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    Sentry.captureMessage(error);
    console.log('Error Catch');
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (state.hasError) {
      console.log('hasError');
      return (
        <h1>Something went wrong.</h1>
      );
    }

    return props.children;
  }
}
