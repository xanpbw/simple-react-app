import React, { useState } from 'react';

function Greeting() {
  const [name, setName] = useState('World');

  const handleClick = () => {
    setName('React Developer');
  };

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <button onClick={handleClick}>Change Name</button>
    </div>
  );
}

export default Greeting;
