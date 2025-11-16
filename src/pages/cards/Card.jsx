import React, { useState } from "react";
import Modal from "../../components/Modal";

function Card({ card }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="card-container">
      <img src={card.image} alt="card-img" className="card-prev-img"/>
      <button onClick={handleOpen} className="open-code">Code</button>
      <Modal
        openCode={isOpen}
        onClose={handleClose}
        codehtml={card.codeText.codeHTML}
        codecss={card.codeText.codeCSS}
        codejs={card.codeText.codeJS}
      />
    </div>
  );
}

export default Card;
