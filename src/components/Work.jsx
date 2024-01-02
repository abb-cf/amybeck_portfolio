// Work.jsx
import React from "react";
import './Work.css';

export function Work({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    return (
        <div className="overlay" onClick={onClose}>
            <div className="about">
                {children}
                <h1>Content in Overlay</h1>
                <button className="closeButton" onClick={onClose}>
                    X
                </button>
            </div>
        </div>
    );
}

export default Work;