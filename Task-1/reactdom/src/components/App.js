import React, { useState } from 'react';

const HelloComponent = () => {
  const [name, setName] = useState('');

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Въведете име"
        value={name}
        onChange={handleInputChange}
      />
      <div>Hello, {name}</div>
    </div>
  );
};

export default HelloComponent;


