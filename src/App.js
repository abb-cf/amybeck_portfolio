// App.js
import React, { useState } from 'react';
import './App.css';
import About from './components/About';

function App() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOverlay = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="aboutSection">
            <div className="container">
                <button
                    className="aboutButton"
                    onClick={toggleOverlay}
                >
                    About
                </button>
            </div>
            <About
                isOpen={isOpen}
                onClose={toggleOverlay}
            >
            </About>
        </div>
    );
}

export default App;
