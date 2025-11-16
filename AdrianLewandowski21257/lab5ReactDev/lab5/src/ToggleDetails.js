import React, { useState } from 'react';
import kot from './kot.gif';
function ToggleDetails() {
    const [show, setShow] = useState(false);
    return (
        <div>
        <button onClick={() => setShow(prev => !prev)}>
            {show ? 'Ukryj szczegóły' : 'Pokaż szczegóły'}
        </button>
        {show && (
            <img
                src={kot}
                alt="Kot"
            />
        )}
        </div>
    );
}
export default ToggleDetails;