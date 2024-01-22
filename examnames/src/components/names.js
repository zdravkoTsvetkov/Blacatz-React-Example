import React, { useState } from 'react';

function NameList() {
    const [names, setNames] = useState([ 'Иван', 'Петър', 'Мария', 'Георги' ]);

    const handleNameClick = (name) => {

        const updatedNames = names.filter((n) => n !== name);
        setNames(updatedNames);
    };

    return (
        <div>
            <h2>Списък с имена:</h2>
            <ul>
                {names.map((name, index) => (
                    <li key={index} onClick={() => handleNameClick(name)}>
                        {name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default NameList;