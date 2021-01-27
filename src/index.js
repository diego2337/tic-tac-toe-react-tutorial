import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Game = React.lazy(() => import('./components/Game'));

ReactDOM.render((
    <Suspense fallback={<div>Loading...</div>}>
      <Game/>
    </Suspense>
  ),
  document.getElementById('root')
);