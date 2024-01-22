import React, { useState } from 'react';
import './App.css';


export default function App() {
    const [isAgreed, setIsAgreed] = useState(false);
    return (
        <div>
            <div>
                <input type="checkbox" onClick={(e) => {
                    setIsAgreed(e.target.checked);
                }} />
                <label>Съгласявам се с общите условия на сайта</label>
            </div>
            <div>
                <button disable={isAgreed ? '' : 'disabled'}>Регистрация</button>
            </div>
        </div>
    );
}