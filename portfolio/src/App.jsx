import React from 'react';
import ReactDOM from 'react-dom/client';
import Terminal from './Terminal';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <div className="terminal-wrapper">
            <Terminal />
        </div>
    </React.StrictMode>
);