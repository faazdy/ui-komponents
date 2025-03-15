import React from "react";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism"; 
import "../styles/modal.scss";

function Modal({ codehtml, codecss, openCode, onClose }) {
  if (!openCode) {
    return null;
  }

  return (
    <div className="modal-code open">
      <div className="modal-content">
        <div className="modal-header">
          <button onClick={onClose}>X</button>
        </div>

        {codehtml && (
          <div className="code html">
            <div className="language">
              <img src="assets/icons/html.svg" alt="html-logo" />
              <h1>HTML</h1>
            </div>
            <SyntaxHighlighter language="html" style={dracula}>
              {codehtml}
            </SyntaxHighlighter>
          </div>
        )}

        {codecss && (
          <div className="code css">
            <div className="language">
              <img src="assets/icons/css.svg" alt="css-logo" />
              <h1>CSS</h1>
            </div>
            <SyntaxHighlighter language="css" style={dracula}>
              {codecss}
            </SyntaxHighlighter>
          </div>
        )}
      </div>
    </div>
  );
}

export default Modal;
