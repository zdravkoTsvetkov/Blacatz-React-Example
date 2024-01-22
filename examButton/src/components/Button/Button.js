import React, { useState } from 'react';

function ButtonWithInput() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    
    console.log(inputValue);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Въведете текст..."
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleButtonClick}>{inputValue}</button>
    </div>
  );
}

export default ButtonWithInput;