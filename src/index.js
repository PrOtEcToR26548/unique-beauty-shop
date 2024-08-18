import React from 'react';
import ReactDOM from 'react-dom/client'; // Use ReactDOM.createRoot for React 18+
import App from './App';
import './unique/styles/index.css';

// Create a root for the React application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component within StrictMode
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
