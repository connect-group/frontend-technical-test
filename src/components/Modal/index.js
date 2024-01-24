import React, { useLayoutEffect, useRef } from "react";
import { createPortal } from "react-dom";

import { parser } from "../../helpers/parser";
import "./style.scss";

export default function Modal({ isOpen, onClose, vehicleData }) {
  if (!isOpen) return null;

  const dialog = useRef();

  const handleButtonKeyUp = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onClose();
    }
  };

  useLayoutEffect(() => {
    dialog.current.showModal();
  }, [dialog]);

  const {
    id, media, meta, price
  } = vehicleData;

  return createPortal(
    <dialog
      aria-modal="true"
      aria-labelledby="dialog-title"
      className="modal-dialog"
      ref={dialog}
    >
      <img
        className="modal-dialog__image"
        src={media[0].url}
        alt={`${id} ${media[0].name}`}
      />
      <h2 id="dialog-title" className="modal-dialog__h2">
        {id}
        <span className="modal-dialog__price">{price}</span>
      </h2>
      <div className="modal-dialog__content">
        <p className="modal-dialog__p">Body styles:</p>
        <ul className="modal-dialog__ul">
          {meta.bodystyles.map((style) => (
            <li
              key={style}
              className="modal-dialog__li modal-dialog__li--uppercase"
            >
              {style}
            </li>
          ))}
        </ul>
        <p className="modal-dialog__p">Drivetrain:</p>
        <ul className="modal-dialog__ul">
          {meta.drivetrain.map((drive) => (
            <li key={drive} className="modal-dialog__li">
              {drive}
            </li>
          ))}
        </ul>
        <p className="modal-dialog__p">Passengers:</p>
        <ul className="modal-dialog__ul">
          <li className="modal-dialog__li">{meta.passengers}</li>
        </ul>
        {parser(meta.emissions) && (
          <>
            <p className="modal-dialog__p">Emissions:</p>
            <ul className="modal-dialog__ul">
              <li className="modal-dialog__li">{parser(meta.emissions)}</li>
            </ul>
          </>
        )}
        <span
          onClick={onClose}
          onKeyUp={handleButtonKeyUp}
          className="modal-dialog__close-button"
          aria-label="Close modal"
          tabIndex={0}
          role="button"
        >
          &#x2715;
        </span>
      </div>
    </dialog>,
    document.body
  );
}
