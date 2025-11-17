import React, { useState } from 'react';

function HandleClick() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState({ clicks: 0, lastTime: null });

  const click = () => {
    const newData = { ...data };
    newData.clicks = count + 1;
    newData.lastTime = new Date().toLocaleTimeString();
    
    setData(newData);
    setCount(count + 1);
  };

  return (
    <div style={{border: '1px solid black'}}>
      <h3>HandleClick Component</h3>
      <button onClick={click}>Kliknij mnie!</button>
      <p>Liczba kliknięć: {count}</p>
      <p>Ostatnie kliknięcie: {data.lastTime || 'Brak'}</p>
    </div>
  );
}

export default HandleClick;
