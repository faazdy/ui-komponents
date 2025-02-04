import React from "react";
import "../styles/modal.scss"

function Modal({code, openCode, onClose}) {
    if(!openCode){ // no renderiza el modal cuando el prop openCode sea false
      return null
    }
  return (
    <div className={openCode ? "modal-code open" : "modal-code"}>
      <div className="modal-content">
        <div className="modal-header">
          <button onClick={onClose}>X</button>
        </div>
        <div className="code">
          <pre>
            <code>{code}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

export default Modal;
