import React from "react";
import { useState } from "react";
import "../styles/modal.scss"

function Modal({codehtml, codecss, openCode, onClose}) {
    if(!openCode){ // no renderiza el modal cuando el prop openCode sea false
      return null
    }
  return (
    <div className={openCode ? "modal-code open" : "modal-code"}>
      <div className="modal-content">
        <div className="modal-header">
          <button onClick={onClose}>X</button>
        </div>
        <div className="code html" style={{display: codehtml ? 'block' : 'none'}}>
          <pre>
            <div className="language">
              <img src="assets/icons/html.svg" alt="html-logo" />
              <h1>HTML</h1>
            </div>
            <code>{codehtml}</code>
          </pre>
        </div>
        <div className="code css">
          <pre>
            <div className="language">
              <img src="assets/icons/css.svg" alt="html-logo" />
              <h1>CSS</h1>
            </div>
            <code>{codecss}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

export default Modal;
