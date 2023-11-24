import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import { Close } from '../icons';

export const Modal = ({ children, onClose }) => {
  const modalRoot = document.getElementById('modal-root');
  const closeButtonRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300); // delay of 300ms
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    if (closeButtonRef.current) {
      closeButtonRef.current.focus();
    }

    setIsVisible(true);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return ReactDOM.createPortal(
    <div className={`modal ${isVisible ? 'modal--visible' : ''}`}>
      <div className="modal__content">
        <ModelClose onClick={handleClose} buttonRef={closeButtonRef} />
        {children}
      </div>
      <div
        className="modal__overlay"
        onClick={handleClose}
        role="button"
        tabIndex={0}
        onKeyDown={handleClose}
      >
        <span className="visually-hidden">Modal overlay</span>
      </div>
    </div>,
    modalRoot,
  );
};

const ModelClose = ({ onClick, buttonRef }) => (
  <button
    ref={buttonRef}
    type="button"
    className="modal__close"
    onClick={onClick}
  >
    <Close />
  </button>
);
