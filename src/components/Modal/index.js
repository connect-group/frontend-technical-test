import React, { useLayoutEffect, useRef } from "react";
import { createPortal } from "react-dom";

import "./style.scss";

export default function Modal({ isOpen, onClose, vehicleData }) {
  if (!isOpen) return null;

  const dialog = useRef();

  useLayoutEffect(() => {
    dialog.current.showModal();
  }, [dialog]);

  const { id, description, media, meta, modelYear, price } = vehicleData;

  console.log(vehicleData);

  return createPortal(
    <dialog
      aria-modal="true"
      aria-labelledby="dialog-title"
      className="modal-dialog"
      ref={dialog}
    >
      <h2 id="dialog-title" className="modal-dialog__h2">
        {id}
      </h2>
      <button onClick={onClose} className="modal-dialog__button">
        Close
      </button>
      <div className="modal-dialog__content">
        <p>{description}</p>
        <p>{modelYear}</p>
        <p>{price}</p>
      </div>
    </dialog>,
    document.body
  );
}
