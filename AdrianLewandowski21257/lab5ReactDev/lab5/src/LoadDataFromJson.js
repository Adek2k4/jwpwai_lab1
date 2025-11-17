import React, { useState } from 'react';
import plikJSON from './data.json';

function LoadDataFromJson() {
  const [jsonData, setJsonData] = useState({ loaded: false, data: null });

  const loadData = () => {
    setJsonData({ loaded: true, data: plikJSON });
  };

  return (
    <div style={{border: '1px solid black'}}>
      <h3>LoadDataFromJson Component</h3>
      <button onClick={loadData}>Załaduj dane JSON</button>
      {jsonData.loaded && (
        <div>
          <pre style={{ textAlign: 'left' }}>
            {JSON.stringify(jsonData.data, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}

export default LoadDataFromJson;
