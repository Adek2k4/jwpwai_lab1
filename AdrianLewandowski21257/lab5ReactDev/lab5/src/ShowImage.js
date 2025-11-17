import React, { useState } from 'react';
import kot from './kot.gif';

function ShowImage() {
  const [imageState, setImageState] = useState({ visible: false });

  const show = () => {
    const newState = { ...imageState };
    newState.visible = !newState.visible;
    
    setImageState(newState);
  };

  return (
    <div style={{border: '1px solid black'}}>
      <h3>ShowImage Component</h3>
      <button onClick={show}>
        {imageState.visible ? 'Ukryj obraz' : 'Pokaż obraz'}
      </button>
      {imageState.visible && (
        <div style={{ marginTop: '10px' }}>
          <img src={kot} alt="Kitek" />
        </div>
      )}
    </div>
  );
}

export default ShowImage;
