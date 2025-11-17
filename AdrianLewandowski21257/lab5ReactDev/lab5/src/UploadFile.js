import React, { useState } from 'react';

function UploadFile() {
  const [fileInfo, setFileInfo] = useState({ name: '', size: 0, uploaded: false });

  const upload = (event) => {
    const file = event.target.files[0];
    
    if (file) {
      const newFileInfo = { ...fileInfo };
      newFileInfo.name = file.name;
      newFileInfo.size = (file.size / 1024).toFixed(2);
      newFileInfo.uploaded = true;
      
      setFileInfo(newFileInfo);
    }
  };

  return (
    <div style={{border: '1px solid black'}}>
      <h3>UploadFile Component</h3>
      <input type="file" onChange={upload} />
      {fileInfo.uploaded && (
        <div style={{ marginTop: '10px' }}>
          <p>Nazwa pliku: {fileInfo.name}</p>
          <p>Rozmiar: {fileInfo.size} KB</p>
        </div>
      )}
    </div>
  );
}

export default UploadFile;
