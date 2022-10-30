import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContextProvider } from './components/context/authContext';
import { ThemeContextProvider } from './components/context/themeContext';
import './index.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AuthContextProvider>
            <ThemeContextProvider>
                <App />
            </ThemeContextProvider>
        </AuthContextProvider>
    </React.StrictMode>
);

