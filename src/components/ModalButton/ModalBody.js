import React from 'react';

const ModalBody = ({ onClick }) => (
  <div className="modal">
    <div className="modal__fog">
      <div className="modal__body">
        <button onClick={onClick}>Close</button>
      </div>
    </div>
  </div>
);

export default ModalBody;
