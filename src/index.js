import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/browser';
import './index.css';

const Game = React.lazy(() => import('./components/Game'));

Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_TOKEN,
});

ReactDOM.render((
    <Suspense fallback={<div>Loading...</div>}>
      <Game/>
    </Suspense>
  ),
  document.getElementById('root')
);