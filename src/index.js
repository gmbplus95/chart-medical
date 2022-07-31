import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Routes, Route, BrowserRouter} from "react-router-dom";
import Privacy from "./pages/Privacy";
import Term from "./pages/Term";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/term" element={<Term />} />
            <Route path="/*" element={<App />} />
        </Routes>
    </BrowserRouter>
);
