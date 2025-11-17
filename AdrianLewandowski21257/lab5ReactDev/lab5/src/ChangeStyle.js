import React, { useState } from 'react';

function ChangeStyle() {
  const [styles, setStyles] = useState({
    backgroundColor: 'white',
    color: 'black',
    fontSize: '16px',
    padding: '10px'
  });

  const change = () => {
    const colors = ['lightcoral', 'lightgreen', 'lightblue', 'lightyellow'];
    const textColors = ['black', 'white', 'darkblue', 'darkred'];
    const randomIndex = Math.floor(Math.random() * colors.length);

    setStyles({
      ...styles,
      backgroundColor: colors[randomIndex],
      color: textColors[randomIndex],
      fontSize: `${16 + Math.floor(Math.random() * 10)}px`
    });
  };

  return (
    <div style={{border: '1px solid black'}}>
      <h3>ChangeStyle Component</h3>
      <button onClick={change}>Zmień styl</button>
      <div style={{ ...styles, marginTop: '10px', border: '1px solid black' }}>
        To jest tekst z dynamicznymi stylami!
      </div>
    </div>
  );
}

export default ChangeStyle;
