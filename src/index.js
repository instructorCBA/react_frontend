// index.js

import React from 'react';
import Router from './routes/Router';
import ReactDOM from 'react-dom/client';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container); // createRoot(container!) if you use TypeScript

root.render(<Router />);
