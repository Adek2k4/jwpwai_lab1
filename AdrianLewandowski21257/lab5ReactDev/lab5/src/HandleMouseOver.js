import React, { useState } from 'react';

function HandleMouseOver() {
  const [hoverInfo, setHoverInfo] = useState({ count: 0, isHovered: false });

  const mouseOver = () => {
    setHoverInfo({
      ...hoverInfo,
      count: hoverInfo.count + 1,
      isHovered: true
    });
  };

  const mouseLeave = () => {
    setHoverInfo({ ...hoverInfo, isHovered: false });
  };

  return (
    <div style={{border: '1px solid black'}}>
      <h3>HandleMouseOver Component</h3>
      <div
        onMouseOver={mouseOver}
        onMouseLeave={mouseLeave}
        style={{
          padding: '20px',
          backgroundColor: hoverInfo.isHovered ? 'lightblue' : 'lightgray',
          cursor: 'pointer'
        }}
      >
        Najedź na mnie!
      </div>
      <p>Liczba najechań: {hoverInfo.count}</p>
    </div>
  );
}

export default HandleMouseOver;
