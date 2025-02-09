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
      {card.code}
      <button onClick={handleOpen}>CODE</button>
      <Modal
        openCode={isOpen}
        onClose={handleClose}
        codehtml={card.codeText.codeHTML}
        codecss={card.codeText.codeCSS}
      />
    </div>
  );
}

export default Card;
